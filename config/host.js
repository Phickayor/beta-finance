const baseurl =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "production"
    ? process.env.NEXT_PUBLIC_SERVER_LIVE_URL
    : process.env.NEXT_PUBLIC_SERVER_LOCAL_URL;

module.exports = baseurl;
