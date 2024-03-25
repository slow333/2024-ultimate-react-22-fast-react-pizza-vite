/* eslint-disable react-hooks/rules-of-hooks */
import {useEffect, useState} from 'react';
import {getAddress} from "./apiGeocoding.js";

export const getMyCity = () => {
  const [city, setCity] = useState({})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error)

    function success(pos) {
      const crd = pos.coords;
      const newPos = {latitude: crd.latitude, longitude: crd.longitude}
      // console.log(newPos.latitude, newPos.longitude)
      getAddress(newPos).then(data => setCity(data));
    }
    function error(err) {
      console.log(err)
    }
  }, []);
/*  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) =>
    {
      const newUserPos = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      };
      console.log(newUserPos.longitude, newUserPos.longitude)
      getAddress(newUserPos)
           .then(data => setCity(data));
    }, (error) => {
      console.log(error);
      if (error.code === error.PERMISSION_DENIED)
        console.log("you denied me :-(");
    },options);
  }, [])*/
  // if (city) console.log('from call ==> ', city)
  if(city) return city;
}