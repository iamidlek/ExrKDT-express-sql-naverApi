import { useEffect, useState } from "react";
import { getChartData } from "../apiCalls";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const color = [
  "#FCB36C",
  "#6C70FC",
  "#60C9E0",
  "#FCD06C",
  "#6085E0",
  "#6FE060",
  "#6CFCF0",
  "#7814FA",
  "#77BDF7",
  "#07FA52",
  "#FA2F2D",
  "#2D3BFA",
];
const Chart = () => {
  const [date, setDate] = useState(new Date());
  // 컴포넌트 렌더링시 DB에서 정보 가져오기
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    // 콜백 내부에서 비동기 처리
    async function getData() {
      const data = await getChartData();
      setStatistics(data);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getDateData() {
      const data = await getChartData(date.toISOString().slice(0, 7));
      setStatistics(data);
    }
    getDateData();
  }, [date]);
  return (
    <Container style={{ width: "100%", height: "80vh", marginTop: "4vh" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          inputFormat="yyyy-MM"
          views={["year", "month"]}
          label="Year and Month"
          minDate={new Date("2021-10-01")}
          maxDate={new Date("2025-12-01")}
          value={date}
          onChange={setDate}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </LocalizationProvider>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={statistics} style={{ margin: "20px 0px" }}>
          <XAxis dataKey="category1" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="SUM(buyCount)">
            {statistics.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={color[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Chart;
