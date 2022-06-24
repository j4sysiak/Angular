package com.example.springredditclone.repository;

import com.example.springredditclone.model.Policy;
import com.example.springredditclone.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PolicyRepository extends JpaRepository<Policy, Long> {

    List<Policy> findAllByProduct(Product product);

    List<Policy> findByPolicyNameContaining(String name);
}
