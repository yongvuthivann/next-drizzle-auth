import { Github, Chrome } from "lucide-react";

import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center mx-2">
      <div className="border w-full max-w-sm rounded-md px-2 py-3 flex flex-col md:px-4 md:py-5">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Sign in</h1>
          <p className="text-sm tracking-tight text-slate-500">
            Practice for login with social account
          </p>
        </div>

        <div className="mt-3 w-full space-y-2">
          <form
            action={async () => {
              "use server";
              await signIn("github", { redirectTo: "/dashboard" });
            }}
          >
            <Button className="w-full" size={"lg"}>
              <Github />
              <span className="text-sm ml-2">Continue with Github</span>
            </Button>
          </form>
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/dashboard" });
            }}
          >
            <Button className="w-full" size={"lg"} variant="secondary">
              <Chrome />
              <span className="text-sm ml-2">Continue with Google</span>
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
