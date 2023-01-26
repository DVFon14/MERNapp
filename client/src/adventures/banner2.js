//============== React import ==============//
import React from "react";

//============== Files and Folders imports ==============//
import map1 from "../images/map1.jpeg";

//============== Material UI ==============//
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

//============== Code ==============//
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function Banner() {
  // const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (

      <Card sx={{spacing:0, backgroundColor: "#F1F0DA"}}>
        {/* width from left, height of the total container */}
        <Img alt="map1" src={map1} height="444px" width="667px" />
      </Card>

  );
}

export default Banner;
