// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Layout, Typography, Spin } from "antd";
// import "../components/styles/seatlayout.css";

// const { Content } = Layout;
// const { Title } = Typography;

// const getRowLabel = (index) => String.fromCharCode(65 + index);

// const FetchedSeatLayout = ({ theaterId }) => {
//   const [seatsData, setSeatsData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSeatsData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:9001/theater_seats/${theaterId}`
//         );
//         setSeatsData(response.data);
//       } catch (error) {
//         console.error("Error fetching seats data:", error);
//         setError("Error fetching seats data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSeatsData();
//   }, [theaterId]);

//   if (loading) {
//     return (
//       <Layout className="layout">
//         <Content>
//           <Spin />
//         </Content>
//       </Layout>
//     );
//   }

//   if (error) {
//     return (
//       <Layout className="layout">
//         <Content>
//           <Title level={3}>{error}</Title>
//         </Content>
//       </Layout>
//     );
//   }

//   // Ensure the correct response structure is checked here
//   if (!seatsData || !seatsData.t_rows || !seatsData.t_columns) {
//     return (
//       <Layout className="layout">
//         <Content>
//           <Title level={3}>No seat layout available for this theater.</Title>
//         </Content>
//       </Layout>
//     );
//   }

//   const rows = seatsData.t_rows; // Use t_rows
//   const columns = seatsData.t_columns; // Use t_columns

//   const allSeats = Array.from({ length: rows }, (_, row) =>
//     Array.from({ length: columns }, (_, col) => `${getRowLabel(row)}${col + 1}`)
//   );

//   return (
//     <Layout className="layout">
//       <Content>
//         <Title level={3}>Seating Layout</Title>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: `repeat(${columns}, 50px)`,
//             gap: "5px",
//           }}
//         >
//           {allSeats.flat().map((seat) => (
//             <div key={seat} className="seat available">
//               {seat}
//             </div>
//           ))}
//         </div>
//       </Content>
//     </Layout>
//   );
// };

// export default FetchedSeatLayout;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Layout, Typography, Spin } from "antd";
// import "../layout-components/FSeat.css";

// const { Content } = Layout;
// const { Title } = Typography;

// const getRowLabel = (index) => String.fromCharCode(65 + index);

// const FetchedSeatLayout = ({ theaterId }) => {
//   const [seatsData, setSeatsData] = useState(null);
//   const [nonSeatingSpaces, setNonSeatingSpaces] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const seatsResponse = await axios.get(
//           `http://localhost:9001/theater_seats/${theaterId}`
//         );

//         const nonSeatingResponse = await axios.get(
//           `http://localhost:9001/non_seating_space/${theaterId}`
//         );

//         setSeatsData(seatsResponse.data);
//         setNonSeatingSpaces(nonSeatingResponse.data);

//         console.log("Fetched Seats Data:", seatsResponse.data);
//         console.log("Fetched Non-Seating Spaces:", nonSeatingResponse.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError("Error fetching data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [theaterId]);

//   if (loading) {
//     return (
//       <Layout className="layout">
//         <Content>
//           <Spin />
//         </Content>
//       </Layout>
//     );
//   }

//   if (error) {
//     return (
//       <Layout className="layout">
//         <Content>
//           <Title level={3}>{error}</Title>
//         </Content>
//       </Layout>
//     );
//   }

//   if (!seatsData || !seatsData.t_rows || !seatsData.t_columns) {
//     return (
//       <Layout className="layout">
//         <Content>
//           <Title level={3}>No seat layout available for this theater.</Title>
//         </Content>
//       </Layout>
//     );
//   }

//   const rows = seatsData.t_rows;
//   const columns = seatsData.t_columns;

//   console.log("Rows:", rows, "Columns:", columns);

//   const allSeats = Array.from({ length: rows }, (_, row) =>
//     Array.from({ length: columns }, (_, col) => `${getRowLabel(row)}${col + 1}`)
//   );

//   console.log("All Seats:", allSeats.flat());

//   const nonSeatingSet = new Set(
//     nonSeatingSpaces
//       .map((space) => {
//         const row = getRowLabel(space.trow_number - 1);
//         const cellIndexes = space.cell_indexes.split(",").map(Number);
//         return cellIndexes.map((colIndex) => `${row}${colIndex}`);
//       })
//       .flat()
//   );

//   console.log("Non-Seating Set:", nonSeatingSet);

//   const handleSeatClick = (seat) => {
//     if (nonSeatingSet.has(seat)) {
//       return;
//     }

//     setSelectedSeats((prevSelectedSeats) =>
//       prevSelectedSeats.includes(seat)
//         ? prevSelectedSeats.filter((s) => s !== seat)
//         : [...prevSelectedSeats, seat]
//     );
//   };

//   return (
//     <Layout className="layout">
//       <Content>
//         <Title level={3}>Seating Layout</Title>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: `repeat(${columns}, 50px)`,
//             gap: "5px",
//           }}
//         >
//           {allSeats.flat().map((seat) => (
//             <div
//               key={seat}
//               className={`seat ${
//                 nonSeatingSet.has(seat)
//                   ? "non-seating"
//                   : selectedSeats.includes(seat)
//                   ? "selected"
//                   : "available"
//               }`}
//               onClick={() => handleSeatClick(seat)}
//             >
//               {seat}
//             </div>
//           ))}
//         </div>
//       </Content>
//     </Layout>
//   );
// };

// export default FetchedSeatLayout;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Layout, Typography, Spin } from "antd";
// import "../layout-components/FSeat.css";

// const { Content } = Layout;
// const { Title } = Typography;

// const getRowLabel = (index) => String.fromCharCode(65 + index);

// const FetchedSeatLayout = ({ theaterId }) => {
//   const [seatsData, setSeatsData] = useState(null);
//   const [nonSeatingSpaces, setNonSeatingSpaces] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const seatsResponse = await axios.get(
//           `http://localhost:9001/theater_seats/${theaterId}`
//         );

//         const nonSeatingResponse = await axios.get(
//           `http://localhost:9001/non_seating_space/${theaterId}`
//         );

//         setSeatsData(seatsResponse.data);
//         setNonSeatingSpaces(nonSeatingResponse.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError("Error fetching data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [theaterId]);

//   if (loading) {
//     return (
//       <Layout className="layout">
//         <Content>
//           <Spin />
//         </Content>
//       </Layout>
//     );
//   }

//   if (error) {
//     return (
//       <Layout className="layout">
//         <Content>
//           <Title level={3}>{error}</Title>
//         </Content>
//       </Layout>
//     );
//   }

//   if (!seatsData || !seatsData.t_rows || !seatsData.t_columns) {
//     return (
//       <Layout className="layout">
//         <Content>
//           <Title level={3}>No seat layout available for this theater.</Title>
//         </Content>
//       </Layout>
//     );
//   }

//   const rows = seatsData.t_rows;
//   const columns = seatsData.t_columns;

//   const allSeats = Array.from({ length: rows }, (_, row) =>
//     Array.from({ length: columns }, (_, col) => `${getRowLabel(row)}${col + 1}`)
//   );

//   const nonSeatingSet = new Set(
//     nonSeatingSpaces.flatMap((space) => {
//       const row = getRowLabel(space.trow_number - 1); // Adjusting for 0-based index
//       const cellIndexes = space.cell_indexes.split(",").map(Number);
//       return cellIndexes.map((colIndex) => `${row}${colIndex}`);
//     })
//   );

//   const handleSeatClick = (seat) => {
//     if (nonSeatingSet.has(seat)) {
//       return; // Prevent selecting non-seating spaces
//     }

//     setSelectedSeats((prevSelectedSeats) =>
//       prevSelectedSeats.includes(seat)
//         ? prevSelectedSeats.filter((s) => s !== seat)
//         : [...prevSelectedSeats, seat]
//     );
//   };

