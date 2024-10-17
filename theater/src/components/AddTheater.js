// import React, { useState, useRef } from "react";
// import { Form, Input, Button, Row, Col } from "antd";
// import SeatLayout from "./SeatLayout";
// import "./styles/addtheater.css";

// const AddTheater = ({ setTheater, setData, setSeatData, setNonData }) => {
//   const [name, setName] = useState("");
//   const [area, setArea] = useState("");
//   const [city, setCity] = useState("");
//   const [rows, setRows] = useState("");
//   const [columns, setColumns] = useState("");
//   const [nonSeatingSpaces, setNonSeatingSpaces] = useState("");
//   const [showSeatLayout, setShowSeatLayout] = useState(false);

//   const areaRef = useRef(null);
//   const cityRef = useRef(null);
//   const rowsRef = useRef(null);
//   const columnsRef = useRef(null);
//   const nonSeatingSpacesRef = useRef(null);

//   const handleKeyDown = (e, nextFieldRef) => {
//     if (e.key === "Enter" && nextFieldRef) {
//       e.preventDefault();
//       nextFieldRef.current.focus();
//     }
//   };

//   const handleView = () => {
//     if (name && area && city && rows && columns) {
//       const theaterData = {
//         name,
//         area,
//         city,
//         rows: parseInt(rows),
//         columns: parseInt(columns),
//         nonSeatingSpaces: nonSeatingSpaces
//           .split(",")
//           .map((space) => space.trim()),
//       };

//       setTheater(theaterData);
//       setSeatData({ rows: parseInt(rows), columns: parseInt(columns) });
//       setData({ name, area, city });
//       setNonData({
//         rowNumber: rows,
//         nonSeatingSpaces: nonSeatingSpaces
//           .split(",")
//           .map((space) => space.trim()),
//       });

//       setShowSeatLayout(true);
//     }
//   };

//   const clearFields = () => {
//     setName("");
//     setArea("");
//     setCity("");
//     setRows("");
//     setColumns("");
//     setNonSeatingSpaces("");
//     setTheater(null);
//     setShowSeatLayout(false);
//   };

//   return (
//     <div className="container">
//       <div className="form-section">
//         <Form layout="vertical">
//           <Row gutter={16}>
//             <Col span={24}>
//               <Form.Item label="Theater Name" required>
//                 <Input
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   onKeyDown={(e) => handleKeyDown(e, areaRef)}
//                   placeholder="Enter theater name"
//                 />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item label="Area" required>
//                 <Input
//                   value={area}
//                   onChange={(e) => setArea(e.target.value)}
//                   onKeyDown={(e) => handleKeyDown(e, cityRef)}
//                   ref={areaRef}
//                   placeholder="Enter area"
//                 />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item label="City" required>
//                 <Input
//                   value={city}
//                   onChange={(e) => setCity(e.target.value)}
//                   onKeyDown={(e) => handleKeyDown(e, rowsRef)}
//                   ref={cityRef}
//                   placeholder="Enter city"
//                 />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item label="Rows" required>
//                 <Input
//                   type="number"
//                   value={rows}
//                   onChange={(e) => setRows(e.target.value)}
//                   onKeyDown={(e) => handleKeyDown(e, columnsRef)}
//                   ref={rowsRef}
//                   placeholder="Enter number of rows"
//                 />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item label="Columns" required>
//                 <Input
//                   type="number"
//                   value={columns}
//                   onChange={(e) => setColumns(e.target.value)}
//                   onKeyDown={(e) => handleKeyDown(e, nonSeatingSpacesRef)}
//                   ref={columnsRef}
//                   placeholder="Enter number of columns"
//                 />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row>
//             <Col span={24}>
//               <Form.Item label="Non-Seating Spaces (comma separated)">
//                 <Input
//                   value={nonSeatingSpaces}
//                   onChange={(e) => setNonSeatingSpaces(e.target.value)}
//                   ref={nonSeatingSpacesRef}
//                   placeholder="e.g., B7, B8, C7"
//                 />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={[0, 16]}>
//             {" "}
//             {/* Horizontal gutter: 0, Vertical gutter: 16 */}
//             <Col span={10}>
//               <Button type="primary" onClick={handleView} block>
//                 View
//               </Button>
//             </Col>
//             <Col span={10}>
//               <Button onClick={clearFields} block>
//                 Clear
//               </Button>
//             </Col>
//           </Row>
//         </Form>
//       </div>

