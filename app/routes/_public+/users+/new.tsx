import { redirect, type ActionArgs } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { zx } from 'zodix';
import { z } from 'zod';
import { Users, db } from '~/services/db.server';

const inputStyle = {
  padding: '10px',
  margin: '5px',
  border: '1px solid #ccc',
};

export const action = async ({ request, params }: ActionArgs) => {
  const { email, name } = await zx.parseForm(request, {
    email: z.string().email(),
    name: z.string().min(6),
    id: zx.IntAsString.optional(),
  });
  await db.insert(Users).values({ name, email, image: '' });

  return redirect('/users');
};

export default function NewUser() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Add a New Recipe</h2>
      <form method="post">
        <input style={inputStyle} type="text" name="name" placeholder="Name" />
        <input style={inputStyle} type="email" name="email" placeholder="Cooking Time" />

        <button type="submit">Submit</button>
      </form>
      <Link to="/users">Go back to list</Link>
    </div>
  );
}
