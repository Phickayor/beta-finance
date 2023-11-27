import baseurl from "@/config/host";
import Cookies from "js-cookie";

export const NewToken = async (refreshToken) => {
  try {
    const res = await fetch(`${baseurl}/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ refreshToken })
    });
    const data = await res.json();
    if (res.ok) {
      Cookies.set("token", JSON.stringify(data.data.token));
      return {
        message: "Token refreshed Successfully",
        success: true
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: error.message,
      success: false
    };
  }
};
