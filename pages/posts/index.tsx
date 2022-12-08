import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import PostItem from "../../components/postItem";
import RecentPosts from "../../components/recentPosts";
import { getSortedPostsData, Post } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: { allPostsData: Post[] }) {
  return (
    <Layout>
      <Head>
        <title>Posts</title>
      </Head>
        <h1>Posts</h1>
        <RecentPosts posts={allPostsData} />
    </Layout>
  );
}