//   return (
//     <Layout className="layout">
//       <Content>
//         <Title level={3}>Seating Layout</Title>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: `repeat(${columns}, 50px)`,
//             gap: "5px",
//           }}
//         >
//           {allSeats.flat().map((seat) => (
//             <div
//               key={seat}
//               className={`seat ${
//                 nonSeatingSet.has(seat)
//                   ? "non-seating" // Different class for non-seating spaces
//                   : selectedSeats.includes(seat)
//                   ? "selected"
//                   : "available"
//               }`}
//               onClick={() => handleSeatClick(seat)}
//               style={{
//                 backgroundColor: nonSeatingSet.has(seat)
//                   ? "lightgray" // Color for non-seating spaces
//                   : selectedSeats.includes(seat)
//                   ? "green" // Color for selected seats
//                   : "white", // Color for available seats
//                 cursor: nonSeatingSet.has(seat) ? "not-allowed" : "pointer", // Change cursor for non-seating spaces
//               }}
//             >
//               {seat}
//             </div>
//           ))}
//         </div>
//       </Content>
//     </Layout>
//   );
// };

// export default FetchedSeatLayout;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Layout, Typography, Spin, Select } from "antd";
// import "../layout-components/FSeat.css";

// const { Content } = Layout;
// const { Title } = Typography;

// const getRowLabel = (index) => String.fromCharCode(65 + index);

// const FetchedSeatLayout = ({ theaterId }) => {
//   const [seatsData, setSeatsData] = useState(null);
//   const [nonSeatingSpaces, setNonSeatingSpaces] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [movieDates, setMovieDates] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch seat layout data
//         const seatsResponse = await axios.get(
//           `http://localhost:9001/theater_seats/${theaterId}`
//         );
//         setSeatsData(seatsResponse.data);

//         // Fetch non-seating space data
//         const nonSeatingResponse = await axios.get(
//           `http://localhost:9001/non_seating_space/${theaterId}`
//         );
//         setNonSeatingSpaces(nonSeatingResponse.data);

//         // Fetch movie dates
//         const datesResponse = await axios.get(
//           `http://localhost:9001/theaters-movies`
//         );
//         const filteredDates = datesResponse.data
//           .filter((tm) => tm.theater_id === theaterId) // Filter dates for the specific theater
//           .map((tm) => ({ startDate: tm.start_date, endDate: tm.end_date }));

//         // Extract unique dates from the filtered data
//         const uniqueDates = [
//           ...new Set(filteredDates.map((date) => date.startDate)),
//         ];
//         setMovieDates(uniqueDates);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError("Error fetching data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [theaterId]);

//   const handleDateChange = (value) => {
//     setSelectedDate(value);
//     // Clear selected seats when date changes
//     setSelectedSeats([]);
//   };

//   if (loading) {
//     return (
//       <Layout className="layout">
//         <Content>
//           <Spin />
//         </Content>
//       </Layout>
//     );
//   }

//   if (error) {
//     return (
//       <Layout className="layout">
//         <Content>
//           <Title level={3}>{error}</Title>
//         </Content>
//       </Layout>
//     );
//   }

//   if (!seatsData || !seatsData.t_rows || !seatsData.t_columns) {
//     return (
//       <Layout className="layout">
//         <Content>
//           <Title level={3}>No seat layout available for this theater.</Title>
//         </Content>
//       </Layout>
//     );
//   }

//   const rows = seatsData.t_rows;
//   const columns = seatsData.t_columns;

//   const allSeats = Array.from({ length: rows }, (_, row) =>
//     Array.from({ length: columns }, (_, col) => `${getRowLabel(row)}${col + 1}`)
//   );

//   const nonSeatingSet = new Set(
//     nonSeatingSpaces.flatMap((space) => {
//       const row = getRowLabel(space.trow_number - 1); // Adjusting for 0-based index
//       const cellIndexes = space.cell_indexes.split(",").map(Number);
//       return cellIndexes.map((colIndex) => `${row}${colIndex}`);
//     })
//   );

//   const handleSeatClick = (seat) => {
//     if (nonSeatingSet.has(seat)) {
//       return; // Prevent selecting non-seating spaces
//     }

//     setSelectedSeats((prevSelectedSeats) =>
//       prevSelectedSeats.includes(seat)
//         ? prevSelectedSeats.filter((s) => s !== seat)
//         : [...prevSelectedSeats, seat]
//     );
//   };

//   return (
//     <Layout className="layout">
//       <Content>
//         <Title level={3}>Seating Layout</Title>

//         {/* Date Selection */}
//         <Select
//           placeholder="Select a date"
//           style={{ width: "200px", marginBottom: "20px" }}
//           onChange={handleDateChange}
//         >
//           {movieDates.map((date) => (
//             <Select.Option key={date} value={date}>
//               {date}
//             </Select.Option>
//           ))}
//         </Select>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: `repeat(${columns}, 50px)`,
//             gap: "5px",
//           }}
//         >
//           {allSeats.flat().map((seat) => (
//             <div
//               key={seat}
//               className={`seat ${
//                 nonSeatingSet.has(seat)
//                   ? "non-seating" // Different class for non-seating spaces
//                   : selectedSeats.includes(seat)
//                   ? "selected"
//                   : "available"
//               }`}
//               onClick={() => handleSeatClick(seat)}
//               style={{
//                 backgroundColor: nonSeatingSet.has(seat)
//                   ? "lightgray" // Color for non-seating spaces
//                   : selectedSeats.includes(seat)
//                   ? "green" // Color for selected seats
//                   : "white", // Color for available seats
//                 cursor: nonSeatingSet.has(seat) ? "not-allowed" : "pointer", // Change cursor for non-seating spaces
//               }}
//             >
//               {seat}
//             </div>
//           ))}
//         </div>
//       </Content>
//     </Layout>
//   );
// };

// export default FetchedSeatLayout;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Layout, Typography, Spin, Select } from "antd";
// import "../layout-components/FSeat.css";

// const { Content } = Layout;
// const { Title } = Typography;

// const getRowLabel = (index) => String.fromCharCode(65 + index);

// const FetchedSeatLayout = ({ theaterId, movieId }) => {
//   const [seatsData, setSeatsData] = useState(null);
//   const [nonSeatingSpaces, setNonSeatingSpaces] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [movieDates, setMovieDates] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch seat layout data
//         const seatsResponse = await axios.get(
//           `http://localhost:9001/theater_seats/${theaterId}`
//         );
//         setSeatsData(seatsResponse.data);

//         // Fetch non-seating space data
//         const nonSeatingResponse = await axios.get(
//           `http://localhost:9001/non_seating_space/${theaterId}`
//         );
//         setNonSeatingSpaces(nonSeatingResponse.data);

//         // Fetch movie dates using theaterId and movieId
//         const datesResponse = await axios.get(
//           `http://localhost:9001/theaters-movies?theaterId=${theaterId}/movieId=${movieId}` // Updated API call
//         );

//         // Filter for unique dates for the specific theater and movie
//         const uniqueDates = [
//           ...new Set(
//             datesResponse.data.map((tm) => tm.start_date) // Get only start dates
//           ),
//         ];
//         setMovieDates(uniqueDates);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError("Error fetching data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [theaterId, movieId]); // Added movieId as a dependency

//   const handleDateChange = (value) => {
//     setSelectedDate(value);
//     // Clear selected seats when date changes
//     setSelectedSeats([]);
//   };

//   if (loading) {
//     return (
//       <Layout className="layout">
//         <Content>
//           <Spin />
//         </Content>
//       </Layout>
//     );
//   }

//   if (error) {
//     return (
//       <Layout className="layout">
//         <Content>
//           <Title level={3}>{error}</Title>
//         </Content>
//       </Layout>
//     );
//   }

