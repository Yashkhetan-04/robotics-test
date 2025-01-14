import React from "react";
import {Link} from 'react-router-dom';
import  { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import "./ProjectList.css";



const ProjectList = () => {
  
  const [user, setUser] = useState([]);
  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data));      
  }
//https://jsonplaceholder.typicode.com/users
//http://localhost:8080/users
  useEffect(() => {
    fetchData();
  },[])
  
  return (<>
    <div>
      <h1>
    ProjectList
      </h1>
    </div>
    <main>
      <h1>User List</h1>
      <ol> 
        { user && user.length > 0 && user.map((userObj, index) => (
      <li key={userObj.id}>
      
      <Card className="card" style={{ width: '600px'  }}>
             
             <Link to={`/ProjectList/${userObj.id}`}>
             {userObj.name}
             </Link>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title >{userObj.username}</Card.Title>
        <Card.Text>
        {userObj.company.catchPhrase}
        </Card.Text>
        
      </Card.Body>
    </Card></li>
          
           
          ))}
      </ol>
    </main>
   
    </>
  );
};
  
export default ProjectList;
// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };