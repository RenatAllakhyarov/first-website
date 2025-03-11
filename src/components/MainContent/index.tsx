import { useState, useMemo, useContext } from "react";
import "../MainContent/style.css";
import  useAppContext  from "../../hooks/useAppContext"
import { useNavigate } from "react-router-dom";
import { Routes } from "@/router";

interface Item {
    id: number;
    name: string;
    image: string;
}

const itemsPerPage: number = 5;
const MainContent = () => {
    const AppContext = useAppContext();
    const navigate = useNavigate();
    const { selectedItem, setSelectedItem, data } = AppContext;
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);

    const filteredData = useMemo(() => {
        return data.filter((item : Item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, data]);

    const handleItemClick = (item: Item): void => {
        setSelectedItem(item);
        navigate("/preview");
    };

    const handleBackClick = (): void => {
        navigate(-1);
    };

    const handlePageChange = (pageNumber: number): void => {
        setCurrentPage(pageNumber);
    };

    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="main-content-container">
            {window.location.pathname === "/" && (
                <div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="search-input"
                    />
                    <ul className="list-container">
                        {paginatedData.map((item) => (
                            <li
                                key={item.id}
                                className="list-item"
                                onClick={() => handleItemClick(item)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                    <div className="pagination">
                        {Array(Math.ceil(filteredData.length / itemsPerPage))
                            .fill(null)
                            .map((_, index) => (
                                <button
                                    key={index}
                                    className={`page-button ${
                                        currentPage === index + 1
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                    </div>
                </div>
            )}

            {window.location.pathname === Routes.PREVIEW && selectedItem && (
                <div className="preview-container">
                    <h2>{selectedItem.name}</h2>
                    <img
                        src={selectedItem.image}
                        alt={selectedItem.name}
                        className="preview-image"
                    />
                    <button className="back-button" onClick={handleBackClick}>
                        Back
                    </button>
                </div>
            )}
        </div>
    );
};

export default MainContent;