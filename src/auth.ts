import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { db } from "./db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
  adapter: DrizzleAdapter(db),
  callbacks: {
    async session({ session, token }) {
      // if (token.sub && session.user) {
      //   session.user.id = token.sub;
      // }
      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
});
