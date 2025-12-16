import React, { useState } from 'react';

// กำหนดว่า Component นี้ต้องรับ "ฟังก์ชัน onAdd" เข้ามานะ
// Phase 2 
interface NoteFormProps {
  onAdd: (text: string) => void;
}

function NoteForm({ onAdd }: NoteFormProps) {
  const [text, setText] = useState(""); // State สำหรับเก็บข้อความที่กำลังพิมพ์

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ห้ามรีเฟรชหน้าจอ
    onAdd(text);        // ส่งข้อความออกไปให้ตัวแม่ (App)
    setText("");        // ล้างช่องพิมพ์ให้ว่าง
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
export default NoteForm;