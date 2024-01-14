import { useContext } from "react";
import PartitionContext from "../store/partitionContext";
import randomRGB from "../hooks/generateBGColor";

// This component will be exucuted when recursion break condition is satisfied
const RecursionBreak = (props) => {
  const partitionAction = useContext(PartitionContext);

  return (
    <div style={{ backgroundColor: `${props.bgColor || randomRGB()}` }} className="flex w-full h-full border-slate-800 border-2">
      <div className="flex flex-row m-auto w-16 justify-between">
        <button 
          onClick={() => partitionAction.createPartition(props.id, props.type, "flex-row")} 
          className="text-sm bg-white w-6 h-6 border rounded border-slate-400"
        >
          h
        </button>
        <button 
          onClick={() =>partitionAction.createPartition(props.id, props.type, "flex-col")}
          className="text-sm bg-white w-6 h-6 border rounded border-slate-400"
        >
          v
        </button>
        <button
          onClick={() => partitionAction.removePartition(props.id, props.type)}
          className="text-sm bg-white w-6 h-6 border rounded border-slate-400"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default RecursionBreak;
