package com.example.springredditclone.mapper;

import com.example.springredditclone.dto.PolicyRequest;
import com.example.springredditclone.dto.PolicyResponse;
import com.example.springredditclone.model.Policy;
import com.example.springredditclone.model.Policy.PolicyBuilder;
import com.example.springredditclone.model.Product;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-06-24T19:52:30+0200",
    comments = "version: 1.3.1.Final, compiler: javac, environment: Java 1.8.0_322 (Amazon.com Inc.)"
)
@Component
public class PolicyMapperImpl extends PolicyMapper {

    @Override
    public Policy mapDtoToPolicy(PolicyRequest policyRequest, Product product) {
        if ( policyRequest == null && product == null ) {
            return null;
        }

        PolicyBuilder policy = Policy.builder();

        if ( policyRequest != null ) {
            policy.policyDescription( policyRequest.getPolicyDescription() );
            policy.policyName( policyRequest.getPolicyName() );
            policy.policyId( policyRequest.getPolicyId() );
        }
        if ( product != null ) {
            policy.product( product );
        }
        policy.policyCreatedDate( java.time.Instant.now() );

        return policy.build();
    }

    @Override
    public PolicyResponse mapPolicyToDto(Policy policy) {
        if ( policy == null ) {
            return null;
        }

        PolicyResponse policyResponse = new PolicyResponse();

        policyResponse.setProductId( policyProductId( policy ) );
        policyResponse.setProductName( policyProductName( policy ) );
        policyResponse.setPolicyId( policy.getPolicyId() );
        policyResponse.setPolicyName( policy.getPolicyName() );
        policyResponse.setPolicyDescription( policy.getPolicyDescription() );

        policyResponse.setPolicyCreatedDate( getPolicyCreatedDateAsString(policy) );

        return policyResponse;
    }

    private Long policyProductId(Policy policy) {
        if ( policy == null ) {
            return null;
        }
        Product product = policy.getProduct();
        if ( product == null ) {
            return null;
        }
        Long id = product.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    private String policyProductName(Policy policy) {
        if ( policy == null ) {
            return null;
        }
        Product product = policy.getProduct();
        if ( product == null ) {
            return null;
        }
        String name = product.getName();
        if ( name == null ) {
            return null;
        }
        return name;
    }
}
