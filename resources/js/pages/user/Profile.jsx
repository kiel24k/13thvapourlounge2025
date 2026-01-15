import React from "react";
import { Button, Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";

const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-8 flex flex-col items-center">
        {/* Profile Image */}
        <img
          src="/mnt/data/31ae99c3-db89-4ce9-ac85-a926278c274b.png"
          alt="Profile"
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl object-cover mb-6"
        />

        {/* Name & Role */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">
          Barrett Richards
        </h2>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-6 text-center">
          Senior Product Designer
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full mb-6">
          <Button variant="outlined" className="flex-1 capitalize">
            Full Profile
          </Button>
          <div className="flex justify-center">
            <IconButton
              onClick={handleClick}
              className="border rounded-lg"
              size="large"
            >
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
              <MenuItem onClick={handleClose}>Share</MenuItem>
            </Menu>
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-full grid grid-cols-1 gap-4 text-gray-600 text-sm sm:text-base md:text-lg">
          <div className="flex items-center gap-3">
            <EmailIcon fontSize="small" />
            <a
              href="mailto:rrichards@virtuslab.com"
              className="text-blue-600 hover:underline"
            >
              rrichards@virtuslab.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <PhoneIcon fontSize="small" />
            <span>664 333 224</span>
          </div>
          <div className="flex items-center gap-3">
            <LocationOnIcon fontSize="small" />
            <span>Wrocław</span>
          </div>
          <div className="flex items-center gap-3">
            <BusinessIcon fontSize="small" />
            <span>B2B</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
