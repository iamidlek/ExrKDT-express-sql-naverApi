import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

const Router = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "#ccc" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Product" onClick={() => navigate("/")} />
            <Tab label="Chart" onClick={() => navigate("/chart")} />
          </Tabs>
        </Box>
      </Box>
    </div>
  );
};

export default Router;
