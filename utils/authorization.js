const authHandler = () => {
  const cookie = document.cookie;
  const url = location.href;

  if (
    (cookie && url.includes("/auth")) ||
    (!cookie && url.includes("dashboard"))
  ) {
    location.assign("/");
  }
};

export default authHandler;
