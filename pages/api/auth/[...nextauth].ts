import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = user.id;
      session.user.username = user.username as string;
      return session;
    },
    async signIn({ user }) {
      if (!user.email) {
        return false;
      }
   
   
      return true;
    },
    
  },
};

export default NextAuth(authOptions);
