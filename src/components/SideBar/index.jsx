import { useState } from "react";
import Collapses from "../Collapses";
import Resizable from "../Resizable";
import MOCK_DATA from "../../data/MOCK_DATA";

const SideBar = () => {
  const [categories, setCategories] = useState(MOCK_DATA);

  return (
    <Resizable
      position={"right"}
      width={230}
      height="100%"
      minWidth={230}
      border={"right"}
    >
      <Collapses categories={categories} />
    </Resizable>
  );
};

export default SideBar;
