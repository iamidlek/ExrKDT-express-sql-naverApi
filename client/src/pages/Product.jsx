import { useEffect, useState } from "react";
import { purchaseItem, recommendedKeyword, searchProduct } from "../apiCalls";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import { SearchBar } from "../components/SearchBar";
import { SearchResult } from "../components/SearchResult";

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
    if (!value) {
      return;
    }
    const data = await searchProduct({ query: value });
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
    const data = await searchProduct({ query: value, page });
    setProducts(data.items);
  };
  useEffect(() => {
    searchStart();
  }, [trigger]);
  return (
    <Container sx={{ mt: 5 }} onClick={() => setKeywords([])}>
      <SearchBar
        value={value}
        searchStart={searchStart}
        inputKeyword={inputKeyword}
        keywords={keywords}
        clickSearch={clickSearch}
      />
      <Grid container>
        <Grid item xs={12}>
          {products && <SearchResult products={products} purchase={purchase} />}
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
