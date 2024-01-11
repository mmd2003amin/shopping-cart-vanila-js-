const setCookie = (token) => {
  document.cookie = `token=${token}; max-age=${24 * 60 * 60}; path=/`;
};

export { setCookie };
