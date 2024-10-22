"use client"

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileButton from "./Profilebtn";
import { ModeToggle } from "../../components/ui/ModeToggle";

export function Topbar() {
  


    return (

    
    <div className="flex justify-around p-4   ">
      <div className="flex items-center justify-center">
        <h1 className="text-xl dark:text-white text-slate-950 font-semibold">
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
