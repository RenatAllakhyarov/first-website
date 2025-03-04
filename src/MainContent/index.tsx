import { useState, useMemo } from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext/index";
import "../MainContent/style.css";

const MainContent = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext is not provided");
  }

  const {
    showList,
    setShowList,
    showPreview,
    setShowPreview,
    selectedItem,
    setSelectedItem,
    data,
  } = context;

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, data]);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    setShowPreview(true);
    setShowList(false);
  };

  const handleBackClick = () => {
    setShowList(true);
    setShowPreview(false);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  return (
    <div className="main-content-container">
      {showList && (
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
            {Array(Math.ceil(filteredData.length / itemPerPage))
              .fill(null)
              .map((_, index) => (
                <button
                  key={index}
                  className={`page-button ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {" "}
                  {index + 1}
                </button>
              ))}
          </div>
        </div>
      )}
      {showPreview && (
        <div className="preview-container">
          <h2>{selectedItem?.name}</h2>
          <img
            src={selectedItem?.image}
            alt={selectedItem?.name}
            className="preview-image"
          />
          <button className="back-button" onClick={handleBackClick}>
            &lt; Back
          </button>
        </div>
      )}
    </div>
  );
};

export default MainContent;
