// import React from 'react';
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Footer = () => {
//   const [theatersList, setTheatersList] = useState([]);
//   const [theater, setTheater] = useState(null);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [unavailableSeats, setUnavailableSeats] = useState([]);
//   const [data, setData] = useState([]);
//   const [seatData, setSeatData] = useState([]);
//   const [nonData, setNonData] = useState([]);

//   useEffect(() => {
//     const fetchTheaterData = async () => {
//       try {
//         const response = await axios.get("http://localhost:9001/theaters");
//         const fetchedData = response.data;

//         const updatedTheatersList = fetchedData.map((theater) => {
//           const totalSeats =
//             theater.rows && theater.columns
//               ? theater.rows * theater.columns - theater.nonSeatingSpaces
//               : 0;
//           return { ...theater, totalSeats };
//         });

//         setTheatersList(updatedTheatersList);
//       } catch (error) {
//         console.error("Error fetching theater data:", error);
//       }
//     };

//     fetchTheaterData();
//   }, []);

//   const deleteTheater = async (theaterId) => {
//     try {
//       await axios.delete(`http://localhost:9001/theaters/${theaterId}`);

//       setTheatersList((prevTheaters) =>
//         prevTheaters.filter((theater) => theater.id !== theaterId)
//       );

//       if (theaterId === theater?.id) {
//         setTheater(null);
//         setSelectedSeats([]);
//         setUnavailableSeats([]);
//         setData([]);
//         setSeatData([]);
//         setNonData([]);
//       }
//     } catch (error) {
//       console.error("Error deleting theater:", error);
//     }
//   };

//   return (
//     <div>
//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Area</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>City</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//               Total Seats
//             </th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//               Actions
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {theatersList.map((theater) => (
//             <tr key={theater.id}>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {theater.name}
//               </td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {theater.area}
//               </td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {theater.city}
//               </td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {theater.total_seats}
//               </td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 <button
//                   onClick={() => deleteTheater(theater.id)}
//                   style={{
//                     color: "white",
//                     backgroundColor: "red",
//                     border: "none",
//                     padding: "5px 10px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Footer;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import MovieScheduleDialog from "../Merge/MovieSchedule";

// const Footer = () => {
//   const [theatersList, setTheatersList] = useState([]);
//   const [theater, setTheater] = useState(null);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [unavailableSeats, setUnavailableSeats] = useState([]);
//   const [data, setData] = useState([]);
//   const [seatData, setSeatData] = useState([]);
//   const [nonData, setNonData] = useState([]);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [selectedTheaterId, setSelectedTheaterId] = useState(null);

//   useEffect(() => {
//     const fetchTheaterData = async () => {
//       try {
//         const response = await axios.get("http://localhost:9001/theaters");
//         const fetchedData = response.data;

//         const updatedTheatersList = fetchedData.map((theater) => {
//           const totalSeats =
//             theater.rows && theater.columns
//               ? theater.rows * theater.columns - theater.nonSeatingSpaces
//               : 0;
//           return {
//             ...theater,
//             totalSeats,
//             scheduledMovie: theater.scheduledMovie || null,
//           };
//         });

//         setTheatersList(updatedTheatersList);
//       } catch (error) {
//         console.error("Error fetching theater data:", error);
//       }
//     };

//     fetchTheaterData();
//   }, []);

//   const deleteTheater = async (theaterId) => {
//     try {
//       await axios.delete(`http://localhost:9001/theaters/${theaterId}`);
//       setTheatersList((prevTheaters) =>
//         prevTheaters.filter((theater) => theater.id !== theaterId)
//       );
//       if (theaterId === theater?.id) {
//         setTheater(null);
//         setSelectedSeats([]);
//         setUnavailableSeats([]);
//         setData([]);
//         setSeatData([]);
//         setNonData([]);
//       }
//     } catch (error) {
//       console.error("Error deleting theater:", error);
//     }
//   };

//   const handleScheduleMovie = (theaterId) => {
//     setSelectedTheaterId(theaterId);
//     setIsModalVisible(true);
//   };

//   const handleMovieScheduled = (theaterId, movie) => {
//     setTheatersList((prevTheaters) =>
//       prevTheaters.map((theater) =>
//         theater.id === theaterId
//           ? { ...theater, scheduledMovie: movie }
//           : theater
//       )
//     );
//     setIsModalVisible(false);
//   };

//   return (
//     <div>
//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Area</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>City</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//               Total Seats
//             </th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Movies</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//               Actions
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {theatersList.map((theater) => (
//             <tr key={theater.id}>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {theater.name}
//               </td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {theater.area}
//               </td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {theater.city}
//               </td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {theater.totalSeats}
//               </td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {theater.scheduledMovie
//                   ? theater.scheduledMovie.name
//                   : "No movie scheduled"}
//               </td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 <button
//                   onClick={() => deleteTheater(theater.id)}
//                   style={{
//                     color: "white",
//                     backgroundColor: "red",
//                     border: "none",
//                     padding: "5px 10px",
//                     cursor: "pointer",
//                     marginRight: "10px",
//                   }}
//                 >
//                   Delete
//                 </button>
//                 <button
//                   onClick={() => handleScheduleMovie(theater.id)}
//                   style={{
//                     color: "white",
//                     backgroundColor: "blue",
//                     border: "none",
//                     padding: "5px 10px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Schedule Movie
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* {isModalVisible && (
//         <MovieScheduleDialog
//           visible={isModalVisible}
//           onClose={() => setIsModalVisible(false)}
//           onMovieScheduled={(movie) =>
//             handleMovieScheduled(selectedTheaterId, movie)
//           }
//         />
//       )} */}
//       {isModalVisible && (
//         <MovieScheduleDialog
//           visible={isModalVisible}
//           onClose={() => setIsModalVisible(false)}
//           onMovieScheduled={(movie) =>
//             handleMovieScheduled(selectedTheaterId, movie)
//           }
//           theaterId={selectedTheaterId} // Pass the selected theater ID here
//         />
//       )}
//     </div>
//   );
// };

// export default Footer;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import MovieScheduleDialog from "../Merge/MovieSchedule";

// const Footer = () => {
//   const [theatersList, setTheatersList] = useState([]);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [selectedTheaterId, setSelectedTheaterId] = useState(null);

//   const [theater, setTheater] = useState(null);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [unavailableSeats, setUnavailableSeats] = useState([]);
//   const [data, setData] = useState([]);
//   const [seatData, setSeatData] = useState([]);
//   const [nonData, setNonData] = useState([]);

//   useEffect(() => {
//     const fetchTheaterData = async () => {
//       try {
//         const response = await axios.get("http://localhost:9001/theaters");
//         const fetchedData = response.data;

//         const updatedTheatersList = fetchedData.map((theater) => {
//           const totalSeats =
//             theater.rows && theater.columns
//               ? theater.rows * theater.columns - theater.nonSeatingSpaces
//               : 0;
//           return {
//             ...theater,
//             totalSeats,
//             scheduledMovie: theater.scheduledMovie || null,
//           };
//         });

//         setTheatersList(updatedTheatersList);
//       } catch (error) {
//         console.error("Error fetching theater data:", error);
//       }
//     };

//     fetchTheaterData();
//   }, []);

//   const deleteTheater = async (theaterId) => {
//     try {
//       await axios.delete(`http://localhost:9001/theaters/${theaterId}`);
//       setTheatersList((prevTheaters) =>
//         prevTheaters.filter((theater) => theater.id !== theaterId)
//       );
//     } catch (error) {
//       console.error("Error deleting theater:", error);
//     }
//   };

//   const handleScheduleMovie = (theaterId) => {
//     setSelectedTheaterId(theaterId);
//     setIsModalVisible(true);
//   };

//   const handleMovieScheduled = (theaterId, movie) => {
//     setTheatersList((prevTheaters) =>
//       prevTheaters.map((theater) =>
//         theater.id === theaterId
//           ? { ...theater, scheduledMovie: movie.name }
//           : theater
//       )
//     );
//     setIsModalVisible(false);
//   };

//   return (
//     <div>
//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Area</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>City</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//               Total Seats
//             </th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Movies</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//               Actions
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {theatersList.length > 0 ? ( // Check if theatersList is not empty
//             theatersList.map((theater) => (
//               <tr key={theater.id}>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {theater.name}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {theater.area}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {theater.city}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {theater.totalSeats}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {theater.scheduledMovie
//                     ? theater.scheduledMovie
//                     : "No movie scheduled"}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   <button
//                     onClick={() => deleteTheater(theater.id)}
//                     style={{
//                       color: "white",
//                       backgroundColor: "red",
//                       border: "none",
//                       padding: "5px 10px",
//                       cursor: "pointer",
//                       marginRight: "10px",
//                     }}
//                   >
//                     Delete
//                   </button>
//                   <button
//                     onClick={() => handleScheduleMovie(theater.id)}
//                     style={{
//                       color: "white",
//                       backgroundColor: "blue",
//                       border: "none",
//                       padding: "5px 10px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     Schedule Movie
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" style={{ textAlign: "center" }}>
//                 No theaters available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       {isModalVisible && (
//         <MovieScheduleDialog
//           visible={isModalVisible}
//           onClose={() => setIsModalVisible(false)}
//           onMovieScheduled={(movie) =>
//             handleMovieScheduled(selectedTheaterId, movie)
//           }
//           theaterId={selectedTheaterId} // Pass the selected theater ID here
//         />
//       )}
//     </div>
//   );
// };

// export default Footer;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import MovieScheduleDialog from "../Merge/MovieSchedule";

// const Footer = () => {
//   const [theatersList, setTheatersList] = useState([]);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [selectedTheaterId, setSelectedTheaterId] = useState(null);
//   const [scheduledMovie, setScheduledMovie] = useState(null);

//   useEffect(() => {
//     const fetchTheaterData = async () => {
//       try {
//         const response = await axios.get("http://localhost:9001/theaters");
//         const fetchedData = response.data;

//         const updatedTheatersList = fetchedData.map((theater) => {
//           const totalSeats =
//             theater.rows && theater.columns
//               ? theater.rows * theater.columns - theater.nonSeatingSpaces
//               : 0;
//           const scheduledMovie = setScheduledMovie(theater);
//           return {
//             ...theater,
//             totalSeats,
//             scheduledMovie,
//             // scheduledMovie: theater.movie_name || null,
//           };
//         });

//         setTheatersList(updatedTheatersList);
//       } catch (error) {
//         console.error("Error fetching theater data:", error);
//       }
//     };

//     fetchTheaterData();
//   }, []);

//   const deleteTheater = async (theaterId) => {
//     try {
//       await axios.delete(`http://localhost:9001/theaters/${theaterId}`);
//       setTheatersList((prevTheaters) =>
//         prevTheaters.filter((theater) => theater.id !== theaterId)
//       );
//     } catch (error) {
//       console.error("Error deleting theater:", error);
//     }
//   };

//   const handleScheduleMovie = (theaterId) => {
//     setSelectedTheaterId(theaterId);
//     setIsModalVisible(true);
//   };

//   const handleMovieScheduled = (movie) => {
//     setTheatersList((prevTheaters) =>
//       prevTheaters.map((theater) =>
//         theater.id === selectedTheaterId
//           ? { ...theater, scheduledMovie: movie.name }
//           : theater
//       )
//     );
//     setScheduledMovie(movie.name);
//     setIsModalVisible(false);
//   };

//   return (
//     <div>
//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Area</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>City</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//               Total Seats
//             </th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Movies</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//               Actions
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {theatersList.map((theater) => (
//             <tr key={theater.id}>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {theater.name}
//               </td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {theater.area}
//               </td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {theater.city}
//               </td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {theater.total_seats}
//               </td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {theater.scheduledMovie}
//               </td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 <button
//                   onClick={() => deleteTheater(theater.id)}
//                   style={{
//                     color: "white",
//                     backgroundColor: "red",
//                     border: "none",
//                     padding: "5px 10px",
//                     cursor: "pointer",
//                     marginRight: "10px",
//                   }}
//                 >
//                   Delete
//                 </button>
//                 <button
//                   onClick={() => handleScheduleMovie(theater.id)}
//                   style={{
//                     color: "white",
//                     backgroundColor: "blue",
//                     border: "none",
//                     padding: "5px 10px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Schedule Movie
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {isModalVisible && (
//         <MovieScheduleDialog
//           visible={isModalVisible}
//           onClose={() => setIsModalVisible(false)}
//           onMovieScheduled={handleMovieScheduled}
//           theaterId={selectedTheaterId}
//         />
//       )}
//     </div>
//   );
// };

// export default Footer;

import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieScheduleDialog from "../Merge/MovieSchedule";
import SeatLayoutModal from "../layout-components/Model"; // Import the new modal component

const Footer = () => {
  const [theatersList, setTheatersList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTheaterId, setSelectedTheaterId] = useState(null);
  const [scheduledMovie, setScheduledMovie] = useState(null);
  const [isSeatLayoutVisible, setIsSeatLayoutVisible] = useState(false);

  useEffect(() => {
    const fetchTheaterData = async () => {
      try {
        const response = await axios.get("http://localhost:9001/theaters");
        const fetchedData = response.data;

        const updatedTheatersList = fetchedData.map((theater) => {
          const totalSeats =
            theater.rows && theater.columns
              ? theater.rows * theater.columns - theater.nonSeatingSpaces
              : 0;
          return {
            ...theater,
            totalSeats,
          };
        });

        setTheatersList(updatedTheatersList);
      } catch (error) {
        console.error("Error fetching theater data:", error);
      }
    };

    fetchTheaterData();
  }, []);

  const deleteTheater = async (theaterId) => {
    try {
      await axios.delete(`http://localhost:9001/theaters/${theaterId}`);
      setTheatersList((prevTheaters) =>
        prevTheaters.filter((theater) => theater.id !== theaterId)
      );
    } catch (error) {
      console.error("Error deleting theater:", error);
    }
  };

  const handleScheduleMovie = (theaterId) => {
    setSelectedTheaterId(theaterId);
    setIsModalVisible(true);
  };

  const handleMovieScheduled = (movie) => {
    setTheatersList((prevTheaters) =>
      prevTheaters.map((theater) =>
        theater.id === selectedTheaterId
          ? { ...theater, scheduledMovie: movie.name }
          : theater
      )
    );
    setScheduledMovie(movie.name);
    setIsModalVisible(false);
  };

  const handleViewSeats = (theaterId) => {
    setSelectedTheaterId(theaterId);
    setIsSeatLayoutVisible(true);
  };

  return (
    <div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Area</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>City</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Total Seats
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Movies</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {theatersList.map((theater) => (
            <tr key={theater.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {theater.name}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {theater.area}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {theater.city}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {theater.total_seats}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {theater.scheduledMovie}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <button
                  onClick={() => deleteTheater(theater.id)}
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => handleScheduleMovie(theater.id)}
                  style={{
                    color: "white",
                    backgroundColor: "blue",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  Schedule Movie
                </button>
                <button
                  onClick={() => handleViewSeats(theater.id)}
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  View Seats
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalVisible && (
        <MovieScheduleDialog
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          onMovieScheduled={handleMovieScheduled}
          theaterId={selectedTheaterId}
        />
      )}
      {isSeatLayoutVisible && (
        <SeatLayoutModal
          visible={isSeatLayoutVisible}
          onClose={() => setIsSeatLayoutVisible(false)}
          theaterId={selectedTheaterId}
        />
      )}
    </div>
  );
};

export default Footer;
