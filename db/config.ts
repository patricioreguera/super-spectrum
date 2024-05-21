import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    username: column.text(),
    email: column.text(),
  }
});

const Comment = defineTable({
  columns: {
    content: column.text(),
  }
});

export default defineDb({
  tables: { User, Comment },
});