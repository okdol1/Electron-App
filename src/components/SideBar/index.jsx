import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Collapses from "../Collapses";
import Resizable from "../Resizable";
import MOCK_DATA from "../../data/MOCK_DATA";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const SideBar = () => {
  const [categories, setCategories] = useState(MOCK_DATA);
  const [checkCreate, setCheckCreate] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const handleClick = () => {
    setCheckCreate((prev) => !prev);
  };

  const handleCreate = () => {
    handleClick();
    setCategoryName("");
    setCategories((prev) => [
      ...prev,
      {
        id: uuidv4(),
        name: categoryName,
        folders: null,
      },
    ]);
  };

  return (
    <Resizable
      position={"right"}
      width={230}
      height="100%"
      minWidth={230}
      border={"right"}
    >
      <div className="side-bar-wrapper create-category">
        <div>카테고리</div>
        {checkCreate ? (
          <KeyboardArrowUpIcon
            fontSize="small"
            onClick={handleClick}
            className="pointer"
          />
        ) : (
          <AddIcon fontSize="small" onClick={handleClick} className="pointer" />
        )}
      </div>
      {checkCreate ? (
        <div className="side-bar-wrapper">
          <input
            type="text"
            value={categoryName}
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
            placeholder="Category name"
            className="create-input"
            autoFocus
          />
          <button
            onClick={handleCreate}
            className="btn"
            disabled={categoryName === "" ? true : false}
          >
            create
          </button>
        </div>
      ) : null}
      <Collapses categories={categories} setCategories={setCategories} />
    </Resizable>
  );
};

export default SideBar;
