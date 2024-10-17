// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import Cards from "../cards/cards";

// const HomePage = () => {
//   return (
//     <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={1}>
//       <Box margin={"auto"} height={"40%"} width={"80%"} marginTop={1}>
//         <img
//           src="https://images.spiderum.com/sp-images/8d5590c080e311ed8a6481196edc880f.jpeg"
//           alt="Avatar"
//           width={"100%"}
//           height={"250"}
//         />
//       </Box>
//       <Box padding={2} margin={"auto"}>
//         <Typography variant="h5" textAlign={"center"}>
//           Latest Releases
//         </Typography>
//       </Box>
//       <Box
//         display={"flex"}
//         width={"80%"}
//         justifyContent={"center"}
//         flexWrap={"wrap"}
//       >
//         {[1, 2, 3, 4].map((item) => (
//           <Cards key={item} />
//         ))}
//       </Box>
//       <Box display={"flex"} padding={"5"} margin={"auto"}>
//         <Button variant="outlined" sx={{ margin: "auto", color: "#2b2d42" }}>
//           View All Movies
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;

// import React, { useEffect, useState } from "react";
// import { Box, Typography, Button } from "@mui/material";
// import Cards from "../cards/cards";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Carousel } from "antd";

// const HomePage = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get("http://localhost:9001/movies");
//         setMovies(response.data);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };
//     fetchMovies();
//   }, []);

//   return (
//     <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={1}>
//       <Box margin={"auto"} height={"40%"} width={"80%"} marginTop={1}>
//         {/* <img
//           // src="https://images.spiderum.com/sp-images/8d5590c080e311ed8a6481196edc880f.jpeg"
//           // src="https://wallpaperaccess.com/full/7978053.jpg"
//           src="https://i.pinimg.com/736x/7b/04/16/7b0416a509fd2b88ca49765af4089002.jpg"
//           alt="Avatar"
//           width={"100%"}
//           height={"250"}

//         /> */}
//         <Carousel autoplay>
//           <div>
//             <img
//               src="https://i.pinimg.com/736x/7b/04/16/7b0416a509fd2b88ca49765af4089002.jpg"
//               alt="Image 1"
//               style={{ width: "100%", height: "300px", objectFit: "cover" }}
//             />
//           </div>
//           <div>
//             <img
//               src="https://wallpaperaccess.com/full/7978053.jpg"
//               alt="Image 2"
//               style={{ width: "100%", height: "300px", objectFit: "cover" }}
//             />
//           </div>
//           <div>
//             <img
//               src="https://images.spiderum.com/sp-images/8d5590c080e311ed8a6481196edc880f.jpeg"
//               alt="Image 3"
//               style={{ width: "100%", height: "300px", objectFit: "cover" }}
//             />
//           </div>
//         </Carousel>
//       </Box>
//       <Box padding={2} margin={"auto"}>
//         <Typography variant="h5" textAlign={"center"}>
//           Latest Releases
//         </Typography>
//       </Box>
//       <Box
//         display={"flex"}
//         width={"95%"}
//         justifyContent={"center"}
//         flexWrap={"wrap"}
//       >
//         {movies &&
//           movies.map((movie, index) => (
//             <Cards
//               // key={movie.id}
//               name={movie.name}
//               release_date={movie.release_date}
//               poster_url={movie.poster_url}
//               key={index}
//             />
//           ))}
//       </Box>
//       <Box display={"flex"} padding={"5"} margin={"auto"}>
//         <Button
//           LinkComponent={Link}
//           to="/movies"
//           sx={{ margin: "auto", color: "#2b2d42" }}
//           size="small"
//           variant="outlined"
//         >
//           View All Movies
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;

// import React, { useEffect, useState } from "react";
// import { Box, Typography, Button } from "@mui/material";
// import Cards from "../cards/cards";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Carousel } from "antd";

// const HomePage = () => {
//   const [movies, setMovies] = useState([]);
//   const [theaterMovies, setTheaterMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get("http://localhost:9001/movies");
//         setMovies(response.data);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     const fetchTheaterMovies = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:9001/theaters-movies"
//         );
//         setTheaterMovies(response.data);
//       } catch (error) {
//         console.error("Error fetching theater movies:", error);
//       }
//     };

//     fetchMovies();
//     fetchTheaterMovies();
//   }, []);

