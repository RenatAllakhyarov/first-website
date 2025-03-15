import { type Item } from "../../hooks/useAppContext";
import { createContext } from "react";

interface IAppContext {
    showList: boolean;
    setShowList: (showList: boolean) => void;
    showPreview: boolean;
    setShowPreview: (showPreview: boolean) => void;
    selectedItem: Item | null;
    setSelectedItem: (item: Item | null) => void;
    data: Item[];
}

const AppContext = createContext<IAppContext>({} as IAppContext);

export default AppContext;
