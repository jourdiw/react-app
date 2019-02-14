import React from "react";
import { Button } from "semantic-ui-react";const startAuthentication = () =>
 (window.location.href = `https://github.com/login/oauth/authorize?client_id=1653bf150593b10a0d63`);
export default () => <Button onClick={startAuthentication}>Auth</Button>;