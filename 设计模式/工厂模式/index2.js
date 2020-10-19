// 抽象工厂
// function Factory(name, age, career) {
//     let work
//     switch (career) {
//         case 'coder':
//             work = ['写代码', '写系统', '改bug']
//             break
//         case 'product manager':
//             work = ['订会议室', '写ppt', '催更']
//             break
//         case 'boss':
//             work = ['喝茶', '看报', '见客户']
//             break
//         case 'xxx':
//         // .....
//     }
//     return new User(name, age, career, work)
// }


class FakeStar extends MobilePhoneFactory {
    // 提供操作系统的接口
    createOS() {
        return new AndroidOS()
    }
    // 提供硬件的接口
    createHardWare() {
        return new QualcommHardWare()
    }
}

class OS {
    controlHardWare() {
        throw new Error('需要重写')
    }
}

class AndroidOS extends OS {
    controlHardWare() {
        console.log('用安卓的方式去操作系统');
    }
}

class AppleOS extends OS {
    controlHardWare() {
        console.log('用苹果的方式去操作系统');
    }
}

class HardWare {
    operateByOrder() {
        throw new Error('需要重写')
    }
}

class QualcommHardWare extends HardWare {
    operateByOrder() {
        console.log('用高通的方式去运转')
    }
}

class MiWare extends HardWare {
    operateByOrder() {
        console.log('用小米的方式去运转')
    }
}

class newStarFactory extends MobilePhoneFactory {
    createOS() {
        // ...
    }
    createHardWare() {
        // ...
    }
}

// 我的手机
const myPhone = new FakeStar()
// 让它具备操作系统
const myOS = myPhone.createOS()
// 让它具备硬件
const myHardWare = myPhone.createHardWare()
// 启动操作系统
myOS.controlHardWare()
// 唤醒操作系统
myHardWare.operateByOrder()