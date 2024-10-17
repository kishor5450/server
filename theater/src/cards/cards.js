// import {
//   Card,
//   // CardMedia,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
// } from "@mui/material";
// import React from "react";
// // import { LinkComponent, Link } from "react-router-dom";

// const Cards = ({ name, release_date, poster_url }) => {
//   return (
//     <Card
//       sx={{
//         margin: 5,
//         width: 250,
//         height: 300,
//         // marginLeft: 10,
//         borderRadius: 5,
//         ":hover": {
//           boxShadow: "10px 10px 20px #ccc",
//         },
//       }}
//     >
//       <img height={"50%"} width={"100%"} src={poster_url} alt={name} />

//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {name}
//         </Typography>
//         <Typography variant="body2" sx={{ color: "text.secondary" }}>
//           {new Date(release_date).toDateString()}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button sx={{ margin: "auto" }} size="small">
//           Book
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default Cards;

// import {
//   Card,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
// } from "@mui/material";
// import React from "react";

// const Cards = ({ name, release_date, poster_url, theaterName }) => {
//   return (
//     <Card
//       sx={{
//         margin: 5,
//         width: 250,
//         height: 300,
//         borderRadius: 5,
//         ":hover": {
//           boxShadow: "10px 10px 20px #ccc",
//         },
//       }}
//     >
//       <img height={"50%"} width={"100%"} src={poster_url} alt={name} />

//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {name}
//         </Typography>
//         {/* Display the theater name */}
//         <Typography variant="body2" sx={{ color: "text.secondary" }}>
//           Playing at: {theaterName}
//         </Typography>
//         <Typography variant="body2" sx={{ color: "text.secondary" }}>
//           {new Date(release_date).toDateString()}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button sx={{ margin: "auto" }} size="small">
//           Book
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default Cards;
// Cards.js
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";

const Cards = ({
  name,
  release_date,
  poster_url,
  theaterName,
  onBookClick,
}) => {
  return (
    <Card
      sx={{
        margin: 5,
        width: 250,
        height: 380,
        borderRadius: 5,
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <img height={"55%"} width={"100%"} src={poster_url} alt={name} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        {/* Display the theater name */}
        <Typography variant="body2" sx={{ color: "red" }}>
          {theaterName}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {new Date(release_date).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ margin: "auto", marginBottom: "20px" }}
          size="50px"
          onClick={onBookClick}
        >
          Book
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
