import Header from "@/components/Admin/Header";
import Welcome from "@/components/Admin/Welcome";
import ActivityBar from "@/components/Admin/ActivityBar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import WithdrawComp from "@/components/Admin/WithdrawComp";
import InvoiceComp from "@/components/Admin/InvoiceComp";
import { useRouter } from "next/router";

function Invoice() {
  const router = useRouter();

  const [userState, SetUserState] = useState({});
  const user = Cookies.get("user");
  useEffect(() => {
    if (user) {
      SetUserState(JSON.parse(user));
    }
  }, [user]);

  const ClientId = router.query.id;

  return (
    <div className="py-5 mx-auto w-11/12 space-y-8">
      <Header navText="Add Client" navLink="/admin/clients" />
      <InvoiceComp props={ClientId} />
      {/* <WithdrawComp /> */}
      {/* <Welcome name={userState.businessName} balance={userState.userWalllet} /> */}
      {/* <ActivityBar /> */}
    </div>
  );
}

Invoice.protected = false;
export default Invoice;
