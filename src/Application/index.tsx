import { AppProvider } from "../AppContext";
import Header from "../Header";
import MainContent from "../MainContent";

const Application = () => {
  return (
    <AppProvider>
      <Header />
      <MainContent />
    </AppProvider>
  );
};

export default Application;
