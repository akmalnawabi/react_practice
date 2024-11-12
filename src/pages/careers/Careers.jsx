import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Careers() {
  const careers = useLoaderData();
  // console.log(careers)

   if (!Array.isArray(careers) || careers.length === 0) {
     return <p>No careers available.</p>;
   }

  return (
    <div>
      {careers.map(career => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>based on {career.location}</p>
        </Link>
      ))}
    </div>
  )
};


export const careersLoader = async () => {
  const res = await fetch("http://localhost:5000/careers");
  return res.json();
}

// export const careersLoader = async () => {
//   try {
//     const res = await fetch("http://localhost:5000/careers");
//     if (!res.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await res.json();
//     console.log(data); // Log the data for debugging
//     return data;
//   } catch (error) {
//     console.error("Fetch error: ", error);
//     throw new Response("Error fetching careers", { status: 500 });
//   }
// };