import React from "react";

import Layout, { KEYWORDS } from "../components/layout";
import { getLatestPostsData, getAllTags } from "../lib/posts";
import { IPost } from "../types";
import { Anchor } from "../components/anchor";
import { PostList } from "../components/post-list";
import { TitleHeader } from "../components/title-header";
import Head from "next/head";
import { TagList } from "../components/tag-list";
import { TWITTER } from "../constants/urls";

interface IProps {
    latestPosts: IPost[];
    tags: string[];
}

const Home: React.StatelessComponent<IProps> = (props) => {
    const description =
        "I'm Ryan, a Front-End Web Developer working in Bournemouth. I love programming, creating applications for the web and teaching others how to do the same!";
    return (
        <>
            <Head>
                <script type="application/ld+json">
                    {`{
                        "@context": "http://schema.org",
                        "@type": "Blog",
                        "about": "${description}",
                        "author": {
                            "name": "Ryan Maffey"
                        },
                        "keywords": "${KEYWORDS.join(", ")}",
                        "name": "ryanmaffey.dev",
                        "url": "https://www.ryanmaffey.dev"
                    }`}
                </script>
            </Head>
            <Layout title="Welcome to ryanmaffey.dev" description={description}>
                <TitleHeader>
                    <h1>
                        Welcome to{" "}
                        <span className="text-orange-400">ryanmaffey.dev</span>
                    </h1>
                    <p className="mb-8">
                        I'm Ryan, a Front-End Web Developer working in
                        Bournemouth. I love programming and creating
                        applications for the web, but I also enjoy teaching and
                        sharing knowledge with other developers, which is why I
                        decided to share my thoughts, experiences and things
                        I've learned here on this blog!
                    </p>
                    <Anchor href="/about" isLinkButton className="bg-gray-800">
                        Read more about me
                    </Anchor>
                </TitleHeader>
                <section className="container mb-16">
                    <h2>Latest Posts</h2>
                    <p>
                        I try to write on new post every month so check back
                        soon for new content!
                    </p>
                    <p className="mb-6">
                        If you like what you read, don't forget to give it a
                        'like' (click the ❤ button).
                    </p>
                    <PostList posts={props.latestPosts} headingSize={3} />
                    <div className="mt-8">
                        <Anchor href="/posts" isLinkButton>
                            See all blog posts
                        </Anchor>
                    </div>
                </section>
                <section className="container mb-16">
                    <h2>Browse Posts by Tag</h2>
                    <p className="mb-6">
                        Here are all the tags for my blog posts. Click on a
                        topic you're interested in to see the relevant posts.
                    </p>
                    <TagList tags={props.tags} />
                </section>
                <section className="container">
                    <h2>Some Helpful Resources</h2>
                    <p>
                        I've curated a{" "}
                        <Anchor href="/resources">list of resources</Anchor>{" "}
                        across the web which I frequently find useful. Check
                        them out and see whether you find something new and
                        helpful for you! If you can think of anything that isn't
                        in my list which you think I might find useful, feel
                        free to{" "}
                        <Anchor href={TWITTER} isExternalLink>
                            let me know via Twitter
                        </Anchor>
                        !
                    </p>
                    <div className="mt-8">
                        <Anchor href="/resources" isLinkButton>
                            View resources
                        </Anchor>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export const getStaticProps = async (): Promise<{ props: IProps }> => {
    const latestPosts = await getLatestPostsData(4);
    const tags = await getAllTags();
    return {
        props: {
            tags,
            latestPosts,
        },
    };
};

export default Home;
