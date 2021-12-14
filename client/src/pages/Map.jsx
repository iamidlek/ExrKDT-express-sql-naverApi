/* global kakao */
import Container from "@mui/material/Container";
import { useEffect } from "react";

const listData = [
  { lat: 37.50070490171462, lng: 127.03638211172792 },
  { lat: 37.49940649958596, lng: 127.03379678496717 },
];

const Map = () => {
  useEffect(() => {
    const mapContainer = document.getElementById("map"),
      mapOption = {
        center: new window.kakao.maps.LatLng(
          37.50070490171462,
          127.03638211172792
        ),
        level: 5,
      };

    const map = new window.kakao.maps.Map(mapContainer, mapOption);
    // console.log(map);
    // marker 등록하기
    // const maker = new window.kakao.maps.Marker({
    //   map: map,
    //   position: new window.kakao.maps.LatLng(
    //     37.50070490171462,
    //     127.03638211172792
    //   ),
    // });

    for (let i = 0; i < listData.length; i++) {
      const data = listData[i];
      const maker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(data.lat, data.lng),
      });
    }
  }, []);
  return (
    <Container id="map" style={{ width: "100%", height: "500px" }}></Container>
  );
};

export default Map;
