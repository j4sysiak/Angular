package com.company;

import com.company.api.viewmodel.NoteViewModel;
import com.company.api.viewmodel.NotebookViewModel;
import com.company.model.Note;
import com.company.model.Notebook;
import com.company.repository.NotebookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.UUID;

/**
 * Component that handles all mappings in this project
 * - entity to view model
 * - view model to entity
 * <p>
 * All mappings are handled here, but in production code this is not the
 * best approach. You can take a look at ModelMapper project or at least split mapping classes
 * across many files.
 */

@Component
public class Mapper {

    //pole zależności
    private NotebookRepository notebookRepository;

    //wstrzyknięcie zależności przez konstruktor
    @Autowired
    public Mapper(NotebookRepository notebookRepository) {
        this.notebookRepository = notebookRepository;
    }

    public NoteViewModel convertToNoteViewModel(Note noteEentity) {
        return NoteViewModel.builder()
                .title(noteEentity.getTitle())
                .id(noteEentity.getId().toString())
                .lastModifiedOn(noteEentity.getLastModifiedOn())
                .text(noteEentity.getText())
                .notebookId(noteEentity.getNotebook().getId().toString())
                .build();
    }

    public Note convertToNoteEntity(NoteViewModel viewModel) {
        var notebook = this.notebookRepository.findById(UUID.fromString(viewModel.getNotebookId())).get();
        var entity = new Note(viewModel.getId(), viewModel.getTitle(), viewModel.getText(), notebook);

        return entity;
    }

    public NotebookViewModel convertToNotebookViewModel(Notebook entity) {
        return NotebookViewModel.builder()
                .id(entity.getId().toString())
                .name(entity.getName())
                .nbNotes(entity.getNotes().size())
                .build();
    }

    public Notebook convertToNotebookEntity(NotebookViewModel viewModel) {
        var entity = new Notebook(viewModel.getId(), viewModel.getName());

        return entity;
    }
}
