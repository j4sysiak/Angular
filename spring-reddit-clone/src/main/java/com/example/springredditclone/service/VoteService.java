package com.example.springredditclone.service;

import com.example.springredditclone.dto.VoteDto;
import com.example.springredditclone.exceptions.PostNotFoundException;
import com.example.springredditclone.exceptions.SpringRedditException;
import com.example.springredditclone.model.Post;
import com.example.springredditclone.model.User;
import com.example.springredditclone.model.Vote;
import com.example.springredditclone.repository.PostRepository;
import com.example.springredditclone.repository.VoteRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static com.example.springredditclone.model.VoteType.UPVOTE;

@Service
@AllArgsConstructor
public class VoteService {

    private final VoteRepository voteRepository;
    private final PostRepository postRepository;
    private final AuthService authService;

    @Transactional
    public void vote(VoteDto voteDto) {
        Post post = postRepository.findById(voteDto.getPostId())
                .orElseThrow(() -> new PostNotFoundException("Post Not Found with ID - " + voteDto.getPostId()));

        User tmpUser = new User(1L,"user1", "user1", "user1@wp.pl");
        Optional<Vote> voteByPostAndUser = voteRepository.findTopByPostAndUserOrderByVoteIdDesc(post, tmpUser /*authService.getCurrentUser()*/);

        // na razie to zakomentuję, bo mam tylko user1 i będzie wywalało dla niego jęzeli już zrobił vota
//        if (voteByPostAndUser.isPresent() &&
//                voteByPostAndUser.get().getVoteType()
//                        .equals(voteDto.getVoteType())) {
//            throw new SpringRedditException("You have already "
//                    + voteDto.getVoteType() + "'d for this post");
//        }
        if (UPVOTE.equals(voteDto.getVoteType())) {
            post.setVoteCount(post.getVoteCount() + 1);
        } else {
            post.setVoteCount(post.getVoteCount() - 1);
        }
        voteRepository.save(mapToVote(voteDto, post, tmpUser));
        postRepository.save(post);
    }

    private Vote mapToVote(VoteDto voteDto, Post post, User tmpUser) {
        return Vote.builder()
                .voteType(voteDto.getVoteType())
                .post(post)
                .user(tmpUser /*authService.getCurrentUser()*/)
                .build();
    }
}
