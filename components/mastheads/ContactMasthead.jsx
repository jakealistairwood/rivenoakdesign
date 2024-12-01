import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { checkPropertyExists } from "@/utils/helpers";
import Link from "next/link";

const ContactMasthead = ({
    title = "",
    heading = "",
    description = "",
    link,
    form,
    image,
    contactDetails,
}) => {
    const { email, phone } = contactDetails || {};
    const hasEmail = checkPropertyExists(email);
    const hasPhone = checkPropertyExists(phone);

    return (
        <div className="mt-[4.4rem] min-h-screen relative">
            <div className="hidden absolute inset-0 md:flex w-full h-full">
                <div className="w-1/2" />
                <div className="w-1/2 bg-slate-green"></div>
            </div>
            <div className="flex flex-col gap-y-14 md:flex-row md:container pt-14 md:pt-[7.5rem]" id="contactUs">
                <div className="md:w-1/2 flex flex-col justify-between gap-y-10 md:pr-20 md:pb-20">
                    <div className="flex flex-col gap-y-8 px-4">
                        <div className="flex flex-col gap-y-4">
                            {checkPropertyExists(title) && (
                                <strong className="bg-[#0000000d] text-black w-fit uppercase text-sm font-mono tracking-[0.14em] px-[10px] py-1 mb-2 font-normal">
                                    {title}
                                </strong>
                            )}
                            <h1 className="font-serif ~text-[3rem]/[5rem]">
                                {heading}
                            </h1>
                        </div>
                        {checkPropertyExists(description) && (
                            <p
                                className="font-body opacity-90 md:max-w-[90%]"
                                dangerouslySetInnerHTML={{
                                    __html: description,
                                }}
                            />
                        )}
                    </div>
                    <address className="flex flex-col !not-italic font-body px-4">
                        {hasEmail && <Link className="flex items-center gap-x-2 opacity-80 hover:opacity-100 transition-opacity duration-200 tracking-wide" href={`mailto:${email}`}>
                            <div className="flex items-center min-w-4 max-w-4 justify-center relative aspect-[1/1]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path></svg>
                            </div>
                            {email}
                        </Link>}
                        {hasPhone && (
                            <Link className="flex items-center gap-x-2 opacity-80 hover:opacity-100 transition-opacity duration-200" href={`tel:${phone.replace(/ /g,'')}`}>
                                <div className="flex items-center min-w-4 max-w-4 justify-center relative aspect-[1/1]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M144.27,45.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,208,112a8,8,0,0,1-7.73-5.93,70.35,70.35,0,0,0-50.33-50.34A8,8,0,0,1,144.27,45.93Zm-2.33,41.8c13.79,3.68,22.65,12.55,26.33,26.34A8,8,0,0,0,176,120a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm72.43,78.73-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L126.87,168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L89.54,41.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,24,88c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,214.37,166.46Z"></path></svg>
                                </div>
                                {phone}
                            </Link>
                        )}
                    </address>
                </div>
                <div className="md:w-1/2 bg-slate-green md:bg-white flex flex-col px-4 md:pl-20 py-20 md:pt-0">
                    {checkPropertyExists(form?.id) && (
                        <div className="bg-white md:max-w-[600px] w-full rounded-[6px] relative p-10">
                            <ContactForm form={form} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactMasthead;

const ContactForm = ({ form }) => {
    const { id } = form;
    const [state, handleSubmit] = useForm(id);

    if (state.succeeded) {
        return (
            <div className="flex flex-col gap-y-6">
                {checkPropertyExists(form?.confirmation_message?.heading) && (
                    <h2 className="font-serif ~text-[2rem]/[3rem]">
                        {form?.confirmation_message?.heading}
                    </h2>
                )}
                {checkPropertyExists(
                    form?.confirmation_message?.description
                ) && (
                    <p
                        className="text-sm font-body opacity-90"
                        dangerouslySetInnerHTML={{
                            __html: form?.confirmation_message?.description,
                        }}
                    />
                )}
            </div>
        );
    }

    return (
        <form className="flex flex-col gap-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-x-6">
                <div className="flex flex-col gap-y-2">
                    <label
                        className="font-body text-sm font-medium"
                        htmlFor="firstName"
                    >
                        First name:
                    </label>
                    <input
                        className="text-xl border-b border-black/10 pb-2"
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Joe"
                        required
                    />
                    <ValidationError
                        prefix="First Name"
                        field="firstName"
                        errors={state.errors}
                    />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label
                        className="font-body text-sm font-medium"
                        htmlFor="lastName"
                    >
                        Last name:
                    </label>
                    <input
                        className="text-xl border-b border-black/10 pb-2"
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Bloggs"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-y-2">
                <label
                    className="font-body text-sm font-medium"
                    htmlFor="email"
                >
                    Email address:
                </label>
                <input
                    className="text-xl border-b border-black/10 pb-2"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="joebloggs@gmail.com"
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className="flex flex-col gap-y-2">
                <label
                    className="font-body text-sm font-medium"
                    htmlFor="subject"
                >
                    Subject:
                </label>
                <input
                    className="text-xl border-b border-black/10 pb-2"
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                />
            </div>
            <div className="flex flex-col gap-y-2">
                <label
                    className="font-body text-sm font-medium"
                    htmlFor="message"
                >
                    Message:
                </label>
                <textarea
                    className="text-xl border-b border-black/10 pb-2"
                    placeholder="Your message"
                    name="message"
                    id="message"
                    required
                ></textarea>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>
            <button
                className="block tracking-wide text-sm py-3 px-6 font-medium rounded bg-[#1F1F1F] text-white border border-[#1F1F1F] opacity-100 hover:opacity-90 duration-200 ease w-fit"
                type="submit"
                disabled={state.submitting}
            >
                Send Message
            </button>
        </form>
    );
};
