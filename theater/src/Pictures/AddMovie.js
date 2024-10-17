// import React, { useState } from "react";
// import { Form, Input, Button, message } from "antd";
// import axios from "axios";

// const AddMovie = () => {
//   const [form] = Form.useForm();

//   const onFinish = async (values) => {
//     try {
//       const response = await axios.post("http://localhost:9001/movies", [
//         values,
//       ]);
//       message.success("Movie added successfully!");
//       form.resetFields();
//     } catch (error) {
//       message.error("Error adding movie.");
//     }
//   };

//   return (
//     <Form form={form} layout="vertical" onFinish={onFinish}>
//       <Form.Item name="NAME" label="Movie Name" rules={[{ required: true }]}>
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name="release_date"
//         label="Release Date"
//         rules={[{ required: true }]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item>
//         <Button type="primary" htmlType="submit">
//           Add Movie
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default AddMovie;

// import React, { useState } from "react";
// import { Form, Input, Button, message } from "antd";
// import axios from "axios";

// const AddMovie = () => {
//   const [form] = Form.useForm();

//   const onFinish = async (values) => {
//     try {
//       const response = await axios.post("http://localhost:9001/movies", [
//         values,
//       ]);
//       message.success("Movie added successfully!");
//       form.resetFields();
//     } catch (error) {
//       message.error("Error adding movie.");
//     }
//   };

//   return (
//     <Form form={form} layout="vertical" onFinish={onFinish}>
//       <Form.Item name="NAME" label="Movie Name" rules={[{ required: true }]}>
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name="release_date"
//         label="Release Date"
//         rules={[{ required: true }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item name="Poster" label="Poster Url" rules={[{ required: true }]}>
//         <Input />
//       </Form.Item>
//       <Form.Item>
//         <Button type="primary" htmlType="submit">
//           Add Movie
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default AddMovie;

// import React, { useState } from "react";
// import { Form, Input, Button, message } from "antd";
// import axios from "axios";

// const AddMovie = () => {
//   const [form] = Form.useForm();

//   const onFinish = async (values) => {
//     try {
//       // Ensure you're sending poster_url as part of the movie data
//       const response = await axios.post("http://localhost:9001/movies", [
//         {
//           NAME: values.NAME,
//           release_date: values.release_date,
//           poster_url: values.poster_url, // Use poster_url here
//         },
//       ]);
//       message.success("Movie added successfully!");
//       form.resetFields();
//     } catch (error) {
//       message.error("Error adding movie.");
//     }
//   };

//   return (
//     <Form form={form} layout="vertical" onFinish={onFinish}>
//       <Form.Item name="NAME" label="Movie Name" rules={[{ required: true }]}>
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name="release_date"
//         label="Release Date"
//         rules={[{ required: true }]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name="poster_url" // Update to poster_url
//         label="Poster URL"
//         rules={[{ required: true }]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item>
//         <Button type="primary" htmlType="submit">
//           Add Movie
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default AddMovie;

import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";

const AddMovie = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:9001/movies", [
        {
          NAME: values.NAME,
          release_date: values.release_date,
          poster_url: values.poster_url,
        },
      ]);
      message.success("Movie added successfully!");
      form.resetFields();
    } catch (error) {
      message.error("Error adding movie.");
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="NAME" label="Movie Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="release_date"
        label="Release Date"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="poster_url"
        label="Poster URL"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Movie
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddMovie;
