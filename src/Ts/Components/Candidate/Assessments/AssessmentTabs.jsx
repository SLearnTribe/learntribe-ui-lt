import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { CandidateTabs } from "../../../Configs/Dashboards/DashboardsConfig";
import { AssessmentCards } from "./AssessmentCards";

export const AssessmentTabs = () => {
  const [value, setValue] = React.useState(0);

  const [selectedTab, setSelectedTab] = useState("all");

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  const onSelectTab = ({ currentTarget }) => {
    const value = currentTarget.getAttribute("tab-data").toLowerCase();
    setSelectedTab(value);
  };

  function TabPanel({ children, value, index, ...other }) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Grid item xs={12}>
      <Box>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example">
            {CandidateTabs.map((label) => (
              <Tab
                sx={{ fontSize: 22, fontWeight: 600 }}
                key={label}
                label={label}
                tab-data={label}
                onClick={onSelectTab}
              />
            ))}
          </Tabs>
        </Box>
        <TabPanel value={value} index={value}>
          <AssessmentCards selectedTab={selectedTab} />
        </TabPanel>
      </Box>
    </Grid>
  );
};
