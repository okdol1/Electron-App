import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import TreeViews from "../TreeViews";
import Resizable from "../Resizable";

const Collapses = ({ categories }) => {
  const { Panel } = Collapse;

  return (
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
    >
      {categories.map((category) => {
        return (
          <Panel header={category.name} key={category.id}>
            <Resizable pos="bottom" height={277}>
              <TreeViews category={category} />
            </Resizable>
          </Panel>
        );
      })}
    </Collapse>
  );
};

export default Collapses;
