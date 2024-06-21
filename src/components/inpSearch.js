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
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="search" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "iPhone", year: 1994 },
  { title: "Samsung Galaxy", year: 1994 },
  { title: "Google Pixel", year: 1994 },
  { title: "OnePlus", year: 1994 },
  { title: "Xiaomi Mi", year: 1994 },
  { title: "Huawei P", year: 1994 },
  { title: "Sony Xperia", year: 1994 },
  { title: "Nokia", year: 1994 },
  { title: "LG", year: 1994 },
  { title: "HTC", year: 1994 },
  { title: "Motorola", year: 1994 },
  { title: "Oppo", year: 1994 },
  { title: "Vivo", year: 1994 },
  { title: "Realme", year: 1994 },
  { title: "Asus", year: 1994 },
  { title: "Lenovo", year: 1994 },
  { title: "BlackBerry", year: 1994 },
  { title: "ZTE", year: 1994 },
  { title: "Meizu", year: 1994 },
  { title: "Honor", year: 1994 },
];
