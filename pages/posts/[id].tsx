import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({
  postData,
}: {
  postData: { title: string; contentHtml: string; date: string };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Link
        href="/posts"
        className="inline-block pb-2 text-gray-500 dark:text-gray-400"
      >
        back to posts
      </Link>
      <h1>{postData.title}</h1>
      <div className="font-light font-sm text-gray-400 my-2">
        Posted on {new Date(postData.date).toDateString()}
      </div>
      <div
        className="mt-4"
        id="md-display"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </Layout>
  );
}
