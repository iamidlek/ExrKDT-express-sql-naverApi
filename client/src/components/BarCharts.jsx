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

export const BarCharts = ({ statistics, selectCategory }) => {
  return (
    <ResponsiveContainer width="100%" height="50%">
      <BarChart data={statistics} style={{ margin: "20px 0px" }}>
        <XAxis dataKey="category1" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="SUM(buyCount)"
          onClick={(e) => selectCategory(e.category1)}
        >
          {statistics.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={color[index]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