//   return (
//     <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={1}>
//       <Box margin={"auto"} height={"40%"} width={"80%"} marginTop={1}>
//         <Carousel autoplay>
//           <div>
//             <img
//               src="https://i.pinimg.com/736x/7b/04/16/7b0416a509fd2b88ca49765af4089002.jpg"
//               alt="Image 1"
//               style={{ width: "100%", height: "300px", objectFit: "cover" }}
//             />
//           </div>
//           <div>
//             <img
//               src="https://wallpaperaccess.com/full/7978053.jpg"
//               alt="Image 2"
//               style={{ width: "100%", height: "300px", objectFit: "cover" }}
//             />
//           </div>
//           <div>
//             <img
//               src="https://images.spiderum.com/sp-images/8d5590c080e311ed8a6481196edc880f.jpeg"
//               alt="Image 3"
//               style={{ width: "100%", height: "300px", objectFit: "cover" }}
//             />
//           </div>
//         </Carousel>
//       </Box>
//       <Box padding={2} margin={"auto"}>
//         <Typography variant="h5" textAlign={"center"}>
//           Latest Releases
//         </Typography>
//       </Box>
//       <Box
//         display={"flex"}
//         width={"95%"}
//         justifyContent={"center"}
//         flexWrap={"wrap"}
//       >
//         {movies &&
//           movies.map((movie, index) => {
//             // Find the theater names for the current movie
//             const theatersForMovie = theaterMovies
//               .filter((tm) => tm.movie_id === movie.id)
//               .map((tm) => tm.theater_name)
//               .join(", ");

//             return (
//               <Cards
//                 name={movie.name}
//                 release_date={movie.release_date}
//                 poster_url={movie.poster_url}
//                 theaterName={theatersForMovie || "Not Scheduled"} // Default text if no theaters found
//                 key={index}
//               />
//             );
//           })}
//       </Box>
//       <Box display={"flex"} padding={"5"} margin={"auto"}>
//         <Button
//           LinkComponent={Link}
//           to="/movies"
//           sx={{ margin: "auto", color: "#2b2d42" }}
//           size="small"
//           variant="outlined"
//         >
//           View All Movies
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;

// HomePage.js
// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import Cards from "../cards/cards";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Carousel } from "antd";

// const HomePage = () => {
//   const [movies, setMovies] = useState([]);
//   const [theaterMovies, setTheaterMovies] = useState([]);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [selectedTheaters, setSelectedTheaters] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get("http://localhost:9001/movies");
//         setMovies(response.data);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     const fetchTheaterMovies = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:9001/theaters-movies"
//         );
//         setTheaterMovies(response.data);
//       } catch (error) {
//         console.error("Error fetching theater movies:", error);
//       }
//     };

//     fetchMovies();
//     fetchTheaterMovies();
//   }, []);

//   const handleBookClick = (theatersForMovie) => {
//     setSelectedTheaters(theatersForMovie);
//     setDialogOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//   };

//   return (
//     <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={1}>
//       <Box margin={"auto"} height={"40%"} width={"80%"} marginTop={1}>
//         <Carousel autoplay>
//           <div>
//             <img
//               src="https://i.pinimg.com/736x/7b/04/16/7b0416a509fd2b88ca49765af4089002.jpg"
//               alt="Image 1"
//               style={{ width: "100%", height: "300px", objectFit: "cover" }}
//             />
//           </div>
//           <div>
//             <img
//               src="https://wallpaperaccess.com/full/7978053.jpg"
//               alt="Image 2"
//               style={{ width: "100%", height: "300px", objectFit: "cover" }}
//             />
//           </div>
//           <div>
//             <img
//               src="https://images.spiderum.com/sp-images/8d5590c080e311ed8a6481196edc880f.jpeg"
//               alt="Image 3"
//               style={{ width: "100%", height: "300px", objectFit: "cover" }}
//             />
//           </div>
//         </Carousel>
//       </Box>
//       <Box padding={2} margin={"auto"}>
//         <Typography variant="h5" textAlign={"center"}>
//           Latest Releases
//         </Typography>
//       </Box>
//       <Box
//         display={"flex"}
//         width={"95%"}
//         justifyContent={"center"}
//         flexWrap={"wrap"}
//       >
//         {movies &&
//           movies.map((movie, index) => {
//             const theatersForMovie = theaterMovies
//               .filter((tm) => tm.movie_id === movie.id)
//               .map((tm) => tm.theater_name);

//             return (
//               <Cards
//                 name={movie.name}
//                 release_date={movie.release_date}
//                 poster_url={movie.poster_url}
//                 theaterName={theatersForMovie.join(", ") || "Not Scheduled"} // Default text if no theaters found
//                 onBookClick={() => handleBookClick(theatersForMovie)}
//                 key={index}
//               />
//             );
//           })}
//       </Box>
//       <Box display={"flex"} padding={"5"} margin={"auto"}>
//         <Button
//           LinkComponent={Link}
//           to="/movies"
//           sx={{ margin: "auto", color: "#2b2d42" }}
//           size="small"
//           variant="outlined"
//         >
//           View All Movies
//         </Button>
//       </Box>

