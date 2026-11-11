import { test, expect } from '@playwright/test';
// import { cleanApiResponse } from '../../utils/apiCleaner';


test('getBokingIds - list all Booking ids - 200 OK', async ({ request }) => {
  const response = await request.get('/booking');
  expect(response.status()).toBe(200);

    const body = await response.json();
    console.log(JSON.stringify(body, null, 2));
});

// test("getBoking - Get specific Booking with its ID - 200 OK,  validate firstname and lastname", async ({
//   request,
// }) => {
//   const response = await request.get("/booking/3");
//   expect(response.status()).toBe(200);

//   const responseBody = await response.json();

//   expect(responseBody.firstName).toBe("Mary");
//   expect(responseBody.lastName).toBe("Smith");
// });

// test('get jobs - list all jobs', { tag: '@api' }, async ({ request }) => {
//   const response = await request.get('/api/jobs');
//   expect(response.status()).toBe(200);
//   const cleanedResponse = await cleanApiResponse(response);
//   const data = JSON.parse(cleanedResponse);
//   //console.log(data);
//   expect(data.success).toBe(true);
//   expect(data.data).toBeDefined();
//   expect(Array.isArray(data.data)).toBe(true);