import {  defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    username: column.text({ unique: true }),
    email: column.text({ unique: true }),
  }
});
const Comment = defineTable({
  columns: {
    authorId: column.number({ references: () => User.columns.id }),
    content: column.text(),
  }
});

export default defineDb({
  tables: { User,Comment },
})