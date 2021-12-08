import { useEffect, useState } from "react";
import { purchaseItem, recommendedKeyword, searchProduct } from "../apiCalls";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

const Product = () => {
  const [value, setValue] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [trigger, setTrigger] = useState(0);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const inputKeyword = async (e) => {
    setValue(e.target.value);
    const { items } = await recommendedKeyword(e.target.value);
    setKeywords(items[0].flat());
  };
  const searchStart = async () => {
    const data = await searchProduct({ query: value, start: 1 });
    setProducts(data.items);
    if (data.total > 100) {
      setTotal(100);
    } else {
      setTotal(data.total);
    }
    setKeywords([]);
  };
  const clickSearch = (keyword) => {
    setValue(keyword);
    setKeywords([]);
    setTrigger((curr) => curr + 1);
  };
  const purchase = (e, item) => {
    e.stopPropagation();
    purchaseItem(item);
  };
  const pageNation = async (page) => {
    const start = 10 * (page - 1) + 1;
    const data = await searchProduct({ query: value, start });
    setProducts(data.items);
  };
  useEffect(() => {
    if (value) {
      searchStart();
    }
  }, [trigger]);
  return (
    <Container sx={{ mt: 5 }} onClick={() => setKeywords([])}>
      <Box sx={{ flexGrow: 1 }}>
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
              <List
                sx={{
                  width: "99.6%",
                  position: "reletive",
                  top: "-34px",
                  border: "1px solid #ccc",
                }}
              >
                {keywords.map((keyword) => (
                  <ListItem
                    disablePadding
                    key={keyword}
                    onClick={() => clickSearch(keyword)}
                  >
                    <ListItemButton>
                      <ListItemText primary={keyword} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            )}
          </Grid>
        </Grid>
      </Box>
      <Grid container>
        <Grid item xs={12}>
          {products.length > 0 &&
            products.map((item) => (
              <Accordion key={item.productId}>
                <AccordionSummary
                  sx={{
                    overflow: "hidden",
                    justifyContent: "space-around",
                  }}
                >
                  <img
                    src={item.image}
                    style={{ width: "32px", height: "32px" }}
                    alt="thumbnail"
                  />
                  <Typography
                    component={"span"}
                    sx={{
                      width: "350px",
                      mr: 6,
                      ml: 2,
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></Typography>
                  <Typography
                    component={"span"}
                    sx={{ color: "text.secondary", width: "140px" }}
                  >
                    {item.category1}
                  </Typography>
                  <Typography
                    component={"span"}
                    sx={{ color: "black", width: "140px", textAlign: "end" }}
                  >
                    {Number(item.lprice).toLocaleString()} 원
                  </Typography>
                  <Button
                    sx={{
                      width: "100px",
                      ml: 2,
                    }}
                    onClick={(e) => purchase(e, item)}
                  >
                    구매
                  </Button>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography component={"span"}>
                    <div dangerouslySetInnerHTML={{ __html: item.title }}></div>
                    <a target="_blank" href="item.link">
                      상품 페이지로 이동
                    </a>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
        </Grid>
      </Grid>
      {total > 0 && (
        <Grid
          container
          sx={{ display: "flex", justifyContent: "center", m: 5 }}
        >
          <Pagination
            count={Math.ceil(total / 10)}
            showFirstButton
            showLastButton
            onChange={(event, page) => pageNation(page)}
          />
        </Grid>
      )}
    </Container>
  );
};
export default Product;
