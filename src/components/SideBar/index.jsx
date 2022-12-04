import { useState } from "react";
import Collapses from "../Collapses";
import MOCK_DATA from "../../data/MOCK_DATA";

const SideBar = () => {
  const [categories, setCategories] = useState(MOCK_DATA);

  return (
    <div className="side-bar">
      <Collapses categories={categories} />
    </div>
  );
};

export default SideBar;
