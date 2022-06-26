package com.company.api.viewmodel;

import lombok.*;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class NoteViewModel {
    private String id;

    @NotNull
    @Min(3)
    private String title;

    @NotNull
    private String text;

    @NotNull
    private String notebookId;

    private Date lastModifiedOn;
}
