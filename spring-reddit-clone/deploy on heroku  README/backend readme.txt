https://www.youtube.com/watch?v=y_idn12FB18
https://programmingtechie.com/2020/10/10/deploy-spring-boot-and-angular-application-to-heroku/
----------------------------------------------------------------------------------------------

C:\Users\Jacek\Documents\JAVA\Angular_SpringBoot\spring-reddit-clone>heroku -login


C:\Users\Jacek\Documents\JAVA\Angular_SpringBoot\spring-reddit-clone>heroku create
Creating app... done, ⬢ lit-savannah-22994
https://lit-savannah-22994.herokuapp.com/ | https://git.heroku.com/lit-savannah-22994.git




C:\Users\Jacek\Documents\JAVA\Angular_SpringBoot\spring-reddit-clone>heroku apps:rename --app lit-savannah-22994 jsysiak-24-04-2021
Renaming lit-savannah-22994 to jsysiak-24-04-2021... done
https://jsysiak-24-04-2021.herokuapp.com/ | https://git.heroku.com/jsysiak-24-04-2021.git
 !    Don't forget to update git remotes for all other local checkouts of the app.


C:\Users\Jacek\Documents\JAVA\Angular_SpringBoot\spring-reddit-clone>heroku addons:create heroku-postgresql --app jsysiak-24-04-2021
Creating heroku-postgresql on ⬢ jsysiak-24-04-2021... free
Database has been created and is available
 ! This database is empty. If upgrading, you can transfer
 ! data from another database with pg:copy
Created postgresql-adjacent-59468 as DATABASE_URL
Use heroku addons:docs heroku-postgresql to view documentation





możesz to odpalić:  https://jsysiak-24-04-2021.herokuapp.com


C:\Users\Jacek\Documents\JAVA\Angular_SpringBoot\spring-reddit-clone>heroku git:remote -a jsysiak-24-04-2021
set git remote heroku to https://git.heroku.com/jsysiak-24-04-2021.git

C:\Users\Jacek\Documents\JAVA\Angular_SpringBoot\spring-reddit-clone>git add .

C:\Users\Jacek\Documents\JAVA\Angular_SpringBoot\spring-reddit-clone>git commit -am "make it better"
On branch zmiany_3_kwiecień
Your branch is up to date with 'origin/zmiany_3_kwiecień'.

nothing to commit, working tree clean

C:\Users\Jacek\Documents\JAVA\Angular_SpringBoot\spring-reddit-clone>git push heroku master
Enumerating objects: 523, done.
Counting objects: 100% (523/523), done.
Delta compression using up to 4 threads
Compressing objects: 100% (155/155), done.
Writing objects: 100% (523/523), 107.91 KiB | 17.98 MiB/s, done.
Total 523 (delta 267), reused 488 (delta 245)
remote: Compressing source files... done.
.
.
.
remote:        [INFO] BUILD SUCCESS
remote:        [INFO] ------------------------------------------------------------------------
remote:        [INFO] Total time:  26.753 s
remote:        [INFO] Finished at: 2021-04-24T05:47:58Z
remote:        [INFO] ------------------------------------------------------------------------
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote:
remote: -----> Compressing...
remote:        Done: 95M
remote: -----> Launching...
remote:        Released v5
remote:        https://jsysiak-24-04-2021.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/jsysiak-24-04-2021.git
 * [new branch]      master -> master


możesz to odpalić:  https://jsysiak-24-04-2021.herokuapp.com


C:\Users\Jacek\Documents\JAVA\Angular_SpringBoot\spring-reddit-clone>heroku logs -t

