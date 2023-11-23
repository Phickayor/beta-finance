import React from "react";

function HowItWorks() {
  return (
    <div className="space-y-8 py-5">
      <h1 className="sub-heading my-4 md:my-8 lg:my-16 ">How it works</h1>
      <div className="grid md:grid-cols-3 process-container gap-3 md:gap-5 text-lg lg:text-2xl xl:text-[32px]">
        <div>
          <h3>✌️ Create an account </h3>
        </div>
        <div>
          <h3>📁 Add Client</h3>
        </div>
        <div>
          <h3>💡track payment</h3>
        </div>
        <div className="md:col-span-3">
          <h3>📑 Receive real-time alerts for unpaid invoices.</h3>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
