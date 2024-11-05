"use client"

import React from "react";
import Link from "next/link";
import { checkPropertyExists } from "@/utils/helpers";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const Footer = ({ basePages, productPages, socials }) => {
    return (
        <footer className="text-black pb-[120px]">
            <div className="container">
                <div className="flex flex-col">
                    <div className="flex flex-col md:grid md:grid-cols-12 gap-y-20 md:gap-y-0">
                        <div className="md:col-span-7">
                            <Link href="/" aria-label="Go to homepage">
                                <svg
                                    width="259"
                                    height="17"
                                    viewBox="0 0 259 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.42 9.92V16H0.34V0.399999H4.96C7.3 0.399999 9.96 1.18 9.96 4.96V5.36C9.96 7.86 8.8 9.04 7.36 9.56L9.96 16H7.7L5.34 9.92H2.42ZM2.42 8.1H5.02C6.22 8.1 7.84 7.66 7.84 5.3V5.04C7.84 2.68 6.22 2.24 5.02 2.24H2.42V8.1ZM20.0731 0.399999V16H17.9931V0.399999H20.0731ZM34.7741 16.12H31.8741L27.5741 0.399999H29.8141L33.3341 13.78L36.8341 0.399999H39.0741L34.7741 16.12ZM46.4759 0.399999H55.4759V2.24H48.5559V7.12H54.4759V8.96H48.5559V14.16H55.4759V16H46.4759V0.399999ZM73.8688 0.399999V16H71.6488L65.1088 4.08L65.1888 7.54V16H63.2088V0.399999H65.4288L71.9688 12.32L71.8888 8.86V0.399999H73.8688ZM96.9925 16.24C93.2325 16.24 91.4125 14 91.4125 8.6V7.8C91.4125 2.4 93.2325 0.159999 96.9925 0.159999C100.732 0.159999 102.552 2.4 102.552 7.8V8.6C102.552 14 100.732 16.24 96.9925 16.24ZM96.9125 14.4H97.0525C99.4525 14.4 100.412 12.56 100.412 8.6V7.8C100.412 3.84 99.4525 2 97.0525 2H96.9125C94.5125 2 93.5525 3.84 93.5525 7.8V8.6C93.5525 12.56 94.5125 14.4 96.9125 14.4ZM113.683 0.28H116.583L120.883 16H118.643L117.663 12.24H112.623L111.643 16H109.383L113.683 0.28ZM115.143 2.62L113.103 10.4H117.183L115.143 2.62ZM130.365 0.399999V8.1L135.525 0.399999H138.045L133.505 6.86L138.045 16H135.725L132.205 8.7L130.365 11.32V16H128.285V0.399999H130.365ZM165.788 8.6C165.788 14 163.668 16 159.568 16H155.188V0.399999H159.568C163.668 0.399999 165.788 2.4 165.788 7.8V8.6ZM157.268 14.16H159.428C162.308 14.16 163.648 12.56 163.648 8.6V7.8C163.648 3.84 162.308 2.24 159.428 2.24H157.268V14.16ZM173.737 0.399999H182.737V2.24H175.817V7.12H181.737V8.96H175.817V14.16H182.737V16H173.737V0.399999ZM194.91 8.92C191.51 8.46 190.11 7.04 190.11 4.72V4.5C190.11 1.84 192.07 0.159999 195.25 0.159999C198.83 0.159999 200.37 1.92 200.37 5.3V5.78H198.29C198.29 3.14 197.41 2 195.27 2H195.13C193.43 2 192.25 2.92 192.25 4.34V4.5C192.25 5.96 192.97 6.82 195.61 7.18C199.01 7.64 200.53 8.94 200.53 11.5V11.72C200.53 14.56 198.55 16.24 195.25 16.24C191.79 16.24 189.95 14.44 189.95 11.02V10.82H192.03C192.03 13.3 193.29 14.4 195.17 14.4H195.33C197.21 14.4 198.39 13.4 198.39 11.82V11.66C198.39 10.08 197.47 9.26 194.91 8.92ZM210.476 0.399999V16H208.396V0.399999H210.476ZM224.377 16.24C220.437 16.24 218.517 14 218.517 8.6V7.8C218.517 2.4 220.437 0.159999 224.177 0.159999C227.637 0.159999 229.377 1.88 229.377 5.56V6.18H227.277C227.277 3.34 226.477 2 224.317 2H224.157C221.697 2 220.637 3.84 220.637 7.8V8.6C220.637 12.56 221.657 14.4 224.317 14.4H224.477C225.797 14.4 226.757 13.92 227.297 13.42V9.88H224.837V8.04H229.377V14.42C228.417 15.34 226.937 16.24 224.377 16.24ZM248.223 0.399999V16H246.003L239.463 4.08L239.543 7.54V16H237.563V0.399999H239.783L246.323 12.32L246.243 8.86V0.399999H248.223ZM258.643 13.72V16H256.363V13.72H258.643Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap md:col-span-5 gap-20 justify-between">
                            <nav>
                                <h5 className="font-body text-base font-medium">
                                    Site
                                </h5>
                                <menu className="mt-10 font-body flex flex-col text-sm gap-y-6">
                                    {basePages?.map(page => (
                                        <li key={`nav-link-${page?._id}`}>
                                            <Link href={page?.slug} className="tracking-[0.04em] duration-300 ease transition-colors text-black-80 hover:text-black">{page?.title === "Homepage" ? "Home" : page?.title}</Link>
                                        </li>
                                    ))}
                                </menu>
                            </nav>
                            <nav>
                                <h5 className="font-body text-base font-medium">
                                    Products
                                </h5>
                                <menu className="mt-10 font-body flex flex-col text-sm gap-y-6">
                                    {productPages?.map(page => (
                                        <li key={`nav-link-${page?._id}`}>
                                            <Link
                                                href={`/products/${page?.slug}`}
                                                className="tracking-[0.04em] duration-300 ease transition-colors text-black-80 hover:text-black"
                                            >
                                                {page?.title}
                                            </Link>
                                        </li>
                                    ))}
                                </menu>
                            </nav>
                            {checkPropertyExists(socials) && (
                                <nav>
                                    <h5 className="font-body text-base font-medium">
                                        Socials
                                    </h5>
                                    <menu className="mt-10 flex items-center gap-x-2">
                                        {socials?.map(social => (
                                            <li key={`social-icon-${social?._id}`} className="w-fit">
                                                <Link
                                                    href={social?.url}
                                                    className="min-w-6 max-w-6 flex items-center justify-center aspect-[1/1] relative bg-[#F1F1F1] text-black rounded-full"
                                                >
                                                    <Image src={urlFor(social?.icon)} alt={`${social?.title} logo`} height={12} width={12} />
                                                </Link>
                                            </li>
                                        ))}
                                    </menu>
                                </nav>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-10 flex-wrap items-center justify-between pt-20 mt-20 border-t border-black/5 gap-y-4">
                        <small>2024 All Rights Reserved.</small>
                        <small>Designed & Developed by <a className="font-medium underline" href="https://www.linkedin.com/in/jake-wood-726141114/" target="_blank" rel="noopener noreferrer">Jake Wood</a></small>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
