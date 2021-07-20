## git常用命令
git clone xxxx.git  从github或者gitlab拉取项目代码

git pull origin master/develop  拉取远程master/develop分支的内容

git push origin feature/xxx  将本地feature/xxx 分支推到远程github/gitlab仓库

git checkout feature/xxx  本地开发环境切换到feature/xxx 分支

git checkout -b feature/xxx  本地开发环境新建并切换到feature/xxx分支

git log  查看提交记录

git add .  将本地开发环境代码添加到工作区

git commit -m "xxx"  将工作区代码提交

git branch  查看分支

git reset --hard HEAD^(或者是某个commit的代号，用git log 可以看到，一般不需要打印出大量的log ，用git log -3 打印出最近三次提交就可以了)