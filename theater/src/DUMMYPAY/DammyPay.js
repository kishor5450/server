import React, { useState } from "react";
import { Radio, Button, Modal, Row, Col } from "antd";
import { QRCodeCanvas } from "qrcode.react";
// import "antd/dist/antd.css";

const FakePaymentGateway = () => {
  const [paymentMethod, setPaymentMethod] = useState("netbanking");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [paymentAmount] = useState(100);

  const handlePay = () => {
    setTimeout(() => {
      setIsModalVisible(true);
    }, 1000);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        border: "1px solid #ccc",
      }}
    >
      <h2>Select an Option to Pay</h2>
      <h3>₹{paymentAmount}</h3>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <QRCodeCanvas value="fake-qr-code" size={150} />
        <p>Scan QR to Pay</p>
      </div>

      <Radio.Group
        onChange={(e) => setPaymentMethod(e.target.value)}
        value={paymentMethod}
        style={{ width: "100%", marginBottom: "20px" }}
      >
        <Radio value="netbanking">Net Banking</Radio>
        <Radio value="upi">BHIM UPI</Radio>
        <Radio value="wallet">Paytm Wallet</Radio>
      </Radio.Group>

      {paymentMethod === "netbanking" && (
        <div>
          <h4>Select Your Bank</h4>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/56/HDFC_Bank_Logo.svg"
                alt="HDFC"
                style={{ width: "100%" }}
              />
            </Col>
            <Col span={8}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/ICICI_Bank_Logo.svg/1280px-ICICI_Bank_Logo.svg.png"
                alt="ICICI"
                style={{ width: "100%" }}
              />
            </Col>
            <Col span={8}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/PNB_logo.svg/1920px-PNB_logo.svg.png"
                alt="PNB"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
          <p style={{ marginTop: "10px" }}>Select from other banks</p>
        </div>
      )}

      <Button
        type="primary"
        style={{ width: "100%", marginTop: "20px" }}
        onClick={handlePay}
      >
        Pay ₹{paymentAmount}
      </Button>

      <Modal
        title="Payment Status"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalOk}
      >
        <p>Payment Successful! (Simulated)</p>
      </Modal>
    </div>
  );
};

export default FakePaymentGateway;
