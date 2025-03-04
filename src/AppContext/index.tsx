import React, { createContext, useState } from "react";
import data from "../meta/data.json";

interface AppContextProps {
  children: React.ReactNode;
}

interface Item {
  id: number;
  name: string;
  image: string;
}

interface AppContextValue {
  showList: boolean;
  setShowList: (showList: boolean) => void;
  showPreview: boolean;
  setShowPreview: (showPreview: boolean) => void;
  selectedItem: Item | null;
  setSelectedItem: (item: Item | null) => void;
  data: Item[];
  handleExit: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

const AppProvider = ({ children }: AppContextProps) => {
  const [showList, setShowList] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleExit = () => {
    window.close();
  };

  return (
    <AppContext.Provider
      value={{
        showList,
        setShowList,
        showPreview,
        setShowPreview,
        selectedItem,
        setSelectedItem,
        data,
        handleExit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
