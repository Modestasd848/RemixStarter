import type { Config } from 'drizzle-kit';

export default {
  schema: './app/services/db.server.ts',
  out: './drizzle',
} satisfies Config;
