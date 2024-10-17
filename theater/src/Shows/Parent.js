import React, { useState } from "react";
import ShowsForm from "../Shows/ShowsForm"; // Assuming ShowsForm is in the same folder

const ParentComponent = () => {
  const [shows, setShows] = useState([]);

  const handleShowsChange = (updatedShows) => {
    console.log("Updated shows data: ", updatedShows);
    setShows(updatedShows); // Update state with the new shows data
  };

  return (
    <div>
      <h1>Manage Movie Showtimes</h1>
      <ShowsForm onShowsChange={handleShowsChange} />
      {/* Optionally render the shows data */}
      <h2>Scheduled Shows</h2>
      <ul>
        {shows.map((show, index) => (
          <li key={index}>
            Show {index + 1}: {show.show_no} at {show.start_time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParentComponent;
