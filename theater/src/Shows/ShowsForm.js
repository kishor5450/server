import React, { useState, useEffect } from "react";
import { Button, Form, Input, Select } from "antd";

const { Option } = Select;

const ShowsForm = ({ onShowsChange = () => {} }) => {
  const [numOfShows, setNumOfShows] = useState(1);
  const [showsData, setShowsData] = useState([]);

  // Handle the dropdown selection
  const handleShowChange = (value) => {
    setNumOfShows(value);
    const newShowsData = Array.from({ length: value }, () => ({
      show_no: "",
      start_time: "",
    }));
    setShowsData(newShowsData);
  };

  // Handle input changes for each show
  const handleInputChange = (index, field, value) => {
    const updatedShowsData = [...showsData];
    updatedShowsData[index][field] = value;
    setShowsData(updatedShowsData);
    // Notify parent component about changes
    onShowsChange(updatedShowsData);
  };

  useEffect(() => {
    // Update showsData when number of shows changes
    handleShowChange(numOfShows);
  }, [numOfShows]);

  return (
    <div style={{ padding: "20px" }}>
      <Form>
        <Form.Item label="No. of Shows">
          <Select
            defaultValue={numOfShows}
            onChange={handleShowChange}
            style={{ width: 120 }}
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <Option key={value} value={value}>
                {value}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {showsData.map((show, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <h4>Show {index + 1}</h4>
            <Form.Item label="Show No">
              <Input
                placeholder="Show No"
                value={show.show_no}
                onChange={(e) =>
                  handleInputChange(index, "show_no", e.target.value)
                }
              />
            </Form.Item>
            <Form.Item label="Start Time">
              <Input
                placeholder="Start Time"
                value={show.start_time}
                onChange={(e) =>
                  handleInputChange(index, "start_time", e.target.value)
                }
              />
            </Form.Item>
          </div>
        ))}
      </Form>
    </div>
  );
};

export default ShowsForm;
