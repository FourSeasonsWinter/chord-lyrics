import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    Google({ authorization: { params: { prompt: "login" } } }),
  ],
  trustHost: true,
  callbacks: {
    async signIn({ user, account, profile, url }) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_USERS_URL}/${profile.id || profile.sub}`,
        { cache: "no-store" }
      );

      if (!response.ok) {
        await fetch(process.env.NEXT_PUBLIC_USERS_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: profile.id || profile.sub,
            name: user.name,
            email: user.email,
            provider: account.provider
          }),
        });
      }

      return true;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_USERS_URL}/${profile.id || profile.sub}`,
          { cache: "no-store" }
        );

        const user = await response.json();

        token.id = user.id;
        token.avatarUrl = profile.avatar_url || profile.picture
      }

      return token;
    },
    async session({ session, token }) {
      Object.assign(session, { id: token.id, avatarUrl: token.avatarUrl });
      return session;
    },
  },
});
