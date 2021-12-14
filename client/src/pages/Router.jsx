import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

const Router = () => {
  // history에서 navigate로
  const navigate = useNavigate();

  // active 스타일을 위한 핸들러
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ borderBottom: 1, borderColor: "#ccc" }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Product" onClick={() => navigate("/")} />
        <Tab label="Chart" onClick={() => navigate("/chart")} />
        <Tab label="Map" onClick={() => navigate("/map")} />
      </Tabs>
    </Box>
  );
};

export default Router;
