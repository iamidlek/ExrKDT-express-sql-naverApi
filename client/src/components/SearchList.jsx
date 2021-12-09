import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export const SearchList = ({ keywords, clickSearch }) => {
  return (
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
  );
};
