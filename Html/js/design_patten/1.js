/**
 * 
 * 功能：计算年收益
 * @author cjh
 * @date 2020-7-16
 * @param {salary 工资 number} 
 *  {level 评级 string}
 * @return 年收益 number
 * 
 */

function calculateBonus(salary,level){
    //console.log(arguments);
    
    console.log(typeof(salary-0));
    if(arguments.length<2){
        throw new Error('传参不正确，请检查传递工资及等级');
    }

    if(typeof + salary!='number' || salary<0){
        throw new TypeError('工资必须是整数');
    }

    if(['A','B','C','D'].indexOf(level==-1)){
        throw new Error('错误的等级')
    }

    salary=parseInt(salary)

    if(level=='D'){
       return salary*12;
    }
    if(level=='D'){
        return salary*16
     }
    if(level=='B'){
        return salary*18;
    }
    if(level=='A'){
        return salary*20;
    }
    return salary*12;
}

console.log(calculateBonus(20000,'A'));