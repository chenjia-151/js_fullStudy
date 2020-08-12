 # IT外包

1. 解决什么问题
    1. 线下成本太高
    2. 省成本 
    3. 学生  技术检测  项目配对  质量代码提交  绩效考核
2. 服务哪些人群
3. 技术方案
    Student: (学生表)
        _id
        skill(技能点/方向)
        resume(个人履历)
        salary(薪水)
        rate(评分)  0 - 5
        title(等级)

    Project: (项目表)
        _id
        title
        desc
        photos
        start_ts
        end_ts
        price
        type

    Owner: (商家表)
        _id
        type  个人|企业
        indicate  执照
        rate 评分


    可以评价(评论表 comments)  可以升级(社区)   

    成长机制：
        时间  可以计时   github提交
        timeline   每天提交timeline
        列表
        - list
        拍照加计时



    核心表：
        Student
            title salary total_salary start_ts rate school   (薪人薪事)
        Owner
        Project
            图片 + 描述
        Comment
        Record
        Order