import { test, expect } from '@playwright/test';
// import { cleanApiResponse } from '../../utils/apiCleaner';


test('getBokingIds - list all Booking ids - 200 OK', async ({ request }) => {
  const response = await request.get('/booking');
  expect(response.status()).toBe(200);

    const body = await response.json();
    console.log(JSON.stringify(body, null, 2));
});

test('Get booking by id and validate response', async ({ request }) => {
  // Send GET request
  const response = await request.get(
    '/booking/129'
  );

  // Assert status code
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  // Parse response body
  const booking = await response.json();

  console.log(booking);

  // Assert response structure
  expect(booking).toHaveProperty('firstname');
  expect(booking).toHaveProperty('lastname');
  expect(booking).toHaveProperty('totalprice');
  expect(booking).toHaveProperty('depositpaid');
  expect(booking).toHaveProperty('bookingdates');

  // Assert data types
  expect(typeof booking.firstname).toBe('string');
  expect(typeof booking.lastname).toBe('string');
  expect(typeof booking.totalprice).toBe('number');
  expect(typeof booking.depositpaid).toBe('boolean');

  // Assert nested object
  expect(booking.bookingdates).toHaveProperty('checkin');
  expect(booking.bookingdates).toHaveProperty('checkout');

  expect(typeof booking.bookingdates.checkin).toBe('string');
  expect(typeof booking.bookingdates.checkout).toBe('string');
});



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