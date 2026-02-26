import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import AppleProvider from "next-auth/providers/apple";
// import FacebookProvider from "next-auth/providers/facebook";
// import EmailProvider from "next-auth/providers/email";

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  }),

  GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),


    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    // 
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: "NextAuth.js <no-reply@example.com>",
    // }),
  ],

callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    if(account.provider === "google" || account.provider === "github"){
      const client = await mongoose.connect(process.env.MONGODB_URI);
    }
    return true;
  }
}

});

export {authoptions as GET, authoptions as POST};
