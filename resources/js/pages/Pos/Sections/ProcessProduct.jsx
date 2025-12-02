import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Card,
    CircularProgress,
    IconButton,
    Input,
    Skeleton,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { FaCircleMinus } from "react-icons/fa6";
import { useShowCustomerByStatus, useStoreOrder } from "../../../hooks/usePos";
import { MdSettingsBackupRestore } from "react-icons/md";
import AlertDialog from "../../../components/AlertDialog";

const ProcessProduct = ({ products, isFetching }) => {
    const { mutate: storeOrder, error } = useStoreOrder();
    const { data: status, isFetching: isFetchingStatus } =
        useShowCustomerByStatus("on-hold");
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [productTotal, setProductTotal] = useState();
    const [customer_name, setCustomer] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectProduct = (items) => {
        //items is object
        setSelectedProducts((prev) => {
            const existingId = prev.find((p) => p.id === items.id);

            if (!existingId) {
                return [...prev, { ...items, quantity: 1 }];
            } else {
                return prev.map((p) =>
                    p.id === items.id ? { ...p, quantity: p.quantity + 1 } : p,
                );
            }
        });

        console.log("product is", selectedProducts);
        // console.log("items is", items);
    };

    const handleDeleteSelectedProduct = (id) => {
        setSelectedProducts((prev) => {
            return prev.filter((p) => p.id !== id);
        });
    };

    const handleQuantityChange = (id, value) => {
        setSelectedProducts((prev) =>
            prev.map((p) =>
                p.id === id ? { ...p, quantity: Number(value) } : p,
            ),
        );
    };

    const handleProceed = (status) => {
        storeOrder(
            { selectedProducts, customer_name, status: status },
            {
                onSuccess: () => {
                    setSelectedProducts([]);
                    setCustomer("");
                },
            },
        );
    };

    const handleOnHold = (status) => {
        storeOrder(
            { selectedProducts, customer_name, status: status },
            {
                onSuccess: () => {
                    setSelectedProducts([]);
                    setCustomer("");
                },
            },
        );
    };

    const handleRestore = (customer) => {
        setIsOpen(true);
    };

    const handleSubmit = () => {
        alert("data restored")
    }

    useEffect(() => {
        setProductTotal(
            selectedProducts
                .map((p) => p.quantity * parseInt(p.product_price))
                .reduce((acc, val) => acc + val, 0),
        );
    }, [selectedProducts]);

    return (
        <>
            <AlertDialog
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                message="Are you sure you want to restore this customer's order? Press 'OK' to recover all order data to its previous state. This action cannot be undone."
                handleSubmit={handleSubmit}
            />
            <div className="flex gap-5 bg-[#f1f1f1] ">
                {/* on hold customer */}
                {isFetching ? (
                    <Skeleton variant="rectangular" width={100} />
                ) : (
                    <div className="grid justify-start content-start border border-gray-300 bg-white rounded-2xl p-2 w-1/5 h-175 overflow-y-auto">
                        <b>On-hold customer</b>
                        {status &&
                            status.map((s) => (
                                <div className="flex justify-between items-center p-2 border-b-1">
                                    <div className="grid">
                                        <span>{s.customer_name}</span>
                                        <small>
                                            {new Date(
                                                s.created_at,
                                            ).toLocaleDateString()}
                                        </small>
                                    </div>
                                    <Tooltip
                                        title="restore"
                                        onClick={() =>
                                            handleRestore(s.customer_name)
                                        }
                                    >
                                        <IconButton>
                                            <MdSettingsBackupRestore />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            ))}
                    </div>
                )}

                <div className="grid gap-4 w-full h-min p-2 ">
                    {/* item nav */}
                    {isFetching ? (
                        <Skeleton
                            variant="rectangular"
                            width={1000}
                            height={40}
                            animation="wave"
                        />
                    ) : (
                        <nav className="overflow-x-auto bg-white ">
                            <div className="flex gap-5 p-2 content-start items-center w-max ">
                                {products.map((product) => (
                                    <Button variant="outlined">
                                        {product.product_category}
                                    </Button>
                                ))}
                            </div>
                        </nav>
                    )}

                    {/* item list */}
                    {isFetching ? (
                        <div className="flex justify-start items-center gap-4 ">
                            <Skeleton
                                variant="rectangular"
                                width={1000}
                                height={500}
                                animation="wave"
                            />
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-4 h-150  overflow-y-auto ">
                            {products.map((product) => (
                                <Card sx={{ height: 240 }}>
                                    <div
                                        className="w-35 p-2 bg-white grid gap-3 hover:cursor-pointer"
                                        key={product.id}
                                        onClick={() =>
                                            handleSelectProduct(product)
                                        }
                                    >
                                        <figure>
                                            <img
                                                src={`/images/${JSON.parse(product.image)[0]}`}
                                                alt="item image"
                                                className="w-full h-25 rounded-2xl"
                                            />
                                        </figure>
                                        <div className="grid content-between h-25 overflow-auto text-center">
                                            <span className="h-15 overflow-hidden">
                                                {product.product_name}
                                            </span>
                                            <b>
                                                P
                                                {Number(
                                                    product.product_price,
                                                ).toLocaleString()}
                                                .00
                                            </b>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>

                {/* Process customer right sidebar */}
                <div className="w-1/2   border-gray-300 rounded-2xl">
                    {isFetching ? (
                        <Skeleton
                            variant="rectangular"
                            height={800}
                            width={1000}
                            className="mt-2 rounded-2xl"
                        />
                    ) : (
                        <div className="grid gap-4 bg-white border border-gray-300 rounded-2xl p-2 ">
                            <nav className="flex justify-between items-center content-center p-2  bg-white">
                                <TextField
                                    size="small"
                                    placeholder="Customer name"
                                    error={error?.errors?.customer_name?.[0]}
                                    helperText={
                                        error?.errors?.customer_name?.[0]
                                    }
                                    value={customer_name}
                                    onChange={(e) =>
                                        setCustomer(e.target.value)
                                    }
                                />
                            </nav>
                            <hr />

                            {/* customer order list form */}
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="grid h-115">
                                    <div className="overflow-x-auto">
                                        {selectedProducts.map(
                                            (selected, key) => (
                                                <div className="flex justify-between items-start p-2">
                                                    <div className="flex gap-4">
                                                        <b>{key + 1}</b>
                                                        <div className="grid">
                                                            <Accordion>
                                                                <AccordionSummary
                                                                    expandIcon={
                                                                        <ExpandMoreIcon />
                                                                    }
                                                                    aria-controls="panel1-content"
                                                                    id="panel1-header"
                                                                >
                                                                    <Typography component="span">
                                                                        <div className="grid">
                                                                            <b>
                                                                                {
                                                                                    selected.product_price
                                                                                }
                                                                            </b>
                                                                            <b>
                                                                                {selected.product_name.slice(
                                                                                    0,
                                                                                    40,
                                                                                )}
                                                                                ...
                                                                            </b>
                                                                            <b>
                                                                                x
                                                                                {
                                                                                    selected.quantity
                                                                                }
                                                                            </b>
                                                                        </div>
                                                                    </Typography>
                                                                </AccordionSummary>
                                                                <AccordionDetails>
                                                                    <div className="flex gap-2 items-center">
                                                                        <IconButton>
                                                                            <IoMdAddCircle />
                                                                        </IconButton>
                                                                        <TextField
                                                                            type="number"
                                                                            size="small"
                                                                            placeholder="qty"
                                                                            name="quantity"
                                                                            onChange={(
                                                                                e,
                                                                            ) =>
                                                                                handleQuantityChange(
                                                                                    selected.id,
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                                )
                                                                            }
                                                                            value={
                                                                                selected.quantity
                                                                            }
                                                                            slotProps={{
                                                                                htmlInput:
                                                                                    {
                                                                                        max: Number(
                                                                                            selected.product_quantity,
                                                                                        ),
                                                                                        min: 1,
                                                                                    },
                                                                            }}
                                                                        />

                                                                        <IconButton>
                                                                            <FaCircleMinus />
                                                                        </IconButton>
                                                                    </div>
                                                                </AccordionDetails>
                                                            </Accordion>
                                                        </div>
                                                    </div>

                                                    <IconButton
                                                        color="error"
                                                        onClick={() =>
                                                            handleDeleteSelectedProduct(
                                                                selected.id,
                                                            )
                                                        }
                                                    >
                                                        <FaDeleteLeft />
                                                    </IconButton>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </form>
                            <hr />

                            {/* overall total */}
                            <div className="flex justify-between">
                                <div className="grid">
                                    <b>Total Amount:</b>
                                    <b>For:</b>
                                </div>
                                <div className="grid text-end">
                                    <b>
                                        ₱{Number(productTotal).toLocaleString()}
                                        .00
                                    </b>
                                    <b className="capitalize">
                                        {customer_name}
                                    </b>
                                </div>
                            </div>
                            <div className="flex justify-center gap-2 items-center ">
                                <Button
                                    fullWidth
                                    variant="contained"
                                    disabled={selectedProducts.length <= 0}
                                    onClick={() => handleOnHold("on-hold")}
                                >
                                    Hold Order
                                </Button>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    disabled={selectedProducts.length <= 0}
                                    onClick={() => handleProceed("proceeded")}
                                >
                                    Proceed
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProcessProduct;
