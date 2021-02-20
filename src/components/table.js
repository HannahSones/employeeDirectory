import React, { useState, useEffect } from 'react';
import Data from './data';

const Table = () => {

    const [ fetchResults, setFetchResults ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const queryURL = 'https://randomuser.me/api/?results=30'
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


    const sortEmail = () => {
        const sorted = fetchResults.sort( function(item1, item2){
            if(item1.email < item2.email){
                return -1
            }
            if (item1.email > item2.email){
                return 1
            }
            return 0
        })
        console.log('Sorted List: ', sorted)
        setFetchResults([...sorted])
    }

    const sortLocation = () => {
        const sorted = fetchResults.sort( function(item1, item2){
            if(item1.location.country < item2.location.country){
                return -1
            }
            if (item1.location.country > item2.location.country){
                return 1
            }
            return 0
        })
        console.log('Sorted List: ', sorted)
        setFetchResults([...sorted])
    }

    return (
        <div>
            <table className="table table-striped table-hover">
            <thead>
                <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Email<button onClick={sortEmail} className='filter'><i className="fas fa-filter"></i></button></th>
                <th>Phone Number</th>
                <th>Location<button onClick={sortLocation} className='filter'><i className="fas fa-filter"></i></button></th>
                </tr>
            </thead>
            <>
            <Data list={fetchResults}/>
            </>
            </table>
        </div>
    )
}

export default Table