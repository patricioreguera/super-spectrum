import { db, User } from "astro:db";
import type { APIRoute } from 'astro';

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
      const user = await db.update(User).set({ username }).where({ email});
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
