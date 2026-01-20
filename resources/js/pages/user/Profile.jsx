import React from "react";
import {
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";
import { useGetAuthUser } from "../../hooks/useUsers";

const Profile = () => {
  const { data: user } = useGetAuthUser();
  const [anchorEl, setAnchorEl] = React.useState(null);

  if (!user) return null;

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-start justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-8 flex flex-col items-center">
        {/* Profile Image */}
        {/* <img
          src={user.image || "/avatar-placeholder.png"}
          alt="Profile"
          className="w-40 h-40 rounded-2xl object-cover mb-6"
        /> */}

        {/* Name & Role */}
        <h2 className="text-3xl font-bold mb-1 text-center">
          {user.first_name} {user.last_name}
        </h2>
        <p className="text-gray-500 mb-6 capitalize">
          {user.role}
        </p>

        {/* Actions */}
        {/* <div className="flex gap-3 w-full mb-6">
          <Button variant="outlined" fullWidth>
            Full Profile
          </Button>

          <IconButton
            onClick={(e) => setAnchorEl(e.currentTarget)}
            className="border rounded-lg"
          >
            <MoreVertIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem>Edit</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Share</MenuItem>
          </Menu>
        </div> */}

        {/* Contact Info */}
        <div className="w-full grid gap-4 text-gray-600">
          <div className="flex items-center gap-3">
            <EmailIcon fontSize="small" />
            <a
              href={`mailto:${user.email}`}
              className="text-blue-600 hover:underline"
            >
              {user.email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <PhoneIcon fontSize="small" />
            <span>{user.contact_number}</span>
          </div>

          <div className="flex items-center gap-3">
            <BusinessIcon fontSize="small" />
            <span className="capitalize">{user.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
