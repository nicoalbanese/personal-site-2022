import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

const DealflowOS = () => {
  return (
    <Layout>
      <Head>
        <title>Deal Flow OS</title>
        <meta property="twitter:title" content="Deal Flow OS" />
        <meta
          property="description"
          content="Open-source deal flow management system"
        />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@nicoalbanese10" />
        <meta
          property="twitter:description"
          content="Open-source deal flow management system"
        />
        <meta
          property="og:image"
          content="https://nicoalbanese.com/dfos-cover.png"
        />
        <meta
          property="twitter:image"
          content="https://nicoalbanese.com/dfos-cover.png"
        />
      </Head>
      <div id="os-article">
        <Link href="/projects">back</Link>
        <h1>Deal Flow OS</h1>
        <h3 className="">Open-Source Deal Flow Management System</h3>
        <p>
          I&#39;m excited to release Deal Flow OS, an open-source(ish) deal flow
          management system. This system was built to cover the deal flow
          management requirements of{" "}
          <Link href={"https://ascension.vc"}>Ascension</Link>, an early-stage
          VC fund.
        </p>
        <div className="mt-4 mb-8">
          <h3>Demo</h3>
          <div
            style={{
              position: "relative",
              paddingBottom: "55.27123848515865%",
              height: 0,
            }}
          >
            <iframe
              src="https://www.loom.com/embed/8e2852c9e6874e80a1642dc1fb385bea"
              frameBorder="0"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
        </div>
        <p>
          Over the last ~5 years, we (Ascension) have tried many solutions (
          <Link href="https://www.affinity.co/">Affinity</Link>,{" "}
          <Link href="https://attio.com/">Attio</Link>,{" "}
          <Link href="https://docs.google.com/spreadsheets/">
            Google Sheets
          </Link>
          , <Link href="https://www.notion.so/">Notion</Link>) for managing deal
          flow but for a variety of reasons, none of them stuck. While the
          product is important, ultimately a system of any kind is only as good
          as the people using it, and the key requirement for us has always
          been, at its core, an easy and reliable way of adding and querying
          opportunities. Some products were super powerful, but too intimidating
          to configure. Others were easy to configure, but didn’t play nice with
          integrations and lacked extensibility.
        </p>
        <p>
          Over the last few years, I’ve been iterating on what the perfect deal
          flow system would be *for us*, and I’m really excited to make it
          available to everyone. Deal Flow OS is an opinionated system that will
          have you up and running with everything you need to manage your deal
          flow, in 20 minutes.
        </p>
        <h3>Architecture</h3>
        <p>
          At the core of Deal Flow OS is an opinionated Airtable base, providing
          a relational database that is easy to build and iterate on without
          having to write any code. Airtable also provides an incredibly robust
          no-code automations platform straight out of the box making the system
          super extensible. Features such as forms and views make it very easy
          to allow others to easily submit information (i.e. company submit deal
          flow through your website) and easily consume information without
          being logged in (i.e. sharing deal flow with other investors or
          pipelines with your LPs etc).
        </p>
        <p>
          While Airtable covers all of the basic needs for a comprehensive deal
          flow management system, the front-end can be difficult and unintuitive
          to navigate for non-power-users. However, all is not lost. Airtable
          also provides an automatically generated API for every base with zero
          extra configuration necessary. This is one of the most underrated
          features that Airtable provides, as it allows for almost limitless
          possibilities to interact with your base. Using the API, I built a
          custom front-end which provides an intuitive app-like experience.
        </p>
        <h2>Features</h2>
        <h3>Front End</h3>
        <p>
          When you log onto your Deal Flow Hub, you have four options:
          Pipelines, Add Company, Add Note, and Triage Inbound Pipeline. The
          Pipelines feature allows you to bookmark the main pipelines (views
          that you can configure based on your requirements) you want quick
          access to. Adding a company to the pipeline is quick and easy with the
          Add Company feature. The Add Note feature provides a quick link to
          take notes on calls. The final option, and my favorite feature, is the
          Triage Inbound Pipeline.{" "}
        </p>
        <p>
          For context, Ascension receives over 1500 applications for investment
          a year through our website and we have never been able to consistently
          and effectively triage quickly (ideally 1-2 weeks).
        </p>
        <p>
          The role of triaging is as simple as deciding if something is
          potential fit for one of our funds. If so, we should schedule a first
          call, if not, we should send an email passing on the opportunity and
          update our system. One way to improve this is to ask better objective
          questions and then build automations to process applications based on
          logic (super easy to do with Airtable 🙂). But, that can only take you
          so far, and I always dreamed of having an interface that presented the
          most important information and then an easy way to action. And that is
          how and why the Triage Inbound Pipeline (below) was built.
        </p>
        <h3>Back End</h3>
        <p>
          The Airtable base has an opinionated pre-built schema with views and
          forms to cover basic needs such as accepting applications and
          submitting notes. It also has several basic automations that are
          status-based, interval-based, and event-based.
        </p>
        <ul>
          <li>Status-based - when an opportunity is marked as:</li>
          <ul>
            <li>
              “set up first meeting” → send an email to a founder with a
              calendly link to book a meeting;
            </li>
            <li>
              “automated pass” → send an email to the founder passing on the
              opportunity and update status;
            </li>
            <li>
              “invested” → send investment details to the operations team to
              commence onboarding.
            </li>
          </ul>
          <li>
            Interval-based - every morning, send an updated list of the
            pipeline.
          </li>
          <li>
            Event-based - when a new note is submitted → update company status
            to “post-call action required”. Based on sentiment of the call,
            perform an action (ie. positive call, share deck and notes with
            partner on the fund)
          </li>
        </ul>
        <p>
          Finally, there is a feedback system that provides the infrastructure
          to share opportunities with context (deck, website, notes) to members
          of the investment team (partners usually), and an easy interface for
          them to reply.
        </p>
        <p>
          And that’s it! If you’re interested in using it, instructions are in
          the Github repo, and if you have any questions please drop me an email
          - nico@ascension.vc
        </p>
        <p>
          <strong>Note:</strong> The one notable omission in this project is
          email integration. This is a huge part of the appeal of Affinity,
          Attio, HubSpot etc. and a non-negotiable for many funds. This solution
          isn’t meant to fit for everyone. It was built for our requirements at
          Ascension.
        </p>
        <h2>Instructions</h2>
        <p>
          The repo is <Link href={"https://github.com/nicoalbanese/df-hub-opensource"}>here</Link>, however, I&#39;m still pulling together the instructions for getting up and
          running and they will be released at some point over the coming
          weekend (25 Feb). If you&#39;re interested in being notified upon
          release, fill in{" "}
          <Link href={"https://airtable.com/shrYElayOSg0tlz5C"}>this form</Link>
          .
        </p>
      </div>
    </Layout>
  );
};

export default DealflowOS;
