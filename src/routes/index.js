import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import NotFound from "./NotFound";
import List from "../pages/List";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list-of-characters" element={<List />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
