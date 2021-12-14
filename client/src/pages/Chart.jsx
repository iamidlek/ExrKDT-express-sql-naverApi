import { useEffect, useState } from "react";
import { getChartData, getPurchaseList } from "../apiCalls";
import { ChartCalendar } from "../components/ChartCalendar";
import { BarCharts } from "../components/BarCharts";
import { ChartTable } from "../components/ChartTable";
import Container from "@mui/material/Container";

function sorting(a, b) {
  let c;
  let d;
  if (a.updateDate) {
    c = new Date(a.updateDate);
  } else {
    c = new Date(a.insertDate);
  }
  if (b.updateDate) {
    d = new Date(b.updateDate);
  } else {
    d = new Date(b.insertDate);
  }
  return d - c;
}

const Chart = () => {
  const [date, setDate] = useState(new Date());
  const [statistics, setStatistics] = useState([]);
  const [logList, setLogList] = useState([]);

  const selectCategory = async (choosedCategory) => {
    const dateInfo = date.toISOString().slice(0, 7);
    const list = await getPurchaseList({ dateInfo, choosedCategory });
    if (list) {
      list.sort((a, b) => sorting(a, b));
    }
    setLogList(list);
  };
  useEffect(() => {
    // 콜백 내부에서 비동기 처리
    async function getDateData() {
      const dateInfo = date.toISOString().slice(0, 7);
      const data = await getChartData({ dateInfo });
      const list = await getPurchaseList({ dateInfo });
      if (list) {
        list.sort((a, b) => sorting(a, b));
      }
      setStatistics(data);
      setLogList(list);
    }
    getDateData();
  }, [date]);
  return (
    <Container style={{ width: "100%", height: "80vh", marginTop: "4vh" }}>
      <ChartCalendar date={date} setDate={setDate} />
      <BarCharts statistics={statistics} selectCategory={selectCategory} />
      <ChartTable logList={logList} />
    </Container>
  );
};

export default Chart;
