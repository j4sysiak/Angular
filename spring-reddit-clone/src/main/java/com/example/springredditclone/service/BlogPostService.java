package com.example.springredditclone.service;

import com.example.springredditclone.dto.BlogPostDto;
import com.example.springredditclone.exceptions.BlogPostNotFoundException;
import com.example.springredditclone.model.BlogPost;
import com.example.springredditclone.model.User;
import com.example.springredditclone.repository.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class BlogPostService {

    @Autowired
    private AuthService authService;

    @Autowired
    private BlogPostRepository blogPostRepository;

    @Transactional
    public void createBlogPost(BlogPostDto blogPostDto) {
        BlogPost blogPost = mapFromBlogDtoToBlogPost(blogPostDto);
        blogPostRepository.save(blogPost);
    }

    @Transactional
    public List<BlogPostDto> showAllBlogPosts() {
        List<BlogPost> blogPosts = blogPostRepository.findAll();
        return blogPosts.stream().map(this::mapFromBlogPostToBlogDto).collect(toList());
    }

    @Transactional
    public BlogPostDto readSingleBlogPost(Long id) {
        BlogPost blogPost = blogPostRepository.findById(id).orElseThrow(() -> new BlogPostNotFoundException("For id " + id));
        return mapFromBlogPostToBlogDto(blogPost);
    }

    private BlogPostDto mapFromBlogPostToBlogDto(BlogPost blogPost) {
        BlogPostDto blogPostDto = new BlogPostDto();
        blogPostDto.setId(blogPost.getId());
        blogPostDto.setTitle(blogPost.getTitle());
        blogPostDto.setContent(blogPost.getContent());
        blogPostDto.setUsername(blogPost.getUsername());
        return blogPostDto;
    }

    private BlogPost mapFromBlogDtoToBlogPost(BlogPostDto blogPostDto) {
        BlogPost blogPost = new BlogPost();
        blogPost.setTitle(blogPostDto.getTitle());
        blogPost.setContent(blogPostDto.getContent());
        User loggedInUser = authService.getCurrentUser(); //.orElseThrow(() -> new IllegalArgumentException("User Not Found"));
        blogPost.setCreatedOn(Instant.now());
        blogPost.setUsername(loggedInUser.getUsername());
        blogPost.setUpdatedOn(Instant.now());
        return blogPost;
    }

}
