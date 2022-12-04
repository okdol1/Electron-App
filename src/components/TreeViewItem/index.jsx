import { styled } from "@mui/material/styles";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const StyledTreeItemRoot = styled(TreeItem)(() => ({
  [`& .${treeItemClasses.content}`]: {
    // 전체 제어
    paddingLeft: 10,
    display: "block",
    width: "auto",
    "&.Mui-selected": {
      backgroundColor: "#ffffff",
    },
    "&.Mui-focused": {
      backgroundColor: "#ffffff",
    },
    "&:hover": {
      backgroundColor: "#eeeeee",
    },
    [`& .${treeItemClasses.label}`]: {
      padding: 0,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    // 그룹 제어
    marginLeft: 10,
  },
}));

function StyledTreeItem(props) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: "flex", alignItems: "center", height: 23 }}>
          <Box component={LabelIcon} sx={{ mr: 1, width: 14, height: 14 }} />
          <Typography
            variant="body2"
            sx={{ fontWeight: "inherit", flexGrow: 1, fontSize: 10 }}
          >
            {labelText}
          </Typography>
          <Typography variant="caption">{labelInfo}</Typography>
        </Box>
      }
      {...other}
    />
  );
}

const TreeViewItem = ({ item, index }) => {
  return (
    <StyledTreeItem
      nodeId={String(index + 1)}
      labelText={item.name}
      labelIcon={FolderIcon}
    >
      {item.files
        ? item.files.map((file, index) => {
            return (
              <StyledTreeItem
                nodeId={`${index}-${file}`}
                labelText={file}
                labelIcon={InsertDriveFileIcon}
                key={`${index}-${file}`}
              />
            );
          })
        : null}
    </StyledTreeItem>
  );
};

export default TreeViewItem;
