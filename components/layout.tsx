import Head from "next/head";
import Link from "next/link";
import Header from "./header";

const Layout = ({ children }: { children: any }) => {
  return (
    <main>
      <Head>
        <title>Nico Albanese</title>
        <meta
          name="description"
          content="Nico is an investor at Ascension where he focuses on pre-Seed and Seed investments."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto mt-16 max-w-container-small md:max-w-container-large md:mt-32">
        <Header />
        <div className="pt-2">{children}</div>
        <div className="flex flex-row justify-between my-8">
          <p className="text-sm text-tertiary dark:text-darkTertiary">
            © {new Date().getFullYear()} Nico Albanese
          </p>
          <div className="flex flex-row">
            <a
              href="https://twitter.com/nicoalbanese10"
              className="mr-4 text-sm text-tertiary dark:text-darkTertiary"
            >
              Twitter
            </a>
            <Link
              href="/"
              className="text-sm text-tertiary dark:text-darkTertiary"
            >
              Linkedin
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Layout;
