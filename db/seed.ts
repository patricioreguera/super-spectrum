import { db, User } from 'astro:db';

export default async function seed() {
  await db.insert(User).values([
    { username: 'Patricio Reguera', email: 'regu@gmail.com' },
    { username: 'Patricio ', email: 'reguasdasd@gmail.com' },
    { username: 'Patricioasdasdasd', email: 'regu@gmail.com' },
    { username: 'asdasd', email: 'rasasdasdas.com' },
  ]);

  
}

seed().catch(console.error);