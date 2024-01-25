import { currentUser, UserButton } from '@clerk/nextjs';
import Link from "next/link";

async function NavBar() {
  const user = await currentUser();

  return (
    <nav className="flex justify-around p-5 border-b border-black">
      <h1 className="text-2xl">Nextjs Clerk auth</h1>
      <ul className="flex items-center gap-3">
        <li>
          <Link className="border p-2 m-2 rounded-lg hover:bg-slate-500" href="/">home</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link className="border p-2 m-2 rounded-lg hover:bg-slate-500" href="/dashboard">dashboard</Link>
            </li>
            <UserButton afterSignOutUrl='/' />
          </>
        ) : (
          <>
            <li>
              <Link className="border p-2 m-2 rounded-lg hover:bg-slate-500" href="/sign-in">sign-in</Link>
            </li>
            <li>
              <Link className="border p-2 m-2 rounded-lg hover:bg-slate-500" href="/sign-up">sign-up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default NavBar