import { Button, Checkbox, FormControl, OutlinedInput } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { Link } from "react-router-dom";
import { useShowProducts } from "../../../hooks/useProducts";
import ViewModal from "../../../components/Overlays/Modals/ViewModal";
import { useState } from "react";
import ViewProductRow from "../../../components/Table/ViewProductRow";

const ProductList = () => {
    const { data } = useShowProducts();
    const [isViewModalOpen, setIsViewModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)

    const handleViewModal = (data) => {
        setSelectedProduct(data)
        setIsViewModalOpen(true) 
    }

    return (
        <section>
            <div className="p-2 grid gap-2">
                <div className="flex gap-2 items-center">
                    <span className="font-semibold text-2xl">Products</span>
                </div>

                <div className="flex gap-3 items-center">
                    <FormControl variant="standard">
                        <OutlinedInput
                            size="small"
                            endAdornment={<SearchOutlinedIcon />}
                            placeholder="Search"
                        />
                    </FormControl>
                    <Link to={"/admin-new-product"}>
                        <Button variant="contained" color="success">
                            New Product
                        </Button>
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="border-gray-300 divide-y divide-gray-200 min-w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th>
                                    <Checkbox />
                                </th>
                                <th className="text-sm p-2 text-left font-semibold text-gray-700">
                                    <div className="flex-justify-between items-center">
                                        Product Name
                                    </div>
                                </th>
                                <th className="text-sm p-2 text-left font-semibold text-gray-700">
                                    <div className="flex-justify-between items-center">
                                        Category
                                    </div>
                                </th>
                                <th className="text-sm p-2 text-left font-semibold text-gray-700">
                                    <div className="flex-justify-between items-center">
                                        Price
                                    </div>
                                </th>
                                <th className="text-sm p-2 text-left font-semibold text-gray-700">
                                    <div className="flex-justify-between items-center">
                                        Quantity
                                    </div>
                                </th>
                                <th className="text-sm p-2 text-left font-semibold text-gray-700">
                                    <div className="flex-justify-between items-center">
                                        Action
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data &&
                                data.map((product) => (
                                    <tr key={product.id}>
                                        <td className="text-center">
                                            <Checkbox />
                                        </td>
                                        <td className="text-sm p-2 text-left text-gray-800">
                                            <span>{product.product_name}</span>
                                        </td>
                                        <td className="text-sm p-2 text-left text-gray-800">
                                            <span>
                                                {product.product_category}
                                            </span>
                                        </td>
                                        <td className="text-sm p-2 text-left text-gray-800">
                                            <span>
                                                P{product.product_price}
                                            </span>
                                        </td>
                                        <td className="text-sm p-2 text-left text-gray-800">
                                            <span>
                                                {product.product_quantity}x
                                            </span>
                                        </td>
                                        <td className="text-sm p-2 text-left text-gray-800">
                                            <div className="flex gap-2 items-center">
                                                <Button
                                                    sx={{
                                                        textTransform: "none",
                                                    }}
                                                    onClick={() => handleViewModal(product)}
                                                >
                                                    View
                                                </Button>
                                            
                                                <ViewModal modalOpen={isViewModalOpen} onClose={() => setIsViewModalOpen(false)} header={"Product Details"} >
                                                    <ViewProductRow data={selectedProduct}/>
                                                </ViewModal>
                                                <Button
                                                    sx={{
                                                        textTransform: "none",
                                                    }}
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    sx={{
                                                        textTransform: "none",
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            {/* <tr>
                                        <td className="text-center">
                                            <Checkbox />
                                        </td>
                                        <td className="text-sm p-2 text-left text-gray-800">
                                            <span>test</span>
                                        </td>
                                        <td className="text-sm p-2 text-left text-gray-800">
                                           
                                         
                                        </td>
                                        <td>
                                            <div className="flex">
                                                
                                            </div>
                                        </td>
                                    </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ProductList;
