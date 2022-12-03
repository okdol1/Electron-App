import TreeView from "@mui/lab/TreeView";
import TreeViewItem from "../TreeViewItem";

const TreeViews = ({ item }) => {
  return (
    <TreeView aria-label="file system navigator">
      {item.folders.map((item, index) => {
        return <TreeViewItem item={item} index={index} key={index} />;
      })}
    </TreeView>
  );
};

export default TreeViews;
