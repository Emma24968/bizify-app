import Link from "next/link";
import PageHeader from "./PageHeader";

export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <html>
      <body className="">
        <PageHeader currentPage="Error" title="Error" />
        <h2 className="text-[15rem] text-center font-extrabold">
          40
          <span className="inline-block rotate-[-8deg]">
            4
          </span>
        </h2>

        <p className="text-center  text-gray-600">
          Sorry, the page you’re looking for doesn’t exist.
          If you think <br /> something is broken, report a problem.
        </p>

        <div className="text-center">
          <Link href='/'>
  <button className="my-6 cursor-pointer bg-[#84A17D] text-white px-6 py-3 rounded-md">
    Back To Home
  </button>
          </Link>
</div>
      </body>
    </html>
  );
}