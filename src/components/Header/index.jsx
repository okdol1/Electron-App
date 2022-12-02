import { useState } from "react";
import MinimizeOutlinedIcon from "@mui/icons-material/MinimizeOutlined";
import SquareOutlinedIcon from "@mui/icons-material/SquareOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const { ipcRenderer } = window.require("electron");

const styles = {
  width: 14,
  height: 14,
};

const Header = () => {
  const ipc = ipcRenderer;
  const [isMaximize, setIsMaximize] = useState(false);

  const handleMinimizeApp = () => {
    ipc.send("minimizeApp");
  };
  const handleMaximizeApp = () => {
    setIsMaximize((prev) => !prev);
    if (isMaximize) {
      ipc.send("restoreApp");
    } else {
      ipc.send("maximizeApp");
    }
  };
  const handleCloseApp = () => {
    ipc.send("closeApp");
  };

  return (
    <header className="title-bar drag">
      <h1>Milliman</h1>
      <div className="tool-buttons">
        <button className="tool-button" id="min" onClick={handleMinimizeApp}>
          <MinimizeOutlinedIcon sx={styles} />
        </button>
        <button className="tool-button" id="max" onClick={handleMaximizeApp}>
          <SquareOutlinedIcon sx={styles} />
        </button>
        <button className="tool-button" id="close" onClick={handleCloseApp}>
          <CloseOutlinedIcon sx={styles} />
        </button>
      </div>
    </header>
  );
};

export default Header;
