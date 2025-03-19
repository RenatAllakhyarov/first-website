import ListContainer from "../../components/ListContainer";
import Pagination from "../../components/Pagination";
import AppContext from "../../context/AppContext";
import Searcher from "../../components/Searcher";
import {
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactElement,
} from "react";
import { Item } from "../../hooks/useAppContext";
import "./style.css";

const ListPage = (): ReactElement => {
    const { data, setSelectedItem } = useContext(AppContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 5;

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    const filteredData = useMemo(() => {
        return data.filter((item: Item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, data]);

    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const pagesCount = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageChange = (page: number): void => {
        setCurrentPage(page);

    
    };

    return (
        <div className="list-page">
            <div className="wrapper">
                <div className="content">
                    <Searcher
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />

                    <ListContainer
                        paginatedData={paginatedData}
                    />

                    <Pagination
                        currentPage={currentPage}
                        pagesCount={pagesCount}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default ListPage;
