import { Moon } from "lucide-react";
import Link from "next/link";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const NavBar = () => {
  return (
    <div className="flex p-4 items-center justify-between">
      {/* {"LEFT"} */}
      Collapse Button
      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        <Link href={"/"}>Dashboard</Link>
        <Moon />
        <DropdownMenu>
          {/* TRIGGER */}
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={"https://github.com/shadcn.png"} />
              <AvatarFallback>D</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          {/* CONTENT */}
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavBar;
