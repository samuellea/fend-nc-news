import React from 'react';

const Error = ({error}) => {

  if (error) return (
    <div> 
    <h1>{error.response.data.status}</h1><p>{error.response.data.msg}</p>
    </div>
  )
  
  return (
    <p>Page not found!</p>
  )

};

export default Error;