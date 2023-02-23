import Link from "next/link";
import Layout from "../../components/layout";

const SIDEPROJECT_DETAILS = [
  {
    id: 0,
    title: "Deal Flow OS - Open Source",
    description:
      "open-source deal flow management system built on top of Airtable and next.js",
    slug: "dealflow-os",
  },
  {
    id: 0,
    title: "Deal Flow Hub",
    description:
      "lightweight interface on top of airtable to query, add, and interact with base",
    slug: "dealflow-hub",
  },
  //   { id: 1, title: "", description: "", slug: "" },
  //   { id: 2, title: "", description: "", slug: "" },
  //   { id: 3, title: "", description: "", slug: "" },
];

const Projects = () => {
  return (
    <Layout>
      <Link href={"/"}>back</Link>
      <h1>Projects</h1>
      <div id="projects-container">
        {SIDEPROJECT_DETAILS.map((project) => (
          <Project
            title={project.title}
            description={project.description}
            key={project.id}
            slug={project.slug}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;

const Project = ({
  title = "default title",
  description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem assumenda nam aliquid tenetur sunt mollitia ullam neque asperiores quibusdam voluptatibus.",
  slug = "",
}) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className="no-underline hover:no-underline hover:opacity-60 my-2 inline-block"
    >
      <div id="header-link" className="font-bold underline">
        <span>{title}</span>
        <span>
          <svg
            className="inline ml-1 transform -rotate-45"
            width="11"
            height="8"
            viewBox="0 0 11 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 3.99994H9.5M9.5 3.99994L6.5 0.999939M9.5 3.99994L6.5 7.00006"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="stroke-current text-tertiary dark:text-darkTertiary"
            ></path>
          </svg>
        </span>
      </div>
      <div id="description" className="text-primary dark:text-darkPrimary">
        {description}
      </div>
    </Link>
  );
};
