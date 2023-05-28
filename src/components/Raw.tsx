function Raw(props: { name: string; amount: number | string }) {
  return (
    <div className="w-11/12 h-12 border-solid border-0 border-b-2 border-indigo-600 mx-auto p-4 grid grid-cols-2 ">
      <p>{props.name}</p>
      <p>{props.amount}</p>
    </div>
  );
}

export default Raw;
