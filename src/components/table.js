import React, { useState } from 'react';
import Data from './data';

const Table = () => {

    const [ fetchResults, setFetchResults ] = useState([]);

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
            if(item1.location < item2.location){
                return -1
            }
            if (item1.location > item2.location){
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
            <Data />
            </>
            </table>
        </div>
    )
}

export default Table