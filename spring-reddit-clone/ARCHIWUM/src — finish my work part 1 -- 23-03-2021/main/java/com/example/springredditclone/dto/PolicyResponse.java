package com.example.springredditclone.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PolicyResponse {
    private Long   policyId;
    private String policyName;
    private String policyDescription;
    private String policyCreatedDate;

    private Long productId;
    private String productName;
}
