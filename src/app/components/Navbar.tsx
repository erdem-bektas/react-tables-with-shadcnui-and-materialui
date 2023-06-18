import Link from "next/link";

export default function () {
  return (
    <div className="flex justify-center justify-items-stretch mb-4">
      <Link className="mx-4 text-2xl font-semibold" href="/">
        Home
      </Link>
      <Link className="mx-4 text-2xl font-semibold" href="/datatable1">
        Datatable 1
      </Link>
      <Link className="mx-4 text-2xl font-semibold" href="/datatable2">
        Datatable 2
      </Link>
      <Link className="mx-4 text-2xl font-semibold" href="/shadcn-ui">
        Shadcn/ui
      </Link>
    </div>
  );
}
