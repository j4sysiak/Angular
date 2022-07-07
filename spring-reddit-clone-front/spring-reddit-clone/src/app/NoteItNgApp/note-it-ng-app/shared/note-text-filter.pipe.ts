import { Pipe, PipeTransform } from '@angular/core';
import {Note} from "../notes/model/note";

@Pipe({
  name: 'noteTextFilter'
})
export class NoteTextFilterPipe implements PipeTransform {

  // to będziemy testować (tą metodę)
  transform(notes: Note[], text: string): Note[] {
    if (text == null || text === "") {
      return notes;
    }
    //text - to wartość wpisywana w polu wyszyukiwarki
    //wybierze do kolekcji Note[] notatki, które zawierają w polach title lub text wprowadzony do wyszukiwarki text
    return notes.filter(n => n.title.includes(text) || n.text.includes(text));
  }

}
