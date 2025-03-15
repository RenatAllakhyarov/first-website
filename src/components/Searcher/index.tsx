import { ReactElement } from "react";
import "./style.css";

export interface ISearcherProps {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
}

const Searcher = ({
    searchQuery,
    setSearchQuery,
}: ISearcherProps): ReactElement => {
    return (
        <div className="search-container">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                placeholder="Search..."
                className="search-input"
            />
        </div>
    );
};

export default Searcher;
