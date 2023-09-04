import 'dotenv/config';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

const migration = async () => {
  const db = drizzle(sql);

  await migrate(db, { migrationsFolder: 'drizzle' });
};

migration().catch((err) => {
  console.log(err);
});
