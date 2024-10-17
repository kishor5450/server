import React, { useState } from "react";
import { Button } from "antd";
import MovieScheduleDialog from "../Merge/MovieSchedule"; // Assuming you saved the dialog box component as MovieScheduleDialog.js

const AdminPage = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const showDialog = () => {
    setIsDialogVisible(true);
  };

  const closeDialog = () => {
    setIsDialogVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showDialog}>
        Schedule a Movie
      </Button>
      <MovieScheduleDialog visible={isDialogVisible} onClose={closeDialog} />
    </div>
  );
};

export default AdminPage;
