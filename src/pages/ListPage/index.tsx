import AppContext from "../../context/AppContext";
import { useContext, type ReactElement } from "react";

const ListPage = (): ReactElement => {
    const { data } = useContext(AppContext);

    return (
        <div className="list-page">
            <div className="wrapper">
                <div className="content">
                    <h1>List</h1>
                    {data.map((dataElement: any) => (
                        <div>
                            {JSON.stringify(dataElement)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListPage;
