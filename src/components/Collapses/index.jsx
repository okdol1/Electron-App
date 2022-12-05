import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import TreeViews from "../TreeViews";
import Resizable from "../Resizable";
import CategoryHeader from "./CategoryHeader";

const Collapses = ({ categories, setCategories }) => {
  const { Panel } = Collapse;

  return (
    <>
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
                <CategoryHeader
                  category={category}
                  categories={categories}
                  setCategories={setCategories}
                />
              }
              key={category.id}
            >
              <Resizable position="bottom" height={277}>
                <TreeViews category={category} setCategories={setCategories} />
              </Resizable>
            </Panel>
          );
        })}
      </Collapse>
    </>
  );
};

export default Collapses;
