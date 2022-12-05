import Link from "next/link";
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <h1>Oops</h1>
      <p>The page you are looking for is missing!</p>
      <p>
        <Link href="/">back to home</Link>
      </p>
    </Layout>
  );
};

export default NotFoundPage;
