import { useEffect, useState } from "react";
import { getChartData } from "../apiCalls";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
  },
  {
    name: "Page B",
    uv: 3000,
  },
  {
    name: "Page C",
    uv: 2000,
  },
  {
    name: "Page D",
    uv: 2780,
  },
  {
    name: "Page E",
    uv: 1890,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page G",
    uv: 3490,
  },
];
const Chart = () => {
  const [statistics, setStatistics] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await getChartData();
      setStatistics(data);
    }
    getData();
  }, []);
  return (
    <div
      style={{ width: "100%", height: "80vh" }}
      onClick={() => console.log(statistics)}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={statistics}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis dataKey="category1" />
          <YAxis />
          {/* <Tooltip /> */}
          <Bar dataKey="SUM(buyCount)">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={"#cccccc"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
