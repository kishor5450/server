// import React from "react";
// import { AppBar, Box, Toolbar, Autocomplete, TextField } from "@mui/material";
// import MovieIcon from "@mui/icons-material/Movie";
// import MovieList from "./MovieList";

// // // const darray = ["Titanic", "Avatar", "Mission Imposible", "Avengers"];
// // const movieList = Array.isArray(MovieList) ? MovieList : [];

// const Header = ({ movies }) => {
//   return (
//     <AppBar>
//       <Toolbar>
//         <Box width={"20%"}>
//           <MovieIcon></MovieIcon>
//         </Box>
//         <Box width={"50%"} margin={"auto"}>
//           <Autocomplete
//             freeSolo
//             options={movies && movies.map((option) => option.name)}
//             renderInput={(params) => (
//               <TextField
//                 sx={{ input: { color: "white" } }} // Corrected: "input" should be inside the sx object
//                 variant="standard"
//                 {...params}
//                 placeholder="Search Across Movies"
//               />
//             )}
//           />
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, Autocomplete, TextField } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import axios from "axios";

const Header = () => {
  const [movieList, setMovieList] = useState([]); // Initialize movieList as an empty array

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:9001/movies");
        setMovieList(response.data); // Set fetched movies here
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box width={"20%"}>
          <MovieIcon />
        </Box>
        <Box width={"50%"} margin={"auto"}>
          <Autocomplete
            freeSolo
            options={movieList.map((movie) => movie.name)} // Map the list of movies to their names
            renderInput={(params) => (
              <TextField
                sx={{ input: { color: "white" } }}
                variant="standard"
                {...params}
                placeholder="Search Across Movies"
              />
            )}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
