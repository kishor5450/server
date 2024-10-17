import React, { useRef } from "react";
import "../ScrollImages/app.css";

const movies = [
  {
    id: 1,
    title: "Movie 1",
    image:
      "https://i.pinimg.com/736x/7b/04/16/7b0416a509fd2b88ca49765af4089002.jpg",
  },
  {
    id: 2,
    title: "Movie 2",
    image:
      "https://i.pinimg.com/736x/7b/04/16/7b0416a509fd2b88ca49765af4089002.jpg",
  },
  {
    id: 3,
    title: "Movie 3",
    image:
      "https://i.pinimg.com/736x/7b/04/16/7b0416a509fd2b88ca49765af4089002.jpg",
  },
  {
    id: 4,
    title: "Movie 4",
    image:
      "https://i.pinimg.com/736x/7b/04/16/7b0416a509fd2b88ca49765af4089002.jpg",
  },
  // Add more movies as needed
];

const MovieScroll = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 200; // Scrolls left by 200px
    } else {
      current.scrollLeft += 200; // Scrolls right by 200px
    }
  };

  return (
    <div className="movie-container">
      <button onClick={() => scroll("left")} className="scroll-btn left">
        ←
      </button>
      <div className="movie-scroll" ref={scrollRef}>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
      <button onClick={() => scroll("right")} className="scroll-btn right">
        →
      </button>
    </div>
  );
};

export default MovieScroll;
