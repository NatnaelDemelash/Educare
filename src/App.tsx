import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { SelectedPage } from "./components/shared/types";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage , setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if(window.screenY !==0) setIsTopOfPage(false);
      
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return <div className="app bg-gray-20">
    <NavBar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
  </div>;
}

export default App;
