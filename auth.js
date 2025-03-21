import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    Google({ authorization: { params: { prompt: "login" } } }),
  ],
  callbacks: {
    async signIn({ user, profile }) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_USERS_URL}/${profile.id}`,
        { cache: "no-store" }
      );

      if (!response.ok) {
        await fetch(process.env.NEXT_PUBLIC_USERS_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: profile.id,
            name: user.name,
            email: user.email,
          }),
        });
      }

      return true;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_USERS_URL}/${profile.id}`,
          { cache: "no-store" }
        );

        const user = await response.json();

        token.id = user.id;

        console.log("Fetched user data:", user);
        console.log("Token now contains:", token);
      }

      return token;
    },
    async session({ session, token }) {
      Object.assign(session, { id: token.id });
      return session;
    },
  },
});
