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