//   if (!seatsData || !seatsData.t_rows || !seatsData.t_columns) {
//     return (
//       <Layout className="layout">
//         <Content>
//           <Title level={3}>No seat layout available for this theater.</Title>
//         </Content>
//       </Layout>
//     );
//   }

//   const rows = seatsData.t_rows;
//   const columns = seatsData.t_columns;

//   const allSeats = Array.from({ length: rows }, (_, row) =>
//     Array.from({ length: columns }, (_, col) => `${getRowLabel(row)}${col + 1}`)
//   );

//   const nonSeatingSet = new Set(
//     nonSeatingSpaces.flatMap((space) => {
//       const row = getRowLabel(space.trow_number - 1);
//       const cellIndexes = space.cell_indexes.split(",").map(Number);
//       return cellIndexes.map((colIndex) => `${row}${colIndex}`);
//     })
//   );

//   const handleSeatClick = (seat) => {
//     if (nonSeatingSet.has(seat)) {
//       return; // Prevent selecting non-seating spaces
//     }

//     setSelectedSeats((prevSelectedSeats) =>
//       prevSelectedSeats.includes(seat)
//         ? prevSelectedSeats.filter((s) => s !== seat)
//         : [...prevSelectedSeats, seat]
//     );
//   };

//   return (
//     <Layout className="layout">
//       <Content>
//         <Title level={3}>Seating Layout</Title>

//         {/* Date Selection */}
//         <Select
//           placeholder="Select a date"
//           style={{ width: "200px", marginBottom: "20px" }}
//           onChange={handleDateChange}
//           value={selectedDate} // Set the value for the Select component
//         >
//           {movieDates.map((date) => (
//             <Select.Option key={date} value={date}>
//               {date}
//             </Select.Option>
//           ))}
//         </Select>

//         {selectedDate && (
//           <Title level={4} style={{ marginBottom: "20px" }}>
//             Selected Date: {selectedDate}
//           </Title>
//         )}

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: `repeat(${columns}, 50px)`,
//             gap: "5px",
//           }}
//         >
//           {allSeats.flat().map((seat) => (
//             <div
//               key={seat}
//               className={`seat ${
//                 nonSeatingSet.has(seat)
//                   ? "non-seating"
//                   : selectedSeats.includes(seat)
//                   ? "selected"
//                   : "available"
//               }`}
//               onClick={() => handleSeatClick(seat)}
//               style={{
//                 backgroundColor: nonSeatingSet.has(seat)
//                   ? "lightgray" // Color for non-seating spaces
//                   : selectedSeats.includes(seat)
//                   ? "green" // Color for selected seats
//                   : "white", // Color for available seats
//                 cursor: nonSeatingSet.has(seat) ? "not-allowed" : "pointer", // Change cursor for non-seating spaces
//               }}
//             >
//               {seat}
//             </div>
//           ))}
//         </div>
//       </Content>
//     </Layout>
//   );
// };

// export default FetchedSeatLayout;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Layout, Typography, Spin, Button, message } from "antd";
// import "../layout-components/FSeat.css";

// const { Content } = Layout;
// const { Title } = Typography;

// const getRowLabel = (index) => String.fromCharCode(65 + index);

// const getDatesInRange = (startDate, endDate) => {
//   const dates = [];
//   const currentDate = new Date(startDate);
//   currentDate.setDate(currentDate.getDate() + 1);
//   currentDate.setHours(0, 0, 0, 0);
//   const end = new Date(endDate);
//   end.setDate(end.getDate() + 1);
//   end.setHours(0, 0, 0, 0);

//   while (currentDate <= end) {
//     dates.push(currentDate.toISOString().split("T")[0]);
//     currentDate.setDate(currentDate.getDate() + 1);
//   }

//   return dates;
// };

// const FetchedSeatLayout = ({
//   theaterId,
//   movieId,
//   theaterName,
//   movieName,
//   onClose,
// }) => {
//   const [seatsData, setSeatsData] = useState(null);
//   const [nonSeatingSpaces, setNonSeatingSpaces] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [bookedSeats, setBookedSeats] = useState([]); // State for booked seats
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [movieDates, setMovieDates] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [dateOptions, setDateOptions] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const seatsResponse = await axios.get(
//           `http://localhost:9001/theater_seats/${theaterId}`
//         );
//         setSeatsData(seatsResponse.data);

//         const nonSeatingResponse = await axios.get(
//           `http://localhost:9001/non_seating_space/${theaterId}`
//         );
//         setNonSeatingSpaces(nonSeatingResponse.data);

//         const datesResponse = await axios.get(
//           `http://localhost:9001/theaters-movies/${theaterId}/${movieId}`
//         );

//         const { start_date, end_date } = datesResponse.data;
//         if (start_date && end_date) {
//           const allDates = getDatesInRange(start_date, end_date);
//           setMovieDates(allDates);
//           setDateOptions(allDates.map((date) => new Date(date)));
//         } else {
//           console.warn("No valid start_date or end_date returned from API.");
//         }
//       } catch (error) {
//         console.error(
//           "Error fetching data:",
//           error.response ? error.response.data : error.message
//         );
//         setError("Error fetching data.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [theaterId, movieId]);

//   useEffect(() => {
//     // Fetch booked seats for the selected date whenever it changes
//     const fetchBookedSeats = async () => {
//       if (selectedDate) {
//         try {
//           const response = await axios.get(
//             `http://localhost:9001/moviebooking/${theaterId}/${movieId}/${selectedDate}`
//           );
//           setBookedSeats(response.data.bookedSeats || []); // Default to an empty array if no booked seats
//         } catch (error) {
//           console.error("Error fetching booked seats:", error);
//           setBookedSeats([]); // Ensure bookedSeats is reset on error
//         }
//       }
//     };

//     fetchBookedSeats();
//   }, [selectedDate, theaterId, movieId]);

//   const handleDateChange = (date) => {
//     setSelectedDate(date.toISOString().split("T")[0]);
//     setSelectedSeats([]);
//   };

//   const handleSeatClick = (seat) => {
//     if (
//       nonSeatingSpaces.some((space) => space.seat === seat) ||
//       bookedSeats.includes(seat) // Disable already booked seats
//     ) {
//       return;
//     }
//     setSelectedSeats((prev) =>
//       prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
//     );
//   };

//   const handleBookingSave = async () => {
//     if (!selectedDate || selectedSeats.length === 0) {
//       message.error("Please select a date and at least one seat.");
//       return;
//     }

//     const bookingData = {
//       theater_id: theaterId,
//       theater_name: theaterName,
//       movie_id: movieId,
//       movie_name: movieName,
//       bookingdate: selectedDate,
//       seats: JSON.stringify(selectedSeats),
//     };

//     try {
//       await axios.post("http://localhost:9001/moviebooking", bookingData);
//       message.success("Booking saved successfully.");

//       // Update bookedSeats to include newly booked seats
//       setBookedSeats((prev) => [...prev, ...selectedSeats]);

//       onClose();
//     } catch (error) {
//       message.error("Error saving booking.");
//     }
//   };

//   if (loading) {
//     return <Spin />;
//   }

//   if (error) {
//     return <Title level={3}>{error}</Title>;
//   }

//   if (!seatsData || !seatsData.t_rows || !seatsData.t_columns) {
//     return <Title level={3}>No seat layout available.</Title>;
//   }

//   const rows = seatsData.t_rows;
//   const columns = seatsData.t_columns;

//   const allSeats = Array.from({ length: rows }, (_, row) =>
//     Array.from({ length: columns }, (_, col) => `${getRowLabel(row)}${col + 1}`)
//   );

//   return (
//     <Layout className="layout">
//       <Content>
//         <Title level={3}>Seating Layout</Title>

//         <div className="date-picker-container">
//           <button className="scroll-button prev" /* Add logic to scroll left */>
//             &lt;
//           </button>

//           <div className="date-picker">
//             {dateOptions.length > 0 ? (
//               dateOptions.map((date) => {
//                 const dateString = date.toISOString().split("T")[0];
//                 const day = date.getDate();
//                 const isToday =
//                   dateString === new Date().toISOString().split("T")[0];

//                 return (
//                   <button
//                     key={dateString}
//                     className={`date-button ${
//                       selectedDate === dateString ? "selected" : ""
//                     } ${isToday ? "today" : ""}`}
//                     onClick={() => handleDateChange(date)}
//                   >
//                     <span className="day">{day}</span>
//                     <span className="month">
//                       {date.toLocaleString("default", { month: "short" })}
//                     </span>
//                   </button>
//                 );
//               })
//             ) : (
//               <Title level={4}>No available dates</Title>
//             )}
//           </div>

//           <button
//             className="scroll-button next" /* Add logic to scroll right */
//           >
//             &gt;
//           </button>
//         </div>

//         <div className="seating-layout">
//           {allSeats.map((row, rowIndex) => (
//             <div key={rowIndex} className="seating-row">
//               {row.map((seat) => {
//                 const isNonSeating = nonSeatingSpaces.some(
//                   (space) => space.seat === seat
//                 );
//                 const isBooked = bookedSeats.includes(seat); // Check if seat is booked
//                 return (
//                   <Button
//                     key={seat}
//                     className={`seat ${
//                       selectedSeats.includes(seat) ? "selected" : ""
//                     } ${isNonSeating ? "non-seating" : ""} ${
//                       isBooked ? "booked" : ""
//                     }`}
//                     onClick={() => handleSeatClick(seat)}
//                     disabled={isNonSeating || isBooked} // Disable non-seating spaces or booked seats
//                   >
//                     {seat}
//                   </Button>
//                 );
//               })}
//             </div>
//           ))}
//         </div>

//         <Button
//           type="primary"
//           onClick={handleBookingSave}
//           style={{ marginTop: 16 }}
//         >
//           Save Booking
//         </Button>
//       </Content>
//     </Layout>
//   );
// };

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Layout, Typography, Spin, Button, message } from "antd";
// import "../layout-components/FSeat.css";

