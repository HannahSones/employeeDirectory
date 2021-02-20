import React, {useEffect, useState} from "react";
import API from "../api";


const Data = () => {

    const [ fetchResults, setFetchResults ] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const queryURL = 'https://randomuser.me/api/?results=20'
        const response = await fetch(queryURL);
        
        if(response.ok){

          const employeeData = await response.json();

          setFetchResults(employeeData.results);
        } else {
          console.log('fetch error', response.status);
          
        }
      }
      fetchData();
  
    },[]);
  
    return (
      <tbody>
        {
          fetchResults.map(result => (
          <tr key={result.login.uuid} id={result.login.uuid}>
            <td><img src={result.picture.thumbnail} alt="profile"/></td>
            <td>{`${result.name.title} ${result.name.first} ${result.name.last}`}</td>
            <td>{result.email}</td>
            <td>{result.cell}</td>
            <td>{result.location.country}</td>
          </tr>
          ))
        }
        
      </tbody>
    )
  }

 export default Data