//       {/* Dialog for Theater Selection */}
//       <Dialog open={dialogOpen} onClose={handleCloseDialog}>
//         <DialogTitle>Select a Theater</DialogTitle>
//         <DialogContent>
//           {selectedTheaters.length > 0 ? (
//             selectedTheaters.map((theater, index) => (
//               <Button key={index} variant="contained" sx={{ margin: 1 }}>
//                 {theater}
//               </Button>
//             ))
//           ) : (
//             <Typography>No theaters available for this movie.</Typography>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default HomePage;
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import Cards from "../cards/cards";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Carousel } from "antd";
// import FetchedSeatLayout from "../layout-components/FetchedSeatLayout"; // Adjust the path as necessary

// const HomePage = () => {
//   const [movies, setMovies] = useState([]);
//   const [theaterMovies, setTheaterMovies] = useState([]);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [selectedTheaterId, setSelectedTheaterId] = useState(null); // State to store selected theater ID
//   const [theatersForSelectedMovie, setTheatersForSelectedMovie] = useState([]); // State for theaters of the selected movie

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get("http://localhost:9001/movies");
//         setMovies(response.data);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     const fetchTheaterMovies = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:9001/theaters-movies"
//         );
//         setTheaterMovies(response.data);
//       } catch (error) {
//         console.error("Error fetching theater movies:", error);
//       }
//     };

//     fetchMovies();
//     fetchTheaterMovies();
//   }, []);

//   const handleBookClick = (movieId) => {
//     // Find theaters for the selected movie
//     const theaters = theaterMovies
//       .filter((tm) => tm.movie_id === movieId)
//       .map((tm) => tm);

//     setTheatersForSelectedMovie(theaters); // Set theaters for the selected movie
//     setDialogOpen(true);
//   };

//   const handleTheaterSelect = (theaterId) => {
//     setSelectedTheaterId(theaterId); // Set selected theater ID
//   };

//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//     setSelectedTheaterId(null); // Reset theater ID when closing
//     setTheatersForSelectedMovie([]); // Clear theaters when closing
//   };

//   return (
//     <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={1}>
//       <Box margin={"auto"} height={"40%"} width={"80%"} marginTop={1}>
//         <Carousel autoplay>
//           <div>
//             <img
//               src="https://i.pinimg.com/736x/7b/04/16/7b0416a509fd2b88ca49765af4089002.jpg"
//               alt="Image 1"
//               style={{ width: "100%", height: "300px", objectFit: "cover" }}
//             />
//           </div>
//           <div>
//             <img
//               src="https://wallpaperaccess.com/full/7978053.jpg"
//               alt="Image 2"
//               style={{ width: "100%", height: "300px", objectFit: "cover" }}
//             />
//           </div>
//           <div>
//             <img
//               src="https://images.spiderum.com/sp-images/8d5590c080e311ed8a6481196edc880f.jpeg"
//               alt="Image 3"
//               style={{ width: "100%", height: "300px", objectFit: "cover" }}
//             />
//           </div>
//         </Carousel>
//       </Box>
//       <Box padding={2} margin={"auto"}>
//         <Typography variant="h5" textAlign={"center"}>
//           Latest Releases
//         </Typography>
//       </Box>
//       <Box
//         display={"flex"}
//         width={"95%"}
//         justifyContent={"center"}
//         flexWrap={"wrap"}
//       >
//         {movies &&
//           movies.map((movie, index) => (
//             <Cards
//               name={movie.name}
//               release_date={movie.release_date}
//               poster_url={movie.poster_url}
//               theaterName={
//                 theaterMovies.filter((tm) => tm.movie_id === movie.id).length >
//                 0
//                   ? theaterMovies
//                       .filter((tm) => tm.movie_id === movie.id)
//                       .map((tm) => (
//                         <Button
//                           key={tm.theater_id}
//                           variant="contained"
//                           onClick={() => handleBookClick(movie.id)} // Pass the movie ID to handleBookClick
//                           sx={{ margin: 1 }}
//                         >
//                           {tm.theater_name}
//                         </Button>
//                       ))
//                   : "Not Scheduled"
//               }
//               key={index}
//             />
//           ))}
//       </Box>
//       <Box display={"flex"} padding={"5"} margin={"auto"}>
//         <Button
//           LinkComponent={Link}
//           to="/movies"
//           sx={{ margin: "auto", color: "#2b2d42" }}
//           size="small"
//           variant="outlined"
//         >
//           View All Movies
//         </Button>
//       </Box>

