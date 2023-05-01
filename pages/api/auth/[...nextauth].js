import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials) {
        const user = {
          email: "admin@gmail.com",
          password: "admin",
          isAdmin: true,
          name: "khaled Admin",
        };

        if (credentials.email !== user.email) {
          throw new Error("no user found with this email. please sign up");
        }

        // use becryptjs for password check or make this api call to backend
        if (credentials.password !== user.password) {
          throw new Error("username or password does not match");
        }

        return user;
      },
    }),
  ],
});
