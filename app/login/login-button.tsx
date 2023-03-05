"use client";

import { signIn } from "next-auth/react";

function LoginButton() {
  return (
    <button
      onClick={() =>
        signIn("cognito", {
          callbackUrl: "/",
        })
      }
    >
      Login
    </button>
  );
}

export default LoginButton;
