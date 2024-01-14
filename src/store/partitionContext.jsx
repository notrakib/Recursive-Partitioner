import React from "react";

const PartitionContext = React.createContext({
  partitions: {},
  createPartition: () => {},
  removePartition: () => {},
});

export default PartitionContext;