//       {/* Dialog for Theater Selection and Seat Layout */}
//       <Dialog open={dialogOpen} onClose={handleCloseDialog}>
//         <DialogTitle>Select a Theater</DialogTitle>
//         <DialogContent>
//           {theatersForSelectedMovie.length > 0 ? (
//             theatersForSelectedMovie.map((theater) => (
//               <Button
//                 key={theater.theater_id}
//                 variant="contained"
//                 onClick={() => handleTheaterSelect(theater.theater_id)}
//                 sx={{ margin: 1 }}
//               >
//                 {theater.theater_name}
//               </Button>
//             ))
//           ) : (
//             <Typography>No theaters available for this movie.</Typography>
//           )}
//           {selectedTheaterId && (
//             <FetchedSeatLayout theaterId={selectedTheaterId} />
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default HomePage;

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import Cards from "../cards/cards";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Carousel } from "antd";
// import FetchedSeatLayout from "../layout-components/FetchedSeatLayout"; // Adjust the path as necessary

// const HomePage = () => {
//   const [movies, setMovies] = useState([]);
//   const [theaterMovies, setTheaterMovies] = useState([]);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [selectedTheaterId, setSelectedTheaterId] = useState(null);
//   const [theatersForSelectedMovie, setTheatersForSelectedMovie] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get("http://localhost:9001/movies");
//         setMovies(response.data);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     const fetchTheaterMovies = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:9001/theaters-movies"
//         );
//         setTheaterMovies(response.data);
//       } catch (error) {
//         console.error("Error fetching theater movies:", error);
//       }
//     };

//     fetchMovies();
//     fetchTheaterMovies();
//   }, []);

//   const handleBookClick = (movieId) => {
//     // Find theaters for the selected movie
//     const theaters = theaterMovies.filter((tm) => tm.movie_id === movieId);
//     setTheatersForSelectedMovie(theaters);
//     setDialogOpen(true);
//   };

//   const handleTheaterSelect = (theaterId) => {
//     setSelectedTheaterId(theaterId); // Set selected theater ID
//   };

//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//     setSelectedTheaterId(null); // Reset theater ID when closing
//     setTheatersForSelectedMovie([]); // Clear theaters when closing
//   };

//   return (
//     <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={1}>
//       <Box margin={"auto"} height={"40%"} width={"80%"} marginTop={1}>
//         <Carousel autoplay>{/* Carousel Images */}</Carousel>
//       </Box>
//       <Box padding={2} margin={"auto"}>
//         <Typography variant="h5" textAlign={"center"}>
//           Latest Releases
//         </Typography>
//       </Box>
//       <Box
//         display={"flex"}
//         width={"95%"}
//         justifyContent={"center"}
//         flexWrap={"wrap"}
//       >
//         {movies.map((movie) => (
//           <Cards
//             key={movie.id}
//             name={movie.name}
//             release_date={movie.release_date}
//             poster_url={movie.poster_url}
//             theaterName={
//               theaterMovies.filter((tm) => tm.movie_id === movie.id).length > 0
//                 ? "Scheduled" // Or some indicator that theaters are available
//                 : "Not Scheduled"
//             }
//             onBookClick={() => handleBookClick(movie.id)} // Pass the movie ID to handleBookClick
//           />
//         ))}
//       </Box>
//       <Box display={"flex"} padding={"5"} margin={"auto"}>
//         <Button
//           LinkComponent={Link}
//           to="/movies"
//           sx={{ margin: "auto", color: "#2b2d42" }}
//           size="small"
//           variant="outlined"
//         >
//           View All Movies
//         </Button>
//       </Box>

//       {/* Dialog for Theater Selection and Seat Layout */}
//       <Dialog open={dialogOpen} onClose={handleCloseDialog}>
//         <DialogTitle>Select a Theater</DialogTitle>
//         <DialogContent>
//           {theatersForSelectedMovie.length > 0 ? (
//             theatersForSelectedMovie.map((theater) => (
//               <Button
//                 key={theater.theater_id}
//                 variant="contained"
//                 onClick={() => handleTheaterSelect(theater.theater_id)}
//                 sx={{ margin: 1 }}
//               >
//                 {theater.theater_name}
//               </Button>
//             ))
//           ) : (
//             <Typography>No theaters available for this movie.</Typography>
//           )}
//           {selectedTheaterId && (
//             <FetchedSeatLayout theaterId={selectedTheaterId} />
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default HomePage;

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import Cards from "../cards/cards";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Carousel } from "antd";
// import FetchedSeatLayout from "../layout-components/FetchedSeatLayout"; // Adjust the path as necessary

