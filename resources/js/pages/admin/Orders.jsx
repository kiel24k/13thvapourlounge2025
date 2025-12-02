import {
    Button,
    Checkbox,
    CircularProgress,
    FormControl,
    OutlinedInput,
} from "@mui/material";
import FadeInSection from "../../components/FadeInSection";
import TotalBox from "../../components/TotalBox";
import Section from "../SectionLayout/Section";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TableLayout from "../../components/Table/TableLayout";
import { useShowOrders } from "../../hooks/useOrder";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FcCancel } from "react-icons/fc";
import { useState } from "react";
import MarkAsDialog from "../../components/Overlays/Dialogs/MarkAsDialog";

const Orders = () => {
    const { data: orders, isFetching } = useShowOrders();
    const tdClass =
        "text-sm p-2 text-left text-gray-800  items-start content-start";
    const tableHeadContent = [
        "name",
        "email",
        "address",
        "product",
        "total",
        "status",
        "date ordered",
        "mark as",
    ];
    const [IdStatus, setIdStatus] = useState({ id: null, status: null });
    const [isOpen, setIsOpen] = useState(false);

    const handleMarkAs = (id, status) => {
        setIdStatus({ id, status });  
        setIsOpen(true);
    };
    return (
        <Section sectionName={"Orders"}>
            {/* dialog */}
            <MarkAsDialog
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                handleMarkAs={handleMarkAs}
                status={IdStatus}
            />
            {/* total boxes */}
            <FadeInSection>
                <div className="flex flex-wrap gap-3 justify-center">
                    <TotalBox title={"Orders"} total={"232,404"} />
                    <TotalBox title={"total of pending"} total={10} />
                    <TotalBox title={"total of delivered"} total={81} />
                </div>
            </FadeInSection>

            {/* search bar */}
            <div className="flex justify-start gap-4">
                <FormControl variant="standard">
                    <OutlinedInput
                        size="small"
                        endAdornment={<SearchOutlinedIcon />}
                        placeholder="Search"
                    />
                </FormControl>
            </div>

            {/* table of orders */}
            {isFetching ? (
                <div className="flex items-center justify-center">
                    <CircularProgress size={40} />
                    <b>Loading...</b>
                </div>
            ) : (
                <TableLayout thead={tableHeadContent}>
                    {orders &&
                        orders.map((order, key) => (
                            <tr key={key}>
                                <td className={`text-center content-start`}>
                                    <Checkbox />
                                </td>
                                <td className={`${tdClass}  gap-1`}>
                                    <span>{order.user.last_name},</span>
                                    <span>{order.user.first_name} </span>
                                </td>
                                <td className={tdClass}>
                                    <span className="text-blue-800">
                                        {order.user.email}
                                    </span>
                                </td>
                                <td
                                    className={`${tdClass} grid content-start items-start`}
                                >
                                    <span>{order.address.street_name},</span>
                                    <span>{order.address.apartment},</span>
                                    <span>{order.address.town},</span>
                                    <span>{order.address.zip_code},</span>
                                </td>
                                <td className={`${tdClass}`}>
                                    <div className="grid">
                                        <b>{order.product.product_name} </b>
                                        <span className="text-gray-500">
                                            {order.product.product_category}
                                        </span>
                                        <span className="font-semibold">
                                            x{order.quantity}
                                        </span>
                                        <span>
                                            ₱{order.price.toLocaleString()}.00
                                        </span>
                                    </div>
                                </td>

                                <td className={`${tdClass}`}>
                                    <span>
                                        ₱{Number(order.total).toLocaleString()}
                                        .00
                                    </span>
                                </td>
                                <td className={`${tdClass}`}>
                                    <span
                                        className={`capitalize ${order.status === "pending" ? "text-red-500" : order.status === "preparing" ? "text-purple-800" : order.status === "to-received" ? "text-black" : order.status === "completed" ? "text-green-500" : order.status === "cancelled" ? "text-red-700" : order.status === "failed" ? "text-red-300" : "none"}`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td className={`${tdClass}`}>
                                    <span>
                                        {new Date(
                                            order.created_at,
                                        ).toLocaleString()}
                                    </span>
                                </td>
                                <td className={`${tdClass} `}>
                                    {order.status === "pending" ? (
                                        <div className="flex items-center gap-2">
                                            <Button
                                                sx={{
                                                    textTransform: "capitalize",
                                                }}
                                                variant="outlined"
                                                size="small"
                                                onClick={() =>
                                                    handleMarkAs(
                                                        order.id,
                                                        "preparing",
                                                    )
                                                }
                                            >
                                                Preparing
                                            </Button>
                                            <Button
                                                sx={{
                                                    textTransform: "capitalize",
                                                }}
                                                variant="outlined"
                                                size="small"
                                                onClick={() =>
                                                    handleMarkAs(
                                                        order.id,
                                                        "failed",
                                                    )
                                                }
                                            >
                                                Failed
                                            </Button>
                                        </div>
                                    ) : order.status === "completed" ? (
                                        <i className="text-2xl">
                                            <IoIosCheckmarkCircle />
                                        </i>
                                    ) : order.status === "preparing" ? (
                                        <div className="flex items-center gap-2">
                                            <Button
                                                sx={{
                                                    textTransform: "capitalize",
                                                }}
                                                variant="outlined"
                                                size="small"
                                                onClick={() =>
                                                    handleMarkAs(
                                                        order.id,
                                                        "to-received",
                                                    )
                                                }
                                            >
                                                To received
                                            </Button>
                                            <Button
                                                sx={{
                                                    textTransform: "capitalize",
                                                }}
                                                variant="outlined"
                                                size="small"
                                                onClick={() =>
                                                    handleMarkAs(
                                                        order.id,
                                                        "failed",
                                                    )
                                                }
                                            >
                                                Failed
                                            </Button>
                                        </div>
                                    ) : order.status === "failed" ? (
                                        <i className="text-2xl">
                                            <FcCancel />
                                        </i>
                                    ) : order.status === "to-received" ? (
                                        <CircularProgress
                                            enableTrackSlot
                                            size="25px"
                                        />
                                    ) : (
                                        ""
                                    )}
                                </td>
                            </tr>
                        ))}
                </TableLayout>
            )}
        </Section>
    );
};

export default Orders;
