import { useState, useEffect } from "react";
import SideCollapse from "../SideCollapse";
import MOCK_DATA from "../../data/MOCK_DATA";

const SideBar = () => {
  const [data, setDate] = useState(MOCK_DATA);

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className="side-bar">
      <SideCollapse data={data} />
    </div>
  );
};

export default SideBar;
