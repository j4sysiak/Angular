package com.example.springredditclone.mapper;

import com.example.springredditclone.dto.SubredditDto;
import com.example.springredditclone.dto.SubredditDto.SubredditDtoBuilder;
import com.example.springredditclone.model.Subreddit;
import com.example.springredditclone.model.Subreddit.SubredditBuilder;
import com.example.springredditclone.model.User;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-06-24T19:52:30+0200",
    comments = "version: 1.3.1.Final, compiler: javac, environment: Java 1.8.0_322 (Amazon.com Inc.)"
)
@Component
public class SubredditMapperImpl implements SubredditMapper {

    @Override
    public Subreddit mapDtoToSubreddit(SubredditDto subredditDto, User user) {
        if ( subredditDto == null && user == null ) {
            return null;
        }

        SubredditBuilder subreddit = Subreddit.builder();

        if ( subredditDto != null ) {
            subreddit.id( subredditDto.getId() );
            subreddit.name( subredditDto.getName() );
            subreddit.description( subredditDto.getDescription() );
            subreddit.testowePole( subredditDto.getTestowePole() );
        }
        if ( user != null ) {
            subreddit.user( user );
        }
        subreddit.createdDate( java.time.Instant.now() );

        return subreddit.build();
    }

    @Override
    public SubredditDto mapSubredditToDto(Subreddit subreddit) {
        if ( subreddit == null ) {
            return null;
        }

        SubredditDtoBuilder subredditDto = SubredditDto.builder();

        subredditDto.id( subreddit.getId() );
        subredditDto.name( subreddit.getName() );
        subredditDto.description( subreddit.getDescription() );
        subredditDto.testowePole( subreddit.getTestowePole() );
        subredditDto.createdDate( subreddit.getCreatedDate() );

        subredditDto.numberOfPosts( mapPosts(subreddit.getPosts()) );

        return subredditDto.build();
    }
}
