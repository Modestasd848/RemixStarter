import { Link } from '@remix-run/react';

export default function AboutPage() {
  return (
    <div className="text-center my-4 space-y-4">
      <Link to="/" className="hover:underline">
        Go home
      </Link>
    </div>
  );
}
