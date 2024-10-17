// import React, { useState, useEffect } from "react";
// import { Modal, Form, Select, DatePicker, Button } from "antd";
// import axios from "axios";
// import moment from "moment";

// const { Option } = Select;
// const { RangePicker } = DatePicker;

// const MovieScheduleDialog = ({ visible, onClose }) => {
//   const [movies, setMovies] = useState([]);
//   const [form] = Form.useForm();

//   useEffect(() => {
//     // Fetch movie data when the component loads
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get("http://localhost:9001/movies"); // replace with your movie API endpoint
//         setMovies(response.data);
//       } catch (error) {
//         console.error("Failed to fetch movies:", error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   const handleSubmit = () => {
//     form
//       .validateFields()
//       .then((values) => {
//         // Handle the form submission
//         console.log("Form values:", values);
//         // You can process the form data and make further API calls here
//         onClose();
//       })
//       .catch((info) => {
//         console.log("Validation failed:", info);
//       });
//   };

//   return (
//     <Modal
//       title="Schedule a Movie"
//       visible={visible}
//       onCancel={onClose}
//       footer={[
//         <Button key="cancel" onClick={onClose}>
//           Cancel
//         </Button>,
//         <Button key="submit" type="primary" onClick={handleSubmit}>
//           Submit
//         </Button>,
//       ]}
//     >
//       <Form form={form} layout="vertical">
//         <Form.Item
//           label="Select Movie"
//           name="movie"
//           rules={[{ required: true, message: "Please select a movie" }]}
//         >
//           <Select
//             placeholder="Select a movie"
//             showSearch
//             optionFilterProp="children"
//             dropdownStyle={{ maxHeight: 400, overflow: "auto" }} // Enable scrolling in the dropdown
//             filterOption={(input, option) =>
//               option.children.toLowerCase().includes(input.toLowerCase())
//             }
//           >
//             {movies.map((movie) => (
//               <Option key={movie.id} value={movie.id}>
//                 {movie.name}
//               </Option>
//             ))}
//           </Select>
//         </Form.Item>

//         <Form.Item
//           label="Date Range"
//           name="dateRange"
//           rules={[{ required: true, message: "Please select a date range" }]}
//         >
//           <RangePicker
//             disabledDate={(current) =>
//               current && current < moment().endOf("day")
//             }
//             format="YYYY-MM-DD"
//           />
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

// export default MovieScheduleDialog;

// import React, { useState, useEffect } from "react";
// import { Modal, Form, Select, DatePicker, Button } from "antd";
// import axios from "axios";
// import moment from "moment";

// const { Option } = Select;
// const { RangePicker } = DatePicker;

// const MovieScheduleDialog = ({ visible, onClose, onMovieScheduled }) => {
//   const [movies, setMovies] = useState([]);
//   const [form] = Form.useForm();

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get("http://localhost:9001/movies");
//         setMovies(response.data);
//       } catch (error) {
//         console.error("Failed to fetch movies:", error);
//       }
//     };
//     fetchMovies();
//   }, []);

//   const handleSubmit = () => {
//     form
//       .validateFields()
//       .then((values) => {
//         const selectedMovie = movies.find((movie) => movie.id === values.movie);
//         onMovieScheduled(selectedMovie);
//         onClose();
//       })
//       .catch((info) => {
//         console.log("Validation failed:", info);
//       });
//   };

//   return (
//     <Modal
//       title="Schedule a Movie"
//       visible={visible}
//       onCancel={onClose}
//       footer={[
//         <Button key="cancel" onClick={onClose}>
//           Cancel
//         </Button>,
//         <Button key="submit" type="primary" onClick={handleSubmit}>
//           Submit
//         </Button>,
//       ]}
//     >
//       <Form form={form} layout="vertical">
//         <Form.Item
//           label="Select Movie"
//           name="movie"
//           rules={[{ required: true, message: "Please select a movie" }]}
//         >
//           <Select placeholder="Select a movie">
//             {movies.map((movie) => (
//               <Option key={movie.id} value={movie.id}>
//                 {movie.name}
//               </Option>
//             ))}
//           </Select>
//         </Form.Item>

//         <Form.Item
//           label="Date Range"
//           name="dateRange"
//           rules={[{ required: true, message: "Please select a date range" }]}
//         >
//           <RangePicker
//             disabledDate={(current) =>
//               current && current < moment().endOf("day")
//             }
//             format="YYYY-MM-DD"
//           />
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

