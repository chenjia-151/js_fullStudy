# set 
  1 类似于数组，但是不一样的地方是set 这种数据结构内部的成员是唯一值
  2 通过 add() 方法内部添加成员，通过 delete 删除成员,通过 has 判断是否存在某一个成员,通过 clear 清空数组中的所有成员
  3 通过 size 属性获取数组长度
  4 向Set加入值得时候，不会默认做类型转换，所以 5 和 '5' 是不一样的
  5 NaN ===NaN => false 但是set中认为其是全等的
  6 对象 {} 对于set 来说也是不全等的