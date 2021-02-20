import React from 'react'
import Data from './data'

function Table(props){

    return (
        <div>
            <table className="table table-striped table-hover">
            <thead>
                <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Email<button className='filter' onClick={props.sortEmail}><i className="fas fa-filter"></i></button></th>
                <th>Phone Number</th>
                <th>Location<button className='filter' onClick={props.sortLocation}><i className="fas fa-filter"></i></button></th>
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