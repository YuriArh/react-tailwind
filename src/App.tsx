import { useLocation } from "react-router-dom";
import List from "./components/List";
import Header from "./components/Header";
import { Item, NewItem } from "./types/ItemType";
let data = require("./data.json");

function App() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentTab = queryParams.get("tab");

  const tabs = ["income", "outcome", "loan", "investment"];
  const activeTab = currentTab === null ? 0 : parseInt(currentTab);

  const newData = data.data.map((item: Item) => {
    return {
      _id: item._id,
      name: `${item.name.first} ${item.name.last}`,
      amount: parseInt(item.amount.slice(11, -1)),
      type: item.type,
    };
  });

  return (
    <div className="container w-fit mx-auto ">
      <Header tabs={tabs} activeTab={activeTab}></Header>
      <List
        items={newData.filter((item: NewItem) => item.type === tabs[activeTab])}
      ></List>
    </div>
  );
}

export default App;
