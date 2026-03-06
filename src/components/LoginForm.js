"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signIn("azure-ad", { callbackUrl: "/" });
      }}
    >
      <button
        type="submit"
        className="login__btn-microsoft"
        aria-label="Login with Microsoft"
      >
        <Image
          src="/images/login/microsoft-icon.svg"
          alt=""
          width={21}
          height={21}
          className="login__btn-icon"
        />
        <span className="login__btn-text">Login with Microsoft</span>
      </button>
    </form>
  );
}
