import {  defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    username: column.text({ unique: true }),
    email: column.text({ unique: true }),
  }
});


export default defineDb({
  tables: { User },
})