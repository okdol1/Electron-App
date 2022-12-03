import { useState, useEffect } from "react";
import Collapses from "../Collapses";
import MOCK_DATA from "../../data/MOCK_DATA";

const SideBar = () => {
  const [data, setDate] = useState(MOCK_DATA);

  return (
    <div className="side-bar">
      <Collapses data={data} />
    </div>
  );
};

export default SideBar;
