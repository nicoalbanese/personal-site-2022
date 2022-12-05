import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Section from "../components/section";

export default function Home() {
  return (
    <div>
      <Layout>
        <MainContent />
      </Layout>
    </div>
  );
}

const MainContent = () => {
  return (
    <div className="grid max-w-full gap-16 auto-rows-auto">
      <HeadlineBio />
    </div>
  );
};

const HeadlineBio = () => {
  return (
    <Section>
      <p className="mb-4">
        I am an investor at{" "}
        <Link href="https://ascension.vc" target="_blank">
          Ascension
        </Link>{" "}
        where I focus on pre-Seed and Seed investments. I have been lucky to
        partner with <Link href="/investments">many amazing companies</Link>.
      </p>
      <p>
        Aside from work, I am an avid football fan (COYG) and love building
        things that make my life a little easier (
        <Link href="https://www.github.com/nicoalbanese" target={"_blank"}>
          GitHub
        </Link>
        ). I also love and{" "}
        <Link href="https://open.spotify.com/track/637FSOGxwwnmU0zFJeKzQ4?si=dbb6b55013c94637">
          used to make music
        </Link>{" "}
        and always love to talk music.
      </p>
    </Section>
  );
};
