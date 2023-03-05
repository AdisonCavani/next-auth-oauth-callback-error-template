"use client";

import { signOut } from "next-auth/react";

function SignoutButton() {
  return (
    <button
      onClick={() =>
        signOut({
          callbackUrl: "/login",
        })
      }
    >
      Signout
    </button>
  );
}

export default SignoutButton;
