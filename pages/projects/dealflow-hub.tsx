import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";

const DealflowHub = () => {
  return (
    <Layout>
      <Link href="/projects">back</Link>
      <h1>Dealflow Hub</h1>
      <div id="project-article">
        <h3>Problem</h3>
        <p>
          We used to use <Link href={"https://www.affinity.co/"}>Affinity</Link>{" "}
          for all things deal flow at Ascension but found it was quite an
          expensive solution for the small team we were at the time (3 partners
          and 2 Associates) and that it wasn’t as extensible as we would have
          liked (note: this was in 2019 and I understand that it has improved
          since). We were using Airtable for managing our investments and LPs
          (see{" "}
          <Link href="/posts/vc-portfolio-airtable">
            Managing VC Portfolio with Airtable
          </Link>
          ) and so decided to give Airtable a go for deal flow as well.
        </p>
        <p>
          In our head, the requirements for a strong deal flow system were that
          it had to be:
          <ol>
            <li>Easy to add information;</li>
            <li>Easy to query;</li>
            <li>
              Simple enough for the whole team to use but configurable enough
              that we could add automations and workflows on top without having
              to rebuild everything.
            </li>
          </ol>
          <blockquote>
            Number three is a particularly important point because a system is
            only as good as those that are using it and the name of the game is
            consistency.
          </blockquote>
        </p>
        <p>
          With its ability to link records in different tables, Airtable was an
          ideal choice of platform to build upon. While the bases are fairly
          intuitive for anyone who has spent time in excel / google sheets,
          “views” can be a complicated concept for someone to wrap their head
          around and navigate. Additionally, Airtable’s lack of universal search
          would quickly drive frustration within the team.
        </p>
        <p>
          Example Situation: a co-investor sends a business they are looking at.
          You need to figure out whether you or someone in your team has already
          looked at it. If so, you need to understand what happened. If not,
          ideally you’d like to have q quick way to add it and any relevant
          information to the system. To do this, you would have to navigate to
          your base and then search within a view that has no filters on it to
          ensure you are querying the entire sheet within the base. One solution
          here is to just bookmark these views in your browser. However, our
          base quickly soared to 5000+ records and that made for a slow and
          clunky experiences. Importantly, this broke rule number 3 above of
          being simple and intuitive enough for the whole team. This also
          doesn’t solve the quick capture in the case the record doesn’t exist.
        </p>
        <div id="solution-section">
          <h3>Solution / Demo</h3>
          <div>
            <h5>Searching for a company</h5>
            <div
              style={{
                position: "relative",
                paddingBottom: " 55.04587155963303%",
                height: "0",
              }}
            >
              <iframe
                src="https://www.loom.com/embed/fedf412e8c754f1eaf767ece673a1c39"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </div>
            <p>
              A quick search in the universal search bar queries the entire base
              and returns any matching records. You are presented with key
              information including the company&apos;s name, description, raise
              amount, the fund looking at the opportunity, as well as a link to
              the company&apos;s website, deck, and to the record within
              Airtable.
            </p>
          </div>

          <div>
            <h5>Adding a new company</h5>
            <div
              style={{
                position: "relative",
                paddingBottom: " 55.04587155963303%",
                height: "0",
              }}
            >
              <iframe
                src="https://www.loom.com/embed/6d33ba77a7364a499a4ff7c13ccc050b"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </div>
            <p>
              Nothing complicated here. Just an easy way to get right to a form
              to add a new company.
            </p>
          </div>
          <div>
            <h5>Adding a new call note</h5>
            <div
              style={{
                position: "relative",
                paddingBottom: " 55.04587155963303%",
                height: "0",
              }}
            >
              <iframe
                src="https://www.loom.com/embed/d243a164a9a24f70b40a8d9cc0395652"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </div>
            <p>
              Nothing complicated here either. Easy way to get right to a form
              to add a new note for a call with a company.
            </p>
          </div>
        </div>
        <div>
          <h3>Source Code</h3>
          <p>
            The app was built using NextJS/T3 Stack and the codebase is{" "}
            <Link href="https://github.com/nicoalbanese/dealflow-tool">
              here
            </Link>
            . Note: I’m a self taught developer and the code is the exact
            opposite of elegant 😂
          </p>
        </div>
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-2 text-gray-500">
              {/* <PlusIcon className="h-5 w-5 text-gray-500" aria-hidden="true" /> */}
            </span>
          </div>
        </div>
        <div>
          <h3>Additional Reading</h3>
          <ol>
            <li>
              <Link href="https://nextjs.org/">NextJS</Link>
            </li>
            <li>
              <Link href="https://create.t3.gg/">T3 Stack</Link>
            </li>
            <li>
              <Link href="https://www.airtable.com/guides/scale/using-airtable-api">
                Airtable API Documentation
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default DealflowHub;
