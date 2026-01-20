// PurchasesPage.jsx
import React from "react";
import { Box, Tabs, Tab, Typography, Divider } from "@mui/material";
import { useShowOrderById } from "../../hooks/useOrder";
import { useGetAuthUser } from "../../hooks/useUsers";

const STATUS_TABS = [
  { label: "Pending", value: "pending" },
  { label: "Preparing", value: "preparing" },
  { label: "To Receive", value: "to-received" },
  { label: "Completed", value: "completed" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Failed", value: "failed" },
];

export default function Purchase() {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const { data: user } = useGetAuthUser();
  const { data: orders = [] } = useShowOrderById(user?.id);

  // Compute counts per status
  const statusCounts = STATUS_TABS.reduce((acc, tab) => {
    acc[tab.value] = orders.filter((o) => o.status === tab.value).length;
    return acc;
  }, {});

  const currentStatus = STATUS_TABS[selectedTab].value;
  const filteredOrders = orders.filter((order) => order.status === currentStatus);

  return (
    <Box className="min-h-screen bg-gray-50 p-4 flex justify-center">
      <Box className="w-full max-w-4xl">
        <Typography variant="h4" className="font-bold mb-4">
          Purchases
        </Typography>

        {/* Tabs with counts */}
        <Tabs
          value={selectedTab}
          onChange={(e, v) => setSelectedTab(v)}
          variant="scrollable"
          scrollButtons="auto"
        >
          {STATUS_TABS.map((tab) => (
            <Tab
              key={tab.value}
              label={
                <Box className="flex items-center gap-1">
                  <span>{tab.label}</span>
                  {statusCounts[tab.value] > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                      {statusCounts[tab.value]}
                    </span>
                  )}
                </Box>
              }
            />
          ))}
        </Tabs>

        {/* Orders */}
        {filteredOrders.map((order) => (
          <Box
            key={order.id}
            className="bg-white rounded-lg shadow p-4 mt-4 flex flex-col md:flex-row justify-between"
          >
            {/* Product */}
            <Box className="flex gap-4">
              <img
                src={`/images/${JSON.parse(order.product.image)[0]}`}
                className="w-24 h-24 object-contain"
                alt={order.product.product_name}
              />
              <Box>
                <Typography className="font-semibold">
                  {order.product.product_name}
                </Typography>
                <Typography className="text-gray-500 text-sm">
                  {order.quantity} item(s)
                </Typography>
                <Typography className="text-sm text-gray-400">
                  Order #{order.id}
                </Typography>
              </Box>
            </Box>

            {/* Summary */}
            <Box className="flex flex-col items-end mt-4 md:mt-0">
              <Typography className="text-red-500 text-sm capitalize">
                {order.status.replace("-", " ")}
              </Typography>

              <Typography className="font-semibold text-lg">
                ₱{Number(order.total).toLocaleString()}
              </Typography>

              <Divider className="w-full my-2" />

              <Typography className="text-sm font-semibold">
                Order Total: ₱{Number(order.total).toLocaleString()}
              </Typography>
            </Box>
          </Box>
        ))}

        {/* Empty state */}
        {filteredOrders.length === 0 && (
          <Typography className="text-center text-gray-400 mt-6">
            No orders under “{STATUS_TABS[selectedTab].label}”.
          </Typography>
        )}
      </Box>
    </Box>
  );
}