//       {/* <div className="layout-section">
//         {showSeatLayout && (
//           <SeatLayout
//             theater={{
//               name,
//               area,
//               city,
//               rows: parseInt(rows),
//               columns: parseInt(columns),
//               nonSeatingSpaces: nonSeatingSpaces.split(',').map(space => space.trim()),
//             }}
//           />
//         )}
//       </div> */}
//     </div>
//   );
// };

// export default AddTheater;
import React, { useState, useRef } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import SeatLayout from "./SeatLayout";
import ShowsForm from "../Shows/ShowsForm";
import "./styles/addtheater.css";

const AddTheater = ({
  setTheater,
  setData,
  setSeatData,
  setNonData,
  setShowsData,
  showsData,
}) => {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [rows, setRows] = useState("");
  const [columns, setColumns] = useState("");
  const [nonSeatingSpaces, setNonSeatingSpaces] = useState("");
  const [showSeatLayout, setShowSeatLayout] = useState(false);
  const [showShowsForm, setShowShowsForm] = useState(false);
  // const [showsData, setShowsData] = useState([]); // State to hold shows data

  const areaRef = useRef(null);
  const cityRef = useRef(null);
  const rowsRef = useRef(null);
  const columnsRef = useRef(null);
  const nonSeatingSpacesRef = useRef(null);

  const handleKeyDown = (e, nextFieldRef) => {
    if (e.key === "Enter" && nextFieldRef) {
      e.preventDefault();
      nextFieldRef.current.focus();
    }
  };

  const handleView = () => {
    if (name && area && city && rows && columns) {
      const theaterData = {
        name,
        area,
        city,
        rows: parseInt(rows),
        columns: parseInt(columns),
        nonSeatingSpaces: nonSeatingSpaces
          .split(",")
          .map((space) => space.trim()),
        shows: showsData, // Include shows data here
      };

      setTheater(theaterData);
      setSeatData({ rows: parseInt(rows), columns: parseInt(columns) });
      setData({ name, area, city });
      setNonData({
        rowNumber: rows,
        nonSeatingSpaces: nonSeatingSpaces
          .split(",")
          .map((space) => space.trim()),
      });

      setShowShowsForm(true);
    }
  };

  const clearFields = () => {
    setName("");
    setArea("");
    setCity("");
    setRows("");
    setColumns("");
    setNonSeatingSpaces("");
    setTheater(null);
    setShowSeatLayout(false);
    setShowShowsForm(false);
    setShowsData([]); // Reset shows data
  };

  const handleShowSeatLayout = () => {
    setShowSeatLayout(true);
    setShowShowsForm(false);
  };

  return (
    <div className="container">
      <div className="form-section">
        <Form layout="vertical">
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Theater Name" required>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, areaRef)}
                  placeholder="Enter theater name"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Area" required>
                <Input
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, cityRef)}
                  ref={areaRef}
                  placeholder="Enter area"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="City" required>
                <Input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, rowsRef)}
                  ref={cityRef}
                  placeholder="Enter city"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Rows" required>
                <Input
                  type="number"
                  value={rows}
                  onChange={(e) => setRows(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, columnsRef)}
                  ref={rowsRef}
                  placeholder="Enter number of rows"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Columns" required>
                <Input
                  type="number"
                  value={columns}
                  onChange={(e) => setColumns(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, nonSeatingSpacesRef)}
                  ref={columnsRef}
                  placeholder="Enter number of columns"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item label="Non-Seating Spaces (comma separated)">
                <Input
                  value={nonSeatingSpaces}
                  onChange={(e) => setNonSeatingSpaces(e.target.value)}
                  ref={nonSeatingSpacesRef}
                  placeholder="e.g., B7, B8, C7"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[0, 16]}>
            <Col span={10}>
              <Button type="primary" onClick={handleView} block>
                View
              </Button>
            </Col>
            <Col span={10}>
              <Button onClick={clearFields} block>
                Clear
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      {showShowsForm && (
        <div className="shows-form-section">
          <ShowsForm onShowsChange={setShowsData} />{" "}
          {/* Ensure this function updates showsData */}
        </div>
      )}
      {showSeatLayout && (
        <div className="layout-section">
          <SeatLayout
            theater={{
              name,
              area,
              city,
              rows: parseInt(rows),
              columns: parseInt(columns),
              nonSeatingSpaces: nonSeatingSpaces
                .split(",")
                .map((space) => space.trim()),
              shows: showsData, // Pass shows data here as well
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AddTheater;
