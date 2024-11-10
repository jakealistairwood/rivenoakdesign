"use client";

import React, { useState } from "react";
import Link from "next/link";
import { animate, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { lineOneAnimation, lineTwoAnimation } from "@/utils/animations";
import AnimatedLink from "../animations/AnimatedLink";
import { checkPropertyExists } from "@/utils/helpers";

const NewNavbar = ({ navbarBg, contactDetails }) => {
    const [hideOnScroll, setHideOnScroll] = useState(false);
    const [animateHeader, setAnimateHeader] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const { phone = "" } = contactDetails;

    console.log(phone);

    const isPhoneNumber = checkPropertyExists(phone);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (previous > 200) {
            setAnimateHeader(true);
        } else {
            setAnimateHeader(false);
        }
        if (latest > previous && latest > 200) {
            setHideOnScroll(true);
        } else {
            setHideOnScroll(false);
        }
    });

    const hideOnScrollAnimation = {
        initial: {
            y: "0",
        },
        hidden: {
            y: "-120%",
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };

    const bgStyles = {
        default:
            animateHeader || openMobileMenu
                ? "bg-[#F5F5F5] text-black"
                : "bg-[#3B3B3B]/30 text-white",
        white: "bg-[#F5F5F5] text-black",
    };

    const hamburgerStyles = {
        default: animateHeader || openMobileMenu ? "bg-black" : "bg-white",
        white: "bg-black",
    };

    return (
        <motion.header
            variants={hideOnScrollAnimation}
            initial="initial"
            animate={hideOnScroll ? "hidden" : "initial"}
            className="fixed w-full mx-auto left-0 right-0 top-0 z-[999]"
        >
            <div
                className={`w-full mx-auto ${bgStyles[navbarBg]} transition-colors duration-300 ease-in-out`}
            >
                <div className="container">
                    <div className="flex items-center justify-between py-3">
                        <nav className="flex justify-between md:justify-normal items-center gap-x-10 lg:gap-x-[110px] w-full md:w-fit">
                            <Link
                                className="uppercase font-heading tracking-[0.28em] font-medium text-[0.875rem] lg:text-[1rem] pointer-events-none"
                                href="/"
                            >
                                Riven Oak Design.
                            </Link>
                            {/* <Link
                                className="uppercase font-heading tracking-[0.28em] font-medium text-[0.875rem] lg:text-[1rem] pointer-events-none"
                                href="/"
                            >
                                <NewLogo />
                            </Link> */}
                            <menu className="hidden md:flex items-center gap-x-10 font-body text-xs font-medium">
                                <li>
                                    <NavLink href="/" label="Home" />
                                </li>
                                <li>
                                    <NavLink
                                        href="/products"
                                        label="Products"
                                    />
                                </li>
                                <li>
                                    <NavLink href="/about" label="About" />
                                </li>
                            </menu>
                            <button
                                type="button"
                                className="flex md:hidden flex-col items-center justify-center gap-y-[6px]"
                                onClick={() =>
                                    setOpenMobileMenu(!openMobileMenu)
                                }
                            >
                                <div
                                    className={`h-[1px] w-[24px] ${hamburgerStyles[navbarBg]}`}
                                ></div>
                                <div
                                    className={`h-[1px] w-[24px] ${hamburgerStyles[navbarBg]}`}
                                ></div>
                                <div
                                    className={`h-[1px] w-[24px] ${hamburgerStyles[navbarBg]}`}
                                ></div>
                            </button>
                        </nav>
                        <nav className="hidden md:flex items-center font-body gap-x-8">
                            {isPhoneNumber && (
                                <Link
                                    href={`tel:${phone.replace(/ /g, "")}`}
                                    className="flex items-center gap-x-2 font-body tracking-wide text-sm opacity-100 hover:opacity-80 duration-200 transition-opacity"
                                >
                                    <div className="flex items-center min-w-4 max-w-4 justify-center relative aspect-[1/1]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            fill="currentColor"
                                            viewBox="0 0 256 256"
                                        >
                                            <path d="M144.27,45.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,208,112a8,8,0,0,1-7.73-5.93,70.35,70.35,0,0,0-50.33-50.34A8,8,0,0,1,144.27,45.93Zm-2.33,41.8c13.79,3.68,22.65,12.55,26.33,26.34A8,8,0,0,0,176,120a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm72.43,78.73-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L126.87,168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L89.54,41.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,24,88c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,214.37,166.46Z"></path>
                                        </svg>
                                    </div>
                                    {phone}
                                </Link>
                            )}
                            <NavCTA
                                animateCTA={animateHeader || openMobileMenu}
                                animateHeader={animateHeader}
                                navbarBg={navbarBg}
                            />
                        </nav>
                    </div>
                    {openMobileMenu && (
                        <nav className="pt-8 pb-10">
                            <menu className="flex flex-col font-body text-xs font-medium">
                                <li className="py-4">
                                    <NavLink href="/" label="Home" />
                                </li>
                                <li className="py-4">
                                    <NavLink
                                        href="/products"
                                        label="Products"
                                    />
                                </li>
                                <li className="py-4">
                                    <NavLink href="/about" label="About" />
                                </li>
                            </menu>
                        </nav>
                    )}
                </div>
            </div>
        </motion.header>
    );
};

