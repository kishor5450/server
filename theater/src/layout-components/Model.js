import React from "react";
import { Modal } from "antd";
import FetchedSeatLayout from "../layout-components/FetchedSeatLayout"; // Make sure the path is correct

const SeatLayoutModal = ({ visible, onClose, theaterId }) => {
  return (
    <Modal
      title="Seating Layout"
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={850} // Adjust width as needed
    >
      <FetchedSeatLayout theaterId={theaterId} />
    </Modal>
  );
};

export default SeatLayoutModal;
