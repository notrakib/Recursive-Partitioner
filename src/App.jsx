import { useContext } from "react";
import RecursiveCompo from "./components/recursiveCompo";
import PartitionContext from "./store/partitionContext";

const App = () => {
  const partitions = useContext(PartitionContext).partitions;

  return (
    <div className="h-screen">
      <RecursiveCompo children={partitions} />
    </div>
  );
};

export default App;
