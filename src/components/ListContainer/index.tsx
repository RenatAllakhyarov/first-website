import ListItem from "../../components/ListItem";
import { Item } from "../../hooks/useAppContext";
import { ReactElement } from "react";
import "./style.css";

export interface IListContainerProps {
    paginatedData: Item[];
    setSelectedItem: (item: Item | null) => void;
}

const ListContainer = ({
    paginatedData,
    setSelectedItem,
}: IListContainerProps): ReactElement => {
    return (
        <ul className="list-container">
            {paginatedData.map((item) => (
                <ListItem setSelectedItem={setSelectedItem} item={item} />
            ))}
        </ul>
    );
};

export default ListContainer;
