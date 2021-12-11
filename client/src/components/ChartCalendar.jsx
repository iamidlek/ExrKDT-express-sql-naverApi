import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export const ChartCalendar = ({ date, setDate }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        inputFormat="yyyy-MM"
        views={["year", "month"]}
        label="Year and Month"
        minDate={new Date("2021-11-01")}
        maxDate={new Date("2025-12-01")}
        value={date}
        onChange={setDate}
        renderInput={(params) => <TextField {...params} helperText={null} />}
      />
    </LocalizationProvider>
  );
};
