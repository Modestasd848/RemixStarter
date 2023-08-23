import { Link, NavLink, Outlet } from '@remix-run/react';

export default function PublicLayout() {
  return (
    <>
      <header className="bg-red-50">
        <Navigation />
      </header>
      <main className="flex-1 bg-indigo-100">
        <Outlet />
      </main>
      <footer className="bg-gray-100">
        <Copyright />
      </footer>
    </>
  );
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/login', label: 'Login' },
  { href: '/docs', label: 'docs' },
];

function Navigation() {
  return (
    <nav className="container mx-auto p-4 flex justify-between">
      <Link to="/" className="uppercase">
        My Remix App
      </Link>
      <ul>
        {links.map((link) => (
          <li key={link.href} className="inline-block ml-4">
            <NavLink
              end
              to={link.href}
              className={({ isActive }) =>
                isActive ? 'underline pointer-events-none' : 'hover:opacity-50'
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Copyright() {
  return <div>{new Date().getFullYear()} &copy; My Remix App</div>;
}
