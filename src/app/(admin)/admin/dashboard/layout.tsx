import { AuthService } from "@/features/admin-login/api/auth/auth.service";
import { redirect } from "next/navigation";

export default async function AdminEventsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { GetSession } = await AuthService();
  const session = await GetSession();
  if (!session) { redirect('/'); }

      return <>{children}</>;
}
