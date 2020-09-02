import React from "react";
import Head from "next/head";

import { Nav } from "./nav";
import { Footer } from "./footer";

export const KEYWORDS = [
    "developer",
    "development",
    "software",
    "program",
    "programming",
    "programmer",
    "web",
    "website",
    "blog",
    "article",
    "post",
    "tech",
    "technology",
    "code",
    "coding",
    "career",
];

export const Layout: React.FunctionComponent<{
    title: string;
    description: string;
    keywords?: string[];
}> = (props) => {
    return (
        <>
            <Head>
                {/* Icons and Theme */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png?v=1"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png?v=1"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png?v=1"
                />
                <link rel="manifest" href="/site.webmanifest?v=1" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg?v=1"
                    color="#2e3748"
                />
                <link rel="shortcut icon" href="/favicon.ico?v=1" />
                <meta name="msapplication-TileColor" content="#f5ad5d" />
                <meta name="theme-color" content="#f5ad5d" />

                {/* Meta */}
                <meta name="description" content={props.description} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content={props.description} />
                <meta
                    name="keywords"
                    content={[...KEYWORDS, ...(props.keywords ?? [])].join(
                        ", "
                    )}
                />

                {/* OG */}
                <meta name="og:title" content={props.title} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content={
                        props.title === "" ? "ryanmaffey.dev" : props.title
                    }
                />
                <meta name="twitter:description" content={props.description} />
                <meta name="twitter:creator" content="@ryanmaffey" />
                <meta name="twitter:site" content="@ryanmaffey" />
                <meta
                    name="twitter:image"
                    content="https://ryanmaffey.dev/img/ryanmaffey-md.webp"
                />

                {/* Title */}
                <title>{props.title}</title>
            </Head>
            <div
                className="grid text-gray-300"
                style={{
                    gridTemplateRows: "auto 1fr auto",
                    gridTemplateColumns: "100%",
                    minHeight: "100vh",
                }}
            >
                <Nav />
                <main id="content">{props.children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