// export default MovieScheduleDialog;

// import React, { useState, useEffect } from "react";
// import { Modal, Form, Select, DatePicker, Button, message } from "antd";
// import axios from "axios";
// import moment from "moment";

// const { Option } = Select;
// const { RangePicker } = DatePicker;

// const MovieScheduleDialog = ({
//   visible,
//   onClose,
//   onMovieScheduled,
//   theaterId,
//   theaterName,
// }) => {
//   const [movies, setMovies] = useState([]);
//   const [theater, setTheater] = useState(null);
//   const [form] = Form.useForm();

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get("http://localhost:9001/movies");
//         setMovies(response.data);
//       } catch (error) {
//         console.error("Failed to fetch movies:", error);
//       }
//     };
//     fetchMovies();
//   }, []);

//   useEffect(() => {
//     const fetchTheaters = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:9001/theaters-movies"
//         );
//         setTheater(response.data);
//       } catch (error) {
//         console.error("Failed to fetch movies:", error);
//       }
//     };
//     fetchTheaters();
//   }, []);

//   const handleSubmit = async () => {
//     try {
//       const values = await form.validateFields();
//       const selectedMovie = movies.find((movie) => movie.id === values.movie);

//       // Prepare the data to send to the backend
//       const scheduleData = {
//         theater_id: theaterId,
//         movie_id: selectedMovie.id,
//         theater_name: theaterName,
//         movie_name: selectedMovie.name,
//         start_date: values.dateRange[0].format("YYYY-MM-DD"),
//         end_date: values.dateRange[1].format("YYYY-MM-DD"),
//       };

//       // Send the data to the backend
//       await axios.post("http://localhost:9001/theaters-movies", scheduleData);

//       // Notify success
//       message.success("Movie scheduled successfully!");

//       // Pass the scheduled movie back to parent component for UI update
//       onMovieScheduled(selectedMovie);

//       // Close the modal
//       onClose();
//     } catch (error) {
//       console.error("Error scheduling movie:", error);
//       message.error("Failed to schedule movie. Please try again.");
//     }
//   };

//   return (
//     <Modal
//       title="Schedule a Movie"
//       visible={visible}
//       onCancel={onClose}
//       footer={[
//         <Button key="cancel" onClick={onClose}>
//           Cancel
//         </Button>,
//         <Button key="submit" type="primary" onClick={handleSubmit}>
//           Submit
//         </Button>,
//       ]}
//     >
//       <Form form={form} layout="vertical">
//         <Form.Item
//           label="Select Movie"
//           name="movie"
//           rules={[{ required: true, message: "Please select a movie" }]}
//         >
//           <Select placeholder="Select a movie">
//             {movies.map((movie) => (
//               <Option key={movie.id} value={movie.id}>
//                 {movie.name}
//               </Option>
//             ))}
//           </Select>
//         </Form.Item>

//         <Form.Item
//           label="Date Range"
//           name="dateRange"
//           rules={[{ required: true, message: "Please select a date range" }]}
//         >
//           <RangePicker
//             disabledDate={(current) =>
//               current && current < moment().endOf("day")
//             }
//             format="YYYY-MM-DD"
//           />
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

// export default MovieScheduleDialog;

// import React, { useState, useEffect } from "react";
// import { Modal, Form, Select, DatePicker, Button, message } from "antd";
// import axios from "axios";
// import moment from "moment";

// const { Option } = Select;
// const { RangePicker } = DatePicker;

// const MovieScheduleDialog = ({ visible, onClose, onMovieScheduled }) => {
//   const [movies, setMovies] = useState([]);
//   const [theater, setTheater] = useState(null);
//   const [form] = Form.useForm();
//   const hardcodedTheaterId = 1; // Example of hardcoding the theater ID

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get("http://localhost:9001/movies");
//         setMovies(response.data);
//       } catch (error) {
//         console.error("Failed to fetch movies:", error);
//       }
//     };
//     fetchMovies();
//   }, []);

//   useEffect(() => {
//     const fetchTheater = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:9001/theaters/${hardcodedTheaterId}`
//         );
//         setTheater(response.data);
//       } catch (error) {
//         console.error("Failed to fetch theater:", error);
//       }
//     };
//     fetchTheater();
//   }, [hardcodedTheaterId]);

