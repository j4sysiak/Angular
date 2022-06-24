package com.example.springredditclone.mapper;

import com.example.springredditclone.dto.PolicyRequest;
import com.example.springredditclone.dto.PolicyResponse;
import com.example.springredditclone.model.Policy;
import com.example.springredditclone.model.Post;
import com.example.springredditclone.model.Product;
import com.github.marlonlom.utilities.timeago.TimeAgo;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;

@Mapper(componentModel = "spring")
public abstract class PolicyMapper {

    /*do tworzenia*/
    @InheritInverseConfiguration
    @Mapping(target = "policyName", source = "policyRequest.policyName")
    @Mapping(target = "policyDescription", source = "policyRequest.policyDescription")
    @Mapping(target = "policyCreatedDate", expression = "java(java.time.Instant.now())")
    @Mapping(target = "product", source = "product")
    public abstract Policy mapDtoToPolicy(PolicyRequest policyRequest, Product product);

    /*do odczytu*/
    @Mapping(target = "productName", source = "product.name")
    @Mapping(target = "productId", source = "product.id")
    @Mapping(target = "policyCreatedDate", expression = "java(getPolicyCreatedDateAsString(policy))")
    public abstract PolicyResponse mapPolicyToDto(Policy policy);

    String getPolicyCreatedDateAsString(Policy policy) {
        Date myDate = Date.from(policy.getPolicyCreatedDate());
        SimpleDateFormat formatter = new SimpleDateFormat("dd MM yyyy HH:mm:ss");
        String formattedDate = formatter.format(myDate);
        return formattedDate;
    }

}
