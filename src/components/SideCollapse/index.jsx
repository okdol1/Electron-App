import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
const { Panel } = Collapse;

const SideCollapse = ({ data }) => {
  return (
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      className="site-collapse-custom-collapse"
    >
      {data.map((item, index) => {
        console.log(item);
        return (
          <Panel
            header={item.name}
            key={`${item}-${index}`}
            className="site-collapse-custom-panel"
          >
            <div>1</div>
          </Panel>
        );
      })}
    </Collapse>
  );
};

export default SideCollapse;