// const HomePage = () => {
//   const [movies, setMovies] = useState([]);
//   const [theaterMovies, setTheaterMovies] = useState([]);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [selectedTheaterId, setSelectedTheaterId] = useState(null);
//   const [theatersForSelectedMovie, setTheatersForSelectedMovie] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get("http://localhost:9001/movies");
//         setMovies(response.data);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     const fetchTheaterMovies = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:9001/theaters-movies"
//         );
//         setTheaterMovies(response.data);
//       } catch (error) {
//         console.error("Error fetching theater movies:", error);
//       }
//     };

//     fetchMovies();
//     fetchTheaterMovies();
//   }, []);

//   const handleBookClick = (movieId) => {
//     // Find theaters for the selected movie
//     const theaters = theaterMovies.filter((tm) => tm.movie_id === movieId);
//     setTheatersForSelectedMovie(theaters);
//     setDialogOpen(true);
//   };

//   const handleTheaterSelect = (theaterId) => {
//     setSelectedTheaterId(theaterId); // Set selected theater ID
//   };

//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//     setSelectedTheaterId(null); // Reset theater ID when closing
//     setTheatersForSelectedMovie([]); // Clear theaters when closing
//   };

//   return (
//     <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={1}>
//       {/* Top Section */}
//       {/* <Box
//         width={"100%"}
//         padding={2}
//         bgcolor="#2b2d42"
//         color="white"
//         textAlign="center"
//       >
//         <Typography variant="h4">Welcome to Movie Booking</Typography>
//         <Typography variant="h6">
//           Book your favorite movies in theaters near you!
//         </Typography>
//       </Box> */}

//       <Box margin={"auto"} height={"40%"} width={"80%"} marginTop={1}>
//         <Carousel autoplay>
//           <div>
//             <img
//               src="https://i.pinimg.com/736x/7b/04/16/7b0416a509fd2b88ca49765af4089002.jpg"
//               alt="Image 1"
//               style={{ width: "100%", height: "300px", objectFit: "cover" }}
//             />
//           </div>
//           <div>
//             <img
//               src="https://wallpaperaccess.com/full/7978053.jpg"
//               alt="Image 2"
//               style={{ width: "100%", height: "300px", objectFit: "cover" }}
//             />
//           </div>
//           <div>
//             <img
//               src="https://images.spiderum.com/sp-images/8d5590c080e311ed8a6481196edc880f.jpeg"
//               alt="Image 3"
//               style={{ width: "100%", height: "300px", objectFit: "cover" }}
//             />
//           </div>
//         </Carousel>
//       </Box>

//       <Box padding={2} margin={"auto"}>
//         <Typography variant="h5" textAlign={"center"}>
//           Latest Releases
//         </Typography>
//       </Box>
//       <Box
//         display={"flex"}
//         width={"95%"}
//         justifyContent={"center"}
//         flexWrap={"wrap"}
//       >
//         {movies.map((movie) => (
//           <Cards
//             key={movie.id}
//             name={movie.name}
//             release_date={movie.release_date}
//             poster_url={movie.poster_url}
//             theaterName={
//               theaterMovies.filter((tm) => tm.movie_id === movie.id).length > 0
//                 ? "IN CINEMAS NOW" // Or some indicator that theaters are available
//                 : "coming soon"
//             }
//             onBookClick={() => handleBookClick(movie.id)} // Pass the movie ID to handleBookClick
//           />
//         ))}
//       </Box>
//       <Box display={"flex"} padding={"5"} margin={"auto"}>
//         <Button
//           LinkComponent={Link}
//           to="/movies"
//           sx={{ margin: "auto", color: "#2b2d42" }}
//           size="small"
//           variant="outlined"
//         >
//           View All Movies
//         </Button>
//       </Box>

//       {/* Dialog for Theater Selection and Seat Layout */}
//       <Dialog open={dialogOpen} onClose={handleCloseDialog}>
//         <DialogTitle>Select a Theater</DialogTitle>
//         <DialogContent>
//           {theatersForSelectedMovie.length > 0 ? (
//             theatersForSelectedMovie.map((theater) => (
//               <Button
//                 key={theater.theater_id}
//                 variant="contained"
//                 onClick={() => handleTheaterSelect(theater.theater_id)}
//                 sx={{ margin: 1 }}
//               >
//                 {theater.theater_name}
//               </Button>
//             ))
//           ) : (
//             <Typography>No theaters available for this movie.</Typography>
//           )}
//           {selectedTheaterId && (
//             <FetchedSeatLayout theaterId={selectedTheaterId} />
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default HomePage;/

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import Cards from "../cards/cards";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Carousel } from "antd";
// import FetchedSeatLayout from "../layout-components/FetchedSeatLayout"; // Adjust the path as necessary

