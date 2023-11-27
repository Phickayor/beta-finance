// import baseurl from "@/config/host";

export const ResendOtp = async (email) => {
  let baseurl = "http://localhost:4000";

  try {
    const res = await fetch(`${baseurl}/resend-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (data.success) {
      return {
        message: data.message,
        data,
        success: true,
      };
    } else {
      return {
        message: data.message,
        success: false,
      };
    }
  } catch (error) {
    return {
      message: error.message,
      success: false,
    };
  }
};
