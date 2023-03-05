import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../lib/auth";
import SignoutButton from "./signout-button";

async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <p>Home page</p>

      <div>
        <p>Logged in as {session!.user?.email}</p>
        <SignoutButton />
      </div>
    </>
  );
}

export default Home;
