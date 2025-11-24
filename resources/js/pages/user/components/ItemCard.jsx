import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Paper from "@mui/material/Paper";


export default function ItemCard({ productName, productPrice, image, quantity }) {
    const test = ["dsfaf", "dfsdf"];
    return (
        
            <Paper elevation={5}>
                <Card className=" w-35 md:w-40">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            sx={{height:160}}
                            image={`/images/${image?.[0]}`}
                            alt={"product image"}
                        />

                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{ fontSize: "15px" }}
                            >
                                {productName}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "text.secondary",
                                    fontWeight: "bold",
                                }}
                                className="flex justify-between"
                            >
                                <span>
                                    ₱{parseInt(productPrice).toLocaleString()}
                                    .00
                                </span>
                                <span>{quantity}x</span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>
      
    );
}
