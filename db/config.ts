import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    username: column.text(),
    email: column.text(),
  }
});



export default defineDb({
  tables: { User },
});