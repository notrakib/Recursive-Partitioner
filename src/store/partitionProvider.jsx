import { useState } from "react";
import PartitionContext from "./partitionContext";
import { boxes } from "../utils/data";
import randomRGB from "../hooks/generateBGColor";

const PartitionProvider = (props) => {
  const [partitions, setPartitions] = useState(boxes);

  const createPartition = (id, type, flexDir) => {
    // When only root box exists, this condition will be satisfied
    if (!type) {
      const root = {
        childA: { children: null, type: "childA" },
        childB: { children: null, type: "childB" },
        metaData: {
          flexDir: flexDir,
          bgColorA: randomRGB(),
          bgColorB: randomRGB(),
        },
      };

      partitions.children = root;
      setPartitions({ ...partitions });
      return;
    }

    // This function evaluates the box clicked by the user
    const findObj = (child) => {
      if (!child.children || child.id == id) {
        return child;
      }

      const foundAtA = findObj(child.children.childA);
      const foundAtB = findObj(child.children.childB);

      if (foundAtA.children) {
        return foundAtA;
      } else {
        return foundAtB;
      }
    };

    const targetObj = findObj(partitions);

    // This newObj creates a new partition
    const newObj = {
      id: Math.random().toString(36).substring(2, 7),
      children: {
        childA: { children: null, type: "childA" },
        childB: { children: null, type: "childB" },
        metaData: {
          flexDir: flexDir,
          bgColorA: randomRGB(),
          bgColorB: randomRGB(),
        },
      },
    };

    // Finds out to which child of a parent, new box will be added
    if (type === "childA") {
      targetObj.children.childA = newObj;
    } else {
      targetObj.children.childB = newObj;
    }

    setPartitions({ ...partitions });
  };

  const removePartition = (id) => {
    // When only last two boxes exist, this condition will be satisfied
    if (
      !partitions.children.childA.children &&
      !partitions.children.childB.children
    ) {
      partitions.children = null;
      setPartitions({ ...partitions });
      return;
    }

    // This function evaluates the parent box of another box which is clicked by the user
    const findObj = (child) => {
      if (
        !child.children ||
        child.children?.childA?.id == id ||
        child.children?.childB?.id == id
      ) {
        return child;
      }

      const foundAtA = findObj(child.children.childA);
      const foundAtB = findObj(child.children.childB);

      if (foundAtA.children) {
        return foundAtA;
      } else {
        return foundAtB;
      }
    };

    let targetObj = findObj(partitions);

    // Finds out from which child of a parent will be removed
    if (targetObj.children.childA.id === id) {
      targetObj.children.childA = { children: null, type: "childA" };
    } else {
      targetObj.children.childB = { children: null, type: "childB" };
    }

    setPartitions({ ...partitions });
  };

  return (
    <PartitionContext.Provider
      value={{
        partitions,
        createPartition,
        removePartition,
      }}
    >
      {props.children}
    </PartitionContext.Provider>
  );
};

export default PartitionProvider;
