## git基础

## 初始化
git init 

## 工作区、版本库、远程库概念
![](https://www.liaoxuefeng.com/files/attachments/919020037470528/0)

本地包含工作区、版本库,版本库包含stage暂存区、matser主分支    

git add命令实际上就是把要提交的所有修改放到暂存区（Stage），然后，执行git commit就可以一次性把暂存区的所有修改提交到分支。

## 版本前进回退
git status 仓库的当前状态  

git diff   文件的修改 (如果git status告诉你有文件被修改过，可以用git diff查看详情)

git log --pretty=oneline 查看提交记录  

git reset --hard HEAD^  版本回退（HEAD指向当前版本）

git reflog 查看命令历史，用来确定要回到未来的哪个版本   

撤销修改： git checkout --file  相当于拿stage的版本覆盖工作区的版本    
修改已经添加到stage，使用版本回退就让之前的git add撤回了，这个时候在使用git checkout --file 就撤销了。   

从版本库里面删除文件，git rm <filename>, 然后再commit一下就行

## 远程仓库
添加远程库、ssh配对一下

git remote add <remoteLabName> git@github.com:<name>/<file>

git push origin master

git remote -v     or        git remote rm <name>

分布式版本系统的最大好处之一是在本地工作完全不需要考虑远程库的存在，也就是有没有联网都可以正常工作，而SVN在没有联网的时候是拒绝干活的

关于本地添加远程库，本地往github上推。或者是在github上建立文件，然后在clone一下。

## 重要：分支管理
git的分支创建删除、切换速度都很快。   
<不要分心，不要走神，value your time>  
master分支是一条线，Git用master指向最新的提交，再用HEAD指向master，就能确定当前分支，以及当前分支的提交点   
git checkout -b dev  创建并切换    git switch -c dev同样的作用
git checkout master 切回master分支   
git merge dev 融合      --no-ff普通模式融合，禁用Fast-forward
git branch -d dev 融合后就可以删除     
**解决冲突**   
当无法自动合并的时候，就手动修改不同的地方之后才能merge.先git pull最新的提交，在本地解决冲突再合并再推送

+ 分支策略
master分支用来发布新版本，干活在dev上干。

+ 备份工作现场，stash   
git stash / git stash pop
在master分支上修复bug,想合并到当前dev分支,用git cherry-pick <commit>命令，把bug提交的修改复制到当前分支，避免重复劳动。

+ feature分支和dev分支
要丢弃一个未合并过的分支 git branch -D <name>

+ **多人协作**
bug分支在本地修复即可，不必要推送到远程。   
多人协作时，远程克隆时默认情况只能看到本地的master分支，需要创建远程的分支到本地 git checkout -b dev origin/dev   
本地分支和远程分支的关联， git checkout -b branch-name orgin/branch-name 创建对应分支，然后再 git branch --set-upsteam branch-name orgin/branch-name进行关联

+ rebase 
变基，把提交历史整理成一条直线。操作把本地未push的分叉提交历史整理成直线，目的是为了我们在查看历史提交的变化更直白，方便进行三方对比

## 标签
git tag <tagname> 用于新建一个标签，默认为当前指针，也可以指定一个commit id   
git tag -a  tagename  -m "discribe" 可以指定标签信息
git tag 可以查看所有标签
git tag -d v0.1删除标签  
git push origin --tags 一次性推送全部尚未推送到远程的本地标签   
若是已经是远程，先删除本地再push


## 自定义git
.gitignore 文件     
忽略文件配置
强制添加：git add -f 文件名
排查原因： git check-ignore-v 文件名
> 配置别名
+ git config --global alias.st status
一些常用的： 
git config --global alias.co checkout   
git config --global alias.ci commit    
git config --global alias.br branch
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
