import React, { useState } from "react";

function NewWindow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendMessageToParent = () => {
    // 모든 필드가 비어있지 않은지 확인
    if (Object.values(formData).some((value) => value.trim() === "")) {
      alert("모든 필드를 입력해주세요!");
      return;
    }
    window.opener.postMessage(formData, "*");
    // 폼 초기화
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <h1>새 창에서 열린 페이지입니다!</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="이름을 입력하세요"
          style={{ width: "100%", padding: "10px" }}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="이메일을 입력하세요"
          style={{ width: "100%", padding: "10px" }}
        />
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="메시지를 입력하세요"
          style={{ width: "100%", padding: "10px" }}
        />
        <button onClick={sendMessageToParent}>부모창으로 메시지 보내기</button>
      </div>
    </div>
  );
}

export default NewWindow;
