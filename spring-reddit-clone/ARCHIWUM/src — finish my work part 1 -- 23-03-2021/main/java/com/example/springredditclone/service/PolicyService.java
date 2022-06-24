package com.example.springredditclone.service;

import com.example.springredditclone.dto.PolicyRequest;
import com.example.springredditclone.dto.PolicyResponse;
import com.example.springredditclone.exceptions.PolicyNotFoundException;
import com.example.springredditclone.exceptions.PostNotFoundException;
import com.example.springredditclone.exceptions.ProductNotFoundException;
import com.example.springredditclone.mapper.PolicyMapper;
import com.example.springredditclone.model.Policy;
import com.example.springredditclone.model.Product;
import com.example.springredditclone.model.User;
import com.example.springredditclone.repository.PolicyRepository;
import com.example.springredditclone.repository.ProductRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
@AllArgsConstructor
@Slf4j
@Transactional
public class PolicyService {

    private final PolicyRepository policyRepository;
    private final ProductRepository productRepository;
    private final PolicyMapper policyMapper;

    public Policy save(PolicyRequest policyRequest) {

        Product product = productRepository.findByName(policyRequest.getProductName()).orElseThrow(() ->
                new ProductNotFoundException(policyRequest.getProductName()));

        User tmpUser = new User(1L, "user1", "user1", "user1@wp.pl");
        //User tmpUser = authService.getCurrentUser();

        return policyRepository.save(policyMapper.mapDtoToPolicy(policyRequest, product));
    }

    @Transactional(readOnly = true)
    public PolicyResponse getPolicy(Long id) {
        Policy policy = policyRepository.findById(id)
                .orElseThrow(() -> new PolicyNotFoundException(id.toString()));
        return policyMapper.mapPolicyToDto(policy);

    }

    @Transactional(readOnly = true)
    public List<PolicyResponse> getAll() {
        return policyRepository.findAll()
                .stream()
                .map(policyMapper::mapPolicyToDto)
                .collect(toList());
    }


    @Transactional(readOnly = true)
    public List<PolicyResponse> getAllPoliciesByProductId(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ProductNotFoundException(productId.toString()));
        List<Policy> policies = policyRepository.findAllByProduct(product);
        return policies.stream().map(policyMapper::mapPolicyToDto).collect(toList());
    }

    @Transactional(readOnly = true)
    public List<PolicyResponse> getAllPoliciesByNameContaining(String name) {
        List<Policy> policies = policyRepository.findByPolicyNameContaining(name);
        return policies.stream().map(policyMapper::mapPolicyToDto).collect(toList());
    }

    public void deletePolicyById(Long id) {
        Policy policy = policyRepository.findById(id)
                .orElseThrow(() -> new PolicyNotFoundException(id.toString()));
        policyRepository.deleteById(id);
    }
}
