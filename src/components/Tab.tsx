function Tab(props: { name: string; active: boolean }) {
  return (
    <div
      className={`border-solid border-2 border-b-0 border-indigo-600 rounded-t-lg w-48 h-10 text-center ${
        props.active ? "bg-indigo-100" : ""
      }`}
    >
      <p className="capitalize">{props.name}</p>
    </div>
  );
}

export default Tab;
