import React from 'react'
import { useEffect, useState } from 'react';

export default function List(props) {
  const handleCatClick = (cat) => {
    props.setCat(cat);
  };
  // use map function to list all the types from species and make the event for cliking 
  return (
    <ul>
        {props.species.map((specie) => {
          return(
            //  Write your code below
            <li onClick={() => handleCatClick(specie.type)}>
              {specie.type}</li>
          )
        })}
    </ul>
  )
}
