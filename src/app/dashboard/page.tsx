import Image from "next/image";
import { redirect } from "next/navigation";

import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) return redirect("/");

  const user = session.user;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col w-full max-w-md">
        <h1 className="tracking-tight font-semibold text-xl lg:text-2xl">
          Welcome to dashboard
        </h1>
        <p className="text-sm tracking-tight text-slate-500">
          Authentication page
        </p>
        <div className="mt-4 flex items-center space-x-4">
          {user?.image ? (
            <Image
              src={user.image}
              alt={user.email ?? "User profile"}
              width={60}
              height={60}
              className="rounded-full"
            />
          ) : null}
          <div className="flex flex-col">
            <p className="text-sm">Name: {user?.name ?? "N/A"}</p>
            <p className="text-sm">Email: {user?.email ?? "N/A"}</p>
          </div>
        </div>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <Button variant={"destructive"} className="w-full mt-4">
            Logout
          </Button>
        </form>
      </div>
    </div>
  );
}
