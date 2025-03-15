import { ReactElement, useMemo } from "react";
import "./style.css";

export interface IPaginationProps {
    currentPage: number;
    pagesCount: number;
    onPageChange: (newPage: number) => void;
}

const Pagination = ({
    currentPage,
    pagesCount,
    onPageChange,
}: IPaginationProps): ReactElement => {
    const paginationBlocks = useMemo(() => {
        let blocks = new Array();

        for (let i = 0; i < pagesCount; i++) {
            const className = `pagination-item ${
                currentPage === i + 1 ? "active" : ""
            }`;

            blocks.push(
                <div
                    key={i}
                    className={className}
                    onClick={() => onPageChange(i + 1)}
                >
                    {i + 1}
                </div>
            );
        }

        return blocks;
    }, [pagesCount, currentPage, onPageChange]);

    return <div className="pagination">{paginationBlocks}</div>;
};

export default Pagination;
