import React from "react";

const Data = (props) => {
  
    return (
      <tbody>
        {
          props.list.map(result =>
          <tr key={result.login.uuid} id={result.login.uuid}>
            <td><img src={result.picture.thumbnail} alt="profile"/></td>
            <td>{`${result.name.title} ${result.name.first} ${result.name.last}`}</td>
            <td>{result.email}</td>
            <td>{result.cell}</td>
            <td>{result.location.country}</td>
          </tr>
          )}
        
      </tbody>
    )
  }

  export default Data