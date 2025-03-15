import AppContext from "../../context/AppContext";
import { useContext, type ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const PreviewPage = (): ReactElement => {
    const { selectedItem } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className="preview-page">
            <div className="wrapper">
                <div className="content">
                    {selectedItem && (
                        <div className="preview-container">
                            <h2 className="preview-title">
                                {selectedItem.name}
                            </h2>
                            <img
                                className="preview-image"
                                src={selectedItem.image}
                                alt={selectedItem.name}
                            />
                            <button
                                className="back-button"
                                onClick={() => navigate(-1)}
                            >
                                Back
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PreviewPage;
