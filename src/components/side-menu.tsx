import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Bell,
  Bookmark,
  Crown,
  Home,
  Layers,
  Menu,
  Search,
  Settings,
  Sparkles,
  User,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/revision-logo.png";

const items = [
  { to: "/dashboard", label: "Home", icon: Home },
  { to: "/ai-help", label: "Ask & Revise", icon: Sparkles },
  { to: "/search", label: "Search", icon: Search },
  { to: "/bookmarks", label: "Bookmarks", icon: Bookmark },
  { to: "/electives", label: "Electives", icon: Layers },
  { to: "/notifications", label: "Notifications", icon: Bell },
  { to: "/payment", label: "Premium", icon: Crown },
  { to: "/profile", label: "Profile", icon: User },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

export function SideMenu() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="press grid size-9 place-items-center rounded-full text-white/95 hover:bg-white/15"
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[78vw] max-w-xs p-0">
        <SheetHeader className="brand-header px-5 py-5">
          <SheetTitle className="flex items-center gap-2 text-white">
            <img src={logo} alt="" className="h-10 w-auto object-contain" />
            <span className="sr-only">REVISION menu</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="grid gap-0.5 p-2">
          {items.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-primary-soft !text-primary" }}
              className="press flex items-center gap-3 rounded-lg px-3 py-3 text-[14.5px] font-semibold text-foreground"
            >
              <Icon className="size-[18px]" />
              {label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
