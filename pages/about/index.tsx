import React from "react";
import Head from "next/head";

import Layout, { siteTitle } from "../../components/layout";
import { getLatestPostsData } from "../../lib/posts";
import { IPost } from "../../types";

interface IProps {
    latestPosts: IPost[];
}

const PostsPage: React.StatelessComponent<IProps> = (props) => {
    return (
        <Layout>
            <Head>
                <title>About Me | {siteTitle}</title>
            </Head>
            <div className="container">
                <div className="bg-gray-800 mb-5 p-5 rounded">
                    <h1 className="m-0">About Me</h1>
                </div>
            </div>
            <div className="container">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis qui labore inventore ratione, in vitae dolore quas
                    libero ipsa veritatis non cum molestiae unde quae culpa
                    odit, alias consequuntur magnam?
                </p>
            </div>
        </Layout>
    );
};

export const getStaticProps = async (): Promise<{ props: IProps }> => {
    const latestPosts = await getLatestPostsData();
    return {
        props: {
            latestPosts,
        },
    };
};

export default PostsPage;
