## 学习工具:https://learngitbranching.js.org/?locale=zh_CN
- show solution  查看答案
### git commit
- 提交信息，并且提交相关的日志信息

### git branch
- 创建分支

### git checkout
- 切换分支

### git merge
- 合并分支


## 相对应用
- 相对引用非常给力，这里我介绍两个简单的用法：使用 ^ 向上移动 1 个提交记录，使用 ~<num> 向上移动多个提交记录，如~3
- 例如：git checkout main^ 在main上移动一个位置。
- 例如：git checkout HEAD^ 向上移动一个位置。
### 强制修改分支位置
- 你现在是相对引用的专家了，现在用它来做点实际事情。我使用相对引用最多的就是移动分支。可以直接使用 -f 选项让分支指向另一个提交。例如:git branch -f main HEAD~3,上面的命令会将 main 分支强制指向 HEAD 的第 3 级父提交。

### get reset
- git reset 通过把分支记录回退几个提交记录来实现撤销改动。你可以将这想象成“改写历史”。git reset 向上移动分支，原来指向的提交记录就跟从来没有提交过一样。

### git revert
- git revert HEAD，revert，之后就可以把你的更改推送到远程仓库与别人分享啦。

### git cherry-pick
- git cherry-pick <提交号>...
- 如果你想将一些提交复制到当前所在的位置（HEAD）下面的话， Cherry-pick 是最直接的方式了。我个人非常喜欢 cherry-pick，因为它特别简单。

### 交互式的 rebase
- git rebase -i HEAD~4
- git rebase main feature

### tag 打标签，由于标签在代码库中起着“锚点”的作用
- 命令格式: git tag -a 标签名 -m "附注信息"
- 例如：git tag -a v0.1.0 -m "完成了文章a和文章b的撰写，耗费时间2h，感觉棒棒的！"

### git featch

### git pull

