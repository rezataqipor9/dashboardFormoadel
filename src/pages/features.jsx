import React, { useState, useEffect } from "react";
import './feature.css'
import Person from './person'
const FeaturesComponent = () => {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  const fetchData =async () => {
    setLoading(true);
    const response =await fetch(url);
    const data =await response.json()
    setLoading(false)
    setPeople(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
  return  <div class='loader-container'><div class="loader"></div></div> 
  }
  return (
    <div class='people-features'>
      {people.map((person) => {
        return <div><Person  key={person.id} {...person}/></div>;
      })}
    </div>
  );
};

export default FeaturesComponent;
