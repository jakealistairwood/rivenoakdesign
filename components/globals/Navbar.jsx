import React from "react";
import NavbarWrapper from "./NavbarWrapper";
import NewNavbar from "./NewNavbar";
// import { fetchNavbarColor } from "@/sanity/api";

const Navbar = ({ navbarBg }) => {
    // const pathname = usePathname();
    return (
        <div className="">
            {/* <NavbarWrapper /> */}
            <NewNavbar navbarBg={navbarBg} />
        </div>
    )
}

export default Navbar;