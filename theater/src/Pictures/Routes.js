// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Menu } from "antd";
// import AddMovie from "../Pictures/AddMovie";
// import MovieList from "../Pictures/MovieList";
// import UpdateMovie from "../Pictures/UpdateMovie";
// import DeleteMovie from "../Pictures/DeleteMovie";

// const RoutesComponent = () => {
//   return (
//     <Router>
//       <Menu theme="dark" mode="horizontal">
//         <Menu.Item key="1">
//           <Link to="/movies">Movies</Link>
//         </Menu.Item>
//         <Menu.Item key="2">
//           <Link to="/add-movie">Add Movie</Link>
//         </Menu.Item>
//       </Menu>
//       <Routes>
//         <Route path="/movies" element={<MovieList />} />
//         <Route path="/add-movie" element={<AddMovie />} />
//         <Route path="/update-movie/:id" element={<UpdateMovie />} />
//         <Route path="/delete-movie/:id" element={<DeleteMovie />} />
//       </Routes>
//     </Router>
//   );
// };

// export default RoutesComponent;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Menu } from "antd";
import AddMovie from "../Pictures/AddMovie";
import MovieList from "../Pictures/MovieList";
import UpdateMovie from "../Pictures/UpdateMovie";
import DeleteMovie from "../Pictures/DeleteMovie";
import TheaterAdd from "./TheaterAdd";
import Footer from "../layout-components/Footer";
// import { AppBar, Toolbar } from "@mui/material";
import Header from "./Header";
import HomePage from "./HomePage";
// import AdminPage from "../Merge/AdminPage";
// import MovieScheduleDialog from "../Merge/MovieSchedule";
import MovieScroll from "../ScrollImages/Images";
import ShowsForm from "../Shows/ShowsForm";
const RoutesComponent = () => {
  const menuItems = [
    { key: "1", label: <Link to="/movies">Movies</Link> },
    { key: "2", label: <Link to="/add-movie">Add Movie</Link> },
    { key: "3", label: <Link to="/theaters">Theaters</Link> },
    { key: "4", label: <Link to="/add-theater">Add Theater</Link> },
  ];

  return (
    <Router>
      {/* <AdminPage></AdminPage>
      <MovieScheduleDialog></MovieScheduleDialog> */}
      <Header></Header>
      {/* <HomePage></HomePage> */}

      <Menu
        theme="dark"
        mode="horizontal"
        items={menuItems}
        style={{ marginTop: "0px" }}
      />
      <Routes>
        <Route path="/movies" element={<MovieList />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/theaters" element={<Footer />} />
        <Route path="/add-theater" element={<TheaterAdd />} />
        <Route path="/update-movie/:id" element={<UpdateMovie />} />
        <Route path="/delete-movie/:id" element={<DeleteMovie />} />
      </Routes>
      <HomePage></HomePage>
      <MovieScroll></MovieScroll>
      <ShowsForm></ShowsForm>
    </Router>
  );
};

export default RoutesComponent;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AddMovie from "../Pictures/AddMovie";
// import MovieList from "../Pictures/MovieList";
// import TheaterAdd from "./TheaterAdd";
// import Footer from "../layout-components/Footer"; // Assuming Footer is your Theater component
// import Admin from "./Admin"; // Import the Admin component

// const AdminDashboard = () => {
//   return <h2>Welcome to the Admin Dashboard!</h2>; // Admin dashboard home
// };

// const RoutesComponent = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Admin Routes */}
//         <Route path="/admin" element={<Admin />}>
//           {/* <Route index element={<AdminDashboard />} />{" "} */}
//           {/* Default landing page */}
//           <Route path="movies" element={<MovieList />} />
//           <Route path="add-movie" element={<AddMovie />} />
//           <Route path="theaters" element={<Footer />} />
//           <Route path="add-theater" element={<TheaterAdd />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default RoutesComponent;
