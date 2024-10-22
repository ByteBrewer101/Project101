import Image from "next/image";
import { Topbar } from "./appComponents/Topbar";

export default function Home() {
  return <div className="min-h-screen dark:bg-black">
    <Topbar/>
  </div>
}
