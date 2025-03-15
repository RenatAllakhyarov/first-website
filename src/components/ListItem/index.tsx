import { type Item } from "@/hooks/useAppContext";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../router";
import { ReactElement } from "react";
import "./style.css";

export interface IListItemProps {
    setSelectedItem: (item: Item | null) => void;
    item: Item;
}

const ListItem = ({ setSelectedItem, item }: IListItemProps): ReactElement => {
    const navigate = useNavigate();
    return (
        <li
            key={item.id}
            className="list-item"
            onClick={() => {
                setSelectedItem(item);
                navigate(Routes.PREVIEW);
            }}
        >
            {item.name}
        </li>
    );
};

export default ListItem;
