import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <main>
      <p>Home page</p>

      <Link href="/api/auth/signin">Login</Link>
      <Link href="/api/auth/signout">Logout</Link>

      {session ? (
        <p>Logged in as {session.user?.email}</p>
      ) : (
        <p>Not logged in</p>
      )}
    </main>
  );
}
