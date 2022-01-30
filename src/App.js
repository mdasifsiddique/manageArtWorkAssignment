import React,{useState} from "react";
import LandingPage from "./components/LandingPage";
import './style.css'
export const userContext=React.createContext();

const App = () => {
  const [data,setData]=useState([]);
  const [posts,setPosts]=useState([]);
  const [filval,setFilVal]=useState([])

  return <userContext.Provider value={{data,setData,filval,posts,setPosts}}>
    <div className="app">
    <LandingPage />
  </div>;
  </userContext.Provider>
  
};

export default App;
