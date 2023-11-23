import React from "react";

function HowItWorks() {
  return (
    <div className="py-10 space-y-8">
      <h1 className="sub-heading">How it works</h1>
      <div className="grid grid-cols-3 process-container gap-5 text-[32px]">
        <div>
          <h3>✌️ Create an account </h3>
        </div>
        <div>
          <h3>📁 Add Client</h3>
        </div>
        <div>
          <h3>💡track payment</h3>
        </div>
        <div className="col-span-3">
          <h3>📑 Receive real-time alerts for unpaid invoices.</h3>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
