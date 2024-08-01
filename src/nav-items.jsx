import { Home, Palette } from "lucide-react";
import Index from "./pages/Index.jsx";
import CustomizeTemplate from "./pages/CustomizeTemplate.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Customize",
    to: "/customize",
    icon: <Palette className="h-4 w-4" />,
    page: <CustomizeTemplate />,
  },
];
