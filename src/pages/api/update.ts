import { db, User,eq } from "astro:db";
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { email, nuevoValor } = data;

    if (typeof email === 'string') {
      // Update the user from the database
   /*    await db.update(User).where(eq(User.email, email)); */
    await db.update(User).set({
        username: nuevoValor
        }).where(eq(User.email, email));
        
      // Prepare the response
      const response = new Response(JSON.stringify({ message: 'User updated successfully' }), {
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
