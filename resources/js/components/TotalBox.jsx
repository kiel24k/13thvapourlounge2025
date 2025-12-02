import { Paper } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";

const TotalBox = ({title, total}) => {
    return (
        <Paper elevation={4}>
            <div className="grid gap-5 p-5">
                <figure className="flex justify-start items-end gap-2 ">
                    <i>
                        <GroupIcon />
                    </i>
                    <figcaption>
                        <span className="text-gray-500 text-sm">
                            {title}
                        </span>
                    </figcaption>
                </figure>

                <div className="text-start">
                    <b className="text-2xl">{total}</b>
                </div>
            </div>
        </Paper>
    );
};

export default TotalBox;
