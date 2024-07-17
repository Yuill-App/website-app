import { NavbarRoutes } from "@/components/dashboard/navbar-routes"
import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () => {
    return (
        <div className="p-4 border-b h-full flex items-center bg-[#fffdfd] shadow-sm">
            <MobileSidebar/>
            <NavbarRoutes/>
        </div>
    )
}