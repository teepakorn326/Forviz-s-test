import React from "react";
import { Route, Routes } from "react-router-dom";
import Optional from "../test/Optional";
import Test from "../test/Test";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/booking/:roomid" element={<Optional />} />
    </Routes>
  );
}

export default Router;
