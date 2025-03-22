"use client";
import React, { useEffect, useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload as AntdUpload } from "antd";
import axios from "axios";

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG files!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must be smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const Upload = ({ maxCount, fileList = [], onChange }) => {
  const [loading, setLoading] = useState(false);
  const [fileListInner, setFileListInner] = useState([]);

  useEffect(() => {
    if (Array.isArray(fileList)) {
      const newData = fileList.map((file, index) => ({
        uid: index,
        name: "image.png",
        status: "done",
        url: file,
      }));
      setFileListInner(newData);
    } else {
      setFileListInner([
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url: fileList,
        },
      ]);
    }
  }, [fileList]);

  const handleChange = (info) => {
    let newFileList = info.fileList.map((file) => {
      if (file.response) {
        onChange?.(file.response.secure_url);
        return {
          ...file,
          url: file.response.secure_url,
        };
      }

      return file;
    });

    setFileListInner(newFileList);

    if (info.file.status === "done") {
      message.success(`${info.file.name} uploaded successfully!`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} upload failed!`);
    }
  };

  const uploadAction = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      );
      return response.data;
    } catch (error) {
      throw new Error("Upload failed");
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <AntdUpload
      maxCount={maxCount}
      listType="picture-card"
      className="avatar-uploader"
      fileList={fileListInner}
      beforeUpload={beforeUpload}
      customRequest={({ file, onSuccess, onError }) => {
        setLoading(true);
        uploadAction(file)
          .then((data) => {
            setLoading(false);
            onSuccess({ status: "done", secure_url: data.secure_url });
          })
          .catch((error) => {
            setLoading(false);
            onError(error);
          });
      }}
      onChange={handleChange}
      onRemove={() => onChange?.(null)}
    >
      {fileListInner.length >= maxCount ? null : uploadButton}
    </AntdUpload>
  );
};

export default Upload;
