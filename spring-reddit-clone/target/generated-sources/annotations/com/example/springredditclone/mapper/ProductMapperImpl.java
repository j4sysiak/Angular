package com.example.springredditclone.mapper;

import com.example.springredditclone.dto.ProductDto;
import com.example.springredditclone.dto.ProductDto.ProductDtoBuilder;
import com.example.springredditclone.model.Product;
import com.example.springredditclone.model.Product.ProductBuilder;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-06-24T19:52:30+0200",
    comments = "version: 1.3.1.Final, compiler: javac, environment: Java 1.8.0_322 (Amazon.com Inc.)"
)
@Component
public class ProductMapperImpl implements ProductMapper {

    @Override
    public Product mapDtoToProduct(ProductDto productDto) {
        if ( productDto == null ) {
            return null;
        }

        ProductBuilder product = Product.builder();

        product.id( productDto.getId() );
        product.name( productDto.getName() );

        return product.build();
    }

    @Override
    public ProductDto mapProductToDto(Product product) {
        if ( product == null ) {
            return null;
        }

        ProductDtoBuilder productDto = ProductDto.builder();

        productDto.id( product.getId() );
        productDto.name( product.getName() );

        return productDto.build();
    }
}
