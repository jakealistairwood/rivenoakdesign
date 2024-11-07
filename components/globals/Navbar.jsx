import React from "react";
import NavbarWrapper from "./NavbarWrapper";
import NewNavbar from "./NewNavbar";
// import { fetchNavbarColor } from "@/sanity/api";
import { fetchGlobalOptions } from "@/sanity/api";

const Navbar = async ({ navbarBg }) => {
    // const pathname = usePathname();
    const { contactDetails } = await fetchGlobalOptions();
    return (
        <div className="">
            {/* <NavbarWrapper /> */}
            <NewNavbar navbarBg={navbarBg} contactDetails={contactDetails} />
        </div>
    )
}

export default Navbar;