import type { APIRoute, APIContext } from 'astro';

/**
 * Description: This is the login API route which is used to login a user
 * @param {APIContext} context The context object which contains the request object
 * @returns Response object with the status and the response data
 */
export const POST: APIRoute = async ({ request }: APIContext) => {
  const data = await request.json();

  const requestData = {
    identifier: data.email,
    password: data.password,
  };

  const loginUrl = new URL(`${import.meta.env.STRAPI_URL}/auth/local`);

  const response = await fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  });

  const responseData = await response.json();

  return new Response(JSON.stringify(responseData), {
    status: response.status,
  });
};
