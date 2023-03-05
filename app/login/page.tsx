import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../lib/auth";
import LoginButton from "./login-button";

async function Page() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return (
    <>
      <p>Login page</p>

      <div>
        <LoginButton />
      </div>
    </>
  );
}

export default Page;
