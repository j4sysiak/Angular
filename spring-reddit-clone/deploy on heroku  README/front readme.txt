https://dry-tor-69715.herokuapp.com/
heroku apps:rename --app dry-tor-69715 angular-jsysiak-24-04-2021


C:\Users\Jacek\Documents\JAVA\Angular_SpringBoot\front\angular-reddit-clone\src\app>heroku apps:rename --app dry-tor-69715 angular-jsysiak-24-04-2021
Renaming dry-tor-69715 to angular-jsysiak-24-04-2021... done
https://angular-jsysiak-24-04-2021.herokuapp.com/ | https://git.heroku.com/angular-jsysiak-24-04-2021.git



git remote add heroku https://git.heroku.com/angular-jsysiak-24-04-2021.git

git add .

git commit -m "Some comment"

git push heroku master

heroku logs --tail
