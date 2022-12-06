import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TreeView from "@mui/lab/TreeView";
import { styled } from "@mui/material/styles";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import AddIcon from "@mui/icons-material/Add";

const StyledTreeItemRoot = styled(TreeItem)(() => ({
  [`& .${treeItemClasses.content}`]: {
    // 전체 제어
    width: "auto",
    display: "flex",
    alignItems: "center",
    height: 21,
    padding: 0,
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
          <Box
            component={LabelIcon}
            sx={{ mr: 1, width: 14, height: 14, fill: bgColor }}
          />
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

const TreeViews = ({ category, setCategories }) => {
  const [checkCreate, setCheckCreate] = useState(false);
  const [folderName, setFolderName] = useState("");

  const handleClick = () => {
    setCheckCreate((prev) => !prev);
    setFolderName("");
  };

  const handleSubmit = () => {
    const newFolders = [
      ...category.folders,
      {
        id: uuidv4(),
        name: folderName,
        files: null,
      },
    ];
    setCategories((prev) => {
      return prev.map((item) => {
        return item.name === category.name
          ? { ...item, folders: newFolders }
          : item;
      });
    });
    handleClick();
  };

  return (
    <TreeView
      aria-label="file system navigator"
      style={{ overflowY: "auto", height: "100%" }}
    >
      {checkCreate ? (
        <div className="side-bar-wrapper" style={{ marginLeft: 17 }}>
          <input
            type="text"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            className="create-input"
            autoFocus
          />
          <button
            onClick={handleSubmit}
            className="btn btn-border-right"
            disabled={folderName === "" ? true : false}
          >
            create
          </button>
          <button onClick={handleClick} className="btn">
            cancel
          </button>
        </div>
      ) : (
        <div className="add-folder">
          <AddIcon
            sx={{ fontSize: 16, color: "#999" }}
            onClick={handleClick}
            className="pointer"
          />
          <div onClick={handleClick} className="pointer">
            Add Folder
          </div>
        </div>
      )}
      {category.folders
        ? category.folders.map((folder) => {
            return (
              <StyledTreeItem
                nodeId={folder.id}
                labelText={folder.name}
                labelIcon={FolderIcon}
                bgColor="#ffca26"
                key={folder.id}
              >
                {folder.files
                  ? folder.files.map((file) => {
                      return (
                        <StyledTreeItem
                          nodeId={file.id}
                          labelText={file.name}
                          labelIcon={InsertDriveFileIcon}
                          bgColor="#8fcaf8"
                          key={file.id}
                        />
                      );
                    })
                  : null}
              </StyledTreeItem>
            );
          })
        : null}
    </TreeView>
  );
};

export default TreeViews;
