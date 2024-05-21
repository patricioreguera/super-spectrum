import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true}),
    username: column.text({ unique: true }),
    email: column.text({ unique: true }),
  }
});

const Comment = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    authorId: column.number(),
    content: column.text(),
  }
});

export default defineDb({
  tables: { User, Comment },
});