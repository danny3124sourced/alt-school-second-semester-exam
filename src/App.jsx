import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Repo from './Repo';
import Error from './Error';
import Nav from './Nav';
import List from './List';
function App() {
  const [repo, setrepo] = useState();
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("https://api.github.com/users/danny3124sourced/repos")
      setrepo(res.data)
    }

    fetch();
  
    return () => {
      
    }
  }, [])
  console.log(repo)
 
  return (
    <BrowserRouter>
      <div className="App">
      <Nav repo={repo}/>
        
        <Routes>
          
          <Route path="/repo" element={<List repo={repo}/>}/>
          <Route path="repo/:name" element={<Repo/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        </div>
        </BrowserRouter>
  );
}

export default App;
