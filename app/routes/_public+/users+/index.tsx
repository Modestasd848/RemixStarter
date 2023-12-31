import { json } from '@remix-run/node';
import { useLoaderData, Link } from '@remix-run/react';
import { Users, db } from '~/services/db.server';

export const loader = async () => {
  const users = await db.select().from(Users);
  return json(users);
};

const UsersPage = () => {
  const users = useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto">
      <pre className="border border-red-500 rounded-md p-10 mt-10 text-lg">
        {JSON.stringify(users, null, 2)}
      </pre>
      {users.map((user) => {
        return (
          <div className="border border-red-500 rounded-md p-10 mt-10 text-lg" key={user.id}>
            <Link to={'/users/userId'}>{user.name}</Link>
          </div>
        );
      })}
      <Link to="/users/new">New User</Link>
    </div>
  );
};
export default UsersPage;
