package com.company.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Date;
import java.util.UUID;

@Entity
@Getter
@Setter
@Builder
@ToString
public class Note {
    @Id
    private UUID id;
    private String title;
    private String text;

    @ManyToOne(fetch = FetchType.LAZY)
    private Notebook notebook;

    private Date lastModifiedOn;

    protected Note() {
        this.id = UUID.randomUUID();
        this.lastModifiedOn = new Date();
    }

    public Note(String title, String text, Notebook notebook) {
        this();
        this.title = title;
        this.text = text;
        this.notebook = notebook;
    }

    public Note(String id, String title, String text, Notebook notebook) {
        this(title, text, notebook);
        if (id != null) {
            this.id = UUID.fromString(id);
        }
    }
}
