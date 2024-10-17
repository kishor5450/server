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

// const App = () => {
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

// export default App;



// ------Appp----

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





// import React, { useState} from 'react';
// import AddTheater from './AddTheater';
// import SeatLayout from './SeatLayout';
// // import axios from 'axios';
// import './App.css';
// import Footer from './Footer';

// const App = () => {
//   const [theater, setTheater] = useState(null);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [unavailableSeats, setUnavailableSeats] = useState([]);
//   const [data, setData] = useState([]);
//   const [seatData, setSeatData] = useState([]);
//   const [nonData, setNonData] = useState([]);
//   // const [theatersList, setTheatersList] = useState([]);
//   const [theaterId, setTheaterId] = useState(null); // Track theater ID

//   // useEffect(() => {
//   //   const fetchTheaterData = async () => {
//   //     try {
//   //       const response = await axios.get('http://localhost:9001/theaters'); // Update the URL to your backend endpoint
//   //       const fetchedData = response.data;

//   //       const updatedTheatersList = fetchedData.map(theater => {
//   //         const totalSeats = theater.rows && theater.columns 
//   //           ? theater.rows * theater.columns - theater.nonSeatingSpaces
//   //           : 0;
//   //         return { ...theater, totalSeats };
//   //       });

//   //       setTheatersList(updatedTheatersList);
//   //     } catch (error) {
//   //       console.error('Error fetching theater data:', error);
//   //     }
//   //   };

//   //   fetchTheaterData();
//   // }, []);

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

//   // const deleteTheater = async (theaterId) => {
//   //   try {
      
//   //     await axios.delete(`http://localhost:9001/theaters/${theaterId}`);
      
      
//   //     setTheatersList(prevTheaters => prevTheaters.filter(theater => theater.id !== theaterId));
      
      
//   //     if (theaterId === theater?.id) {
//   //       setTheater(null);
//   //       setSelectedSeats([]);
//   //       setUnavailableSeats([]);
//   //       setData([]);
//   //       setSeatData([]);
//   //       setNonData([]);
//   //     }
//   //   } catch (error) {
//   //     console.error('Error deleting theater:', error);
//   //   }
//   // };
  

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
//         <Footer></Footer>
//         // <footer style={{
//         //   position: 'fixed',
//         //   bottom: 0,
//         //   width: '100%',
//         //   backgroundColor: '#f8f8f8',
//         //   padding: '10px',
//         //   textAlign: 'center',
//         //   boxShadow: '0px -2px 5px rgba(0,0,0,0.1)',
//         //   overflowY: 'auto',
//         //   maxHeight: '30vh'
//         // }}>
//         //   <h3>Theater Information</h3>
//         //   <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//         //     <thead>
//         //       <tr>
//         //         <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
//         //         <th style={{ border: '1px solid #ddd', padding: '8px' }}>Area</th>
//         //         <th style={{ border: '1px solid #ddd', padding: '8px' }}>City</th>
//         //         <th style={{ border: '1px solid #ddd', padding: '8px' }}>Total Seats</th>
//         //         <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
//         //       </tr>
//         //     </thead>
//         //     <tbody>
//         //       {theatersList.map((theater) => (
//         //         <tr key={theater.id}>
//         //           <td style={{ border: '1px solid #ddd', padding: '8px' }}>{theater.name}</td>
//         //           <td style={{ border: '1px solid #ddd', padding: '8px' }}>{theater.area}</td>
//         //           <td style={{ border: '1px solid #ddd', padding: '8px' }}>{theater.city}</td>
//         //           <td style={{ border: '1px solid #ddd', padding: '8px' }}>{theater. total_seats}</td>
//         //           <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//         //             <button 
//         //               onClick={() => deleteTheater(theater.id)} 
//         //               style={{ color: 'white', backgroundColor: 'red', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
//         //             >
//         //               Delete
//         //             </button>
//         //           </td>
//         //         </tr>
//         //       ))}
//         //     </tbody>
//         //   </table>
//         // </footer>
//       )}
//     </div>
//   );
// };

