import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import TreeViews from "../TreeViews";

const Collapses = ({ data }) => {
  const { Panel } = Collapse;

  return (
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      className="site-collapse-custom-collapse"
    >
      {data.map((item, index) => {
        return (
          <Panel
            header={item.name}
            key={`${item}-${index}`}
            className="site-collapse-custom-panel"
          >
            <TreeViews item={item} />
          </Panel>
        );
      })}
    </Collapse>
  );
};

export default Collapses;
