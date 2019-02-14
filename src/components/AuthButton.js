import React from "react";

const startAuthentication = () => {
  window.location.href = `https://github.com/login/oauth/authorize?client_id=cc805ef06019d52139a3&scope=gist,repo`;
};
export default () => <button onClick={startAuthentication}>login</button>;

/* export default () => (
  <a href="https://github.com/login/oauth/authorize?client_id=cc805ef06019d52139a3&scope=gist,repo">
    Login
  </a>
); */
