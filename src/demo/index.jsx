import "./style.scss";
import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import Comment from "./comment.jsx";
import { leancloud } from "../api/index";

const TextArea = Input.TextArea;
const lc = new leancloud();

export default function Demo() {
  const [comments, setComments] = useState([]);
  const [value, setValue] = useState("");
  const [submitting, setSubmit] = useState(true);
  useEffect(() => {
    getComments()
  }, []);

  async function getComments(){
    const data = await lc.getData("your_title");
    setComments(data);
    setSubmit(false);
  }
  async function onSubmit() {
    setSubmit(true);
    const data = {
      author: "123",
      avatar: "https://i.loli.net/2020/07/07/jFn39Ktpi5waSyG.png",
      content: value,
      page: "your_title",
      seq: comments.length + 1,
    };
    await lc.insert(data);
    setSubmit(false);
    getComments()
  }

  return (
    <>
      <TextArea
        rows={4}
        onChange={(i) => {
          setValue(i.target.value);
        }}
        value={value}
      />
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        添加评论
      </Button>
      {Comment(comments)}
    </>
  );
}
