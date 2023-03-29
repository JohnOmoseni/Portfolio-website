import Portfolio from "../../components/Portfolio";

import { IconContext } from "react-icons/lib";
import "/sass/main.scss";

export default function Home() {
  return (
    // <IconContext.Provider
    //   value={{
    //     className: "icon",
    //     size: "30",
    //     style: { stroke: "#ccc", verticalAlign: "middle" },
    //   }}
    // >
    <div className="wrapper">
      <Portfolio />
    </div>
    // </IconContext.Provider>
  );
}