// export default App;



// import React, { useState } from 'react';
// import AddTheater from './AddTheater';
// import SeatLayout from './SeatLayout';
// import './App.css';
// import Footer from './Footer';

// const App = () => {
//   const [theater, setTheater] = useState(null);
//   const [data, setData] = useState([]);
//   const [seatData, setSeatData] = useState([]);
//   const [nonData, setNonData] = useState([]);
//   const [theaterId, setTheaterId] = useState(null); 

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
//             theater={theater}
//             saveData={data}
//             seatsData={seatData}
//             nonData={nonData}
//           />
//         </div>
//       )}

//       {!theater && <Footer />}
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import AddTheater from './AddTheater';
// import SeatLayout from './SeatLayout';
// import './App.css';
// import Footer from './Footer';

// const App = () => {
//   const [theater, setTheater] = useState(null);
//   const [data, setData] = useState([]);
//   const [seatData, setSeatData] = useState([]);
//   const [nonData, setNonData] = useState([]);
//   const [theaterId, setTheaterId] = useState(null); 

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
//             theater={theater}
//             saveData={data}
//             seatsData={seatData}
//             nonData={nonData}
//           />
//         </div>
//       )}

//       {!theater && <Footer />}
//     </div>
//   );
// };

// export default App;



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AddTheater from './AddTheater';
// import SeatLayout from './SeatLayout';
// import './App.css';
// import Footer from './Footer';
// import Navbar from './Navbar';

// const App = () => {
//   const [theater, setTheater] = useState(null);
//   const [data, setData] = useState([]);  // Theater info to be sent
//   const [seatData, setSeatData] = useState([]);  // Rows and columns
//   const [nonData, setNonData] = useState([]);  // Non-seating spaces

//   return (
//     <Router>
//       <Navbar />

//       <div>
//         <h1>Theater and Seat Management</h1>

//         <Routes>
//           <Route 
//             path="/add-theater" 
//             element={
//               <AddTheater 
//                 setTheater={setTheater} 
//                 setData={setData} 
//                 setSeatData={setSeatData} 
//                 setNonData={setNonData} 
//               />
//             } 
//           />
//         </Routes>

//         {theater && (
//           <div>
//             <h2>{theater.name} - {theater.city}</h2>
//             <SeatLayout
//               theater={theater}
//               saveData={data}
//               seatsData={seatData}
//               nonData={nonData}
//             />
//           </div>
//         )}

//         {!theater && <Footer />}
//       </div>
//     </Router>
//   );
// };

// export default App;


// -------Seat Layout-----

// import React from 'react';
// import axios from 'axios';

// const getRowLabel = (index) => String.fromCharCode(65 + index);

// const SeatLayout = ({ rows, columns, selectedSeats, unavailableSeats, nonSeatingSpaces, onSeatSelect, onUnavailableSeats, theaterData ,saveData,seatsData,nonData}) => {

//   const allSeats = Array.from({ length: rows }, (_, row) => 
//     Array.from({ length: columns }, (_, col) => `${getRowLabel(row)}${col + 1}`)
//   );
//   console.log(nonData,"this is joe root")

//   const toggleSeat = (seat) => {
//     if (unavailableSeats.includes(seat) || nonSeatingSpaces.includes(seat)) return;

//     if (selectedSeats.includes(seat)) {
//       onSeatSelect(selectedSeats.filter(s => s !== seat));
//     } else {
//       onSeatSelect([...selectedSeats, seat]);
//     }
//   };



//   const toggleUnavailableSeat = (seat) => {
//     if (unavailableSeats.includes(seat)) {
//       onUnavailableSeats(unavailableSeats.filter(s => s !== seat));
//     } else {
//       onUnavailableSeats([...unavailableSeats, seat]);
//     }
//   };

