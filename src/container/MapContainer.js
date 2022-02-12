/*global kakao*/
import React, { useEffect } from "react";
import MapFrom from "../components/MapFrom";

const MapContainer = ({ info }) => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.335887, 126.584063),
      level: 7,
    };
    const map = new kakao.maps.Map(container, options);

    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    kakao.maps.event.addListener(map, "zoom_changed", function () {
      let bound = map.getBounds();
      console.log(bound, toString());
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        var locPosition = new kakao.maps.LatLng(lat, lon),
          message =
            '<div style="padding:3px; border-radius:20px;">나의 위치</div>';

        displayMarker(locPosition, message);
      });
    } else {
      var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
        message = "geolocation을 사용할수 없어요..";
      displayMarker(locPosition, message);
    }
    function displayMarker(locPosition, message) {
      var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      var iwContent = message,
        iwRemoveable = true;
      var infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });
      infowindow.open(map, marker);
      map.setCenter(locPosition);
    }
    const positions = info.data.map((info) => {
      return {
        color: info.color,
        inventory: info.inventory,
        title: info.addr,
        latlng: new kakao.maps.LatLng(info.lat, info.lng),
      };
    });
    for (let i = 0; i < positions.length; i++) {
      var content =
        `<div style = "background-color:${positions[i].color}; position:relative; border-radius:7px; border: 1px solid #ccc; border-bottom:2px solid #ddd; float:left;">` +
        `   <span style = "display:block;text-align:center;background:#fff; margin:5px 5px 5px 35px; padding:3px 3px; font-size:14px; font-weight:bold;">${positions[i].inventory}</span>` +
        `</div>`;
      const customOverlay = new kakao.maps.CustomOverlay({
        content: content,
        position: positions[i].latlng, // 마커를 표시할 위치
      });
      customOverlay.setMap(map);
    }
  }, [info]);
  return <MapFrom />;
};

export default MapContainer;
