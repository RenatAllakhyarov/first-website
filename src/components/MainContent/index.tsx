import useAppContext from "../../hooks//useAppContext";
import Pagination from "../Pagination";
import Searcher from "../Searcher";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactElement, useMemo, useState } from "react";
import { type Item } from "../../hooks//useAppContext";
import { Routes } from "../../router";

const itemsPerPage: number = 5;

const MainContent = (): ReactElement => {
    const { selectedItem, setSelectedItem, data } = useAppContext();
    const [searchQuery, setSearchQuery] = useState<string>("");
    const navigate = useNavigate();
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState<number>(1);

    const filteredData = useMemo(() => {
        return data.filter((item: Item) =>
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

    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const pagesCount = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageChange = (page: number): void => {
        setCurrentPage(page);
    };

    return (
        <div className="main-content-container">
            {location.pathname === "/" && (
                <div>
                    <Searcher
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
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

                    <Pagination
                        currentPage={currentPage}
                        pagesCount={pagesCount}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}

            {location.pathname === Routes.PREVIEW && selectedItem && (
                <div className="preview-container">
                    <h2>{selectedItem.name}</h2>
                    <img
                        src={selectedItem.image}
                        alt={selectedItem.name}
                        className="preview-image"
                    />
                    <button className="back-button" onClick={handleBackClick}>
                        {" "}
                        Back
                    </button>
                </div>
            )}
        </div>
    );
};

export default MainContent;
