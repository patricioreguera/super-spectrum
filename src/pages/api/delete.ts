import { db, User,eq } from "astro:db";
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { email } = data;

    if (typeof email === 'string') {
      // Delete the user from the database
      await db.delete(User).where(eq(User.email, email));

      // Prepare the response
      const response = new Response(JSON.stringify({ message: 'User deleted successfully' }), {
        status: 200,
      });

      // Set the Content-Type header
      response.headers.set('Content-Type', 'application/json');

      return response;
    } else {
      // Handle invalid data format
      
      return new Response(JSON.stringify({ error: 'Invalid data format' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    // Handle errors
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
