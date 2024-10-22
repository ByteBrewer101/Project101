import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileButton from "./Profilebtn";
import { ModeToggle } from "./Darkmodebtn";

export function Topbar() {
  return (
    <div className="flex justify-around p-4 dark:bg-zinc-950 shadow-xl  ">
      <div>
        <h1 className="text-2xl dark:text-white text-slate-950 font-extrabold">
          SiteName
        </h1>
      </div>

      <div className="flex justify-between flex-wrap-0 space-x-4">
        <ModeToggle />

        <ProfileButton />
      </div>
    </div>
  );
}
