import { useState, useEffect } from 'react';
import {type Note } from './types'; // ดึงกฎที่เราสร้างไว้มาใช้
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  // 1. สร้าง State เก็บโน้ตทั้งหมด (เป็น Array ของ Note)
  // Phase 2 ประกาศ state
  const [notes, setNotes] = useState<Note[]>([]);

  // 2. ฟังก์ชันเพิ่มโน้ต 
  // Phase 2 สร้างฟังก์ชัน addNote
  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(), // ใช้เวลาปัจจุบันเป็น ID (จะได้ไม่ซ้ำ)
      text: text,
    };
    setNotes([...notes, newNote]); // เอาของเดิม + ของใหม่
  };

  // 3. ฟังก์ชันลบโน้ต
  const deleteNote = (id: number) => {
    setNotes(notes.filter(n => n.id !== id)); // คัดเอาเฉพาะตัวที่ ID ไม่ตรงกับที่จะลบ
  };

  // 4. โหลดข้อมูลจากเครื่องเมื่อเปิดเว็บ (Load)
  useEffect(() => {
    const saved = localStorage.getItem('notes');
    if (saved) {
      setNotes(JSON.parse(saved) as Note[]);
    }
  }, []); // [] = ทำครั้งเดียวตอนเปิด

  // 5. บันทึกข้อมูลลงเครื่องเมื่อโน้ตเปลี่ยน (Save)
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]); // [notes] = ทำทุกครั้งที่ notes เปลี่ยนแปลง

  return (
    <div style={{ padding: '20px' }}>
      <h1>Sticky Note Wall</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}
export default App;