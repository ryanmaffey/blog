import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Anchor } from "./anchor";

interface IState {
    isNavOpen: boolean;
}

export const Nav: React.FunctionComponent = () => {
    const [state, setState] = React.useState<IState>({ isNavOpen: false });
    const router = useRouter();

    const smNavLinkClass =
        "block mt-2 px-3 py-2 hover:text-orange-500 focus:text-orange-500";
    const mdNavLinkClass =
        "block md:inline-block mx-2 px-3 py-2 border-b-2 border-gray-900 hover:border-orange-500 focus:border-orange-500";

    return (
        <header>
            <a href="#content" className="skip-to-content-link">
                Skip to content
            </a>

            <nav className="flex items-center justify-between flex-wrap py-5 md:py-10">
                <div className="container flex sm:content-between">
                    <div className="flex items-center flex-grow sm:flex-grow md:flex-grow-0 md:justify-between mr-6">
                        <Anchor href="/" isLinkButton className="text-xl">
                            ryanmaffey.dev
                        </Anchor>
                    </div>
                    <div className="md:hidden">
                        <button
                            role="button"
                            aria-label={
                                (state.isNavOpen ? "Close" : "Open") +
                                " the navigation"
                            }
                            className="flex items-center px-3 py-2"
                            onClick={() =>
                                setState({
                                    ...state,
                                    isNavOpen: !state.isNavOpen,
                                })
                            }
                        >
                            <svg
                                className="fill-current h-3 w-3"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-grow hidden items-center md:flex">
                        <div className="md:flex-grow">
                            <Link href="/about">
                                <a
                                    className={`${mdNavLinkClass} ${
                                        router.pathname === "/about"
                                            ? "border-blue-500"
                                            : ""
                                    }`}
                                >
                                    About Me
                                </a>
                            </Link>
                            <Link href="/posts">
                                <a
                                    className={`${mdNavLinkClass} ${
                                        router.pathname === "/posts"
                                            ? "border-blue-500"
                                            : ""
                                    }`}
                                >
                                    Posts
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                {state.isNavOpen && (
                    <div className="container flex mt-5 md:hidden">
                        <div className="w-full">
                            <Link href="/about">
                                <a
                                    className={`${smNavLinkClass}  ${
                                        router.pathname === "/"
                                            ? "text-orange-500"
                                            : ""
                                    }`}
                                >
                                    About Me
                                </a>
                            </Link>
                            <Link href="/posts">
                                <a
                                    className={`${smNavLinkClass}  ${
                                        router.pathname === "/posts"
                                            ? "text-orange-500"
                                            : ""
                                    }`}
                                >
                                    Posts
                                </a>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
            <hr
                className="border-2 border-orange-500 mb-1"
                style={{ boxShadow: "0 0.25rem 0 #c05621" }}
            />
        </header>
    );
};
