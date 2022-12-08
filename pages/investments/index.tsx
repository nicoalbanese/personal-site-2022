import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { fetchInvestments } from "../../lib/airtable";
import type { Investment } from "../../lib/airtable";
import Link from "next/link";
import Head from "next/head";

const InvestmentsShowcase = ({
  initInvestments,
}: {
  initInvestments: Investment[];
}) => {
  const [investments, setInvestments] = useState<Investment[] | null>(null);

  useEffect(() => {
    setInvestments(initInvestments);
  }, []);
  return (
    <Layout>
      <Head>
        <title>Investments</title>
      </Head>
      <h1>Investments</h1>
      <p className="mb-4">
        Since joining Ascension, I have been fortunate to work with a host of
        incredible founders.
      </p>

      {investments ? (
        <>
          <InvestmentTable investments={investments} />
          {/* <table className="table-fixed">
            <tbody>
              {investments.map((investment) => (
                <InvestmentComponent
                  key={investment.name}
                  investment={investment}
                />
              ))}{" "}
            </tbody>
          </table> */}
        </>
      ) : (
        <>loading...</>
      )}
    </Layout>
  );
};

export default InvestmentsShowcase;

const InvestmentComponent = ({ investment }: { investment: Investment }) => {
  return (
    <tr className="mb-2 flex">
      <td className="mr-2">
        <Link
          href={investment.website ? investment.website : "/investments"}
          target={"_blank"}
        >
          {investment.name}
        </Link>
      </td>
      <td className="text-tertiary">{investment.description}</td>
    </tr>
  );
};

export async function getStaticProps() {
  const initInvestments = await fetchInvestments();
  return {
    props: { initInvestments }, // will be passed to the page component as props
  };
}

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

const InvestmentTable = ({ investments }: { investments: Investment[] }) => {
  return (
    <table className="w-full divide-y divide-gray-300">
      {/* <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Description
          </th>
        </tr>
      </thead> */}
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {investments.map((investment) => (
          <tr key={investment.name}>
            <td className="whitespace-nowrap py-3 pl-2 pr-3 text-sm font-medium text-gray-900 sm:pl-2 ">
              <Link
                href={investment.website ? investment.website : "/investments"}
                target={"_blank"}
                className="dark:text-gray-100"
              >
                {investment.name}
              </Link>
            </td>
            <td className=" px-2 py-3 text-sm text-gray-500 dark:text-gray-400">
              {investment.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
