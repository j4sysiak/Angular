import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../model/note";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  // Input decorator - share object Note from Parent Component: Notes
  // allow data of object Note to this object note
  @Input() passedNoteFromParent: Note;

  // Output decorator - sending events to parent component from child
  // obsługa zdarzeń - naciśnięcie przycisku, linku, etc - leci do metody parenta i tam wywoływana jest obsługa tego zdarzenia
  @Output() noteUpdatedTrigger: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() noteDeletedTrigger: EventEmitter<Note> = new EventEmitter<Note>();

  constructor() { }

  ngOnInit(): void {
  }

  updateNote() {
    this.noteUpdatedTrigger.emit(this.passedNoteFromParent);
  }

  deleteNote() {
    this.noteDeletedTrigger.emit(this.passedNoteFromParent);
  }
}
