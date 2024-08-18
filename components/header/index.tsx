import { Link } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Header = () => {
  return (
    <header className="h-20 border-b border-white border-opacity-10 flex items-center">
      <div className="max-w-[1140px] w-full mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl">
          Recipe Hub
        </Link>
        <Input
          placeholder="Search recipes"
          className="w-96 focus-visible:ring-1 focus-visible:ring-orange-600 transition-all"
        />
        <div className="flex gap-4">
          <Button variant={"ghost"}>Login</Button>
        </div>
      </div>
    </header>
  );
};
