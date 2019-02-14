import React from "react";

import { Link } from "react-router-dom";

export default ({ id, name }) => (
  <div>
    <Link to={`/show/${id}`}>{name}</Link>
  </div>
);