// const HomePage = () => {
//   const [movies, setMovies] = useState([]);
//   const [theaterMovies, setTheaterMovies] = useState([]);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [seatLayoutDialogOpen, setSeatLayoutDialogOpen] = useState(false); // New state for seat layout dialog
//   const [selectedTheaterId, setSelectedTheaterId] = useState(null);
//   const [theatersForSelectedMovie, setTheatersForSelectedMovie] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get("http://localhost:9001/movies");
//         setMovies(response.data);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     const fetchTheaterMovies = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:9001/theaters-movies"
//         );
//         setTheaterMovies(response.data);
//       } catch (error) {
//         console.error("Error fetching theater movies:", error);
//       }
//     };

//     fetchMovies();
//     fetchTheaterMovies();
//   }, []);

//   const handleBookClick = (movieId) => {
//     // Find theaters for the selected movie
//     const theaters = theaterMovies.filter((tm) => tm.movie_id === movieId);
//     setTheatersForSelectedMovie(theaters);
//     setDialogOpen(true);
//   };

//   const handleTheaterSelect = (theaterId) => {
//     setSelectedTheaterId(theaterId); // Set selected theater ID
//     setSeatLayoutDialogOpen(true); // Open the seat layout dialog
//   };

//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//     setSelectedTheaterId(null); // Reset theater ID when closing
//     setTheatersForSelectedMovie([]); // Clear theaters when closing
//   };

//   const handleCloseSeatLayoutDialog = () => {
//     setSeatLayoutDialogOpen(false);
//     setSelectedTheaterId(null); // Reset theater ID when closing
//   };

//   return (
//     <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={1}>
//       <Box margin={"auto"} height={"40%"} width={"80%"} marginTop={1}>
//         <Carousel autoplay>
// <div>
//   <img
//     src="https://i.pinimg.com/736x/7b/04/16/7b0416a509fd2b88ca49765af4089002.jpg"
//     alt="Image 1"
//     style={{ width: "100%", height: "300px", objectFit: "cover" }}
//   />
// </div>
// <div>
//   <img
//     src="https://wallpaperaccess.com/full/7978053.jpg"
//     alt="Image 2"
//     style={{ width: "100%", height: "300px", objectFit: "cover" }}
//   />
// </div>
// <div>
//   <img
//     src="https://images.spiderum.com/sp-images/8d5590c080e311ed8a6481196edc880f.jpeg"
//     alt="Image 3"
//     style={{ width: "100%", height: "300px", objectFit: "cover" }}
//   />
// </div>
//         </Carousel>
//       </Box>

//       <Box padding={2} margin={"auto"}>
//         <Typography variant="h5" textAlign={"center"}>
//           Latest Releases
//         </Typography>
//       </Box>
//       <Box
//         display={"flex"}
//         width={"95%"}
//         justifyContent={"center"}
//         flexWrap={"wrap"}
//       >
//         {movies.map((movie) => (
//           <Cards
//             key={movie.id}
//             name={movie.name}
//             release_date={movie.release_date}
//             poster_url={movie.poster_url}
//             theaterName={
//               theaterMovies.filter((tm) => tm.movie_id === movie.id).length > 0
//                 ? "IN CINEMAS NOW" // Or some indicator that theaters are available
//                 : "coming soon"
//             }
//             onBookClick={() => handleBookClick(movie.id)} // Pass the movie ID to handleBookClick
//           />
//         ))}
//       </Box>
//       <Box display={"flex"} padding={"5"} margin={"auto"}>
//         <Button
//           LinkComponent={Link}
//           to="/movies"
//           sx={{ margin: "auto", color: "#2b2d42" }}
//           size="small"
//           variant="outlined"
//         >
//           View All Movies
//         </Button>
//       </Box>

//       {/* Dialog for Theater Selection */}
//       <Dialog open={dialogOpen} onClose={handleCloseDialog}>
//         <DialogTitle>Select a Theater</DialogTitle>
//         <DialogContent>
//           {theatersForSelectedMovie.length > 0 ? (
//             theatersForSelectedMovie.map((theater) => (
//               <Button
//                 key={theater.theater_id}
//                 variant="contained"
//                 onClick={() => handleTheaterSelect(theater.theater_id)}
//                 sx={{ margin: 1 }}
//               >
//                 {theater.theater_name}
//               </Button>
//             ))
//           ) : (
//             <Typography>No theaters available for this movie.</Typography>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog}>Close</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Dialog for Seat Layout */}
//       <Dialog open={seatLayoutDialogOpen} onClose={handleCloseSeatLayoutDialog}>
//         <DialogTitle>Select seats</DialogTitle>
//         <DialogContent>
//           {selectedTheaterId && (
//             <FetchedSeatLayout theaterId={selectedTheaterId} />
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseSeatLayoutDialog}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// // export default HomePage;
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import Cards from "../cards/cards";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Carousel } from "antd";
// import FetchedSeatLayout from "../layout-components/FetchedSeatLayout"; // Adjust the path as necessary

