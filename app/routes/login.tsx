import { Link } from "@remix-run/react";

export default function AboutPage() {
  return (
    <div className="text-center my-4 space-y-4">
      <h1 className="text-2xl">Login page</h1>
      <Link to="/" className="hover:underline">
        Go home
      </Link>
    </div>
  );
}
