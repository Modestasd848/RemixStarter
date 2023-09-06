// su zodix pasiimti is params userId
// import { json } from '@remix-run/node';
import { useLoaderData, Link } from '@remix-run/react';
import type { LoaderArgs } from '@remix-run/server-runtime';
import { zx } from 'zodix';
import { getUserById } from '~/services/db.server';

export async function loader({ params }: LoaderArgs) {
  const { id } = zx.parseParams(
    params,
    { id: zx.IntAsString.optional() },
    { message: 'Invalid userId parameter', status: 400 }
  );

  if (id !== undefined) {
    const user = await getUserById(id);
    if (user) {
      return { user };
    } else {
      return { error: 'User not found' };
    }
  } else {
    return { error: 'Invalid userId' };
  }
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
