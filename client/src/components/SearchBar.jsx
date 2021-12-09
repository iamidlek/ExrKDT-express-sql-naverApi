import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { SearchList } from "../components/SearchList";

export const SearchBar = ({
  value,
  searchStart,
  inputKeyword,
  keywords,
  clickSearch,
}) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={8}>
        <TextField
          autoComplete="off"
          sx={{ width: "100%" }}
          label="상품 검색"
          color="success"
          value={value}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchStart();
            }
          }}
          onChange={inputKeyword}
          onFocus={inputKeyword}
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          sx={{ width: "100%", height: "56px" }}
          variant="outlined"
          onClick={searchStart}
        >
          검색
        </Button>
      </Grid>
      <Grid item xs={8}>
        {keywords.length > 0 && (
          <SearchList keywords={keywords} clickSearch={clickSearch} />
        )}
      </Grid>
    </Grid>
  );
};
