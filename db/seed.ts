import { db, User,Comment } from 'astro:db';

export default async function() {
  await db.insert(User).values([
    { id: 1, username: 'Patricio Reguera',email:"regu@gmail.com"},
    { id: 2, username: 'Martina Reguera!', email:"martu@emal.com"},
    { id: 3, username: 'demo!', email:"demo@demo.com"},
  ])
  await db.insert(Comment).values([
    { authorId: 1, content: 'Hope you like Astro DB!' },
    { authorId: 2, content: 'Enjoy!'},
  ])

}
