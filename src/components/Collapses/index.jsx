import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import TreeViews from "../TreeViews";
import Resizable from "../Resizable";
import DeleteIcon from "@mui/icons-material/Delete";

const Collapses = ({ categories, setCategories }) => {
  const { Panel } = Collapse;

  const handleRemove = (id) => {
    if (window.confirm("Do you want to delete?")) {
      setCategories((prev) => {
        const newCategories = prev.filter((item) => item.id !== id);
        return newCategories;
      });
    }
  };

  return (
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
    >
      {categories.map((category) => {
        return (
          <Panel
            header={
              <div className="panel-header">
                <p>{category.name}</p>
                <div className="buttons">
                  <DeleteIcon
                    sx={{ fontSize: 16, color: "#999" }}
                    onClick={() => handleRemove(category.id)}
                  />
                </div>
              </div>
            }
            key={category.id}
          >
            <Resizable position="bottom" height={277}>
              <TreeViews category={category} />
            </Resizable>
          </Panel>
        );
      })}
    </Collapse>
  );
};

export default Collapses;
