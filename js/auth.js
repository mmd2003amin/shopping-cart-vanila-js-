import authHandler from "../utils/authorization.js";
import { setCookie } from "../utils/cookie.js";
import { loginUser } from "../utils/httpRequest.js";
import validateForm from "../utils/validation.js";

const loginButton = document.querySelector(".auth-login-button");
const inputUsername = document.querySelector(".input-name");
const inputPassword = document.querySelector(".input-password");

const loginHandler = async () => {
  const username = inputUsername.value;
  const password = inputPassword.value;

  validateForm(username, password);
  const token = await loginUser("auth/login", { username, password });
  setCookie(token.token);
};

loginButton.addEventListener("click", loginHandler);
window.addEventListener("DOMContentLoaded", authHandler);
