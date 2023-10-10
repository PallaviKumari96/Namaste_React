/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
/** 
// Header
 -Logo
 -Nav Items
//Body
 -Search
 -RestaurentContainer
  -restaurentCards
//Footer
  -copyright
  -links
  -address
  -contact
  */

const AppLayout = () => {
  return (
    <div className='App'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
