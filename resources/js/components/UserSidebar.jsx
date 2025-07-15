import React from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const UserSidebar = ({closeSidebar}) => {
    return (
       <aside className="fixed bg-white min-w-full h-screen left-0 top-0 z-10 overflow-y-auto border-r-1">
            <ul className="grid gap-10">
                <li>
                    <div className="flex justify-between">
                        <h1 className="font-bold text-2xl">Menu</h1>
                        <i className="text-red-400 cursor-pointer" onClick={closeSidebar}><CloseOutlinedIcon/></i>
                    </div>
                </li>
                <li className="p-2 font-semibold text-gray-500 uppercase">brands</li>
                <li className="p-2 text-gray-500 uppercase">vapekits</li>
                <li className="p-2 text-gray-500 uppercase">disposable</li>
                <li className="p-2 text-gray-500 uppercase">e-liquids</li>
                <li className="p-2 text-gray-500 uppercase">nic</li>
                <li className="p-2 text-gray-500 uppercase">hemp</li>
                <li className="p-2 text-gray-500 uppercase">vaporizers</li>
                <li className="p-2 text-gray-500 uppercase">glass</li>
                <li className="p-2 text-gray-500 uppercase">accessories</li>
                <li className="p-2 text-gray-500 uppercase">accessories</li>
                <li className="p-2 text-gray-500 uppercase">accessories</li>
                <li className="p-2 text-gray-500 uppercase">accessories</li>
                <li className="p-2 text-gray-500 uppercase">accessories</li>
            </ul>
        </aside>
    );
};

export default UserSidebar;
