function penjumlahan(a, b) {
    return a + b
}

function pengurangan(a,b) {
    if(a > b) {
        return a - b
    } else {
        return b - a
    }
}

function perkalian(a,b) {
    return a*b
}

function pembagian(a,b) {
    if(a > b) {
        return a / b
    } else {
        return b / a
    }    
}
var a = 10
var b = 5

console.log(a+" + "+b+" = " +penjumlahan(a,b))
console.log(a+" - "+b+" = " +pengurangan(a,b))
console.log(a+" x "+b+" = " +perkalian(a,b))
console.log(a+" : "+b+" = " +pembagian(a,b))

