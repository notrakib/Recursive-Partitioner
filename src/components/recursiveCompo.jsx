import RecursionBreak from "./recursionBreak";

const RecursiveCompo = (props) => {
  const data = props.children;

  // Recursion breaking condition
  if (!data.children) {
    return <RecursionBreak id={props.id} type={data.type} bgColor={props.bgColor} />;
  }

  return (
    <div className={`flex ${data.children.metaData.flexDir} w-full h-full`}>
      
      <div className={`${data.children.metaData.flexDir === "flex-row" ? "w-1/2" : "h-1/2"} `}>
        {data.children.childA && (
          <RecursiveCompo id={props.children.id} children={data.children.childA} bgColor={data.children.metaData.bgColorA} />
        )}
      </div>

      <div className={`${data.children.metaData.flexDir === "flex-row" ? "w-1/2" : "h-1/2"} `}>
        {data.children.childB && (
          <RecursiveCompo
            id={props.children.id}
            children={data.children.childB}
            bgColor={data.children.metaData.bgColorB}
          />
        )}
      </div>

    </div>
  );
};

export default RecursiveCompo;
