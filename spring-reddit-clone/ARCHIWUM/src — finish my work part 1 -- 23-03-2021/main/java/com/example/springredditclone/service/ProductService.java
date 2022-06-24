package com.example.springredditclone.service;

import com.example.springredditclone.dto.ProductDto;
import com.example.springredditclone.exceptions.SpringRedditException;
import com.example.springredditclone.mapper.ProductMapper;
import com.example.springredditclone.model.Product;
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
public class ProductService {

    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    @Transactional
    public ProductDto save(ProductDto productDto) {
        //User tmpUser = new User(1L,"user1", "user1", "user1@wp.pl");
        //User tmpUser = authService.getCurrentUser();

        Product save = productRepository.save(productMapper.mapDtoToProduct(productDto));
        //Product save = productRepository.save(productDto);
        productDto.setId(save.getId());
        return productDto;
    }

    @Transactional(readOnly = true)
    public List<ProductDto> getAll() {
        return productRepository.findAll()
                .stream()
                .map(productMapper::mapProductToDto)
                .collect(toList());
    }

    @Transactional(readOnly = true)
    public ProductDto getProductById(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new SpringRedditException("No product found with ID - " + id));
        return productMapper.mapProductToDto(product);
    }

    @Transactional(readOnly = true)
    public ProductDto getProductByName(String productName) {
        Product product = productRepository.findByName(productName)
                .orElseThrow(() -> new SpringRedditException("No product found with productName - " + productName));
        return productMapper.mapProductToDto(product);
    }
}
