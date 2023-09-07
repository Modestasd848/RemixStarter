// su zodix pasiimti is params userId
// import { json } from '@remix-run/node';
import { useLoaderData, Link } from '@remix-run/react';
import type { LoaderArgs } from '@remix-run/server-runtime';
import { zx } from 'zodix';
import { getUserById } from '~/services/db.server';

export async function loader({ params }: LoaderArgs) {
  const { userId } = zx.parseParams(params, { userId: zx.IntAsString.optional() });
  return getUserById(id);
}

export default function User() {
  const data = useLoaderData<typeof loader>();

  if ('user' in data) {
    return (
      <div style={{ padding: '20px' }}>
        <pre className="border border-red-500 rounded-md p-10 mt-10 text-lg">
          {JSON.stringify(data.user, null, 2)}
        </pre>
        <Link to="/users">Go back to list</Link>
      </div>
    );
  } else if ('error' in data) {
    return (
      <div style={{ padding: '20px' }}>
        <pre className="border border-red-500 rounded-md p-10 mt-10 text-lg">
          Error: {data.error}
        </pre>
        <Link to="/users">Go back to list</Link>
      </div>
    );
  }

  return <div>Loading...</div>;
}
