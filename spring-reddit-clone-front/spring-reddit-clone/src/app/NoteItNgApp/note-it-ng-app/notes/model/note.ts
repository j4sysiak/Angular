export interface Note {
  // musi odpowiadać model-view w klasie backendu: NoteViewModel.java
  id:string;
  title:string;
  text:string;
  notebookId:string;
  lastModifiedOn:string;
}
