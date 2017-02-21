* **git branch [-r | -a]**

    无参数时，列出本地分支。

    With no arguments, existing branches are listed and the current branch will
    be highlighted with an asterisk.

    加参数-r, 列出远程分支。

    Option -r causes the remote-tracking branches to be lists.

    加参数-a, 列出远程和本地的全部分支。

    option -a causes both the local and remote-tracking branches to be listed.

* **git branch `<Branch_Name>` `[<Start_Point]`**

    创建名为`<Branch_Name>`的新分支。

    Creates a new branch head named `<Branch_Name>`.

    不加可选参数`<Start_Point>`，则新分支从HEAD开始，加后从`<Start_Point>`开始。

    Without optional argument `"[<Start_Point>]", the new branch points to the
    current HEAD. Otherwise, points to `<Start_point>`.

    注意：这样会创建但并不会切换到新分支，如要切换，用**git checkout
    `<Branch>`**.

* **git branch (-m | -M) `[<Old_Branch>]` `<New_Branch>`**

    将`<Old_Branch>`重命名为`<New_Branch>`。

    With a -m or -M option, `<Old_Branch>` will be renamed to `<New_Branch>`.

    如果`<New_Branch>`已存在，必须使用-M选项进行强制重命名。

    If `<New_Branch>` exists, -M must be used to force the rename to happen.

* **git branch (-d | -D) `<Branch>`...**

    删除`<Branch>`。

    With a -d or -D option, `<Branch>` will be deleted.