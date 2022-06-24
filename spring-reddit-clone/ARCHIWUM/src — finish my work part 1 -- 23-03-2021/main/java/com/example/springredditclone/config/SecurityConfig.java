package com.example.springredditclone.config;

import com.example.springredditclone.security.JwtAuthenticationFilter;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@AllArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserDetailsService userDetailsService;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean(BeanIds.AUTHENTICATION_MANAGER)
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }


    @Override
    public void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.cors().and()
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/api/auth/**")
                .permitAll()
                .antMatchers(HttpMethod.GET, "/api/product")
                .permitAll()
                .antMatchers(HttpMethod.GET, "/api/product/by-product-name/*")
                .permitAll()
                .antMatchers(HttpMethod.GET, "/api/product/*")
                .permitAll()
                .antMatchers(HttpMethod.POST, "/api/product")
                .permitAll()
                .antMatchers(HttpMethod.GET, "/api/policy")
                .permitAll()
                .antMatchers(HttpMethod.GET, "/api/policy/*")
                .permitAll()
                .antMatchers(HttpMethod.POST, "/api/policy/")
                .permitAll()
                .antMatchers(HttpMethod.PUT, "/api/policy/*")
                .permitAll()
                .antMatchers(HttpMethod.GET, "/api/policy/by-product/*")
                .permitAll()
                .antMatchers(HttpMethod.GET, "/api/policy/by-name-containing/*")
                .permitAll()
                .antMatchers(HttpMethod.DELETE, "/api/policy/*")
                .permitAll()
                .antMatchers(HttpMethod.GET, "/api/comments")
                .permitAll()
                .antMatchers(HttpMethod.POST, "/api/comments")
                .permitAll()
                .antMatchers(HttpMethod.GET, "/api/posts/by-user/*")
                .permitAll()
                .antMatchers(HttpMethod.GET, "/api/comments/by-user/*")
                .permitAll()
                .antMatchers(HttpMethod.GET, "/api/comments/by-post/*")
                .permitAll()
                .antMatchers(HttpMethod.GET, "/api/subreddit")
                .permitAll()
                .antMatchers(HttpMethod.GET, "/api/subreddit/*")
                .permitAll()
                .antMatchers(HttpMethod.POST, "/api/subreddit")
                .permitAll()
                .antMatchers(HttpMethod.GET, "/api/posts")
                .permitAll()
                .antMatchers(HttpMethod.POST, "/api/posts")
                .permitAll()
                .antMatchers(HttpMethod.GET, "/api/posts/**")
                .permitAll()
                .antMatchers(HttpMethod.POST, "/api/posts/**")
                .permitAll()
                .antMatchers("/v2/api-docs",
                        "/configuration/ui",
                        "/swagger-resources/**",
                        "/configuration/security",
                        "/swagger-ui.html",
                        "/webjars/**")
                .permitAll()
                .anyRequest()
                .authenticated();
        httpSecurity.addFilterBefore(jwtAuthenticationFilter,
                UsernamePasswordAuthenticationFilter.class);
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder.userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder());
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}