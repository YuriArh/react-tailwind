import Raw from "./Raw";

function List(props: {
  items?: { name: string; amount: string; type: string }[];
}) {
  console.log(props.items);
  return (
    <div className="border-solid border-x-2 border-indigo-600  w-100% h-fit text-center">
      <Raw key={"raw"} name={"Name"} amount={"Amount"}></Raw>
      {props.items?.map((item, i) => {
        return <Raw key={i} name={item.name} amount={item.amount}></Raw>;
      })}
    </div>
  );
}

export default List;
