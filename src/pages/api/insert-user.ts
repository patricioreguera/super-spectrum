import { db, User } from "astro:db";
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const {  username, email } = data;

    if (
      typeof username === 'string' &&
      typeof email === 'string'
    ) {
      // Aquí es donde deberías usar tu lógica de base de datos.
      // Ejemplo: await db.insert(User).values({ id, username, email });
	  await db.insert(User).values({  username, email });
      //console.log('Datos recibidos:', data);
      return new Response(JSON.stringify({ message: 'User inserted successfully' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      return new Response(JSON.stringify({ error: 'Invalid data format' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
	