import { Card } from 'react-bootstrap';
import { Note as NoteModel } from '../models/notes';
import styles from '../styles/Note.module.css';
import { formatDate } from '../utils/formatDate';

interface NoteProps {
  note: NoteModel;
  className?: string;
}

const Note = ({ note, className }: NoteProps) => {
  const { title, body, createdAt, updatedAt } = note;

  let createdUpdatedText: string; 
  if (updatedAt > createdAt) {
    createdUpdatedText = "Updated: " + formatDate(updatedAt)
  } else {
    createdUpdatedText = "Created: " + formatDate(createdAt)
  }

  return (
    <Card className={`${styles.noteCard} ${className}`}>
      <Card.Body className={styles.cardBody}>
        <Card.Title>{title}</Card.Title>
        <Card.Text className={styles.cardText}>{body}</Card.Text>
      </Card.Body>
      <Card.Footer className='text-muted'>{createdUpdatedText}</Card.Footer>
    </Card>
  );
};

export default Note;