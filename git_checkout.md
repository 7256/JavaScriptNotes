* **git checkout**

    对工作区进行状态检查。

* 包含路径的用法（不改变HEAD头指针）

  - **git checkout `<Commit>`**

        用指定提交`<Commit>`中的文件覆盖暂存区和工作区。

  - **git checkout `<Commit>` -- `<Full_Path_of_File>`...**

        用指定提交`<Commit>`中的某一/某几个文件覆盖暂存区和工作区。

  - **git checkout -- `<Full_Path_of_File>`...**

        用暂存区中的某一/某几个文件覆盖工作区。

* 不包含路径的用法（改变HEAD头指针）

  - **git checkout `<Branch>`**

        切换到<Branch>分支。因为只有HEAD切换到一个分支才可对提交进行跟踪，否则会进入“分离头指针”状，在“分离头指针”状态下的提交不能被引用关联到，从而可能丢失。

  - **git checkout -b `<Branch>` `<Start_Point>`**

        从`<Start_Point>`开始创建和切换到新的分支。

    
