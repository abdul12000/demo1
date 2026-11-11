import { test, expect } from '@playwright/test';

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

    // Assert response body values
    expect(booking.firstname).toBe('John');
      expect(booking.lastname).toBe('Smith');
      expect(booking.totalprice).toBe(111);
       expect(booking.depositpaid).toBe(true);


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

// test('get jobs - list all jobs', { tag: '@api' }, async ({ request }) => {
//   const response = await request.get('/api/jobs');
//   expect(response.status()).toBe(200);
//   const cleanedResponse = await cleanApiResponse(response);
//   const data = JSON.parse(cleanedResponse);
//   //console.log(data);
//   expect(data.success).toBe(true);
//   expect(data.data).toBeDefined();
//   expect(Array.isArray(data.data)).toBe(true);