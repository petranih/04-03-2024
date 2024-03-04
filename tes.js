// var fitra = "jva";
// var userinput = prompt('siapa namamu?');
// alert(' Nama saya $(userinput')
// alert("Nama saya" + userinput)

// var nama = "petra"
// nama = "don"
// nama = "sasa"
// alert(nama)

var n = Math.random()
n = n * 6
n = Math.floor(n) + 1
console.log(n)

prompt("siapa nama kamu?")
prompt("masuk universita gak?")
// kalau jawabannya mau, 
// maka keluarkan pesen akan masuknya

var chanceGetUniv = Math.random() * 100
chanceGetUniv = Math.floor(chanceGetUniv)
console.log(chanceGetUniv)
alert("kemungkian kamu masuk univ adalah " + chanceGetUniv + "%")

// jika nilai use input diatas 80
// kemungkinan masuk universitas diatas 80%

prompt("siapa nama kamu?")
var studentwish = prompt("masuk universita gak?")
// kalau jawabannya mau, 
// maka keluarkan pesen akan masuknya

if(studentwish === "mau"){
var chanceGetUniv = Math.random() * 100
chanceGetUniv = Math.floor(chanceGetUniv)
console.log(chanceGetUniv)
alert("kemungkian kamu masuk univ adalah " + chanceGetUniv + "%")
} else {
    alert("yasudah kalo gak mau kuliah, gua mah santai aja !")
}

var x = 70
var y = 100

console.log(x > y)
console.log(x < y)

var a = "cek"
var b = "cek"

console.log(a == b)
console.log(a === b)
console.log(a != b)
console.log(a !== b)

const studentName = prompt("Nama kamu?")
const studentWish = prompt("kau mau kuliah?")

if(studentWish === "mau") {
    var nilaiAkhirSMA = prompt("masukkan nilai SMA / SMK MU DONG !!")
    if (nilaiAkhirSMA < 30) {
        alert("Tidak mungkin masuk UNIV");
    } else {
        var chanceGetUniv = ((nilaiAkhirSMA - 30) / 20) * 100;
        if (nilaiAkhirSMA < 50) {
            // Jika hasil chanceGetUniv dibawah 50 persen
            if (chanceGetUniv < 50) {
                alert("Hmmm, kemungkinan kamu " + studentName + " kecil masuk UNIV");
            } else {
                alert("Hmmm, kemungkinan kamu " + studentName + " bisa masuk UNIV");
            }
        } else {
            if (chanceGetUniv > 70 && nilaiAkhirSMA > 60) {
                alert("Hei " + studentName + ", pasti masuk UNIV dengan nilai SMA " + nilaiAkhirSMA + " mu yang besar itu");
            }
            else if (chanceGetUniv > 70 || nilaiAkhirSMA > 80) {
                alert("Hei " + studentName + " pasti masuk UNIV dengan nilai SMA " + nilaiAkhirSMA + " mu yang besar itu");
            }
        }
    }
} else {
    alert("okedeh goodluck Terserah Lu!")
}