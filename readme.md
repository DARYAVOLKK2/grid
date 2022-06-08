how to push changes to remote new branch?
1. git checkout -b your-branch-name 
2. git add .
3. git status
4. git commit -m "name your commit"
5. git push origin your-branch-name
6. create pull request in GitHub (your repository, project)
7.* to checkout on master use cmd: git checkout master 


how to push changes on existing branch?
2-5
3.* git status
перепроверить, что находишься на нужной ветке 



- git checkout -пеерключает локально между ветками 
- -b создает новую ветку локально
- git add . добавляет файлы в отслеживаемые гитом ( горят зелененьким U-untracked, A-add, D-deleted)
- . -добавляет все файлы
- git add examples/my_file.html (добавляет конкретный файл)
- git push - продвигает твои коммиты на удаленный репозиторий 
- git commit - складывает отследиваемые файлы в "коробочку"


