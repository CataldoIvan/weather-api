import React from "react";
import "./MainInfo.css";
const MainInfo = ({ weather }) => {
  return (
    <div className="MainInfo row ">
      <div className="country col-12">{weather?.location.country}</div>
      {console.log(weather)}
      <div className="col-12">{weather?.location.name}</div>
      <div className="col-6">
      <img
        src={`http:${weather.current.condition.icon}`}
        alt=""
      />
      </div>
      <ul className="col-6">
          <br />
        <li>{weather.current.condition.text}</li>
        <li>{weather.current.temp_c}˚</li>
        <li>{weather.current.humidity}%</li>
      </ul>

      {weather ? (
        <iframe
          className="map"
          src={`https://maps.google.com/?ll=${weather.location.lat},${weather.location.lon}7&z=9&t=m&output=embed`}
          height="600"
          width="800"
          style={{ border: 0 }}
          allowfullscreen
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      ) : null}
    </div>
  );
};
export default MainInfo;
