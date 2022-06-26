package com.company.api.viewmodel;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@Setter
@Builder
@ToString
public class NotebookViewModel {
    private String id;

    @NotNull
    private String name;

    private int nbNotes;
}
