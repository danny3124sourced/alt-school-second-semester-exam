import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./App.css";
const Repo = () => {
    const [repo, setrepo] = useState();
    const p = useParams();
    // console.log(p)
    useEffect(() => {
      const fetch =  async () => {
        const res = await axios.get(`https://api.github.com/repos/danny3124sourced/${p?.name}`);
        setrepo(res.data);
      }
      fetch()
    }, [p.name])
    
    // console.log(repo)
  return (
    <div>
        <img style={{width: "100%"}} src={repo?.owner?.avatar_url} alt="" />
        <div>
            <span>Language: </span>
            <span>{repo?.language}</span>
        </div>
        <div>
            <span>Subscribers: </span>
            <span>{repo?.subscribers_count}</span>
        </div>
        <a href={repo?.html_url} target="_blank" rel="noopener noreferrer">Repo</a>
    </div>
  )
}

export default Repo
