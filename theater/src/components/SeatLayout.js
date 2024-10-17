// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Layout, Button, Row, Col, Typography, message, Input } from "antd";
// import "./styles/seatlayout.css";

// const { Content } = Layout;
// const { Title, Text } = Typography;

// const getRowLabel = (index) => String.fromCharCode(65 + index);

// const SeatLayout = ({
//   theater,
//   saveData,
//   seatsData = { rows: 0, columns: 0 },
//   nonData,
// }) => {
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [unavailableSeats, setUnavailableSeats] = useState([]);
//   const [nonSeatingSpaces, setNonSeatingSpaces] = useState(
//     theater.nonSeatingSpaces || []
//   );
//   const [rows, setRows] = useState(theater.rows || 0);
//   const [columns, setColumns] = useState(theater.columns || 0);

//   useEffect(() => {
//     if (theater.nonSeatingSpaces) {
//       setNonSeatingSpaces(theater.nonSeatingSpaces);
//     }
//   }, [theater]);

//   const allSeats = Array.from({ length: rows }, (_, row) =>
//     Array.from({ length: columns }, (_, col) => `${getRowLabel(row)}${col + 1}`)
//   );

//   const toggleSeat = (seat) => {
//     if (unavailableSeats.includes(seat) || nonSeatingSpaces.includes(seat))
//       return;

//     setSelectedSeats((prev) =>
//       prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
//     );
//   };

//   const toggleUnavailableSeat = (seat) => {
//     setUnavailableSeats((prev) =>
//       prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
//     );
//   };

//   const groupData = (dataArray) => {
//     return dataArray.reduce((acc, item) => {
//       const trow_number = item[0];
//       let group = acc.find((group) => group.trow_number === trow_number);
//       if (!group) {
//         group = { trow_number: trow_number, cell_indexes: "" };
//         acc.push(group);
//       }
//       group.cell_indexes += group.cell_indexes ? `,${item}` : item;
//       return acc;
//     }, []);
//   };

//   const handleSave = async () => {
//     if (
//       !seatsData ||
//       typeof seatsData.rows === "undefined" ||
//       typeof seatsData.columns === "undefined"
//     ) {
//       message.error("Seat data is missing or invalid.");
//       return;
//     }

