SELECT user_id, created, email, enabled, "password", username
FROM public.reddit_users;

SELECT id, expiry_date, "token", user_user_id
FROM public."token";


SELECT id, created_date, "token"
FROM public.refresh_token;


SELECT id, "content", created_on, title, updated_on, username
FROM public.blog_post;

SELECT post_id, created_date, description, post_name, url, vote_count, subreddit_id, user_id
FROM public.post;

SELECT id, "name"
FROM public.product;