//   const handleSubmit = async () => {
//     try {
//       const values = await form.validateFields();
//       const selectedMovie = movies.find((movie) => movie.id === values.movie);

//       if (!theater) {
//         message.error("Theater data is not available.");
//         return;
//       }

//       // Prepare the data to send to the backend
//       const scheduleData = {
//         theater_id: theater.id, // Fetch from state
//         movie_id: selectedMovie.id,
//         theater_name: theater.name, // Fetch from state
//         movie_name: selectedMovie.name,
//         start_date: values.dateRange[0].format("YYYY-MM-DD"),
//         end_date: values.dateRange[1].format("YYYY-MM-DD"),
//       };

//       // Send the data to the backend
//       await axios.post("http://localhost:9001/theaters-movies", scheduleData);

//       // Notify success
//       message.success("Movie scheduled successfully!");

//       // Pass the scheduled movie back to parent component for UI update
//       onMovieScheduled(selectedMovie);

//       // Close the modal
//       onClose();
//     } catch (error) {
//       console.error("Error scheduling movie:", error);
//       message.error("Failed to schedule movie. Please try again.");
//     }
//   };

//   return (
//     <Modal
//       title={`Schedule a Movie for ${theater?.name || "Theater"}`} // Display theater name
//       visible={visible}
//       onCancel={onClose}
//       footer={[
//         <Button key="cancel" onClick={onClose}>
//           Cancel
//         </Button>,
//         <Button key="submit" type="primary" onClick={handleSubmit}>
//           Submit
//         </Button>,
//       ]}
//     >
//       <Form form={form} layout="vertical">
//         <Form.Item
//           label="Select Movie"
//           name="movie"
//           rules={[{ required: true, message: "Please select a movie" }]}
//         >
//           <Select placeholder="Select a movie">
//             {movies.map((movie) => (
//               <Option key={movie.id} value={movie.id}>
//                 {movie.name}
//               </Option>
//             ))}
//           </Select>
//         </Form.Item>

//         <Form.Item
//           label="Date Range"
//           name="dateRange"
//           rules={[{ required: true, message: "Please select a date range" }]}
//         >
//           <RangePicker
//             disabledDate={(current) =>
//               current && current < moment().endOf("day")
//             }
//             format="YYYY-MM-DD"
//           />
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

// export default MovieScheduleDialog;

// import React, { useState, useEffect } from "react";
// import { Modal, Form, Select, DatePicker, Button, message } from "antd";
// import axios from "axios";
// import moment from "moment";

// const { Option } = Select;
// const { RangePicker } = DatePicker;

// const MovieScheduleDialog = ({
//   visible,
//   onClose,
//   onMovieScheduled,
//   theaterId,
// }) => {
//   const [movies, setMovies] = useState([]);
//   const [theater, setTheater] = useState(null);
//   const [form] = Form.useForm();

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get("http://localhost:9001/movies");
//         setMovies(response.data);
//       } catch (error) {
//         console.error("Failed to fetch movies:", error);
//       }
//     };
//     fetchMovies();
//   }, []);

//   useEffect(() => {
//     const fetchTheater = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:9001/theaters/${theaterId}`
//         );
//         setTheater(response.data);
//       } catch (error) {
//         console.error("Failed to fetch theater:", error);
//       }
//     };
//     if (theaterId) {
//       fetchTheater();
//     }
//   }, [theaterId]);

//   const handleSubmit = async () => {
//     try {
//       const values = await form.validateFields();
//       const selectedMovie = movies.find((movie) => movie.id === values.movie);

//       if (!theater) {
//         message.error("Theater data is not available.");
//         return;
//       }

//       const scheduleData = {
//         theater_id: theater.id,
//         movie_id: selectedMovie.id,
//         theater_name: theater.name,
//         movie_name: selectedMovie.name,
//         start_date: values.dateRange[0].format("YYYY-MM-DD"),
//         end_date: values.dateRange[1].format("YYYY-MM-DD"),
//       };

//       // Log the data before sending it
//       console.log("Schedule Data:", scheduleData);

//       await axios.post("http://localhost:9001/theaters-movies", scheduleData);

//       message.success("Movie scheduled successfully!");
//       onMovieScheduled(selectedMovie);
//       onClose();
//     } catch (error) {
//       if (error.response) {
//         console.error("Error response:", error.response.data);
//         message.error(
//           `Failed to schedule movie: ${error.response.data.message}`
//         );
//       } else {
//         console.error("Error:", error.message);
//         message.error("Failed to schedule movie. Please try again.");
//       }
//     }
//   };