// const { Content } = Layout;
// const { Title } = Typography;

// // Helper function to get row labels
// const getRowLabel = (index) => String.fromCharCode(65 + index);

// // Helper function to get all dates in a specified range
// const getDatesInRange = (startDate, endDate) => {
//   const dates = [];
//   const currentDate = new Date(startDate);
//   currentDate.setDate(currentDate.getDate() + 1); // Start from the next day
//   currentDate.setHours(0, 0, 0, 0);
//   const end = new Date(endDate);
//   end.setDate(end.getDate() + 1);
//   end.setHours(0, 0, 0, 0);

//   while (currentDate <= end) {
//     dates.push(currentDate.toISOString().split("T")[0]);
//     currentDate.setDate(currentDate.getDate() + 1);
//   }

//   return dates;
// };

// const FetchedSeatLayout = ({
//   theaterId,
//   movieId,
//   theaterName,
//   movieName,
//   onClose,
// }) => {
//   const [seatsData, setSeatsData] = useState(null);
//   const [nonSeatingSpaces, setNonSeatingSpaces] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [bookedSeats, setBookedSeats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [movieDates, setMovieDates] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [dateOptions, setDateOptions] = useState([]);

//   // Fetch seat data, non-seating spaces, and movie dates
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const seatsResponse = await axios.get(
//           `http://localhost:9001/theater_seats/${theaterId}`
//         );
//         setSeatsData(seatsResponse.data);

//         const nonSeatingResponse = await axios.get(
//           `http://localhost:9001/non_seating_space/${theaterId}`
//         );
//         console.log("Non-seating spaces:", nonSeatingResponse.data);
//         setNonSeatingSpaces(nonSeatingResponse.data);

//         const datesResponse = await axios.get(
//           `http://localhost:9001/theaters-movies/${theaterId}/${movieId}`
//         );

//         const { start_date, end_date } = datesResponse.data;
//         if (start_date && end_date) {
//           const allDates = getDatesInRange(start_date, end_date);
//           setMovieDates(allDates);
//           setDateOptions(allDates.map((date) => new Date(date)));
//         } else {
//           console.warn("No valid start_date or end_date returned from API.");
//         }
//       } catch (error) {
//         console.error(
//           "Error fetching data:",
//           error.response ? error.response.data : error.message
//         );
//         setError("Error fetching data.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [theaterId, movieId]);

//   // Fetch booked seats based on selected date
//   useEffect(() => {
//     const fetchBookedSeats = async () => {
//       if (selectedDate) {
//         try {
//           const response = await axios.get(
//             `http://localhost:9001/moviebooking/${theaterId}/${movieId}/${selectedDate}`
//           );
//           console.log("Booked seats response:", response.data);
//           setBookedSeats(response.data.bookedSeats || []);
//         } catch (error) {
//           console.error("Error fetching booked seats:", error);
//           setBookedSeats([]);
//         }
//       }
//     };

//     fetchBookedSeats();
//   }, [selectedDate, theaterId, movieId]);

//   // Handle date change
//   const handleDateChange = (date) => {
//     setSelectedDate(date.toISOString().split("T")[0]);
//     setSelectedSeats([]);
//   };

//   // Handle seat click event
//   const handleSeatClick = (seat) => {
//     if (
//       nonSeatingSpaces.some((space) =>
//         space.cell_indexes.split(",").includes(seat)
//       ) ||
//       bookedSeats.includes(seat)
//     ) {
//       return;
//     }
//     setSelectedSeats((prev) =>
//       prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
//     );
//   };

//   // Handle booking save event
//   const handleBookingSave = async () => {
//     if (!selectedDate || selectedSeats.length === 0) {
//       message.error("Please select a date and at least one seat.");
//       return;
//     }

//     const bookingData = {
//       theater_id: theaterId,
//       theater_name: theaterName,
//       movie_id: movieId,
//       movie_name: movieName,
//       bookingdate: selectedDate,
//       seats: JSON.stringify(selectedSeats),
//     };

//     try {
//       await axios.post("http://localhost:9001/moviebooking", bookingData);
//       message.success("Booking saved successfully.");

//       // Update bookedSeats to include newly booked seats
//       setBookedSeats((prev) => [...prev, ...selectedSeats]);

//       onClose();
//     } catch (error) {
//       message.error("Error saving booking.");
//       console.error("Error saving booking:", error);
//     }
//   };

//   if (loading) {
//     return <Spin />;
//   }

//   if (error) {
//     return <Title level={3}>{error}</Title>;
//   }

//   if (!seatsData || !seatsData.t_rows || !seatsData.t_columns) {
//     return <Title level={3}>No seat layout available.</Title>;
//   }

//   const rows = seatsData.t_rows;
//   const columns = seatsData.t_columns;

//   const allSeats = Array.from({ length: rows }, (_, row) =>
//     Array.from({ length: columns }, (_, col) => `${getRowLabel(row)}${col + 1}`)
//   );

//   return (
//     <Layout className="layout">
//       <Content>
//         <Title level={3}>Seating Layout</Title>

//         <div className="date-picker-container">
//           <button className="scroll-button prev" /* Add logic to scroll left */>
//             &lt;
//           </button>

//           <div className="date-picker">
//             {dateOptions.length > 0 ? (
//               dateOptions.map((date) => {
//                 const dateString = date.toISOString().split("T")[0];
//                 const day = date.getDate();
//                 const isToday =
//                   dateString === new Date().toISOString().split("T")[0];

//                 return (
//                   <button
//                     key={dateString}
//                     className={`date-button ${
//                       selectedDate === dateString ? "selected" : ""
//                     } ${isToday ? "today" : ""}`}
//                     onClick={() => handleDateChange(date)}
//                   >
//                     <span className="day">{day}</span>
//                     <span className="month">
//                       {date.toLocaleString("default", { month: "short" })}
//                     </span>
//                   </button>
//                 );
//               })
//             ) : (
//               <Title level={4}>No available dates</Title>
//             )}
//           </div>

//           <button
//             className="scroll-button next" /* Add logic to scroll right */
//           >
//             &gt;
//           </button>
//         </div>

//         <div className="seating-layout">
//           {allSeats.map((row, rowIndex) => (
//             <div key={rowIndex} className="seating-row">
//               {row.map((seat) => {
//                 const isNonSeating = nonSeatingSpaces.some((space) =>
//                   space.cell_indexes.split(",").includes(seat)
//                 );
//                 const isBooked = bookedSeats.includes(seat);

//                 return (
//                   <Button
//                     key={seat}
//                     className={`seat ${
//                       selectedSeats.includes(seat) ? "selected" : ""
//                     } ${isNonSeating ? "non-seating" : ""} ${
//                       isBooked ? "booked" : ""
//                     }`}
//                     onClick={() => handleSeatClick(seat)}
//                     disabled={isNonSeating || isBooked}
//                   >
//                     {seat}
//                   </Button>
//                 );
//               })}
//             </div>
//           ))}
//         </div>

//         <Button
//           type="primary"
//           onClick={handleBookingSave}
//           style={{ marginTop: 16 }}
//         >
//           Save Booking
//         </Button>
//       </Content>
//     </Layout>
//   );
// };

// export default FetchedSeatLayout;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Layout, Typography, Spin, Button, message } from "antd";
// import "../layout-components/FSeat.css";

// const { Content } = Layout;
// const { Title } = Typography;

// // Helper function to get row labels
// const getRowLabel = (index) => String.fromCharCode(65 + index);

// // Helper function to get all dates in a specified range
// const getDatesInRange = (startDate, endDate) => {
//   const dates = [];
//   const currentDate = new Date(startDate);
//   currentDate.setDate(currentDate.getDate() + 1); // Start from the next day
//   currentDate.setHours(0, 0, 0, 0);
//   const end = new Date(endDate);
//   end.setDate(end.getDate() + 1);
//   end.setHours(0, 0, 0, 0);

//   while (currentDate <= end) {
//     dates.push(currentDate.toISOString().split("T")[0]);
//     currentDate.setDate(currentDate.getDate() + 1);
//   }

//   return dates;
// };

// const FetchedSeatLayout = ({
//   theaterId,
//   movieId,
//   theaterName,
//   movieName,
//   onClose,
// }) => {
//   const [seatsData, setSeatsData] = useState(null);
//   const [nonSeatingSpaces, setNonSeatingSpaces] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [bookedSeats, setBookedSeats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [movieDates, setMovieDates] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [dateOptions, setDateOptions] = useState([]);

//   // Fetch seat data, non-seating spaces, and movie dates
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const seatsResponse = await axios.get(
//           `http://localhost:9001/theater_seats/${theaterId}`
//         );
//         setSeatsData(seatsResponse.data);

//         const nonSeatingResponse = await axios.get(
//           `http://localhost:9001/non_seating_space/${theaterId}`
//         );
//         setNonSeatingSpaces(nonSeatingResponse.data);

//         const datesResponse = await axios.get(
//           `http://localhost:9001/theaters-movies/${theaterId}/${movieId}`
//         );

//         const { start_date, end_date } = datesResponse.data;
//         if (start_date && end_date) {
//           const allDates = getDatesInRange(start_date, end_date);
//           setMovieDates(allDates);
//           setDateOptions(allDates.map((date) => new Date(date)));
//         } else {
//           console.warn("No valid start_date or end_date returned from API.");
//         }
//       } catch (error) {
//         setError("Error fetching data.");
//         console.error(
//           "Error fetching data:",
//           error.response ? error.response.data : error.message
//         );
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [theaterId, movieId]);

//   // Fetch booked seats based on selected date
//   useEffect(() => {
//     const fetchBookedSeats = async () => {
//       if (selectedDate) {
//         try {
//           const response = await axios.get(
//             `http://localhost:9001/moviebooking/${theaterId}/${movieId}/${selectedDate}`
//           );
//           setBookedSeats(response.data.bookedSeats || []);
//         } catch (error) {
//           console.error("Error fetching booked seats:", error);
//           setBookedSeats([]);
//         }
//       }
//     };

//     fetchBookedSeats();
//   }, [selectedDate, theaterId, movieId]);

//   // Handle date change
//   const handleDateChange = (date) => {
//     setSelectedDate(date.toISOString().split("T")[0]);
//     setSelectedSeats([]);
//   };

//   // Handle seat click event
//   const handleSeatClick = (seat) => {
//     if (
//       nonSeatingSpaces.some((space) =>
//         space.cell_indexes.split(",").includes(seat)
//       ) ||
//       bookedSeats.includes(seat)
//     ) {
//       return; // Prevent interaction with non-seating and booked seats
//     }
//     setSelectedSeats((prev) =>
//       prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
//     );
//   };

//   // Handle booking save event
//   const handleBookingSave = async () => {
//     if (!selectedDate || selectedSeats.length === 0) {
//       message.error("Please select a date and at least one seat.");
//       return;
//     }

//     const bookingData = {
//       theater_id: theaterId,
//       theater_name: theaterName,
//       movie_id: movieId,
//       movie_name: movieName,
//       bookingdate: selectedDate,
//       seats: JSON.stringify(selectedSeats),
//     };

//     try {
//       await axios.post("http://localhost:9001/moviebooking", bookingData);
//       message.success("Booking saved successfully.");

//       // Update bookedSeats to include newly booked seats
//       setBookedSeats((prev) => [...prev, ...selectedSeats]);

//       onClose();
//     } catch (error) {
//       message.error("Error saving booking.");
//       console.error("Error saving booking:", error);
//     }
//   };

//   if (loading) {
//     return <Spin />;
//   }

//   if (error) {
//     return <Title level={3}>{error}</Title>;
//   }

//   if (!seatsData || !seatsData.t_rows || !seatsData.t_columns) {
//     return <Title level={3}>No seat layout available.</Title>;
//   }

//   const rows = seatsData.t_rows;
//   const columns = seatsData.t_columns;

//   const allSeats = Array.from({ length: rows }, (_, row) =>
//     Array.from({ length: columns }, (_, col) => `${getRowLabel(row)}${col + 1}`)
//   );

//   return (
//     <Layout className="layout">
//       <Content>
//         <Title level={3}>Seating Layout</Title>

//         <div className="date-picker-container">
//           <button className="scroll-button prev">
//             {/* Scroll left logic */}&lt;
//           </button>

//           <div className="date-picker">
//             {dateOptions.length > 0 ? (
//               dateOptions.map((date) => {
//                 const dateString = date.toISOString().split("T")[0];
//                 const day = date.getDate();
//                 const isToday =
//                   dateString === new Date().toISOString().split("T")[0];

//                 return (
//                   <button
//                     key={dateString}
//                     className={`date-button ${
//                       selectedDate === dateString ? "selected" : ""
//                     } ${isToday ? "today" : ""}`}
//                     onClick={() => handleDateChange(date)}
//                   >
//                     <span className="day">{day}</span>
//                     <span className="month">
//                       {date.toLocaleString("default", { month: "short" })}
//                     </span>
//                   </button>
//                 );
//               })
//             ) : (
//               <Title level={4}>No available dates</Title>
//             )}
//           </div>

//           <button className="scroll-button next">
//             {/* Scroll right logic */}&gt;
//           </button>
//         </div>

//         <div className="seating-layout">
//           {allSeats.map((row, rowIndex) => (
//             <div key={rowIndex} className="seating-row">
//               {row.map((seat) => {
//                 const isNonSeating = nonSeatingSpaces.some((space) =>
//                   space.cell_indexes.split(",").includes(seat)
//                 );
//                 const isBooked = bookedSeats.includes(seat);

//                 return (
//                   <Button
//                     key={seat}
//                     className={`seat ${
//                       selectedSeats.includes(seat) ? "selected" : ""
//                     } ${isNonSeating ? "non-seating" : ""} ${
//                       isBooked ? "booked" : ""
//                     }`}
//                     onClick={() => handleSeatClick(seat)}
//                     disabled={isNonSeating || isBooked}
//                   >
//                     {seat}
//                   </Button>
//                 );
//               })}
//             </div>
//           ))}
//         </div>

//         <Button
//           type="primary"
//           onClick={handleBookingSave}
//           style={{ marginTop: 16 }}
//         >
//           Save Booking
//         </Button>
//       </Content>
//     </Layout>
//   );
// };

// export default FetchedSeatLayout;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Layout, Typography, Spin, Button, message } from "antd";
// import "../layout-components/FSeat.css";

// const { Content } = Layout;
// const { Title } = Typography;

// // Helper function to get row labels
// const getRowLabel = (index) => String.fromCharCode(65 + index);

// // Helper function to get all dates in a specified range
// const getDatesInRange = (startDate, endDate) => {
//   const dates = [];
//   const currentDate = new Date(startDate);
//   currentDate.setDate(currentDate.getDate() + 1); // Start from the next day
//   currentDate.setHours(0, 0, 0, 0);
//   const end = new Date(endDate);
//   end.setDate(end.getDate() + 1);
//   end.setHours(0, 0, 0, 0);

//   while (currentDate <= end) {
//     dates.push(currentDate.toISOString().split("T")[0]);
//     currentDate.setDate(currentDate.getDate() + 1);
//   }

//   return dates;
// };

// const FetchedSeatLayout = ({
//   theaterId,
//   movieId,
//   theaterName,
//   movieName,
//   onClose,
// }) => {
//   const [seatsData, setSeatsData] = useState(null);
//   const [nonSeatingSpaces, setNonSeatingSpaces] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [bookedSeats, setBookedSeats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [movieDates, setMovieDates] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [dateOptions, setDateOptions] = useState([]);

//   // Fetch seat data, non-seating spaces, and movie dates
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const seatsResponse = await axios.get(
//           `http://localhost:9001/theater_seats/${theaterId}`
//         );
//         setSeatsData(seatsResponse.data);

//         const nonSeatingResponse = await axios.get(
//           `http://localhost:9001/non_seating_space/${theaterId}`
//         );
//         setNonSeatingSpaces(nonSeatingResponse.data);

//         const datesResponse = await axios.get(
//           `http://localhost:9001/theaters-movies/${theaterId}/${movieId}`
//         );

//         const { start_date, end_date } = datesResponse.data;
//         if (start_date && end_date) {
//           const allDates = getDatesInRange(start_date, end_date);
//           setMovieDates(allDates);
//           setDateOptions(allDates.map((date) => new Date(date)));
//         } else {
//           console.warn("No valid start_date or end_date returned from API.");
//         }
//       } catch (error) {
//         setError("Error fetching data.");
//         console.error(
//           "Error fetching data:",
//           error.response ? error.response.data : error.message
//         );
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [theaterId, movieId]);

//   // Fetch booked seats based on selected date
//   useEffect(() => {
//     const fetchBookedSeats = async () => {
//       if (selectedDate) {
//         try {
//           const response = await axios.get(
//             `http://localhost:9001/moviebooking/${theaterId}/${movieId}/${selectedDate}`
//           );
//           setBookedSeats(response.data.bookedSeats || []);
//         } catch (error) {
//           console.error("Error fetching booked seats:", error);
//           setBookedSeats([]);
//         }
//       }
//     };

//     fetchBookedSeats();
//   }, [selectedDate, theaterId, movieId]);

//   // Handle date change
//   const handleDateChange = (date) => {
//     setSelectedDate(date.toISOString().split("T")[0]);
//     setSelectedSeats([]); // Clear previously selected seats when date changes
//   };

//   // Handle seat click event
//   const handleSeatClick = (seat) => {
//     if (
//       nonSeatingSpaces.some((space) =>
//         space.cell_indexes.split(",").includes(seat)
//       ) ||
//       bookedSeats.includes(seat) // Disable clicking on already booked seats
//     ) {
//       return; // Prevent interaction with non-seating and booked seats
//     }
//     setSelectedSeats((prev) =>
//       prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
//     );
//   };

//   // Handle booking save event
//   const handleBookingSave = async () => {
//     if (!selectedDate || selectedSeats.length === 0) {
//       message.error("Please select a date and at least one seat.");
//       return;
//     }

//     const bookingData = {
//       theater_id: theaterId,
//       theater_name: theaterName,
//       movie_id: movieId,
//       movie_name: movieName,
//       bookingdate: selectedDate,
//       seats: JSON.stringify(selectedSeats),
//     };

//     try {
//       await axios.post("http://localhost:9001/moviebooking", bookingData);
//       message.success("Booking saved successfully.");

//       // Update bookedSeats to include newly booked seats
//       setBookedSeats((prev) => [...prev, ...selectedSeats]);

//       onClose();
//     } catch (error) {
//       message.error("Error saving booking.");
//       console.error("Error saving booking:", error);
//     }
//   };

//   if (loading) {
//     return <Spin />;
//   }

//   if (error) {
//     return <Title level={3}>{error}</Title>;
//   }

//   if (!seatsData || !seatsData.t_rows || !seatsData.t_columns) {
//     return <Title level={3}>No seat layout available.</Title>;
//   }

//   const rows = seatsData.t_rows;
//   const columns = seatsData.t_columns;

//   const allSeats = Array.from({ length: rows }, (_, row) =>
//     Array.from({ length: columns }, (_, col) => `${getRowLabel(row)}${col + 1}`)
//   );

//   return (
//     <Layout className="layout">
//       <Content>
//         <Title level={3}>Seating Layout</Title>

//         <div className="date-picker-container">
//           <button className="scroll-button prev">
//             {/* Scroll left logic */}&lt;
//           </button>

//           <div className="date-picker">
//             {dateOptions.length > 0 ? (
//               dateOptions.map((date) => {
//                 const dateString = date.toISOString().split("T")[0];
//                 const day = date.getDate();
//                 const isToday =
//                   dateString === new Date().toISOString().split("T")[0];

//                 return (
//                   <button
//                     key={dateString}
//                     className={`date-button ${
//                       selectedDate === dateString ? "selected" : ""
//                     } ${isToday ? "today" : ""}`}
//                     onClick={() => handleDateChange(date)}
//                   >
//                     <span className="day">{day}</span>
//                     <span className="month">
//                       {date.toLocaleString("default", { month: "short" })}
//                     </span>
//                   </button>
//                 );
//               })
//             ) : (
//               <Title level={4}>No available dates</Title>
//             )}
//           </div>

//           <button className="scroll-button next">
//             {/* Scroll right logic */}&gt;
//           </button>
//         </div>

//         <div className="seating-layout">
//           {allSeats.map((row, rowIndex) => (
//             <div key={rowIndex} className="seating-row">
//               {row.map((seat) => {
//                 const isNonSeating = nonSeatingSpaces.some((space) =>
//                   space.cell_indexes.split(",").includes(seat)
//                 );
//                 const isBooked = bookedSeats.includes(seat); // Check if seat is booked

//                 return (
//                   <Button
//                     key={seat}
//                     className={`seat ${
//                       selectedSeats.includes(seat) ? "selected" : ""
//                     } ${isNonSeating ? "non-seating" : ""} ${
//                       isBooked ? "booked" : "" // Add class to visually indicate booked seats
//                     }`}
//                     onClick={() => handleSeatClick(seat)}
//                     disabled={isNonSeating || isBooked} // Disable interaction for booked seats
//                   >
//                     {seat}
//                   </Button>
//                 );
//               })}
//             </div>
//           ))}
//         </div>

//         <Button
//           type="primary"
//           onClick={handleBookingSave}
//           style={{ marginTop: 16 }}
//         >
//           Save Booking
//         </Button>
//       </Content>
//     </Layout>
//   );
// };

// export default FetchedSeatLayout;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Layout, Typography, Spin, Button, message } from "antd";
// import "../layout-components/FSeat.css";

// const { Content } = Layout;
// const { Title } = Typography;

// // Helper function to get row labels
// const getRowLabel = (index) => String.fromCharCode(65 + index);

// // Helper function to get all dates in a specified range
// const getDatesInRange = (startDate, endDate) => {
//   const dates = [];
//   const currentDate = new Date(startDate);
//   currentDate.setDate(currentDate.getDate() + 1); // Start from the next day
//   currentDate.setHours(0, 0, 0, 0);
//   const end = new Date(endDate);
//   end.setDate(end.getDate() + 1);
//   end.setHours(0, 0, 0, 0);

//   while (currentDate <= end) {
//     dates.push(currentDate.toISOString().split("T")[0]);
//     currentDate.setDate(currentDate.getDate() + 1);
//   }

//   return dates;
// };

// const FetchedSeatLayout = ({
//   theaterId,
//   movieId,
//   theaterName,
//   movieName,
//   onClose,
// }) => {
//   const [seatsData, setSeatsData] = useState(null);
//   const [nonSeatingSpaces, setNonSeatingSpaces] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [bookedSeats, setBookedSeats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [movieDates, setMovieDates] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [dateOptions, setDateOptions] = useState([]);

//   // Fetch seat data, non-seating spaces, and movie dates
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const seatsResponse = await axios.get(
//           `http://localhost:9001/theater_seats/${theaterId}`
//         );
//         setSeatsData(seatsResponse.data);

//         const nonSeatingResponse = await axios.get(
//           `http://localhost:9001/non_seating_space/${theaterId}`
//         );
//         setNonSeatingSpaces(nonSeatingResponse.data);

//         const datesResponse = await axios.get(
//           `http://localhost:9001/theaters-movies/${theaterId}/${movieId}`
//         );

//         const { start_date, end_date } = datesResponse.data;
//         if (start_date && end_date) {
//           const allDates = getDatesInRange(start_date, end_date);
//           setMovieDates(allDates);
//           setDateOptions(allDates.map((date) => new Date(date)));
//         } else {
//           console.warn("No valid start_date or end_date returned from API.");
//         }
//       } catch (error) {
//         setError("Error fetching data.");
//         console.error(
//           "Error fetching data:",
//           error.response ? error.response.data : error.message
//         );
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [theaterId, movieId]);

//   // Fetch booked seats based on selected date
//   // Fetch booked seats based on selected date
//   useEffect(() => {
//     const fetchBookedSeats = async () => {
//       if (selectedDate) {
//         try {
//           const response = await axios.get(
//             `http://localhost:9001/moviebooking/${theaterId}/${movieId}/${selectedDate}`
//           );
//           // Assuming the response contains a bookedSeats field with an array of seat numbers
//           const bookedSeatsData = response.data.map((booking) =>
//             JSON.parse(booking.seats)
//           ); // Adjust based on your actual response structure
//           // Flatten the array if necessary
//           const flattenedBookedSeats = bookedSeatsData.flat();
//           setBookedSeats(flattenedBookedSeats);
//           console.log("Already booked seats:", flattenedBookedSeats); // Log booked seats
//         } catch (error) {
//           console.error("Error fetching booked seats:", error);
//           setBookedSeats([]);
//         }
//       }
//     };

//     fetchBookedSeats();
//   }, [selectedDate, theaterId, movieId]);

//   // Handle date change
//   const handleDateChange = (date) => {
//     setSelectedDate(date.toISOString().split("T")[0]);
//     setSelectedSeats([]); // Clear previously selected seats when date changes
//   };

//   // Handle seat click event
//   const handleSeatClick = (seat) => {
//     if (
//       nonSeatingSpaces.some((space) =>
//         space.cell_indexes.split(",").includes(seat)
//       ) ||
//       bookedSeats.includes(seat) // Disable clicking on already booked seats
//     ) {
//       return; // Prevent interaction with non-seating and booked seats
//     }
//     setSelectedSeats((prev) =>
//       prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
//     );
//   };

//   // Handle booking save event
//   const handleBookingSave = async () => {
//     if (!selectedDate || selectedSeats.length === 0) {
//       message.error("Please select a date and at least one seat.");
//       return;
//     }

//     const bookingData = {
//       theater_id: theaterId,
//       theater_name: theaterName,
//       movie_id: movieId,
//       movie_name: movieName,
//       bookingdate: selectedDate,
//       seats: JSON.stringify(selectedSeats),
//     };

//     try {
//       await axios.post("http://localhost:9001/moviebooking", bookingData);
//       message.success("Booking saved successfully.");

//       // Update bookedSeats to include newly booked seats
//       setBookedSeats((prev) => [...prev, ...selectedSeats]);

//       onClose();
//     } catch (error) {
//       message.error("Error saving booking.");
//       console.error("Error saving booking:", error);
//     }
//   };

//   if (loading) {
//     return <Spin />;
//   }

//   if (error) {
//     return <Title level={3}>{error}</Title>;
//   }

//   if (!seatsData || !seatsData.t_rows || !seatsData.t_columns) {
//     return <Title level={3}>No seat layout available.</Title>;
//   }

//   const rows = seatsData.t_rows;
//   const columns = seatsData.t_columns;

//   const allSeats = Array.from({ length: rows }, (_, row) =>
//     Array.from({ length: columns }, (_, col) => `${getRowLabel(row)}${col + 1}`)
//   );

//   // Filter available seats based on booked seats and non-seating spaces
//   const availableSeats = allSeats
//     .flat()
//     .filter(
//       (seat) =>
//         !bookedSeats.includes(seat) &&
//         !nonSeatingSpaces.some((space) =>
//           space.cell_indexes.split(",").includes(seat)
//         )
//     );

//   return (
//     <Layout className="layout">
//       <Content>
//         <Title level={3}>Seating Layout</Title>

//         <div className="date-picker-container">
//           <button className="scroll-button prev">
//             {/* Scroll left logic */}&lt;
//           </button>

//           <div className="date-picker">
//             {dateOptions.length > 0 ? (
//               dateOptions.map((date) => {
//                 const dateString = date.toISOString().split("T")[0];
//                 const day = date.getDate();
//                 const isToday =
//                   dateString === new Date().toISOString().split("T")[0];

//                 return (
//                   <button
//                     key={dateString}
//                     className={`date-button ${
//                       selectedDate === dateString ? "selected" : ""
//                     } ${isToday ? "today" : ""}`}
//                     onClick={() => handleDateChange(date)}
//                   >
//                     <span className="day">{day}</span>
//                     <span className="month">
//                       {date.toLocaleString("default", { month: "short" })}
//                     </span>
//                   </button>
//                 );
//               })
//             ) : (
//               <Title level={4}>No available dates</Title>
//             )}
//           </div>

//           <button className="scroll-button next">
//             {/* Scroll right logic */}&gt;
//           </button>
//         </div>

//         <div className="seating-layout">
//           {allSeats.map((row, rowIndex) => (
//             <div key={rowIndex} className="seating-row">
//               {row.map((seat) => {
//                 const isNonSeating = nonSeatingSpaces.some((space) =>
//                   space.cell_indexes.split(",").includes(seat)
//                 );
//                 const isBooked = bookedSeats.includes(seat); // Check if seat is booked
//                 const isAvailable = availableSeats.includes(seat); // Check if seat is available

//                 return (
//                   <Button
//                     key={seat}
//                     className={`seat ${
//                       selectedSeats.includes(seat) ? "selected" : ""
//                     } ${isNonSeating ? "non-seating" : ""} ${
//                       isBooked ? "booked" : "" // Add class to visually indicate booked seats
//                     }`}
//                     onClick={() => handleSeatClick(seat)}
//                     disabled={!isAvailable} // Disable interaction for unavailable seats
//                   >
//                     {seat}
//                   </Button>
//                 );
//               })}
//             </div>
//           ))}
//         </div>

//         <Button
//           type="primary"
//           onClick={handleBookingSave}
//           style={{ marginTop: 16 }}
//         >
//           Save Booking
//         </Button>
//       </Content>
//     </Layout>
//   );
// };

// export default FetchedSeatLayout;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout, Typography, Spin, Button, message } from "antd";
import "../layout-components/FSeat.css";

const { Content } = Layout;
const { Title } = Typography;

// Helper function to get row labels
const getRowLabel = (index) => String.fromCharCode(65 + index);

// Helper function to get all dates in a specified range
const getDatesInRange = (startDate, endDate) => {
  const dates = [];
  const currentDate = new Date(startDate);
  currentDate.setDate(currentDate.getDate() + 1); // Start from the next day
  currentDate.setHours(0, 0, 0, 0);
  const end = new Date(endDate);
  end.setDate(end.getDate() + 1);
  end.setHours(0, 0, 0, 0);

  while (currentDate <= end) {
    dates.push(currentDate.toISOString().split("T")[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};

const FetchedSeatLayout = ({
  theaterId,
  movieId,
  theaterName,
  movieName,
  onClose,
}) => {
  const [seatsData, setSeatsData] = useState(null);
  const [nonSeatingSpaces, setNonSeatingSpaces] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movieDates, setMovieDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [dateOptions, setDateOptions] = useState([]);

  // Fetch seat data, non-seating spaces, and movie dates
  useEffect(() => {
    const fetchData = async () => {
      try {
        const seatsResponse = await axios.get(
          `http://localhost:9001/theater_seats/${theaterId}`
        );
        setSeatsData(seatsResponse.data);

        const nonSeatingResponse = await axios.get(
          `http://localhost:9001/non_seating_space/${theaterId}`
        );
        setNonSeatingSpaces(nonSeatingResponse.data);

        const datesResponse = await axios.get(
          `http://localhost:9001/theaters-movies/${theaterId}/${movieId}`
        );

        const { start_date, end_date } = datesResponse.data;
        if (start_date && end_date) {
          const allDates = getDatesInRange(start_date, end_date);
          setMovieDates(allDates);
          setDateOptions(allDates.map((date) => new Date(date)));
        } else {
          console.warn("No valid start_date or end_date returned from API.");
        }
      } catch (error) {
        setError("Error fetching data.");
        console.error(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [theaterId, movieId]);

  // Fetch booked seats based on selected date
  useEffect(() => {
    const fetchBookedSeats = async () => {
      if (selectedDate) {
        try {
          const response = await axios.get(
            `http://localhost:9001/moviebooking/${theaterId}/${movieId}/${selectedDate}`
          );
          // Assuming the response contains a bookedSeats field with an array of seat numbers
          const bookedSeatsData = response.data.map((booking) =>
            JSON.parse(booking.seats)
          ); // Adjust based on your actual response structure
          const flattenedBookedSeats = bookedSeatsData.flat();
          setBookedSeats(flattenedBookedSeats);
          console.log("Already booked seats:", flattenedBookedSeats);
        } catch (error) {
          console.error("Error fetching booked seats:", error);
          setBookedSeats([]);
        }
      }
    };

    fetchBookedSeats();
  }, [selectedDate, theaterId, movieId]);

  // Handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date.toISOString().split("T")[0]);
    setSelectedSeats([]); // Clear previously selected seats when date changes
  };

  // Handle seat click event
  const handleSeatClick = (seat) => {
    if (
      nonSeatingSpaces.some((space) =>
        space.cell_indexes.split(",").includes(seat)
      ) ||
      bookedSeats.includes(seat) // Prevent interaction with booked seats
    ) {
      return; // Prevent interaction with non-seating and booked seats
    }
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  // Handle booking save event
  const handleBookingSave = async () => {
    if (!selectedDate || selectedSeats.length === 0) {
      message.error("Please select a date and at least one seat.");
      return;
    }

    const bookingData = {
      theater_id: theaterId,
      theater_name: theaterName,
      movie_id: movieId,
      movie_name: movieName,
      bookingdate: selectedDate,
      seats: JSON.stringify(selectedSeats),
    };

    try {
      await axios.post("http://localhost:9001/moviebooking", bookingData);
      message.success("Booking saved successfully.");

      // Update bookedSeats to include newly booked seats
      setBookedSeats((prev) => [...prev, ...selectedSeats]);

      onClose();
    } catch (error) {
      message.error("Error saving booking.");
      console.error("Error saving booking:", error);
    }
  };

  if (loading) {
    return <Spin />;
  }

  if (error) {
    return <Title level={3}>{error}</Title>;
  }

  if (!seatsData || !seatsData.t_rows || !seatsData.t_columns) {
    return <Title level={3}>No seat layout available.</Title>;
  }

  const rows = seatsData.t_rows;
  const columns = seatsData.t_columns;

  const allSeats = Array.from({ length: rows }, (_, row) =>
    Array.from({ length: columns }, (_, col) => `${getRowLabel(row)}${col + 1}`)
  );

  // Filter available seats based on booked seats and non-seating spaces
  const availableSeats = allSeats
    .flat()
    .filter(
      (seat) =>
        !bookedSeats.includes(seat) &&
        !nonSeatingSpaces.some((space) =>
          space.cell_indexes.split(",").includes(seat)
        )
    );

  return (
    <Layout className="layout">
      <Content>
        <Title level={3}>Seating Layout</Title>

        <div className="date-picker-container">
          <button className="scroll-button prev">
            {/* Scroll left logic */}&lt;
          </button>

          <div className="date-picker">
            {dateOptions.length > 0 ? (
              dateOptions.map((date) => {
                const dateString = date.toISOString().split("T")[0];
                const day = date.getDate();
                const isToday =
                  dateString === new Date().toISOString().split("T")[0];

                return (
                  <button
                    key={dateString}
                    className={`date-button ${
                      selectedDate === dateString ? "selected" : ""
                    } ${isToday ? "today" : ""}`}
                    onClick={() => handleDateChange(date)}
                  >
                    <span className="day">{day}</span>
                    <span className="month">
                      {date.toLocaleString("default", { month: "short" })}
                    </span>
                  </button>
                );
              })
            ) : (
              <Title level={4}>No available dates</Title>
            )}
          </div>

          <button className="scroll-button next">
            {/* Scroll right logic */}&gt;
          </button>
        </div>

        <div className="seating-layout">
          {allSeats.map((row, rowIndex) => (
            <div key={rowIndex} className="seating-row">
              {row.map((seat) => {
                const isNonSeating = nonSeatingSpaces.some((space) =>
                  space.cell_indexes.split(",").includes(seat)
                );
                const isBooked = bookedSeats.includes(seat); // Check if seat is booked
                const isAvailable = availableSeats.includes(seat); // Check if seat is available

                return (
                  <Button
                    key={seat}
                    className={`seat ${
                      selectedSeats.includes(seat) ? "selected" : ""
                    } ${isNonSeating ? "non-seating" : ""} ${
                      isBooked ? "booked" : "" // Add class to visually indicate booked seats
                    }`}
                    onClick={() => !isBooked && handleSeatClick(seat)} // Only handle click if not booked
                    disabled={isBooked} // Disable button for booked seats
                  >
                    {seat}
                  </Button>
                );
              })}
            </div>
          ))}
        </div>

        <Button type="primary" onClick={handleBookingSave}>
          Save Booking
        </Button>
      </Content>
    </Layout>
  );
};

export default FetchedSeatLayout;
