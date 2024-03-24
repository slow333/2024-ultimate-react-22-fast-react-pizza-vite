import {getAddress} from "../services/apiGeocoding.js";

import {useEffect, useState} from "react";

function Home() {
  const [position, setPosition] = useState([]);
  const [city, setCity] = useState()

  useEffect(() => {
      navigator.geolocation.getCurrentPosition(success, error)
      function success (pos){
        const crd = pos.coords;
        setPosition([crd.latitude, crd.longitude])
        getAddress(position).then(data => setCity(data));
      }
      function error(err){
        console.log(err)
      }
  }, []);

  if(city)  console.log('from call ==> ', city.city, city.countryName)

  return (
    <div>
      <h1>
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
    </div>
  );
}

export default Home;
