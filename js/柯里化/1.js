const arr = []
let a = [
    { time: 1 },
    { time: 5 },
    { time: 8 },
    { time: 11 },
    { time: 16 },
    { time: 17 },
    { time: 29 },
    { time: 34 },
    { time: 39 }
]
let time_line = [3, 7, 12, 17, 19, 31, 40]
for (let i = 0; i < time_line.length; i++) {
    for (let j = 0; j < a.length; j++) {
        if (time_line[i] > a[j].time && time_line[i] < a[j + 1].time) {
            return a[j + 1]
        }
    }
    return a[j+1]
}