import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

const CarresDetails = () => {
    const {id} = useParams();
    const career = useLoaderData();

  return (
    <div>
        <h2>careers detail for {career.title}</h2>
        <p>total salary {career.salary}</p>
    </div>
  )
}

export default CarresDetails;

export const careerDetailsLoader = async ({params}) => {
    const {id} = params;
    const res = await fetch("http://localhost:5000/careers/" + id);
    return res.json();
}

