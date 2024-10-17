// // import React, { useState } from 'react';
// // import AddTheater from './AddTheater';
// // import SeatLayout from './SeatLayout';
// // import './App.css';

// // const App = () => {
// //   const [theater, setTheater] = useState(null);
// //   const [selectedSeats, setSelectedSeats] = useState([]);
// //   const [unavailableSeats, setUnavailableSeats] = useState([]);
// //   const [data, setData] = useState([]);
// //   const [seatData, setSeatData] = useState([]);
// //   const [nonData, setNonData] = useState([]);

// //   const viewTheater = (theaterData) => {
// //     setTheater(theaterData);
// //   };

// //   const req = (record) => {
// //     setData(record);
// //   };

// //   const seats = (rec) => {
// //     setSeatData(rec);
// //   };

// //   const nonSitting = (non) => {
// //     setNonData(non);
// //   };

// //   const nonnData={nonData}
// // console.log(nonnData,"Prashu")
// //   const clearFields = () => {
// //     setTheater(null);
// //   };

// //   return (
// //     <div>
// //       <h1>Theater and Seat Management</h1>
// //       {!theater ? (
// //         <AddTheater viewTheater={viewTheater} clearFields={clearFields} req={req} seats={seats} nonSitting={nonSitting} />
// //       ) : (
// //         <div>
// //           <h2>{theater.name} - {theater.city}</h2>
// //           <SeatLayout
// //             rows={theater.rows}
// //             columns={theater.columns}
// //             selectedSeats={selectedSeats}
// //             unavailableSeats={unavailableSeats}
// //             onSeatSelect={setSelectedSeats}
// //             onUnavailableSeats={setUnavailableSeats}
// //             nonSeatingSpaces={theater.nonSeatingSpaces}
// //             saveData={data} 
// //             seatsData={seatData}
// //             nonData={nonData}
// //           />

          
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default App;



// // import React, { useState, useEffect } from 'react';

// // import AddTheater from './AddTheater';
// // import SeatLayout from './SeatLayout';
// // import TheaterDataFetcher from './TheaterDataFetcher';
// // import './App.css';

// // const App = () => {
// //   const [theater, setTheater] = useState(null);
// //   const [selectedSeats, setSelectedSeats] = useState([]);
// //   const [unavailableSeats, setUnavailableSeats] = useState([]);
// //   const [data, setData] = useState([]);
// //   const [seatData, setSeatData] = useState([]);
// //   const [nonData, setNonData] = useState([]);
// //   const [theatersList, setTheatersList] = useState([]);
// //   const [theaterId, setTheaterId] = useState(null); // Track theater ID

// //   const handleDataFetched = (fetchedData) => {
// //     const updatedTheatersList = fetchedData.map(theater => {
// //       const totalSeats = theater.rows && theater.columns 
// //         ? theater.rows * theater.columns - theater.nonSeatingSpaces
// //         : 0;
// //       return { ...theater, totalSeats };
// //     });
// //     setTheatersList(updatedTheatersList);
// //   };

// //   const handleTheaterFetch = (theaterData) => {
// //     setTheater(theaterData);
// //   };

// //   const viewTheater = (theaterData) => {
// //     setTheaterId(theaterData.id); 
// //     handleTheaterFetch(theaterData); 
// //   };

// //   const req = (record) => {
// //     setData(record);
// //   };

// //   const seats = (rec) => {
// //     setSeatData(rec);
// //   };

// //   const nonSitting = (non) => {
// //     setNonData(non);
// //   };

// //   const clearFields = () => {
// //     setTheater(null);
// //     setTheaterId(null); 
// //   };

// //   // Calculate total seats for the selected theater
// //   const totalSeats = theater?.rows && theater?.columns 
// //     ? theater.rows * theater.columns - theater.nonSeatingSpaces
// //     : 0;

// //   return (
// //     <div>
// //       <h1>Theater and Seat Management</h1>

// //       <TheaterDataFetcher onDataFetched={handleDataFetched} />

// //       {!theater ? (
// //         <AddTheater
// //           viewTheater={viewTheater}
// //           clearFields={clearFields}
// //           req={req}
// //           seats={seats}
// //           nonSitting={nonSitting}
// //         />
// //       ) : (
// //         <div>
// //           <h2>{theater.name} - {theater.city}</h2>
// //           <SeatLayout
// //             rows={theater.rows} 
// //             columns={theater.columns} 
// //             selectedSeats={selectedSeats}
// //             unavailableSeats={unavailableSeats}
// //             onSeatSelect={setSelectedSeats}
// //             onUnavailableSeats={setUnavailableSeats}
// //             nonSeatingSpaces={theater.nonSeatingSpaces} 
// //             saveData={data}
// //             seatsData={seatData}
// //             nonData={nonData}
// //           />
// //         </div>
// //       )}

