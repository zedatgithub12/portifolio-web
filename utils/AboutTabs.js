import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Personally, Professionally } from "@/data/about";
import { CheckCircle } from "@mui/icons-material";
import { useTheme } from "@mui/material";

const aboutTabs = ["Personally", "Professionally"];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AboutTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} aria-label="about me tabs">
        {aboutTabs.map((item, index) => (
          <Tab
            sx={{
              textTransform: "capitalize",
              marginX: 2,
            }}
            class={value === index ? "font-bold text-xl mx-3" : ""}
            label={item}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>

      <CustomTabPanel value={value} index={0}>
        <Typography variant="subtitle1" marginBottom={3}>
          {Personally[0]["description"]}
        </Typography>

        <p class="text-5lg font-bold mt-4 ">I love doing staff like</p>
        {Personally[0]["loved"].map((item) => (
          <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
            <CheckCircle
              fontSize="small"
              sx={{ color: theme.palette.primary.main, marginRight: 1.5 }}
            />
            <Typography variant="subtitle1">{item}</Typography>
          </Box>
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant="subtitle1" marginBottom={3}>
          {Professionally[0]["description"]}
        </Typography>

        <p class="text-5lg font-bold mt-4">I love doing staff like</p>
        {Professionally[0]["loved"].map((item) => (
          <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
            <CheckCircle
              fontSize="small"
              sx={{ color: theme.palette.primary.main, marginRight: 1.5 }}
            />
            <Typography variant="subtitle1">{item}</Typography>
          </Box>
        ))}
      </CustomTabPanel>
    </Box>
  );
}
