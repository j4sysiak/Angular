package rc.noteit.api.viewmodel;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Setter
@Getter
public class NotebookViewModel {

    private String id;

    @NotNull
    private String name;

    private int nbNotes;

//    public String getId() {
//        return id;
//    }
//
//    public void setId(String id) {
//        this.id = id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public int getNbNotes() {
//        return nbNotes;
//    }
//
//    public void setNbNotes(int nbNotes) {
//        this.nbNotes = nbNotes;
//    }
}
