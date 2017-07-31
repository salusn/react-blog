import React from 'react';

const Blogdetails = (props) => {
	console.log(props)
	
  return (
      <div>
       {props.description}
      </div>
    );
}


export default Blogdetails;