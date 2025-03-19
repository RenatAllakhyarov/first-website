import ListItem from "../../components/ListItem";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Item } from "../../hooks/useAppContext";
import { ReactElement } from "react";
import { Routes } from "../../router";
import "./style.css";

export interface IListContainerProps {
    paginatedData: Item[];
    //setSelectedItem: (item: Item | null) => void;
}

const ListContainer = ({
    paginatedData,
    //setSelectedItem,
}: IListContainerProps): ReactElement => {
    const navigate = useNavigate();

    return (
        <ul className="list-container">
            {paginatedData.map((item) => (
                <ListItem
                    name={item.name}
                    onClick={() => {
                        navigate(`/preview/${item.id}`);
                    }}
                />
            ))}
        </ul>
    );
};

export default ListContainer;
