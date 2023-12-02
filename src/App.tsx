import { useState } from "react";
import NavBar from "./components/NavBar";
import { SelectedPage } from "./components/shared/types";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  return <div className="app bg-gray-20">
    <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
  </div>;
}

export default App;