//   // const handleSave = async () => {
    

//   //   try {
//   //     const response = await axios.post('http://localhost:9001/addtheater', saveData);
//   //     console.log('Theater saved:', response.data);
//   //     alert('Theater saved successfully!');
//   //   } catch (error) {
//   //     console.error('Error saving theater:', error);
//   //     alert('Failed to save theater. Please try again.');
//   //   }
//   // };
 

//   console.log(nonData,"----------------")

//   // const req = {
    
//   //     theater_id: 1,
//   //     info: [
//   //       {
//   //         trow_number: "X",
//   //         cell_indexes: "X1,X2,X2"
//   //       },
//   //       {
//   //         trow_number: "Y",
//   //         cell_indexes: "Y1,Y2,Y3"
//   //       }
//   //     ]
    
    
//   // }

//   // 
  
  
  

  
  
  
  

//   // const handleSave = async () => {

//   //   try {
//   //     let theaterSeatsResponse
//   //      let nonSeatsResponse
//   //     const response = await axios.post('http://localhost:9001/addtheater', saveData, {
//   //       headers: { 'Content-Type': 'application/json' },  
//   //     });
      
//   //     if(response.data){

//   //       const threaterSeatReq = {
//   //         theater_id: response.data.id,
//   //         t_rows: seatsData.rows,
//   //         t_columns:seatsData.columns
//   //       }

//   //       theaterSeatsResponse = await axios.post('http://localhost:9001/theater_seats', threaterSeatReq, {
//   //         headers: { 'Content-Type': 'application/json' },  
//   //       });

//   //       const nonSeatsReq = {
//   //         theater_id: response.data.id,
//   //         info: nonData.map(row => ({
//   //           trow_number: row.rowNumber,
//   //           cell_indexes: row.nonSeatingSpaces.join(',')
//   //         }))
//   //       };
//   //       nonSeatsResponse = await axios.post('http://localhost:9001/non_seating_space', nonSeatsReq, {
//   //         headers: { 'Content-Type': 'application/json' },  // Optional if axios defaults are
//   //       } );



 

//   const groupData = (dataArray) => {
//     const grouped = dataArray.reduce((acc, item) => {
//       const trow_number = item[0]; 
//       let group = acc.find(group => group.trow_number === trow_number);
//       if (!group) {
//         group = { trow_number: trow_number, cell_indexes: '' };
//         acc.push(group);
//       }
//       group.cell_indexes += group.cell_indexes ? `,${item}` : item; 
//       return acc;
//     }, []);
//     return grouped;
//   };


 

//   const handleSave = async () => {
//     try {
//    const groupedData = groupData(nonData?.nonSeatingSpaces);
//   console.log(groupedData,"iiiiii")


//       let theaterSeatsResponse;
//       let nonSeatsResponse
    
