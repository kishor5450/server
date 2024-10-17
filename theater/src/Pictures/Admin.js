// import React, { useState } from "react";
// import { Outlet, Link } from "react-router-dom";
// import { Menu } from "antd";

// const Admin = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const handleAdminClick = () => {
//     setShowMenu(true); // Show remaining menu items when Admin is clicked
//   };

//   const menuItems = [
//     {
//       key: "1",
//       label: (
//         <Link to="/admin" onClick={handleAdminClick}>
//           Admin Dashboard
//         </Link>
//       ),
//     },
//     showMenu && { key: "2", label: <Link to="/admin/movies">Movies</Link> }, // Show when admin is clicked
//     showMenu && {
//       key: "3",
//       label: <Link to="/admin/add-movie">Add Movie</Link>,
//     },
//     showMenu && { key: "4", label: <Link to="/admin/theaters">Theaters</Link> },
//     showMenu && {
//       key: "5",
//       label: <Link to="/admin/add-theater">Add Theater</Link>,
//     },
//   ].filter(Boolean); // Filter out null items when showMenu is false

//   return (
//     <div>
//       <Menu theme="dark" mode="horizontal" items={menuItems} />
//       <div style={{ padding: "20px" }}>
//         <Outlet /> {/* Render child routes */}
//       </div>
//     </div>
//   );
// };

// export default Admin;