//     try {
//       const groupedData = groupData(nonData?.nonSeatingSpaces || []);
//       const response = await axios.post(
//         "http://localhost:9001/addtheater",
//         saveData,
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       if (response.data) {
//         const theaterSeatReq = {
//           theater_id: response.data.id,
//           t_rows: rows,
//           t_columns: columns,
//         };

//         await axios.post(
//           "http://localhost:9001/theater_seats",
//           theaterSeatReq,
//           {
//             headers: { "Content-Type": "application/json" },
//           }
//         );

//         const nonSeatsReq = {
//           theater_id: response.data.id,
//           info: groupedData,
//         };

//         await axios.post(
//           "http://localhost:9001/non_seating_space",
//           nonSeatsReq,
//           {
//             headers: { "Content-Type": "application/json" },
//           }
//         );

//         message.success("Theater saved successfully!");
//       }
//     } catch (error) {
//       console.error("Error saving theater:", error);
//       message.error("Failed to save theater. Please try again.");
//     }
//   };

//   return (
//     <Layout className="layout">
//       <Content>
//         <Title level={3}>Seating Layout (Click on seat to select)</Title>

//         <Row gutter={16} style={{ marginBottom: "20px" }}>
//           <Col span={10}>
//             <Input
//               type="number"
//               placeholder="Number of Rows"
//               value={rows}
//               onChange={(e) => setRows(Number(e.target.value))}
//             />
//           </Col>
//           <Col span={10}>
//             <Input
//               type="number"
//               placeholder="Number of Columns"
//               value={columns}
//               onChange={(e) => setColumns(Number(e.target.value))}
//             />
//           </Col>
//         </Row>

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
//               onClick={() => toggleSeat(seat)}
//               onContextMenu={(e) => {
//                 e.preventDefault();
//                 toggleUnavailableSeat(seat);
//               }}
//               className={`seat ${
//                 nonSeatingSpaces.includes(seat) ? "non-seating" : ""
//               } ${unavailableSeats.includes(seat) ? "unavailable" : ""} ${
//                 selectedSeats.includes(seat) ? "selected" : "available"
//               }`}
//             >
//               {seat}
//             </div>
//           ))}
//         </div>
//         <Row gutter={16} style={{ marginTop: "20px" }}>
//           <Col span={8}>
//             <Text>Total Seats: {rows * columns}</Text>
//           </Col>
//           <Col span={8}>
//             <Text>Total Non-Seating Spaces: {nonSeatingSpaces.length}</Text>
//           </Col>
//           <Col span={8}>
//             <Text>Selected Seats: {selectedSeats.join(", ") || "None"}</Text>
//           </Col>
//         </Row>
//         <Button
//           type="primary"
//           onClick={handleSave}
//           style={{ marginTop: "20px" }}
//         >
//           Save
//         </Button>
//       </Content>
//     </Layout>
//   );
// };

// export default SeatLayout;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Layout, Button, Row, Col, Typography, message, Input } from "antd";
// import "./styles/seatlayout.css";

// const { Content } = Layout;
// const { Title, Text } = Typography;

// const getRowLabel = (index) => String.fromCharCode(65 + index);

// const SeatLayout = ({
//   theater,
//   saveData,
//   seatsData = { rows: 0, columns: 0 },
//   nonData,
// }) => {
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [unavailableSeats, setUnavailableSeats] = useState([]);
//   const [nonSeatingSpaces, setNonSeatingSpaces] = useState(
//     theater.nonSeatingSpaces || []
//   );
//   const [rows, setRows] = useState(theater.rows || 0);
//   const [columns, setColumns] = useState(theater.columns || 0);

//   useEffect(() => {
//     if (theater.nonSeatingSpaces) {
//       setNonSeatingSpaces(theater.nonSeatingSpaces);
//     }
//   }, [theater]);

//   const allSeats = Array.from({ length: rows }, (_, row) =>
//     Array.from({ length: columns }, (_, col) => `${getRowLabel(row)}${col + 1}`)
//   );

//   const toggleSeat = (seat) => {
//     if (unavailableSeats.includes(seat) || nonSeatingSpaces.includes(seat))
//       return;

//     setSelectedSeats((prev) =>
//       prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
//     );
//   };

//   const toggleUnavailableSeat = (seat) => {
//     setUnavailableSeats((prev) =>
//       prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
//     );
//   };

//   const groupData = (dataArray) => {
//     return dataArray.reduce((acc, item) => {
//       const trow_number = item[0];
//       let group = acc.find((group) => group.trow_number === trow_number);
//       if (!group) {
//         group = { trow_number: trow_number, cell_indexes: "" };
//         acc.push(group);
//       }
//       group.cell_indexes += group.cell_indexes ? `,${item}` : item;
//       return acc;
//     }, []);
//   };

//   const handleSave = async () => {
//     if (
//       !seatsData ||
//       typeof seatsData.rows === "undefined" ||
//       typeof seatsData.columns === "undefined"
//     ) {
//       message.error("Seat data is missing or invalid.");
//       return;
//     }

//     try {
//       const groupedData = groupData(nonData?.nonSeatingSpaces || []);
//       const response = await axios.post(
//         "http://localhost:9001/addtheater",
//         saveData,
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       if (response.data) {
//         const theaterId = response.data.id;

//         // Save row and column data along with trow_number and seats_count
//         const rowSeatsRequests = [];

//         for (let row = 0; row < rows; row++) {
//           const rowSeatReq = {
//             theater_id: theaterId,
//             trow_number: row + 1, // Assuming trow_number starts from 1
//             seats_count: columns, // All columns in this row
//           };
//           rowSeatsRequests.push(rowSeatReq);
//         }

//         await Promise.all(
//           rowSeatsRequests.map((req) =>
//             axios.post("http://localhost:9001/row_seats", req, {
//               headers: { "Content-Type": "application/json" },
//             })
//           )
//         );

//         // Save theater seats data
//         const theaterSeatReq = {
//           theater_id: theaterId,
//           t_rows: rows,
//           t_columns: columns,
//         };

//         await axios.post(
//           "http://localhost:9001/theater_seats",
//           theaterSeatReq,
//           {
//             headers: { "Content-Type": "application/json" },
//           }
//         );

//         // Save non-seating spaces data
//         const nonSeatsReq = {
//           theater_id: theaterId,
//           info: groupedData,
//         };

//         await axios.post(
//           "http://localhost:9001/non_seating_space",
//           nonSeatsReq,
//           {
//             headers: { "Content-Type": "application/json" },
//           }
//         );

//         message.success("Theater saved successfully!");
//       }
//     } catch (error) {
//       console.error("Error saving theater:", error);
//       message.error("Failed to save theater. Please try again.");
//     }
//   };

//   return (
//     <Layout className="layout">
//       <Content>
//         <Title level={3}>Seating Layout (Click on seat to select)</Title>

//         <Row gutter={16} style={{ marginBottom: "20px" }}>
//           <Col span={10}>
//             <Input
//               type="number"
//               placeholder="Number of Rows"
//               value={rows}
//               onChange={(e) => setRows(Number(e.target.value))}
//             />
//           </Col>
//           <Col span={10}>
//             <Input
//               type="number"
//               placeholder="Number of Columns"
//               value={columns}
//               onChange={(e) => setColumns(Number(e.target.value))}
//             />
//           </Col>
//         </Row>

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
//               onClick={() => toggleSeat(seat)}
//               onContextMenu={(e) => {
//                 e.preventDefault();
//                 toggleUnavailableSeat(seat);
//               }}
//               className={`seat ${
//                 nonSeatingSpaces.includes(seat) ? "non-seating" : ""
//               } ${unavailableSeats.includes(seat) ? "unavailable" : ""} ${
//                 selectedSeats.includes(seat) ? "selected" : "available"
//               }`}
//             >
//               {seat}
//             </div>
//           ))}
//         </div>
//         <Row gutter={16} style={{ marginTop: "20px" }}>
//           <Col span={8}>
//             <Text>Total Seats: {rows * columns}</Text>
//           </Col>
//           <Col span={8}>
//             <Text>Total Non-Seating Spaces: {nonSeatingSpaces.length}</Text>
//           </Col>
//           <Col span={8}>
//             <Text>Selected Seats: {selectedSeats.join(", ") || "None"}</Text>
//           </Col>
//         </Row>
//         <Button
//           type="primary"
//           onClick={handleSave}
//           style={{ marginTop: "20px" }}
//         >
//           Save
//         </Button>
//       </Content>
//     </Layout>
//   );
// };

// export default SeatLayout;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout, Button, Row, Col, Typography, message, Input } from "antd";
import "./styles/seatlayout.css";

const { Content } = Layout;
const { Title, Text } = Typography;

const getRowLabel = (index) => String.fromCharCode(65 + index);

const SeatLayout = ({
  theater,
  saveData,
  seatsData = { rows: 0, columns: 0 },
  nonData,
  showsData,
}) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [unavailableSeats, setUnavailableSeats] = useState([]);
  const [nonSeatingSpaces, setNonSeatingSpaces] = useState(
    theater.nonSeatingSpaces || []
  );
  const [rows, setRows] = useState(theater.rows || 0);
  const [columns, setColumns] = useState(theater.columns || 0);

  useEffect(() => {
    if (theater.nonSeatingSpaces) {
      setNonSeatingSpaces(theater.nonSeatingSpaces);
    }
  }, [theater]);

  const allSeats = Array.from({ length: rows }, (_, row) =>
    Array.from({ length: columns }, (_, col) => `${getRowLabel(row)}${col + 1}`)
  );

  const toggleSeat = (seat) => {
    if (unavailableSeats.includes(seat) || nonSeatingSpaces.includes(seat))
      return;

    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const toggleUnavailableSeat = (seat) => {
    setUnavailableSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const groupData = (dataArray) => {
    return dataArray.reduce((acc, item) => {
      const trow_number = item[0];
      let group = acc.find((group) => group.trow_number === trow_number);
      if (!group) {
        group = { trow_number: trow_number, cell_indexes: "" };
        acc.push(group);
      }
      group.cell_indexes += group.cell_indexes ? `,${item}` : item;
      return acc;
    }, []);
  };

  const handleSave = async () => {
    if (
      !seatsData ||
      typeof seatsData.rows === "undefined" ||
      typeof seatsData.columns === "undefined"
    ) {
      message.error("Seat data is missing or invalid.");
      return;
    }

    try {
      const groupedData = groupData(nonData?.nonSeatingSpaces || []);
      const response = await axios.post(
        "http://localhost:9001/addtheater",
        saveData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data) {
        const theaterSeatReq = {
          theater_id: response.data.id,
          t_rows: rows,
          t_columns: columns,
        };

        await axios.post(
          "http://localhost:9001/theater_seats",
          theaterSeatReq,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        const nonSeatsReq = {
          theater_id: response.data.id,
          info: groupedData,
        };

        await axios.post(
          "http://localhost:9001/non_seating_space",
          nonSeatsReq,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        const showsReq = {
          theater_id: response.data.id,
          shows: showsData,
        };
        await axios.post("http://localhost:9001/shows", showsReq, {
          headers: { "Content-Type": "application/json" },
        });

        message.success("Theater saved successfully!");
      }
    } catch (error) {
      console.error("Error saving theater:", error);
      message.error("Failed to save theater. Please try again.");
    }
  };

  return (
    <Layout className="layout">
      <Content>
        <Title level={3}>Seating Layout (Click on seat to select)</Title>

        <Row gutter={16} style={{ marginBottom: "20px" }}>
          <Col span={10}>
            <Input
              type="number"
              placeholder="Number of Rows"
              value={rows}
              onChange={(e) => setRows(Number(e.target.value))}
            />
          </Col>
          <Col span={10}>
            <Input
              type="number"
              placeholder="Number of Columns"
              value={columns}
              onChange={(e) => setColumns(Number(e.target.value))}
            />
          </Col>
        </Row>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 50px)`,
            gap: "5px",
          }}
        >
          {allSeats.flat().map((seat) => (
            <div
              key={seat}
              onClick={() => toggleSeat(seat)}
              onContextMenu={(e) => {
                e.preventDefault();
                toggleUnavailableSeat(seat);
              }}
              className={`seat ${
                nonSeatingSpaces.includes(seat) ? "non-seating" : ""
              } ${unavailableSeats.includes(seat) ? "unavailable" : ""} ${
                selectedSeats.includes(seat) ? "selected" : "available"
              }`}
            >
              {seat}
            </div>
          ))}
        </div>
        <Row gutter={16} style={{ marginTop: "20px" }}>
          <Col span={8}>
            <Text>Total Seats: {rows * columns}</Text>
          </Col>
          <Col span={8}>
            <Text>Total Non-Seating Spaces: {nonSeatingSpaces.length}</Text>
          </Col>
          <Col span={8}>
            <Text>Selected Seats: {selectedSeats.join(", ") || "None"}</Text>
          </Col>
        </Row>
        <Button
          type="primary"
          onClick={handleSave}
          style={{ marginTop: "20px" }}
        >
          Save
        </Button>
      </Content>
    </Layout>
  );
};

export default SeatLayout;
