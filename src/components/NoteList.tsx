import {type Note } from '../types';

// กำหนดว่า Component นี้ต้องรับ "รายการโน้ต" และ "ฟังก์ชันลบ"
interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

//function NoteList({ notes, onDelete }: NoteListProps) {
//  return (
//    <div>
//      {notes.map((note) => (
//        <div key={note.id} style={{ border: '0.5px solid black', margin: '5px' }}>
//          {note.text}
//          <button onClick={() => onDelete(note.id)}>Delete</button>
//        </div>
//      ))}
//    </div>

//จัดให้สวยขึ้นหน่อย  ิ ิ 
function NoteList({ notes, onDelete }: NoteListProps) {
  return (
    <div className="notes-grid"> {/* เปลี่ยนเป็น Grid */}
      {notes.map((note) => (
        <div key={note.id} className="note-card"> {/* ใช้ class แทน style เดิม */}
          <span>{note.text}</span>
          <button 
            onClick={() => onDelete(note.id)} 
            className="delete-btn"
          >
            Delete
          </button>
        </div>
      ))}
    </div>

  );
}
export default NoteList;