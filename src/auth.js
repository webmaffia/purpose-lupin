import NextAuth from "next-auth";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
import { NextResponse } from "next/server";

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    MicrosoftEntraID({
      id: "azure-ad",
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      issuer: process.env.AZURE_AD_ISSUER,
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    authorized({ auth, request }) {
      const { pathname, hostname } = request.nextUrl;
     
      if (hostname === "localhost" || hostname === "127.0.0.1") {
        return true;
      }
 
      if (pathname.startsWith("/login") || pathname.startsWith("/api/auth")) {
        return true;
      }
     
      if (!auth) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("callbackUrl", request.nextUrl.href);
        return NextResponse.redirect(loginUrl);
      }
      return true;
    },
  },
  trustHost: true,
});
