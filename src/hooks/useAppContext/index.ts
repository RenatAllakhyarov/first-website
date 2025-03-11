import data from "data/data.json";
import { useState } from "react";

export interface Item {
    // move somewhere else
    id: number;
    name: string;
    image: string;
}

const useAppContext = () => {
    const [showList, setShowList] = useState(true);
    const [showPreview, setShowPreview] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    return {
        showList,
        setShowList,
        showPreview,
        setShowPreview,
        selectedItem,
        setSelectedItem,
        data,
    };
};

export default useAppContext;
