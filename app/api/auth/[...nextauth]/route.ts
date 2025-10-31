import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.email === "admin@aethercybergroup.com" &&
          credentials?.password === "admin"
        ) {
          return { id: "1", name: "Admin User", email: credentials.email };
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/portal/signin" },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
