import { useState ,useEffect} from "react";

const CitiesListComponent = (props) => {
    const[cities,setCities]= useState([])
    const[selectedCity,setSelectedCity] = useState("")
    useEffect(() => {
        fetchCities();
      }, [props]);

    const fetchCities = async (stateId) => {
        try {
          const response = await fetch(
            `http://api.minebrat.com/api/v1/states/cities/${props.selectedId}`
          );
          const data = await response.json();
          setCities(data);
        } catch (error) {
          console.error("Error fetching cities: ", error);
        }
      };
      const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
        props.onClick(e.target.value)
      };
      
  return (
    <select onChange={handleCityChange}>
      <option value="">Select a city</option>
      {cities.map((city) => (
        <option key={city.cityId} value={city.cityName}>
          {city.cityName}
        </option>
      ))}
    </select>
  );
};

export default CitiesListComponent;

//onChange={onCityChange}