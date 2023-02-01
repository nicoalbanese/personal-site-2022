import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import RecentPosts from "../components/recentPosts";
import Section from "../components/section";
import { getSortedPostsData, Post } from "../lib/posts";

export default function Home({ allPostsData }: { allPostsData: Post[] }) {
  return (
    <div>
      <Layout>
        <MainContent posts={allPostsData} />
      </Layout>
    </div>
  );
}

const MainContent = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="grid max-w-full gap-16 auto-rows-auto">
      <HeadlineBio />
      {/* <div className="">
        <h4>Recent Posts</h4>
        <RecentPosts posts={posts} />
      </div> */}
    </div>
  );
};

const HeadlineBio = () => {
  return (
    <Section>
      <p className="mt-4">👋 Hola 👋</p>
      <p className="my-4">
        I am an investor at{" "}
        <Link href="https://ascension.vc" target="_blank">
          Ascension
        </Link>{" "}
        where I focus on pre-Seed and Seed investments. I have been lucky to
        invest in <Link href="/investments">many amazing companies</Link>.
      </p>
      <p>
        Aside from work, I am an avid football fan (COYG) and{" "}
        <Link href="/projects">love building things</Link> that make my life a
        little easier. I also love and{" "}
        <Link href="/music">used to make music</Link> and always love to talk
        music.
      </p>
    </Section>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
