import { db, eq, User } from "astro:db";
import type { APIRoute } from 'astro';
import Email from "@auth/core/providers/email";

interface UserData {
  email: string;
  username: string;
}

export const PUT: APIRoute = async ({ request }) => {
  try {
    const data: UserData = await request.json();
    const { email, username } = data;

    if (
      typeof email === 'string' &&
      typeof username === 'string'
    ) {
      /* const user = await db.update(User).set({ username }).where('email', '==', email); */

/*       

PARA BORRAR
const user = await db.delete(User).where(eq(User.email, email)); */
       
        const user = await db.update(User).set({username}).where(eq(User.email, email));

      if (user) {
        return new Response(JSON.stringify({ message: 'User updated successfully' }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } else {
        return new Response(JSON.stringify({ error: 'User not found' }), {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
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
