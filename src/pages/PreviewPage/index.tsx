import data from "../../data/data.json";
import { type ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./style.css";
import NotFoundPage from "../NotFoundPage";

const PreviewPage = (): ReactElement => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [selectedItem] = data.filter((item) => item.id === +id!);

    if (!selectedItem) {
        return <NotFoundPage />;
    }

    return (
        <div className="preview-page">
            <div className="wrapper">
                <div className="content">
                    {selectedItem && (
                        <div className="preview-container">
                            <h2 className="preview-title">
                                {selectedItem?.name}
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
