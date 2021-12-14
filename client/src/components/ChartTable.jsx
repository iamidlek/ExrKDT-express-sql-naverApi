import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const ChartTable = ({ logList }) => {
  return (
    <TableContainer component={Paper} style={{ marginTop: "2vh" }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">제품명</TableCell>
            <TableCell align="center">카테고리</TableCell>
            <TableCell align="center">수량</TableCell>
            <TableCell align="right">구매일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logList
            ? logList.map((log) => (
                <TableRow
                  key={log.productId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img
                      src={log.image}
                      style={{ width: "32px", height: "32px" }}
                      alt="thumbnail"
                    />
                  </TableCell>
                  <TableCell align="center">{log.title}</TableCell>
                  <TableCell align="center">{log.category1}</TableCell>
                  <TableCell align="center">{log.buyCount}</TableCell>
                  <TableCell align="right">
                    {log.updateDate ? log.updateDate : log.insertDate}
                  </TableCell>
                </TableRow>
              ))
            : "no data"}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
