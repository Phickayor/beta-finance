import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col justify-center gap-6 py-10 ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-poppins-semibold">
        Are you Lost?
      </h1>
      <p className="md:text-center md:text-lg lg:text-xl">
        It seems like the page you&apos;re looking for has wandered off.
        Don&apos;t worry, you&apos;re not alone on this digital journey!
        Let&apos;s get you back on track:
      </p>
      <ul className="list-disc mx-auto w-10/12 md:text-lg lg:text-xl space-y-4 ">
        <li>
          <b>Check the URL:</b> Make sure there are no typos or misspellings. A
          small error could be the culprit.
        </li>
        <li>
          <b>Go to the homepage: </b>
          Navigate to our <Link href="/admin/">homepage</Link> and explore from
          there.
        </li>
      </ul>
    </div>
  );
}

export default NotFound;