// const HomePage = () => {
//   const [movies, setMovies] = useState([]);
//   const [theaterMovies, setTheaterMovies] = useState([]);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [seatLayoutDialogOpen, setSeatLayoutDialogOpen] = useState(false);
//   const [selectedTheaterId, setSelectedTheaterId] = useState(null);
//   const [selectedMovieId, setSelectedMovieId] = useState(null);
//   const [theatersForSelectedMovie, setTheatersForSelectedMovie] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get("http://localhost:9001/movies");
//         setMovies(response.data);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     const fetchTheaterMovies = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:9001/theaters-movies"
//         );
//         setTheaterMovies(response.data);
//       } catch (error) {
//         console.error("Error fetching theater movies:", error);
//       }
//     };

//     fetchMovies();
//     fetchTheaterMovies();
//   }, []);

//   const handleBookClick = (movieId) => {
//     const theaters = theaterMovies.filter((tm) => tm.movie_id === movieId);
//     setTheatersForSelectedMovie(theaters);
//     setSelectedMovieId(movieId);
//     setDialogOpen(true);
//   };

//   const handleTheaterSelect = (theaterId) => {
//     setSelectedTheaterId(theaterId);
//     setSeatLayoutDialogOpen(true);
//     setDialogOpen(false);
//   };

//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//     setSelectedTheaterId(null);
//     setTheatersForSelectedMovie([]);
//   };

//   const handleCloseSeatLayoutDialog = () => {
//     setSeatLayoutDialogOpen(false);
//     setSelectedTheaterId(null);
//     setSelectedDate(null);
//   };

//   return (
//     <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={1}>
//       <Box margin={"auto"} height={"40%"} width={"80%"} marginTop={1}>
//         <Carousel autoplay>
//           <div>
//             <img
//               src="https://i.pinimg.com/736x/7b/04/16/7b0416a509fd2b88ca49765af4089002.jpg"
//               alt="Image 1"
//               style={{ width: "100%", height: "300px", objectFit: "cover" }}
//             />
//           </div>
//           <div>
//             <img
//               src="https://wallpaperaccess.com/full/7978053.jpg"
//               alt="Image 2"
//               style={{ width: "100%", height: "300px", objectFit: "cover" }}
//             />
//           </div>
//           <div>
//             <img
//               src="https://images.spiderum.com/sp-images/8d5590c080e311ed8a6481196edc880f.jpeg"
//               alt="Image 3"
//               style={{ width: "100%", height: "300px", objectFit: "cover" }}
//             />
//           </div>
//         </Carousel>
//       </Box>

//       <Box padding={2} margin={"auto"}>
//         <Typography variant="h5" textAlign={"center"}>
//           Latest Releases
//         </Typography>
//       </Box>
//       <Box
//         display={"flex"}
//         width={"95%"}
//         justifyContent={"center"}
//         flexWrap={"wrap"}
//       >
//         {movies.map((movie) => (
//           <Cards
//             key={movie.id}
//             name={movie.name}
//             release_date={movie.release_date}
//             poster_url={movie.poster_url}
//             theaterName={
//               theaterMovies.filter((tm) => tm.movie_id === movie.id).length > 0
//                 ? "IN CINEMAS NOW"
//                 : "coming soon"
//             }
//             onBookClick={() => handleBookClick(movie.id)}
//           />
//         ))}
//       </Box>
//       <Box display={"flex"} padding={"5"} margin={"auto"}>
//         <Button
//           LinkComponent={Link}
//           to="/movies"
//           sx={{ margin: "auto", color: "#2b2d42" }}
//           size="small"
//           variant="outlined"
//         >
//           View All Movies
//         </Button>
//       </Box>