//   return (
//     <Modal
//       title={`Schedule a Movie for ${theater?.name || "Theater"}`}
//       visible={visible}
//       onCancel={onClose}
//       footer={[
//         <Button key="cancel" onClick={onClose}>
//           Cancel
//         </Button>,
//         <Button key="submit" type="primary" onClick={handleSubmit}>
//           Submit
//         </Button>,
//       ]}
//     >
//       <Form form={form} layout="vertical">
//         <Form.Item
//           label="Select Movie"
//           name="movie"
//           rules={[{ required: true, message: "Please select a movie" }]}
//         >
//           <Select placeholder="Select a movie">
//             {movies.map((movie) => (
//               <Option key={movie.id} value={movie.id}>
//                 {movie.name}
//               </Option>
//             ))}
//           </Select>
//         </Form.Item>

//         <Form.Item
//           label="Date Range"
//           name="dateRange"
//           rules={[{ required: true, message: "Please select a date range" }]}
//         >
//           <RangePicker
//             disabledDate={(current) =>
//               current && current < moment().endOf("day")
//             }
//             format="YYYY-MM-DD"
//           />
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

// export default MovieScheduleDialog;

import React, { useState, useEffect } from "react";
import { Modal, Form, Select, DatePicker, Button, message } from "antd";
import axios from "axios";
import moment from "moment";

const { Option } = Select;
const { RangePicker } = DatePicker;

const MovieScheduleDialog = ({
  visible,
  onClose,
  onMovieScheduled,
  theaterId,
}) => {
  const [movies, setMovies] = useState([]);
  const [theater, setTheater] = useState(null);
  const [form] = Form.useForm();

  // Fetch movies when component mounts
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:9001/movies");
        setMovies(response.data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };
    fetchMovies();
  }, []);

  // Fetch specific theater details based on theaterId
  useEffect(() => {
    const fetchTheater = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9001/theaters/${theaterId}`
        );
        setTheater(response.data);
      } catch (error) {
        console.error("Failed to fetch theater:", error);
      }
    };
    if (theaterId) {
      fetchTheater();
    }
  }, [theaterId]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const selectedMovie = movies.find((movie) => movie.id === values.movie);

      if (!theater) {
        message.error("Theater data is not available.");
        return;
      }

      const startDate = values.dateRange[0].format("YYYY-MM-DD");
      const releaseDate = moment(selectedMovie.release_date).format(
        "YYYY-MM-DD"
      );

      // Validation: Check if the start date is before the release date
      if (moment(startDate).isBefore(releaseDate)) {
        message.error(
          `Cannot schedule the movie before its release date of ${releaseDate}.`
        );
        return;
      }

      const scheduleData = {
        theater_id: theater.id,
        movie_id: selectedMovie.id,
        theater_name: theater.name,
        movie_name: selectedMovie.name,
        start_date: startDate,
        end_date: values.dateRange[1].format("YYYY-MM-DD"),
      };

      // Log the data before sending it
      console.log("Schedule Data:", scheduleData);

      // Post the schedule data to the backend
      await axios.post("http://localhost:9001/theaters-movies", scheduleData);

      message.success("Movie scheduled successfully!");
      onMovieScheduled(selectedMovie); // Callback function after scheduling
      onClose(); // Close the dialog
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        message.error(
          `Failed to schedule movie: ${error.response.data.message}`
        );
      } else {
        console.error("Error:", error.message);
        message.error("Failed to schedule movie. Please try again.");
      }
    }
  };

  return (
    <Modal
      title={`Schedule a Movie for ${theater?.name || "Theater"}`}
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Submit
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        {/* Movie selection dropdown */}
        <Form.Item
          label="Select Movie"
          name="movie"
          rules={[{ required: true, message: "Please select a movie" }]}
        >
          <Select placeholder="Select a movie">
            {movies.map((movie) => (
              <Option key={movie.id} value={movie.id}>
                {movie.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Date range picker */}
        <Form.Item
          label="Date Range"
          name="dateRange"
          rules={[{ required: true, message: "Please select a date range" }]}
        >
          <RangePicker
            disabledDate={(current) =>
              current && current < moment().endOf("day")
            }
            format="YYYY-MM-DD"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default MovieScheduleDialog;