export default NewNavbar;

const NavLink = ({ href, label }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Link
            className="text-sm tracking-wide font-medium block relative"
            href={href}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
        >
            <AnimatedLink hovered={hovered} label={label} />
        </Link>
    );
};

const NavCTA = ({ animateCTA = false, navbarBg }) => {
    const [hovered, setHovered] = useState(false);

    const buttonStyles = {
        default: animateCTA
            ? "bg-[#1F1F1F] text-white border border-[#1F1F1F]"
            : "border border-white/[30%] text-white hover:bg-[#E5E0CE] hover:text-walnut",
        white: "bg-[#1F1F1F] text-white border border-[#1F1F1F]",
    };

    return (
        <Link
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            className={`block tracking-wide text-sm py-3 px-6 font-medium rounded relative ${buttonStyles[navbarBg]} duration-200 transition-all ease`}
            href="/contact"
        >
            <AnimatedLink hovered={hovered} label="Get in Touch" />
        </Link>
    );
};

const NewLogo = () => {
    return (
        <div className="aspect-[137/120] relative max-w-[60px]">
            <svg
                className="w-full"
                width="137"
                height="120"
                viewBox="0 0 137 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_1046_1912)">
                    <path
                        d="M137.133 74.689C136.772 76.6283 136.508 78.5229 135.985 80.3682C134 87.3707 130.466 93.4799 125.442 98.7353C119.217 105.246 111.659 109.686 103.331 112.907C96.6544 115.49 89.7483 117.189 82.6585 118.161C77.6149 118.853 72.5491 119.178 67.462 119.042C54.5943 118.698 42.2795 116.004 30.7643 110.125C21.8719 105.586 14.1277 99.5924 8.08569 91.5624C4.26317 86.4821 1.63486 80.8507 0.566295 74.5433C0.417793 73.6667 0.301595 72.7846 0.151628 71.8567C0.132813 68.773 0.132812 65.7376 0.132812 62.6396C0.441227 60.9838 0.571594 59.3651 0.86629 57.7677C2.15155 50.8011 4.56918 44.2548 8.0433 38.0889C13.7531 27.9551 21.8435 20.166 31.7062 14.1481C40.1841 8.97523 49.2187 5.06097 58.8144 2.48416C63.2517 1.2926 67.7679 0.567622 72.3683 0.297234C83.431 -0.352971 93.5458 2.48647 102.83 8.42602C111.38 13.8959 118.089 21.1571 123.416 29.7499C127.836 36.8802 131.055 44.5436 133.549 52.5277C134.857 56.7145 135.976 60.9523 136.83 65.2571C136.929 65.7577 137.004 66.2632 137.112 66.8123C137.133 69.4475 137.133 72.0369 137.133 74.689ZM31.3513 107.022C31.225 106.931 31.0988 106.84 30.9726 106.748C30.3145 106.272 29.7283 105.714 28.8612 105.551C28.3079 105.448 27.8669 105.032 27.6575 104.409C28.2399 104.217 28.7087 104.377 29.0038 104.732C29.3925 105.201 29.9037 105.434 30.3968 105.721C36.0086 108.994 41.9522 111.494 48.1785 113.325C55.0093 115.333 61.9912 116.416 69.1074 116.576C75.6778 116.723 82.1853 116.083 88.6357 114.843C96.5842 113.315 104.225 110.909 111.283 106.858C117.968 103.02 123.546 98 127.683 91.4444C130.96 86.2525 132.842 80.601 133.189 74.474C133.412 70.5501 133.127 66.6387 132.498 62.7578C131.529 56.7769 129.946 50.9655 127.652 45.3525C123.127 34.2841 116.54 24.6474 107.656 16.617C103.265 12.6484 98.3915 9.44758 92.7684 7.47848C85.7866 5.0336 78.5734 4.21669 71.2134 4.37947C67.3288 4.46538 63.4838 4.87527 59.6714 5.60849C46.2804 8.18392 34.6005 14.1358 24.6681 23.4695C18.5676 29.2022 13.6235 35.8207 9.92367 43.342C5.82718 51.6696 3.43445 60.3828 4.04966 69.7638C4.23978 72.6628 4.72912 75.505 5.58561 78.2807C7.40973 84.1923 10.4059 89.3781 15.0612 93.5326C15.1852 93.6433 15.3605 93.7442 15.2922 93.966C14.8928 93.9107 14.893 93.9104 14.5505 93.6451C11.2353 91.0768 8.65808 87.8894 6.71561 84.1909C4.29988 79.5913 3.00073 74.6741 2.61308 69.4992C2.322 65.6133 2.49148 61.7564 3.2369 57.9323C4.46065 51.6543 6.90089 45.8428 10.0783 40.3233C13.3945 34.5626 17.4187 29.315 21.7441 24.2865C22.448 23.4681 23.2177 22.7018 23.8475 21.7949C23.669 21.741 23.6055 21.8475 23.5255 21.9125C19.7136 25.0057 16.3629 28.5441 13.4551 32.4919C6.69876 41.6645 2.61238 51.8699 1.61706 63.267C1.33296 66.5202 1.37074 69.7649 1.8093 72.9936C2.53676 78.3492 4.41074 83.2936 7.32463 87.846C10.868 93.3818 15.4349 97.9516 20.6634 101.876C30.7314 109.433 41.9745 114.315 54.3646 116.549C55.2365 116.706 56.1144 116.83 56.9896 116.97C53.5507 116.119 50.1137 115.293 46.7308 114.26C41.2877 112.598 36.0872 110.414 31.3513 107.022ZM115.449 21.4448C98.2223 0.540989 72.1472 -2.10979 54.1728 5.62871C55.049 5.39488 55.9251 5.16079 56.8014 4.92727C62.0134 3.53822 67.3252 2.85054 72.7102 2.77925C77.2878 2.71865 81.8262 3.17149 86.3156 4.08628C91.2449 5.09069 95.9462 6.69655 100.212 9.4187C108.043 14.4157 114.449 20.9059 119.877 28.3864C124.289 34.4662 127.714 41.0805 130.257 48.1498C132.224 53.6171 133.584 59.2318 134.206 65.0087C134.602 68.691 134.634 72.3842 134.25 76.0805C133.89 79.5544 133.151 82.9312 131.909 86.1949C131.126 88.253 130.134 90.2101 128.9 92.156C129.025 92.0697 129.067 92.0532 129.091 92.0224C129.404 91.6165 129.724 91.2162 130.023 90.8C133.866 85.44 135.496 79.3612 135.734 72.8645C135.904 68.253 135.252 63.7163 134.188 59.2364C132.748 53.1689 130.696 47.3115 128.078 41.6548C124.728 34.4199 120.587 27.6752 115.449 21.4448Z"
                        fill="currentColor"
                    />
                    <path
                        d="M41.4393 16.5273C33.4737 20.4448 26.3727 25.4662 20.4101 32.0067C14.1479 38.8758 9.76221 46.7531 7.84481 55.9168C7.0009 59.95 6.66657 64.0331 6.89061 68.1388C7.34435 76.4541 9.77936 84.0981 14.8635 90.795C15.3835 91.48 15.9399 92.1375 16.5144 92.8511C16.058 93.0339 15.9012 92.7186 15.711 92.5516C11.318 88.695 8.42971 83.8779 6.68698 78.3396C5.31425 73.977 4.83896 69.4928 5.07253 64.9445C5.4119 58.3362 7.05144 52.0287 9.69103 45.9726C13.1279 38.0873 18.0653 31.2784 24.4367 25.5126C28.5069 21.8294 33.068 18.8315 37.8162 16.108C43.6532 12.76 49.7214 9.92504 56.1587 7.92343C60.787 6.48428 65.505 5.51389 70.3463 5.11564C77.4543 4.53094 84.3996 5.25442 91.1635 7.53804C96.5767 9.36562 101.393 12.2435 105.717 15.9584C114.095 23.1558 120.548 31.8237 125.325 41.7538C128.698 48.7642 131.005 56.12 132.188 63.8108C132.741 67.4055 132.975 71.0277 132.612 74.6657C131.978 81.0033 129.677 86.7078 126.026 91.8861C120.972 99.053 114.206 104.117 106.337 107.805C99.4263 111.044 92.1276 112.992 84.6305 114.273C78.7047 115.286 72.7375 115.757 66.7285 115.589C56.7034 115.31 47.0529 113.389 38.0121 108.884C35.7949 107.779 33.6617 106.526 31.6196 105.122C31.4113 104.979 31.1358 104.882 31.0845 104.533C31.4866 104.399 31.7669 104.675 32.061 104.816C35.3185 106.375 38.6046 107.869 41.953 109.224C46.0321 110.874 50.21 112.191 54.5739 112.878C54.1526 112.77 53.7309 112.665 53.3103 112.556C52.8577 112.438 52.4034 112.326 51.9546 112.196C40.9288 108.984 31.1535 103.484 22.4453 96.0419C19.1855 93.2561 16.0923 90.3045 13.5003 86.8632C10.4829 82.857 8.73706 78.3396 7.9672 73.4056C7.53605 70.6425 7.35043 67.8687 7.47909 65.0811C7.77204 58.7337 9.31868 52.6827 11.9154 46.8954C15.0086 40.0013 19.3045 33.9375 24.6677 28.632C27.104 26.2218 29.7702 24.1006 32.9302 22.6853C37.0837 20.825 41.2422 20.5664 45.335 22.8216C48.1472 24.3711 50.1164 26.6077 50.5388 29.9217C50.8226 32.1484 50.1609 34.1552 48.9186 35.9809C46.7933 39.1045 42.989 40.665 39.4888 39.8727C36.6868 39.2384 34.0013 36.4784 34.3393 32.927C34.592 30.2711 37.2924 28.0026 39.9487 28.2857C40.663 28.3618 41.2722 28.6822 41.7562 29.2065C42.3212 29.8185 42.4389 30.5054 42.1232 31.1044C41.8079 31.7028 41.0672 32.0559 40.2944 31.9495C39.7643 31.8765 39.2243 31.7868 38.7572 31.5211C38.1072 31.1513 37.6111 31.3815 37.1363 31.8278C35.6886 33.1884 35.8874 35.9207 37.5425 37.1584C38.9588 38.2174 40.5684 38.2734 42.2061 37.9124C46.3284 37.0039 49.3393 32.4885 48.5179 28.4523C48.032 26.0647 46.43 24.6217 44.2737 23.7433C41.3529 22.5535 38.3909 22.7085 35.4438 23.6563C32.0693 24.7414 29.1769 26.6623 26.5911 29.0287C18.157 36.7473 12.6885 46.2207 10.0216 57.3232C8.99485 61.5978 8.60128 65.9406 8.89858 70.3211C9.36131 77.1392 11.9428 83.0943 16.4837 88.1922C22.7541 95.2318 30.1708 100.797 38.4757 105.211C40.9176 106.508 43.4155 107.684 46.0183 108.655C44.4041 107.428 42.8595 106.129 41.4693 104.654C40.0566 103.155 38.8272 101.518 37.7654 99.7551C36.7036 97.9918 35.8486 96.1321 35.2009 94.1785C34.554 92.2274 34.1352 90.2291 33.9373 88.1815C33.7392 86.1323 33.7862 84.094 34.0378 82.0502C34.2893 80.0073 34.7555 78.0213 35.4219 76.0786C36.0894 74.1329 37.0009 72.3012 38.0517 70.5758C37.9572 70.2764 37.7216 70.2189 37.5336 70.1159C35.3835 68.9373 33.2318 67.7615 31.0766 66.5924C30.8237 66.4552 30.5555 66.33 30.2792 66.2561C29.8535 66.1424 29.5311 66.2506 29.2783 66.6815C28.461 68.0743 26.8925 68.7394 25.2682 68.4441C24.2285 68.2551 23.2622 67.8686 22.3101 67.4209C21.8346 67.1973 21.7548 66.9793 22.0214 66.5088C23.7648 63.4317 25.9814 60.7417 28.6337 58.4149C34.7135 53.0811 41.8907 50.1734 49.7967 48.8774C53.5909 48.2554 57.4098 48.0148 61.2471 48.1124C64.4752 48.1945 67.6968 48.414 70.8961 48.8812C71.5333 48.9742 72.1101 49.2112 72.479 49.7715C72.8142 50.2805 72.6303 50.6883 72.022 50.7345C70.6894 50.8357 69.3543 50.9096 68.0189 50.9634C67.5888 50.9807 67.3957 51.1174 67.3171 51.5652C66.9382 53.7228 66.7169 55.8842 66.9108 58.0782C66.952 58.5446 67.0811 58.6993 67.5678 58.6082C71.6355 57.8471 75.7081 57.112 79.7766 56.3548C81.7593 55.9858 82.9224 54.5693 83.0577 52.5367C83.1714 50.8294 82.5293 49.4491 81.3934 48.2512C80.2055 46.9984 78.7346 46.1567 77.1719 45.4799C76.3388 45.1191 75.7491 44.6124 75.7652 43.6585C75.7828 42.6124 76.189 41.7453 77.1625 41.2418C78.1947 40.708 79.2782 40.8142 80.3643 41.0354C80.6664 41.0969 80.9682 41.1599 81.3518 41.2391C81.228 40.7791 80.9484 40.4926 80.6765 40.2302C79.9551 39.5341 79.2113 38.8607 78.4634 38.1928C77.6693 37.4834 77.0368 36.6608 76.6304 35.6735C75.6959 33.4031 76.9909 31.3847 79.4424 31.3737C82.2589 31.3611 84.5467 32.6019 86.5104 34.5321C86.6996 34.7181 86.846 34.9503 87.1596 35.0996C87.2591 34.2949 86.9918 33.5588 86.8762 32.8169C86.5341 30.6195 86.1093 28.4348 85.7775 26.2359C85.6213 25.2009 85.6369 24.1453 85.8977 23.1146C86.5161 20.6702 88.7058 19.4305 91.2884 20.054C93.8836 20.6805 95.3954 22.4231 96.2236 24.8584C96.766 26.4532 96.9245 28.115 97.0389 29.7828C97.055 30.0175 96.9685 30.2781 97.1693 30.4704C97.3608 30.5336 97.4713 30.4036 97.5993 30.3233C100.341 28.6039 104.026 30.1343 104.6 33.299C104.982 35.4035 104.172 37.1886 102.767 38.7339C102.484 39.045 102.116 39.2778 101.909 39.6381C101.906 39.8204 102.026 39.8856 102.141 39.956C104.672 41.5035 105.124 45.0097 103.107 47.233C101.56 48.9386 99.5251 49.7728 97.4206 50.4682C91.536 52.4128 86.0438 55.1239 81.0273 58.7748C80.3543 59.2646 79.6495 59.7245 79.0008 60.3623C79.5828 60.6363 80.1096 60.572 80.6042 60.6022C82.2265 60.7012 83.8465 60.8858 85.4767 60.8145C86.0205 60.7908 86.5398 60.6769 87.0016 60.3812C87.6902 59.9402 87.964 59.2954 87.8767 58.4922C87.8353 58.1109 87.6644 57.8 87.2812 57.682C86.9206 57.571 86.622 57.7309 86.3939 58.0061C86.1428 58.3092 85.9399 58.6297 86.2458 59.0235C86.2961 59.0881 86.31 59.181 86.3442 59.2699C85.7634 59.2857 85.3739 58.8339 85.3529 58.1545C85.33 57.4183 85.7718 56.6566 86.3708 56.3996C86.9784 56.1389 87.6792 56.3261 88.2487 56.9012C89.23 57.8921 89.2386 59.3809 88.2528 60.4561C87.2463 61.5541 85.9185 61.8954 84.5037 61.93C83.5936 61.9523 82.6799 61.8633 81.7689 61.8074C77.6858 61.5566 73.9395 62.6332 70.5313 64.8199C65.1828 68.2515 61.5334 73.0072 59.8044 79.1523C59.0702 81.762 58.8985 84.4135 59.7623 87.0487C60.88 90.4583 63.7907 92.7478 67.3718 92.9131C73.3609 93.1897 78.0434 90.7093 81.4874 85.8959C82.8581 83.9801 83.5377 81.7952 82.9866 79.3837C82.2973 76.3675 79.2592 73.8789 76.1321 73.7145C73.797 73.5917 71.7633 74.2129 70.1755 75.9929C68.6009 77.7583 68.5793 80.1536 70.092 81.9655C71.0094 83.0642 72.4828 83.4734 73.6341 82.9491C75.0232 82.3164 75.8357 80.9067 75.6136 79.5098C75.4695 79.4474 75.4192 79.5792 75.3485 79.6491C74.6152 80.3746 73.8944 80.4742 73.2976 79.9273C72.6263 79.3122 72.5509 78.1965 73.1334 77.498C74.0262 76.4274 75.8062 76.5146 76.7774 77.6764C77.8205 78.9243 77.763 81.0012 76.651 82.238C74.596 84.5237 70.1447 84.6445 67.9849 82.4431C67.0379 81.4779 66.6513 80.3129 66.9645 78.9493C67.1843 77.9925 67.6138 77.149 68.2388 76.4045C70.0268 74.2749 72.4116 73.2656 75.0816 72.8449C77.4503 72.4717 79.7194 72.8368 81.7776 74.0894C85.9796 76.6465 88.0609 82.3331 83.8226 87.1759C80.4185 91.0656 76.2202 93.8533 71.1723 95.152C67.2496 96.1612 63.5842 95.5644 60.5095 92.7367C58.1725 90.5874 56.8952 87.8409 56.4264 84.7326C55.6898 79.8483 57.2878 75.59 60.1162 71.7149C63.1081 67.6159 67.1096 64.6863 71.4441 62.1781C73.9321 60.7384 76.4678 59.381 78.9813 57.9852C79.0305 57.9579 79.0709 57.9145 79.2536 57.7672C73.9023 59.4288 68.5183 60.0186 63.1853 60.8761C58.5542 61.6207 54.0001 62.6269 49.7235 64.6472C42.9641 67.8402 38.9251 73.1978 37.4087 80.4226C35.7192 88.4722 37.3017 95.9262 42.0776 102.633C45.7513 107.792 50.8378 110.756 57.0314 111.899C59.972 112.441 62.9384 112.729 65.9224 112.853C68.1932 112.947 70.4658 113.106 72.736 113.082C81.4446 112.987 90.0183 111.978 98.2984 109.1C106.546 106.233 113.808 101.813 119.818 95.4329C123.117 91.9304 125.766 87.9883 127.639 83.533C126.913 84.6973 126.017 85.722 124.987 86.611C122.301 88.9303 119.231 90.061 115.713 89.0651C112.912 88.2725 110.969 86.4473 110.289 83.519C109.589 80.5037 111.723 77.0743 114.722 76.4091C116.565 76.0003 118.11 76.675 119.353 78.0255C120.526 79.2995 121.052 80.7938 120.555 82.5206C120.213 83.7081 119.236 84.544 118.259 84.5638C117.453 84.5802 116.936 84.114 116.844 83.2753C116.773 82.6207 117.105 81.9476 117.937 81.8996C118.704 81.8554 119.218 81.1913 119.401 80.2829C119.583 79.3755 119.242 78.4924 118.463 78.0209C117.054 77.1685 115.662 77.4285 114.369 78.2583C112.959 79.1629 112.308 80.5574 112.159 82.1922C112.073 83.1308 112.141 84.0619 112.462 84.9618C113.173 86.9493 114.957 88.2489 117.071 88.3724C120.361 88.5646 122.752 86.9752 124.657 84.5078C126.955 81.5301 128.189 78.0891 128.793 74.4093C129.734 68.6789 129.061 63.0419 127.676 57.47C124.107 43.1137 116.953 30.8431 106.127 20.745C99.3837 14.4554 91.4555 10.5858 82.3168 9.21558C77.8437 8.54491 73.3637 8.42819 68.8576 8.80033C59.2304 9.5954 50.1562 12.33 41.4393 16.5273ZM96.5818 34.5325C96.8133 34.2821 96.917 33.9163 97.27 33.722C97.4425 33.9552 97.4004 34.1704 97.3674 34.3878C97.2599 35.0956 96.9251 35.6879 96.4549 36.2143C95.7387 37.0161 94.8853 37.6659 94.08 38.3695C93.2632 39.0831 92.5495 39.8733 92.3631 40.9999C92.1115 42.5204 91.727 44.0043 91.1685 45.4421C90.9861 45.9117 90.809 46.3834 90.5668 47.0185C92.9121 46.1421 95.1132 45.3197 97.3144 44.4972C97.346 44.559 97.3775 44.6208 97.409 44.6826C97.066 45.4059 96.4455 45.8562 95.7592 46.2293C94.9527 46.6678 94.0742 46.9301 93.21 47.2249C90.3997 48.1837 88.2985 49.9738 86.9165 52.6013C86.7714 52.8771 86.5782 53.1522 86.607 53.5434C86.8972 53.4376 87.1287 53.3604 87.3549 53.2698C90.2509 52.1092 93.1475 50.9503 96.0409 49.7834C97.7815 49.0814 99.4907 48.3171 100.939 47.0852C101.909 46.2599 102.656 45.279 102.999 44.0284C103.408 42.532 102.561 41.3911 101.011 41.3475C100.022 41.3197 99.2121 41.7839 98.403 42.2669C98.1926 42.3925 98.0121 42.6624 97.6987 42.5082C97.6507 42.2755 97.8312 42.1846 97.956 42.0708C99.0645 41.0603 100.026 39.9179 100.93 38.7272C101.839 37.5299 102.609 36.2602 102.918 34.7566C103.42 32.3224 101.761 30.522 99.3677 30.944C98.292 31.1336 97.3418 31.6075 96.5444 32.3714C96.3635 32.5446 96.2285 32.7966 95.9685 32.8344C95.8244 32.729 95.8204 32.6153 95.8232 32.5048C95.8917 29.8428 95.4283 27.2755 94.4294 24.8088C93.9706 23.6758 93.3208 22.6707 92.302 21.9514C90.0419 20.3558 87.5642 21.3 86.97 23.9919C86.7354 25.0547 86.8137 26.1238 87.0895 27.1665C87.8619 30.0862 88.3796 33.0372 88.199 36.0707C88.1516 36.8662 88.166 37.6868 87.8589 38.4901C87.4978 38.3246 87.3558 38.0634 87.186 37.8373C86.3696 36.7503 85.6135 35.6127 84.7344 34.5796C83.6485 33.3035 82.2978 32.4046 80.5404 32.3995C79.3114 32.396 78.3519 33.1469 77.9824 34.2927C77.6362 35.3661 77.9052 36.0957 78.951 36.9461C81.0481 38.6517 82.641 40.742 83.7151 43.2233C83.8042 43.4291 84.0042 43.6392 83.8017 43.915C83.413 43.8729 83.0982 43.6551 82.7662 43.4795C81.9402 43.0428 81.1963 42.4553 80.2995 42.1477C79.6549 41.9265 79.0114 41.8168 78.3363 42.0187C77.6048 42.2373 77.1284 42.8039 77.1147 43.5132C77.1005 44.2508 77.4381 44.6408 78.3126 44.8682C79.5923 45.2009 80.714 45.8246 81.6633 46.7358C83.4724 48.4719 84.4655 50.5585 84.3458 53.1153C84.3286 53.4826 84.2023 53.9156 84.7634 54.2867C84.5496 52.9992 85.3935 52.3015 85.9822 51.4934C86.5415 50.7258 86.6522 49.9119 86.4215 49.0247C86.0234 47.4928 84.8657 46.576 83.6938 45.6707C83.5291 45.5434 83.273 45.4959 83.2428 45.098C85.1324 45.5755 86.5256 46.6446 87.6096 48.269C88.725 46.8998 89.539 45.489 89.7013 43.8343C89.8657 42.1594 89.3975 40.6888 87.7452 39.8538C87.6664 39.8139 87.5928 39.7569 87.6227 39.5806C88.8452 39.5924 89.8132 40.2266 90.8319 41.0001C91.8482 37.4564 92.7255 34.0631 89.6486 31.0376C90.4072 30.9626 90.934 31.3249 91.5845 31.4297C91.6277 29.9892 91.2657 28.6064 91.4336 27.2139C93.038 30.5425 93.5198 34.0251 92.8707 37.6889C93.8676 37.3871 95.3558 36.1077 96.5818 34.5325ZM50.6133 57.6376C50.1719 56.4476 49.6852 55.2721 49.2993 54.0644C48.6756 52.1125 49.2822 51.166 51.2741 50.7577C52.6903 50.4674 54.0987 50.1356 55.5028 49.7908C56.6853 49.5003 57.3731 49.8275 57.6902 50.9966C58.045 52.305 58.3223 53.6344 58.6351 54.9543C58.697 55.2157 58.708 55.5031 59.0735 55.8285C59.0944 53.6738 57.9756 51.6565 59.2377 49.5745C52.8619 49.2049 46.9008 50.2872 41.1663 52.6441C34.016 55.583 28.0356 60.0627 23.2722 66.359C24.4557 66.6194 25.4923 66.8482 26.5292 67.0753C26.8646 67.1487 26.994 66.9496 27.1157 66.6754C27.658 65.4528 28.6485 64.9279 29.9461 64.9485C31.0259 64.9656 31.9803 65.4125 32.9003 65.9207C34.6733 66.9001 36.435 67.9 38.1992 68.8953C39.2641 69.4961 39.5112 70.1342 39.105 71.2865C38.9109 71.8374 38.6751 72.3736 38.4582 72.9164C38.484 72.9277 38.5098 72.939 38.5355 72.9502C39.2977 71.7624 40.0598 70.5746 40.8153 69.3971C40.6134 69.1858 40.3796 69.1656 40.1713 69.0998C36.9199 68.0713 33.9968 66.462 31.4286 64.2095C30.4246 63.3288 30.3641 62.7754 31.2452 61.8014C32.4587 60.4599 33.7701 59.2218 35.1944 58.1052C36.0956 57.3988 36.6784 57.3583 37.6182 58.0308C40.3684 59.9988 42.6724 62.3996 44.4418 65.2861C44.7758 65.8311 45.0559 65.9106 45.5189 65.5222C45.6676 65.3975 45.8817 65.3389 45.9328 65.1159C45.8845 64.8909 45.6925 64.8001 45.5365 64.6826C44.0707 63.5784 42.7418 62.3307 41.5676 60.9189C40.6682 59.8375 39.8136 58.7229 39.1592 57.4732C38.6588 56.5177 38.7977 55.7827 39.6158 55.3363C41.6328 54.236 43.7261 53.2957 45.8867 52.5103C46.5893 52.2549 47.1531 52.4917 47.5975 53.056C47.7625 53.2654 47.9102 53.4901 48.0495 53.7178C49.5682 56.2016 50.7478 58.8368 51.5895 61.6247C51.6632 61.869 51.6598 62.1659 51.9475 62.3473C52.4343 62.2498 52.589 62.0207 52.3509 61.5118C51.7658 60.2611 51.2159 58.9938 50.6133 57.6376ZM127.01 50.3166C127.121 50.655 127.235 50.9924 127.341 51.332C129.528 58.2931 131.063 65.3554 130.616 72.7187C130.433 75.7389 129.867 78.6774 128.653 81.4676C128.367 82.1248 128.066 82.7329 128.067 83.5174C128.069 85.2465 127.454 86.8619 126.838 88.4651C127.817 87.2429 128.576 85.8931 129.208 84.4695C131.653 78.9537 132.074 73.1702 131.433 67.259C131.041 63.6442 130.257 60.1009 129.307 56.596C126.49 46.2124 122.172 36.5421 115.571 27.9784C110.516 21.4198 104.493 15.9729 97.125 12.0847C90.6299 8.6571 83.7293 6.64752 76.4029 6.19293C72.8824 5.97449 69.3659 6.18346 65.8913 6.85699C63.5393 7.31292 61.2354 7.93931 59.0145 8.85442C62.9651 8.04544 66.9431 7.4293 70.9681 7.20026C74.8874 6.97726 78.798 7.07385 82.6948 7.65174C89.1415 8.60779 95.1045 10.7767 100.485 14.4996C106.841 18.8979 112.144 24.3567 116.704 30.5608C121.132 36.5849 124.495 43.1725 127.01 50.3166ZM46.9248 54.381C46.6251 53.8196 46.128 53.8201 45.6561 54.0313C43.9708 54.7854 42.2989 55.5701 40.6314 56.363C40.1775 56.5788 40.1001 56.8902 40.4643 57.3141C42.0597 59.1717 43.6414 61.0412 45.2155 62.9169C45.6487 63.4331 46.1294 63.5673 46.7474 63.2838C47.7183 62.8386 48.6879 62.3872 49.679 61.9908C50.2286 61.7709 50.3031 61.5124 50.058 60.9846C49.0455 58.8045 48.0633 56.6106 46.9248 54.381ZM56.3825 60.1382C56.5995 60.0917 56.8172 60.0481 57.0335 59.9983C57.8715 59.8054 58.0086 59.5895 57.8473 58.728C57.7697 58.3136 57.6953 57.8986 57.6177 57.4843C57.2704 55.6301 56.9181 53.7768 56.578 51.9213C56.4984 51.4872 56.3013 51.2132 55.8257 51.2659C54.1006 51.4568 52.3953 51.7455 50.7437 52.3021C50.305 52.4499 50.1309 52.6758 50.3207 53.1511C51.2443 55.4627 52.1529 57.7804 53.0625 60.0977C53.2602 60.6014 53.6131 60.75 54.125 60.6303C54.8386 60.4634 55.5565 60.3152 56.3825 60.1382ZM37.4184 59.4728C36.6738 58.8891 36.5507 58.8798 35.8784 59.4693C34.723 60.4823 33.5736 61.5024 32.4312 62.53C31.8834 63.0228 31.8903 63.2351 32.4919 63.5887C34.7959 64.9428 37.1155 66.2705 39.4138 67.6343C39.9121 67.93 40.2644 67.8399 40.658 67.473C41.2606 66.9113 41.8972 66.3864 42.5163 65.8423C43.1642 65.2728 43.1631 65.2596 42.5712 64.6631C40.8765 62.9553 39.1819 61.2474 37.4184 59.4728ZM63.778 58.8887C64.3326 58.7038 64.4981 58.2973 64.4806 57.7445C64.4159 55.6978 64.3578 53.6507 64.323 51.6034C64.314 51.0771 64.051 50.8733 63.5866 50.8679C62.5847 50.8563 61.5824 50.8564 60.5805 50.8716C60.0188 50.8802 59.8048 51.1728 59.8751 51.7452C59.9835 52.6268 60.0352 53.5152 60.117 54.4002C60.2437 55.772 60.3576 57.1453 60.5126 58.5138C60.5885 59.1845 60.9103 59.3869 61.5714 59.2762C62.2728 59.1588 62.973 59.0351 63.778 58.8887ZM58.552 88.1088C58.7403 88.4573 58.8505 88.8551 59.1837 89.1226C58.1044 87.1972 58.1267 85.0188 57.6843 82.8538C57.5996 84.6954 57.7835 86.3986 58.552 88.1088ZM39.4375 30.3176C39.9392 30.6921 40.397 30.668 40.8343 30.179C40.6137 29.7631 40.3133 29.5001 39.8589 29.4518C39.6107 29.4255 39.3442 29.4502 39.1956 29.6649C39.0386 29.8917 39.2467 30.0717 39.4375 30.3176ZM65.9502 51.084C66.1547 50.7742 66.417 50.4368 66.1982 50.0741C66.0376 49.8082 65.7075 49.8475 65.3938 50.0022C65.4925 50.4044 65.3827 50.8774 65.9502 51.084ZM36.7397 77.2584C36.7267 77.2229 36.7137 77.1874 36.7006 77.152C36.6844 77.1664 36.6596 77.1777 36.653 77.1956C36.1216 78.6505 35.7369 80.1388 35.6198 81.6879C35.8955 80.2113 36.232 78.7506 36.7397 77.2584Z"
                        fill="currentColor"
                    />
                    <path
                        d="M63.8281 110.768C61.0739 110.118 58.4708 109.231 56.0281 107.887C51.5015 105.397 48.6269 101.569 46.9017 96.7808C45.6092 93.1941 44.9594 89.4906 45.2089 85.6939C45.8599 75.7852 50.4039 68.3493 59.4358 63.9039C62.0608 62.612 64.8747 61.9388 67.8147 61.8607C67.9259 61.8578 68.0377 61.8541 68.1482 61.8632C68.1819 61.866 68.2121 61.9106 68.336 62.01C67.9557 62.1353 67.6344 62.2458 67.3104 62.3474C63.8869 63.4216 60.6092 64.8077 57.754 67.0267C52.0643 71.4486 48.6659 77.2036 47.7871 84.3921C47.1997 89.1973 47.9118 93.8068 49.9743 98.188C52.3589 103.253 56.3243 106.462 61.6644 108.035C65.4585 109.153 69.3362 109.567 73.2806 109.518C79.3047 109.443 85.1262 108.229 90.8533 106.462C92.0855 106.082 93.3605 105.79 94.3765 104.917C95.2185 104.193 95.6949 103.299 95.6113 102.162C95.5443 101.251 94.9366 100.522 94.0595 100.276C92.9372 99.9606 91.9696 100.777 92.093 101.936C92.1424 102.4 92.372 102.757 92.8195 102.884C93.294 103.018 93.7273 102.907 94.0285 102.477C93.9289 102.329 93.8085 102.366 93.7044 102.353C93.3345 102.305 92.9298 102.208 92.9239 101.778C92.9171 101.289 93.3431 101.131 93.7608 101.079C94.7999 100.948 95.5112 101.849 95.1632 102.839C94.7687 103.96 93.4348 104.442 92.3407 103.857C91.2802 103.291 90.673 101.946 90.9815 100.847C91.2988 99.7178 92.6206 98.8456 93.9553 98.8852C95.8889 98.9426 97.4825 100.905 97.2459 102.923C97.0142 104.898 95.8978 106.255 94.1818 107.099C90.2582 109.029 86.1073 110.276 81.8087 111.049C79.0161 111.552 76.1962 111.786 73.3656 111.778C70.1764 111.768 67.0073 111.462 63.8281 110.768Z"
                        fill="currentColor"
                    />
                    <path
                        d="M29.2418 103.992C28.4497 103.717 27.708 103.459 26.8926 103.175C27.7122 102.72 29.5516 102.978 30.0907 103.546C30.2248 103.687 30.2921 103.835 30.1887 104.022C30.0812 104.216 29.9191 104.224 29.7327 104.157C29.5868 104.105 29.439 104.058 29.2418 103.992Z"
                        fill="currentColor"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1046_1912">
                        <rect width="137" height="120" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};
