import type { APIRoute, APIContext } from 'astro';

/**
 * Description: This is the register API route which is used to register a new user
 * @param {APIContext} context The context object which contains the request object
 * @returns Response object with the status and the response data
 */
export const POST: APIRoute = async ({ request }: APIContext) => {
  const data = await request.json();

  const registerUrl = new URL(
    `${import.meta.env.STRAPI_URL}/auth/local/register`
  );

  const response = await fetch(registerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  return new Response(JSON.stringify(responseData), {
    status: response.status,
  });
};
