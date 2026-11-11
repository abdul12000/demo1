import test, { expect } from "@playwright/test";

test('Create booking and verify with GET', async ({ request }) => {
  const payload = {
    firstname: 'John',
    lastname: 'Smith',
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: '2026-01-01',
      checkout: '2026-01-05'
    },
    additionalneeds: 'Breakfast'
  };

  const createResponse = await request.post(
    '/booking',
    { data: payload }
  );

  expect(createResponse.ok()).toBeTruthy();

    // Parse response body
  const body = await createResponse.json();

    console.log(body);

  const createdBooking = await createResponse.json();
  const bookingId = createdBooking.bookingid;

  const getResponse = await request.get(
    `/booking/${bookingId}`
  );

  expect(getResponse.ok()).toBeTruthy();

  const booking = await getResponse.json();

  expect(booking.firstname).toBe(payload.firstname);
  expect(booking.lastname).toBe(payload.lastname);
  expect(booking.totalprice).toBe(payload.totalprice);
});