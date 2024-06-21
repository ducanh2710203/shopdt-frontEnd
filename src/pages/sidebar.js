import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function Sidebar() {
  const listPro = [
    "iphone",
    "aripod",
    "mac",
    "iphone",
    "aripod",
    "mac",
    "iphone",
    "aripod",
    "mac",
    "iphone",
    "aripod",
    "mac",
    "iphone",
    "aripod",
    "mac",
    "iphone",
    "aripod",
  ];
  return (
    <div
      style={{
        height: "100%",
        background: "grey",
        float: "left",
      }}
    >
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          {listPro.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}
