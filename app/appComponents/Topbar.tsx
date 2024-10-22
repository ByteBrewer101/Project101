import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileButton from "./Profilebtn";


export function Topbar(){
    return (
      <div className="flex justify-around p-4">
        <div>
          <h1>SiteName</h1>
        </div>

        <div className="flex justify-between flex-wrap-0 space-x-4">
        
<ProfileButton/>
        </div>
      </div>
    );
}