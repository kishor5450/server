// import React, { useEffect, useState } from "react";
// import { Table, Button, message } from "antd";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get("http://localhost:9001/movies");
//         setMovies(response.data);
//       } catch (error) {
//         message.error("Error fetching movies.");
//       }
//     };
//     fetchMovies();
//   }, []);

//   const columns = [
//     {
//       title: "Movie Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Release Date",
//       dataIndex: "release_date",
//       key: "release_date",
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (text, record) => (
//         <>
//           <Link to={`/update-movie/${record.id}`}>
//             <Button type="link">Edit</Button>
//           </Link>
//           <Link to={`/delete-movie/${record.id}`}>
//             <Button type="link" danger>
//               Delete
//             </Button>
//           </Link>
//         </>
//       ),
//     },
//   ];

//   return <Table dataSource={movies} columns={columns} rowKey="id" />;
// };

// export default MovieList;

// import React, { useEffect, useState } from "react";
// import { Table, Button, message, Image } from "antd";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get("http://localhost:9001/movies");
//         setMovies(response.data);
//       } catch (error) {
//         message.error("Error fetching movies.");
//       }
//     };
//     fetchMovies();
//   }, []);

//   const columns = [
//     {
//       title: "Movie Image",
//       dataIndex: "imageUrl", // Make sure your API provides imageUrl for movies
//       key: "imageUrl",
//       render: (text, record) => (
//         <Image
//           width={100}
//           src={record.imageUrl}
//           alt={record.name}
//           placeholder={<Image preview={false} src="/loading-image.png" />}
//         />
//       ),
//     },
//     {
//       title: "Movie Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Release Date",
//       dataIndex: "release_date",
//       key: "release_date",
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (text, record) => (
//         <>
//           <Link to={`/update-movie/${record.id}`}>
//             <Button type="link">Edit</Button>
//           </Link>
//           <Link to={`/delete-movie/${record.id}`}>
//             <Button type="link" danger>
//               Delete
//             </Button>
//           </Link>
//         </>
//       ),
//     },
//   ];

//   return <Table dataSource={movies} columns={columns} rowKey="id" />;
// };

// export default MovieList;

import React, { useEffect, useState } from "react";
import { Table, Button, message, Image } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:9001/movies");
        setMovies(response.data);
      } catch (error) {
        message.error("Error fetching movies.");
      }
    };
    fetchMovies();
  }, []);

  const columns = [
    {
      title: "Poster",
      dataIndex: "poster_url", // Change this to poster_url
      key: "poster_url",
      render: (text, record) => (
        <Image
          width={100}
          src={record.poster_url} // Ensure this matches the API response
          alt={record.NAME} // Adjust based on your data structure
          placeholder={<Image preview={false} src="/loading-image.png" />}
        />
      ),
    },
    {
      title: "Movie Name",
      dataIndex: "name", // Adjust this based on your data structure
      key: "name",
    },
    {
      title: "Release Date",
      dataIndex: "release_date",
      key: "release_date",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <>
          <Link to={`/update-movie/${record.id}`}>
            <Button type="link">Edit</Button>
          </Link>
          <Link to={`/delete-movie/${record.id}`}>
            <Button type="link" danger>
              Delete
            </Button>
          </Link>
        </>
      ),
    },
  ];

  return <Table dataSource={movies} columns={columns} rowKey="id" />;
};

export default MovieList;
