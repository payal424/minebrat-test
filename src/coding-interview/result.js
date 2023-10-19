import {useParams} from "react-router-dom";
const ResultComponent = () => {
    const { selectedCity, selectedState } = useParams();
  
    return (
      <div>
        <h1>
          You Have selected {selectedCity}, {selectedState}
        </h1>
      </div>
    );
  };