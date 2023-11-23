import React from "react";

function WhatWeDo() {
  return (
    <div className="py-10 space-y-8">
      <h1 className="sub-heading">What we do ?</h1>
      <div className="flex flex-col gap-8 text-3xl font-poppins-light">
        <div className="bg-white p-20 text-black">
          <ul className="list-disc space-y-4">
            <li>
              Provide a feature for business owners to generate and send
              invoices
            </li>
            <li>Directly through the app to clients. </li>
            <li>
              Implement a system to track invoice statuses (e.g., pending, paid,
              overdue)
            </li>
            <li>Update them in real-time based on payments receive</li>
          </ul>
        </div>
        <div className="bg-purple p-20 text-white">
          <ul className="list-disc space-y-4">
            <li>
              Implement a user authentication system for business owners to
              create accounts and log in securely.
            </li>
            <li>
              Allow business owners to create profiles for each client/customer,
              storing essential information such as contact details, payment
              terms, and transaction history.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
