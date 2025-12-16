import {type Note } from '../types';

// กำหนดว่า Component นี้ต้องรับ "รายการโน้ต" และ "ฟังก์ชันลบ"
interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

function NoteList({ notes, onDelete }: NoteListProps) {
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id} style={{ border: '1px solid black', margin: '5px' }}>
          {note.text}
          <button onClick={() => onDelete(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default NoteList;