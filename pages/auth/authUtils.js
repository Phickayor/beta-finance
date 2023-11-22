// authUtils.js
import { useRouter } from "next/router";

export const RedirectToLogin = () => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    router.push({
      pathname: "/auth"
    });
  }
};
