import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const SearchResult = ({ products, purchase }) => {
  return (
    <>
      {products.map((item) => (
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
    </>
  );
};
