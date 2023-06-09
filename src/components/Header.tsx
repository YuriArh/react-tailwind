import { Link } from "react-router-dom";
import Tab from "./Tab";

function Header(props: { tabs: string[]; activeTab: number }) {
  return (
    <div className="container mx-auto flex place-content-center ">
      {props.tabs.map((item, i) => {
        return (
          <Link to={`navigate?tab=${i}`} key={i}>
            <Tab
              name={item}
              active={i === props.activeTab ? true : false}
            ></Tab>
          </Link>
        );
      })}
    </div>
  );
}

export default Header;
