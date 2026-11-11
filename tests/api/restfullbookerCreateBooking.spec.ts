import { test, expect } from '@playwright/test';

test('create booking', async ({ request }) => {
  const response = await request.post(
    '/booking',
    {
      data: {
        firstname: 'John',
        lastname: 'Smith',
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: '2026-01-01',
          checkout: '2026-01-05'
        },
        additionalneeds: 'Breakfast'
      }
    }
  );

  expect(response.ok()).toBeTruthy();

  const body = await response.json();

  console.log(JSON.stringify(body, null, 2));

  expect(body).toHaveProperty('bookingid');
  expect(body.booking.firstname).toBe('John');
});