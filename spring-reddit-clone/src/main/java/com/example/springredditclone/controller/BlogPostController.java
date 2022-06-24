package com.example.springredditclone.controller;

import com.example.springredditclone.dto.BlogPostDto;
import com.example.springredditclone.service.BlogPostService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blog/blogposts/")
@AllArgsConstructor
public class BlogPostController {

    private final BlogPostService blogPostService;

    @PostMapping
    public ResponseEntity createBlogPost(@RequestBody BlogPostDto blogPostDto) {
        blogPostService.createBlogPost(blogPostDto);
        return new ResponseEntity(HttpStatus.OK);
    }

    
    @GetMapping("/all")
    public ResponseEntity<List<BlogPostDto>> showAllBlogPosts() {
        return new ResponseEntity<>(blogPostService.showAllBlogPosts(), HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<BlogPostDto> getSingleBlogPost(@PathVariable @RequestBody Long id) {
        return new ResponseEntity<>(blogPostService.readSingleBlogPost(id), HttpStatus.OK);
    }

}