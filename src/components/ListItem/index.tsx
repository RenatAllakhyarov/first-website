import { ReactElement } from "react";
import "./style.css";

export interface IListItemProps {
    name: string;
    onClick: () => void;
}

const ListItem = ({ name, onClick }: IListItemProps): ReactElement => {
    return (
        <li className="list-item" onClick={onClick}>
            {name}
        </li>
    );
};

export default ListItem;
