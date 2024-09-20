import type { APIRoute, APIContext } from 'astro';

/**
 * Description: This is the products API route which is used to fetch all products
 * @param {APIContext} context The context object which contains the request object
 * @returns Response object with the status and the response data
 */
export const GET: APIRoute = async ({ request }: APIContext) => {
  const productsUrl = new URL(
    `${import.meta.env.STRAPI_URL}/products?populate=*`
  );

  const response = await fetch(productsUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseData = await response.json();

  return new Response(JSON.stringify(responseData.data), {
    status: response.status,
  });
};
