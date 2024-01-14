import React from "react";
import ReactDOM from "react-dom/client";
import PartitionProvider from "./store/partitionProvider";

// @ts-ignore
import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PartitionProvider>
    <App />
  </PartitionProvider>
);
