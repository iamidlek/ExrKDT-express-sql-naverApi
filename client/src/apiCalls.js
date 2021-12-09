import axios from "axios";

// 상품 검색
export const searchProduct = async ({ query, page = 1 }) => {
  // response로 받을 경우의 코드
  // const {
  //   data: { body },
  // } = await axios.post("/naver/api?type=shoplist", requestInfo);
  // return await JSON.parse(body);
  const start = 10 * (page - 1) + 1;
  const { data } = await axios.post("/naver/api?type=shoplist", {
    query,
    start,
  });
  return data;
};

// 연관 검색어
export const recommendedKeyword = async (query) => {
  const { data } = await axios.post("/naver/api?type=keyword", {
    query,
  });
  return data;
};

// DB 조회
export const getPurchaseList = async () => {
  try {
    const {
      data: { json },
    } = await axios.post("/naver/shop?type=log");
    return json;
  } catch (error) {
    console.log(error);
  }
};

// DB update (구매)
export const purchaseItem = async (item) => {
  try {
    const { data } = await axios.post("/naver/shop?type=purchase", { item });
    return data; // type of String 예상
  } catch (error) {
    console.log(error);
  }
};

// DB groupby data
export const getChartData = async (dateInfo) => {
  try {
    const {
      data: { json },
    } = await axios.post("/naver/shop?type=groupby", { dateInfo });
    return json;
  } catch (error) {
    console.log(error);
  }
};
