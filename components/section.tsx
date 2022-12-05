type SectionProps = {
  title?: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="flex flex-col items-start">
      {title && <h1 className="mb-4 text-base font-bold">{title}</h1>}
      {children}
    </div>
  );
};

export default Section;