// //       {!theater && (
// //         <footer style={{
// //           position: 'fixed',
// //           bottom: 0,
// //           width: '100%',
// //           backgroundColor: '#f8f8f8',
// //           padding: '10px',
// //           textAlign: 'center',
// //           boxShadow: '0px -2px 5px rgba(0,0,0,0.1)',
// //           overflowY: 'auto',
// //           maxHeight: '30vh'
// //         }}>
// //           <h3>Theater Information</h3>
// //           <table style={{ width: '100%', borderCollapse: 'collapse' }}>
// //             <thead>
// //               <tr>
// //                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
// //                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Area</th>
// //                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>City</th>
// //                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Total Seats</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {theatersList.map((theater) => (
// //                 <tr key={theater.id}>
// //                   <td style={{ border: '1px solid #ddd', padding: '8px' }}>{theater.name}</td>
// //                   <td style={{ border: '1px solid #ddd', padding: '8px' }}>{theater.area}</td>
// //                   <td style={{ border: '1px solid #ddd', padding: '8px' }}>{theater.city}</td>
// //                   <td style={{ border: '1px solid #ddd', padding: '8px' }}>{theater.totalSeats}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </footer>
// //       )}
// //     </div>
// //   );
// // };

// // export default App;


// // import React, { useState, useEffect } from 'react';
// // import AddTheater from './AddTheater';
// // import SeatLayout from './SeatLayout';
// // import axios from 'axios';
// // import './App.css';

// // const App = () => {
// //   const [theater, setTheater] = useState(null);
// //   const [selectedSeats, setSelectedSeats] = useState([]);
// //   const [unavailableSeats, setUnavailableSeats] = useState([]);
// //   const [data, setData] = useState([]);
// //   const [seatData, setSeatData] = useState([]);
// //   const [nonData, setNonData] = useState([]);
// //   const [theatersList, setTheatersList] = useState([]);
// //   const [theaterId, setTheaterId] = useState(null); // Track theater ID

// //   // Fetch data from the backend
// //   useEffect(() => {
// //     const fetchTheaterData = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:9001/theaters'); // Update the URL to your backend endpoint
// //         const fetchedData = response.data;

// //         const updatedTheatersList = fetchedData.map(theater => {
// //           const totalSeats = theater.rows && theater.columns 
// //             ? theater.rows * theater.columns - theater.nonSeatingSpaces
// //             : 0;
// //           return { ...theater, totalSeats };
// //         });

// //         setTheatersList(updatedTheatersList);
// //       } catch (error) {
// //         console.error('Error fetching theater data:', error);
// //       }
// //     };

// //     fetchTheaterData();
// //   }, []);

// //   const handleTheaterFetch = (theaterData) => {
// //     setTheater(theaterData);
// //   };

// //   const viewTheater = (theaterData) => {
// //     setTheaterId(theaterData.id);
// //     handleTheaterFetch(theaterData);
// //   };

// //   const req = (record) => {
// //     setData(record);
// //   };

// //   const seats = (rec) => {
// //     setSeatData(rec);
// //   };

// //   const nonSitting = (non) => {
// //     setNonData(non);
// //   };

// //   const clearFields = () => {
// //     setTheater(null);
// //     setTheaterId(null);
// //   };

// //   return (
// //     <div>
// //       <h1>Theater and Seat Management</h1>

// //       {!theater ? (
// //         <AddTheater
// //           viewTheater={viewTheater}
// //           clearFields={clearFields}
// //           req={req}
// //           seats={seats}
// //           nonSitting={nonSitting}
// //         />
// //       ) : (
// //         <div>
// //           <h2>{theater.name} - {theater.city}</h2>
// //           <SeatLayout
// //             rows={theater.rows} 
// //             columns={theater.columns} 
// //             selectedSeats={selectedSeats}
// //             unavailableSeats={unavailableSeats}
// //             onSeatSelect={setSelectedSeats}
// //             onUnavailableSeats={setUnavailableSeats}
// //             nonSeatingSpaces={theater.nonSeatingSpaces} 
// //             saveData={data}
// //             seatsData={seatData}
// //             nonData={nonData}
// //           />
// //         </div>
// //       )}

// //       {!theater && (
// //         <footer style={{
// //           position: 'fixed',
// //           bottom: 0,
// //           width: '100%',
// //           backgroundColor: '#f8f8f8',
// //           padding: '10px',
// //           textAlign: 'center',
// //           boxShadow: '0px -2px 5px rgba(0,0,0,0.1)',
// //           overflowY: 'auto',
// //           maxHeight: '30vh'
// //         }}>
// //           <h3>Theater Information</h3>
// //           <table style={{ width: '100%', borderCollapse: 'collapse' }}>
// //             <thead>
// //               <tr>
// //                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
// //                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Area</th>
// //                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>City</th>
// //                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Total Seats</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {theatersList.map((theater) => (
// //                 <tr key={theater.id}>
// //                   <td style={{ border: '1px solid #ddd', padding: '8px' }}>{theater.name}</td>
// //                   <td style={{ border: '1px solid #ddd', padding: '8px' }}>{theater.area}</td>
// //                   <td style={{ border: '1px solid #ddd', padding: '8px' }}>{theater.city}</td>
// //                   <td style={{ border: '1px solid #ddd', padding: '8px' }}>{theater.total_seats}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </footer>
// //       )}
// //     </div>
// //   );
// // };

