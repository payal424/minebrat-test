import React, { useState, useEffect } from "react";
import CitiesListComponent from "./citylist";
//import { BrowserRouter as Router, Route, Switch, Link, useNavigate } from "react-router-dom";

const ListComponent = () => {
  
  const [states, setStates] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [city, setCity] = useState([]);
  const [state,setstate] = useState("");


  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = async () => {
    try {
      const response = await fetch("http://api.minebrat.com/api/v1/states");
      const data = await response.json();
      setStates(data);
    } catch (error) {
      console.error("Error fetching states: ", error);
    }
  };

  const handleStateChange = (e) => {
    const selectedStateId = e.target.value;
    setSelectedId(selectedStateId);
    const result = states.find(i => i.stateId === selectedStateId)
    setstate(result.stateName)
  };

 //
  const handleFormSubmit = (e) => {
     e.preventDefault();
    alert("You Have selected : " +city+ "," + state )
  };
  const cityHandler = (e)=> {
    setCity(e)
}
//console.log( states.find(i => i.stateId === selectedId))
  return (
    <div>
      <select onChange={handleStateChange} value={selectedId}>
        <option value="">Select a state</option>
        {states.map((state) => (
          <option key={state.stateId} value={state.stateId}>
            {state.stateName}
          </option>
        ))}
      </select>
      <CitiesListComponent selectedId = {selectedId} onClick={cityHandler}></CitiesListComponent>
      <button onClick={handleFormSubmit}>Submit</button>
    </div>
  );
};
export default ListComponent

