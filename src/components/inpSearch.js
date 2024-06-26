import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Grouped() {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label="Tìm kiếm" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "Samsung Galaxy" },
  { title: "iPhone" },
  { title: "iphone 13" },
  { title: "Google Pixel" },
  { title: "OnePlus" },
  { title: "Xiaomi Mi" },
  { title: "Huawei P" },
  { title: "Sony Xperia" },
  { title: "Nokia" },
  { title: "LG" },
  { title: "HTC" },
  { title: "Motorola" },
  { title: "Oppo" },
  { title: "Vivo" },
  { title: "Realme" },
  { title: "Asus" },
  { title: "Lenovo" },
  { title: "BlackBerry" },
  { title: "ZTE" },
  { title: "Meizu" },
  { title: "Honor" },
];
