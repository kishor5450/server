import React, { useEffect } from "react";
import { Button, message } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteMovie = async () => {
      try {
        await axios.delete(`http://localhost:9001/movies/${id}`);
        message.success("Movie deleted successfully.");
        navigate("http://localhost:9001/movies");
      } catch (error) {
        message.error("Error deleting movie.");
      }
    };
    deleteMovie();
  }, [id, navigate]);

  return <Button loading>Deleting Movie...</Button>;
};

export default DeleteMovie;
