import { useContext } from "react";
import { AppContext } from "../AppContext/index";
import "../Header/style.css";

const Header = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext is not provided");
  }

  const { handleExit, setShowList, setShowPreview, showList, showPreview } =
    context;

  return (
    <div className="header-container">
      <div className="button-group">
        <button
          className={`header-button ${showList ? "active" : ""}`}
          onClick={() => {
            setShowList(true);
            setShowPreview(false);
          }}
        >
          List
        </button>
        <button
          className={`header-button ${showPreview ? "active" : ""}`}
          onClick={() => {
            setShowPreview(true);
            setShowList(false);
          }}
        >
          Preview
        </button>
      </div>
      <button className="exit-button" onClick={handleExit}>
        Exit
      </button>
    </div>
  );
};

export default Header;
