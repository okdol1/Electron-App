import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const CategoryHeader = ({ category, categories, setCategories }) => {
  const [editName, setEditName] = useState("");
  const [checkEdit, setCheckEdit] = useState(false);

  const handleEdit = () => {
    setCheckEdit((prev) => !prev);

    if (!checkEdit) {
      setEditName(category.name);
    }
  };

  const handleSubmit = () => {
    setCategories((prev) => {
      return prev.map((item) => {
        return item.name === category.name ? { ...item, name: editName } : item;
      });
    });
    handleEdit();
  };

  const handleRemove = () => {
    if (window.confirm("Do you want to delete?")) {
      setCategories((prev) => {
        const newCategories = prev.filter((item) => item.id !== category.id);
        return newCategories;
      });
    }
  };
  return (
    <div className="panel-header">
      {checkEdit ? (
        <>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="create-input"
            autoFocus
          />
          <button
            onClick={handleSubmit}
            className="btn btn-border-right"
            disabled={editName === "" ? true : false}
          >
            edit
          </button>
          <button onClick={handleEdit} className="btn">
            cancel
          </button>
        </>
      ) : (
        <>
          <p>{category.name}</p>
          <div className="buttons">
            <EditIcon
              sx={{ fontSize: 16, color: "#999" }}
              onClick={handleEdit}
            />
            <DeleteIcon
              sx={{ fontSize: 16, color: "#999" }}
              onClick={handleRemove}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryHeader;
