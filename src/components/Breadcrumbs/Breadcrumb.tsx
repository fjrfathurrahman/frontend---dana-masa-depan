import Link from "next/link";

interface BreadcrumbProps {
  pageName: string;
  children?: React.ReactNode;
}

const Breadcrumb = ({ pageName, children }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <h2 className="h3">
          {pageName}
        </h2>
        {children}
      </div>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" href="/">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