// // export default App;





// import React, { useState, useEffect } from 'react';
// import AddTheater from './AddTheater';
// import SeatLayout from './SeatLayout';
// import axios from 'axios';
// // import './App.css';

// const  Connection= () => {
//   const [theater, setTheater] = useState(null);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [unavailableSeats, setUnavailableSeats] = useState([]);
//   const [data, setData] = useState([]);
//   const [seatData, setSeatData] = useState([]);
//   const [nonData, setNonData] = useState([]);
//   const [theatersList, setTheatersList] = useState([]);
//   const [theaterId, setTheaterId] = useState(null); // Track theater ID

//   useEffect(() => {
//     const fetchTheaterData = async () => {
//       try {
//         const response = await axios.get('http://localhost:9001/theaters'); // Update the URL to your backend endpoint
//         const fetchedData = response.data;

//         const updatedTheatersList = fetchedData.map(theater => {
//           const totalSeats = theater.rows && theater.columns 
//             ? theater.rows * theater.columns - theater.nonSeatingSpaces
//             : 0;
//           return { ...theater, totalSeats };
//         });

//         setTheatersList(updatedTheatersList);
//       } catch (error) {
//         console.error('Error fetching theater data:', error);
//       }
//     };

//     fetchTheaterData();
//   }, []);

//   const handleTheaterFetch = (theaterData) => {
//     setTheater(theaterData);
//   };

//   const viewTheater = (theaterData) => {
//     setTheaterId(theaterData.id);
//     handleTheaterFetch(theaterData);
//   };

//   const req = (record) => {
//     setData(record);
//   };

//   const seats = (rec) => {
//     setSeatData(rec);
//   };

//   const nonSitting = (non) => {
//     setNonData(non);
//   };

//   const clearFields = () => {
//     setTheater(null);
//     setTheaterId(null);
//   };

//   const deleteTheater = async (theaterId) => {
//     try {
      
//       await axios.delete(`http://localhost:9001/theaters/${theaterId}`);
      
      
//       setTheatersList(prevTheaters => prevTheaters.filter(theater => theater.id !== theaterId));
      
      
//       if (theaterId === theater?.id) {
//         setTheater(null);
//         setSelectedSeats([]);
//         setUnavailableSeats([]);
//         setData([]);
//         setSeatData([]);
//         setNonData([]);
//       }
//     } catch (error) {
//       console.error('Error deleting theater:', error);
//     }
//   };
  

//   return (
    
//     <div>
//       <h1>Theater and Seat Management</h1>

//       {!theater ? (
//         <AddTheater
//           viewTheater={viewTheater}
//           clearFields={clearFields}
//           req={req}
//           seats={seats}
//           nonSitting={nonSitting}
//         />
//       ) : (
//         <div>
//           <h2>{theater.name} - {theater.city}</h2>
//           <SeatLayout
//             rows={theater.rows} 
//             columns={theater.columns} 
//             selectedSeats={selectedSeats}
//             unavailableSeats={unavailableSeats}
//             onSeatSelect={setSelectedSeats}
//             onUnavailableSeats={setUnavailableSeats}
//             nonSeatingSpaces={theater.nonSeatingSpaces} 
//             saveData={data}
//             seatsData={seatData}
//             nonData={nonData}
//           />
//         </div>
//       )}

//       {!theater && (
//         <footer style={{
//           position: 'fixed',
//           bottom: 0,
//           width: '100%',
//           backgroundColor: '#f8f8f8',
//           padding: '10px',
//           textAlign: 'center',
//           boxShadow: '0px -2px 5px rgba(0,0,0,0.1)',
//           overflowY: 'auto',
//           maxHeight: '30vh'
//         }}>
//           <h3>Theater Information</h3>
//           <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//             <thead>
//               <tr>
//                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
//                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Area</th>
//                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>City</th>
//                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Total Seats</th>
//                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {theatersList.map((theater) => (
//                 <tr key={theater.id}>
//                   <td style={{ border: '1px solid #ddd', padding: '8px' }}>{theater.name}</td>
//                   <td style={{ border: '1px solid #ddd', padding: '8px' }}>{theater.area}</td>
//                   <td style={{ border: '1px solid #ddd', padding: '8px' }}>{theater.city}</td>
//                   <td style={{ border: '1px solid #ddd', padding: '8px' }}>{theater. total_seats}</td>
//                   <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                     <button 
//                       onClick={() => deleteTheater(theater.id)} 
//                       style={{ color: 'white', backgroundColor: 'red', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </footer>
//       )}
//     </div>
//   );
// };

// export default Connection;


