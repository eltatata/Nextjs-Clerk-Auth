
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex flex-col items-center gap-10 mt-10">
      <h1 className="text-3xl font-semibold">HomePage</h1>
      <div>
        <Link className="border p-2 m-2 rounded-lg hover:bg-slate-500" href="/dashboard">dashboard</Link>
        <Link className="border p-2 m-2 rounded-lg" href="/sign-in">sign-in</Link>
        <Link className="border p-2 m-2 rounded-lg hover:bg-slate-500" href="/sign-up">sign-up</Link>
      </div>
    </main>
  );
}
