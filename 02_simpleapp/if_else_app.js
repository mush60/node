var nilai = 90
var grade

if(nilai>=91){
    grade = 'A'
} else if(nilai>=81) {
    grade = 'B'
} else if(nilai>=61) {
    grade = 'C'
} else if(nilai>=51) {
    grade = 'D'
} else {
    grade = 'E'
}

console.log("Nilai "+nilai+" memiliki grade : "+grade)