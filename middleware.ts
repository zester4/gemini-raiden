import NextAuth from "next-auth";

import { authConfig } from "@/app/(auth)/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/chat/:path*", "/api/chat/:path*", "/api/files/:path*", "/api/history/:path*", "/api/reservation/:path*"],
};
