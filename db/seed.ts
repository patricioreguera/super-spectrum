import { db, User } from 'astro:db';

export default async function() {
  await db.insert(User).values([
    { id: 1, username: 'Patricio Reguera',email:"regu@gmail.com"},
    { id: 2, username: 'Martina Reguera!', email:"martu@emal.com"},
  ])
}