//       {/* Dialog for Theater Selection */}
//       <Dialog open={dialogOpen} onClose={handleCloseDialog}>
//         <DialogTitle>Select a Theater</DialogTitle>
//         <DialogContent>
//           {theatersForSelectedMovie.length > 0 ? (
//             theatersForSelectedMovie.map((theater) => (
//               <Button
//                 key={theater.theater_id}
//                 variant="contained"
//                 onClick={() => handleTheaterSelect(theater.theater_id)}
//                 sx={{ margin: 1 }}
//               >
//                 {theater.theater_name}
//               </Button>
//             ))
//           ) : (
//             <Typography>No theaters available for this movie.</Typography>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog}>Close</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Dialog for Seat Layout */}
//       <Dialog open={seatLayoutDialogOpen} onClose={handleCloseSeatLayoutDialog}>
//         <DialogTitle>Select seats</DialogTitle>
//         <DialogContent>
//           {selectedTheaterId && (
//             <FetchedSeatLayout
//               theaterId={selectedTheaterId}
//               movieId={selectedMovieId}
//               onClose={handleCloseSeatLayoutDialog}
//             />
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseSeatLayoutDialog}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default HomePage;
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Cards from "../cards/cards";
import axios from "axios";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import FetchedSeatLayout from "../layout-components/FetchedSeatLayout";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [theaterMovies, setTheaterMovies] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [seatLayoutDialogOpen, setSeatLayoutDialogOpen] = useState(false);
  const [selectedTheaterId, setSelectedTheaterId] = useState(null);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [theatersForSelectedMovie, setTheatersForSelectedMovie] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTheaterName, setSelectedTheaterName] = useState(null);
  const [selectedMovieName, setSelectedMovieName] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:9001/movies");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    const fetchTheaterMovies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9001/theaters-movies"
        );
        setTheaterMovies(response.data);
      } catch (error) {
        console.error("Error fetching theater movies:", error);
      }
    };

    fetchMovies();
    fetchTheaterMovies();
  }, []);

  const handleBookClick = (movieId) => {
    const theaters = theaterMovies.filter((tm) => tm.movie_id === movieId);
    setTheatersForSelectedMovie(theaters);
    setSelectedMovieId(movieId);
    const selectedMovie = movies.find((movie) => movie.id === movieId);
    if (selectedMovie) {
      setSelectedMovieName(selectedMovie.name);
    }
    setDialogOpen(true);
  };

  const handleTheaterSelect = (theaterId, theaterName) => {
    setSelectedTheaterId(theaterId);
    setSelectedTheaterName(theaterName);
    setSeatLayoutDialogOpen(true);
    setDialogOpen(false);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedTheaterId(null);
    setTheatersForSelectedMovie([]);
  };

  const handleCloseSeatLayoutDialog = () => {
    setSeatLayoutDialogOpen(false);
    setSelectedTheaterId(null);
    setSelectedMovieId(null);
    setSelectedDate(null);
    setSelectedTheaterName(null);
    setSelectedMovieName(null);
  };

  return (
    <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={1}>
      <Box margin={"auto"} height={"40%"} width={"80%"} marginTop={1}>
        <Carousel autoplay>
          <div>
            <img
              src="https://i.pinimg.com/736x/7b/04/16/7b0416a509fd2b88ca49765af4089002.jpg"
              alt="Image 1"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="https://wallpaperaccess.com/full/7978053.jpg"
              alt="Image 2"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="https://images.spiderum.com/sp-images/8d5590c080e311ed8a6481196edc880f.jpeg"
              alt="Image 3"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
          </div>
        </Carousel>
      </Box>

      <Box padding={2} margin={"auto"}>
        <Typography variant="h5" textAlign={"center"}>
          Latest Releases
        </Typography>
      </Box>

      <Box
        display={"flex"}
        width={"95%"}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        {movies.map((movie) => (
          <Cards
            key={movie.id}
            name={movie.name}
            release_date={movie.release_date}
            poster_url={movie.poster_url}
            theaterName={
              theaterMovies.filter((tm) => tm.movie_id === movie.id).length > 0
                ? "IN CINEMAS NOW"
                : "coming soon"
            }
            onBookClick={() => handleBookClick(movie.id)}
          />
        ))}
      </Box>

      <Box display={"flex"} padding={"5"} margin={"auto"}>
        <Button
          component={Link}
          to="/movies"
          sx={{ margin: "auto", color: "#2b2d42" }}
          size="small"
          variant="outlined"
        >
          View All Movies
        </Button>
      </Box>

      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Select a Theater</DialogTitle>
        <DialogContent>
          {theatersForSelectedMovie.length > 0 ? (
            theatersForSelectedMovie.map((theater) => (
              <Button
                key={theater.theater_id}
                variant="contained"
                onClick={() =>
                  handleTheaterSelect(theater.theater_id, theater.theater_name)
                }
                sx={{ margin: 1 }}
              >
                {theater.theater_name}
              </Button>
            ))
          ) : (
            <Typography>No theaters available for this movie.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={seatLayoutDialogOpen} onClose={handleCloseSeatLayoutDialog}>
        <DialogTitle>Select seats</DialogTitle>
        <DialogContent>
          {selectedTheaterId &&
            selectedMovieId &&
            selectedTheaterName &&
            selectedMovieName && (
              <FetchedSeatLayout
                theaterId={selectedTheaterId}
                movieId={selectedMovieId}
                theaterName={selectedTheaterName}
                movieName={selectedMovieName}
                onClose={handleCloseSeatLayoutDialog}
              />
            )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSeatLayoutDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HomePage;