//       const response = await axios.post('http://localhost:9001/addtheater', saveData, {
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.data) {
//         const threaterSeatReq = {
//           theater_id: response.data.id,
//           t_rows: seatsData.rows,
//           t_columns: seatsData.columns,
//         };
  
//         theaterSeatsResponse = await axios.post('http://localhost:9001/theater_seats', threaterSeatReq, {
//           headers: { 'Content-Type': 'application/json' },
//         });
  
//         const nonSeatsReq = {
//           theater_id: response.data.id,
//            info:groupedData
//         };
//         console.log(nonSeatsReq ,"this is ben")
  
//         nonSeatsResponse = await axios.post('http://localhost:9001/non_seating_space', nonSeatsReq, {
//           headers: { 'Content-Type': 'application/json' },
//         });
  
//         // console.log('Non-seating spaces saved:', nonSeatsResponse.data);
//         // console.log('Theater saved:', response.data);
//         // console.log('Theater seats saved:', theaterSeatsResponse.data);
  
//         alert('Theater saved successfully!');
//       }
//     } catch (error) {
//       console.error('Error saving theater:', error);
//       alert('Failed to save theater. Please try again.');
//     }
//   };
  
      

//   //       // if (response.data) {
//   //       //   // Prepare the request data
//   //       //   const req = {
//   //       //     theater_id: response.data.id,
//   //       //     info: [
//   //       //       {
//   //       //         trow_number: nonData.rowNumber,
//   //       //         cell_indexes: nonData.nonSeatingSpaces.split(',').map(space => space.trim())
//   //       //       },
//   //       //       {
//   //       //         trow_number: nonData.rowNumber,
//   //       //         cell_indexes: nonData.nonSeatingSpaces.split(',').map(space => space.trim())
//   //       //       }
//   //       //     ]
//   //       //   };
        
//   //       //   try {
//   //       //     // Await the response from the server
//   //       //     const nonSeatsResponse = await axios.post('http://localhost:9001/non_seating_space', req, {
//   //       //       headers: { 'Content-Type': 'application/json' }
//   //       //     });
        
//   //       //     console.log('Response:', nonSeatsResponse.data);
//   //       //   } catch (error) {
//   //       //     console.error('Error posting non-seating spaces:', error);
//   //       //   }
        
//   //       //   // Loop through the info array to prepare for storing
//   //       //   req.info.forEach(entry => {
//   //       //     const { trow_number, cell_indexes } = entry;
        
//   //       //     // Store each combination of trow_number and cell index
//   //       //     cell_indexes.forEach(index => {
//   //       //       // Example of what would be stored in the database
//   //       //       console.log({
//   //       //         theater_id: req.theater_id,
//   //       //         trow_number,
//   //       //         cell_index: index
//   //       //       });
        
//   //       //       // You would insert each (theater_id, trow_number, cell_index) into the database here
//   //       //       // Example SQL insert:
//   //       //       // INSERT INTO seating_space (theater_id, trow_number, cell_index) VALUES (?, ?, ?);
//   //       //       // Assuming you have a database function for this purpose
//   //       //       // await insertSeatingSpace(req.theater_id, trow_number, index);
//   //       //     });
//   //       //   });
//   //       // }
        



        
        












//   //     }
//   //     console.log('Theater saved:', response.data);
//   //     console.log('Theater saved:', theaterSeatsResponse.data);

//   //     alert('Theater saved successfully!');
//   //   } catch (error) {
//   //     console.error('Error saving theater:', error);
//   //     alert('Failed to save theater. Please try again.');
//   //   }
//   // }

//   return (
//     <div>
//       <h3>Seating Layout (Click on seat to select)</h3>
//       <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 50px)`, gap: '5px' }}>
//         {allSeats.flat().map(seat => (
//           <div
//             key={seat}
//             onClick={() => toggleSeat(seat)}
//             onContextMenu={(e) => {
//               e.preventDefault();
//               toggleUnavailableSeat(seat);
//             }}
//             style={{
//               border: '1px solid black',
//               padding: '10px',
//               textAlign: 'center',
//               backgroundColor: nonSeatingSpaces.includes(seat)
//                 ? '#efdecd' 
//                 : unavailableSeats.includes(seat)
//                 ? 'red' 
//                 : selectedSeats.includes(seat)
//                 ? 'green' 
//                 : 'gray', 
//               cursor: unavailableSeats.includes(seat) || nonSeatingSpaces.includes(seat)
//                 ? 'not-allowed' 
//                 : 'pointer',
//             }}
//           >
//             {seat}
//           </div>
//         ))}
//       </div>
//       <div>
//         <h4>Total Seats: {rows * columns}</h4>
//         <h4>Total Non-Seating Spaces: {nonSeatingSpaces.length}</h4>
//         <h4>Selected Seats: {selectedSeats.join(', ') || 'None'}</h4>
//       </div>
//       <button onClick={handleSave} style={{ marginTop: '20px', padding: '10px 20px' }}>
//         Save
//       </button>
//     </div>
//   );
// };

// export default SeatLayout;


// -----Add Theatre -----

// import React, { useState, useRef } from 'react';
// import { Link } from 'react-router-dom';

// const AddTheater = ({ viewTheater, clearFields,req,seats,nonSitting}) => {
//   const [name, setName] = useState('');
//   const [area, setArea] = useState('');
//   const [city, setCity] = useState('');
//   const [rows, setRows] = useState('');
//   const [columns, setColumns] = useState('');
//   const [nonSeatingSpaces, setNonSeatingSpaces] = useState('');


//   const areaRef = useRef(null);
//   const cityRef = useRef(null);
//   const rowsRef = useRef(null);
//   const columnsRef = useRef(null);
//   const nonSeatingSpacesRef = useRef(null);

//   const handleKeyDown = (e, nextFieldRef) => {
//     if (e.key === 'Enter' && nextFieldRef) {
//       e.preventDefault(); 
//       nextFieldRef.current.focus(); 
//     }
//   };

 


//   const handleView = (e) => {
//     e.preventDefault();

//     console.log(name,"oooo")
//     console.log(area,"oooo")
//     console.log(city,"oooo")
//     console.log(rows,"oooo")
//     console.log(columns,"oooo")

   
//     if (name && area && city && rows && columns) {
//       viewTheater({
//         name,
//         area,
//         city,
//         rows: parseInt(rows),
//         columns: parseInt(columns),
//         nonSeatingSpaces: nonSeatingSpaces.split(',').map(space => space.trim()) 
//       });

//     seats({
//         rows: rows,
//         columns: columns
//       });
    
//       req({
//         name: name,
//         area:area,
//         city:city,
        
//       });
//       // nonSitting({
//       //   rowNumber:rowNumber,
//       //   nonSeatingSpaces: nonSeatingSpaces.split(',').map(space => space.trim())
//       // })

//       nonSitting({
//         rowNumber: rows,
//         nonSeatingSpaces: nonSeatingSpaces.split(',').map(space => space.trim())
//       });
    
//     }
//   };

//   return (
//     <form>
//       <div>
//         <label>Theater Name: </label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           onKeyDown={(e) => handleKeyDown(e, areaRef)}
//           required
//         />
//       </div>
//       <div>
//         <label>Area: </label>
//         <input
//           type="text"
//           value={area}
//           onChange={(e) => setArea(e.target.value)}
//           onKeyDown={(e) => handleKeyDown(e, cityRef)}
//           ref={areaRef}
//           required
//         />
//       </div>
//       <div>
//         <label>City: </label>
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           onKeyDown={(e) => handleKeyDown(e, rowsRef)}
//           ref={cityRef}
//           required
//         />
//       </div>
//       <div>
//         <label>Rows: </label>
//         <input
//           type="number"
//           value={rows}
//           onChange={(e) => setRows(e.target.value)}
//           onKeyDown={(e) => handleKeyDown(e, columnsRef)}
//           ref={rowsRef}
//           required
//         />
//       </div>
//       <div>
//         <label>Columns: </label>
//         <input
//           type="number"
//           value={columns}
//           onChange={(e) => setColumns(e.target.value)}
//           onKeyDown={(e) => handleKeyDown(e, nonSeatingSpacesRef)}
//           ref={columnsRef}
//           required
//         />
//       </div>
//       <div>
//         <label>Non-Seating Spaces (comma separated): </label>
//         <input
//           type="text"
//           value={nonSeatingSpaces}
//           onChange={(e) => setNonSeatingSpaces(e.target.value)}
//           ref={nonSeatingSpacesRef}
//           placeholder="e.g., B7, B8, C7"
//         />
//       </div>
//       <div>
       
//         <button type="button" onClick={handleView}>View</button>
    
        
//         <button type="button" onClick={clearFields}>Clear</button>
//       </div>
//     </form>
//   );
// };

// export default AddTheater;