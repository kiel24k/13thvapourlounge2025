// PurchasesPage.jsx
import React from "react";
import { Box, Tabs, Tab, Button, Typography, Divider } from "@mui/material";
import { ChatBubbleOutline } from "@mui/icons-material";

const tabs = [
  { label: "To Pay", count: 1 },
  { label: "To Shipping" },
  { label: "To Receive", count: 1 },
  { label: "Completed" },
  { label: "Cancelled" },
  { label: "Return/Refund" },
];

export default function Purchase() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <Box className="min-h-screen flex items-start justify-center bg-gray-50 p-4">
      <Box className="w-full max-w-4xl">
        {/* Header */}
        <Box className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <Typography variant="h4" className="font-bold mb-2 md:mb-0 text-center md:text-left">
            Purchases
          </Typography>
          <input
            type="text"
            placeholder="Search your product name, order id..."
            className="border rounded-md px-3 py-2 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </Box>

        {/* Tabs */}
        <Tabs
          value={selectedTab}
          onChange={(e, newVal) => setSelectedTab(newVal)}
          className="border-b mb-6"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {tabs.map((tab, idx) => (
            <Tab
              key={idx}
              label={
                <Box className="flex items-center space-x-1">
                  <span>{tab.label}</span>
                  {tab.count && (
                    <span className="bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                      {tab.count}
                    </span>
                  )}
                </Box>
              }
            />
          ))}
        </Tabs>

        {/* Order Card */}
        <Box className="bg-white rounded-lg shadow p-4 md:p-6 flex flex-col md:flex-row items-center md:items-start justify-between">
          {/* Left: Product */}
          <Box className="flex items-center space-x-4 mb-4 md:mb-0">
            <img
              src="/path-to-your-image.png" // replace with actual image
              alt="Sauvage Eau de Parfum"
              className="w-24 h-24 object-contain"
            />
            <Box>
              <Typography className="font-semibold text-lg">Sauvage Eau de Parfum</Typography>
              <Typography className="text-gray-500 text-sm mb-1">1.0 oz — 60 ml</Typography>
              <Typography className="text-gray-500 text-sm">1 item</Typography>
              <Button
                variant="text"
                className="text-purple-600 mt-2 px-0 normal-case"
              >
                View order details
              </Button>
            </Box>
          </Box>

          {/* Right: Actions */}
          <Box className="flex flex-col items-center md:items-end space-y-2">
            <Typography className="text-red-500 text-sm">
              Orders are pending payment !
            </Typography>
            <Typography className="font-semibold text-lg">P66.60</Typography>
            <Button
              variant="outlined"
              startIcon={<ChatBubbleOutline />}
              className="border-gray-400 text-gray-700 normal-case"
            >
              Chat with customer support
            </Button>
            <Button
              variant="contained"
              className="bg-purple-500 hover:bg-purple-600 text-white normal-case"
            >
              Pay Now
            </Button>
            <Typography className="text-gray-400 text-xs text-center md:text-right mt-1">
              Pay your order now, before the product expires on sale
            </Typography>
            <Divider className="w-full my-2 md:hidden" />
            <Typography className="font-semibold text-lg mt-2 md:mt-0">
              Order Total: P68.60
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
