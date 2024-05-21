import { db, User, Comment } from 'astro:db';

export default async function seed() {
  await db.insert(User).values([
    { username: 'Patricio Reguera', email: 'regu@gmail.com' },

  ]);

  
}

seed().catch(console.error);