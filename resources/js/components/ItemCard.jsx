import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ItemCard() {
    return (
      <Link to={"/view-item"}>
        <Paper elevation={5}  >
            <Card className=" w-35 md:w-40" >
                <CardActionArea>
                    <CardMedia 
                        component="img"
                        height="140"
                        image="https://tse3.mm.bing.net/th/id/OIP.TOSh010n4KFbHatZ-CSobgHaHa?w=800&h=800&rs=1&pid=ImgDetMain&o=7&rm=3"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ fontSize: "15px" }}
                        >
                            DotPod MAX Complete kit
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "text.secondary", fontWeight: "bold" }}
                            className="flex justify-between"
                        >
                           <span> P200.00</span>
                           <span>28 sold</span>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Paper>
      </Link>
    );
}
