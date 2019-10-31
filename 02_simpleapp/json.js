var json = [
    {
        nama    : 'Mush',
        team    : 'Silent',
        Country : 'Indonesia',
        Score   : 983
    },
    {
        nama    : 'Leh',
        team    : 'Leh-dev',
        Country : 'Amerika',
        Score   : 986
    }
]

console.log(json)
/* 
    [ { nama: 'Mush', team: 'Silent', Country: 'Indonesia', Score: 983 },
    { nama: 'Leh', team: 'Leh-dev', Country: 'Amerika', Score: 986 } ] 
*/

console.log('\n')

for(var i = 0; i < json.length; i++) {
    console.log(json[i])
}
/*
{ nama: 'Mush', team: 'Silent', Country: 'Indonesia', Score: 983 }
{ nama: 'Leh', team: 'Leh-dev', Country: 'Amerika', Score: 986 }
*/

console.log('\n')
for(var i = 0; i < json.length; i++) {
    console.log(json[i].nama)
}
/*
Mush
Leh
*/

console.log('\n')
for(var i = 0; i < json.length; i++) {
    console.log("No. "+(i+1)+"\nNama : "+json[i].nama+"\nTeam : "+json[i].team+"\nAsal : "+ json[i].Country+"\nNilai : "+ json[i].Score)
    console.log('\n')
}
/*
No. 1
Nama : Mush
Team : Silent
Asal : Indonesia
Nilai : 983


No. 2
Nama : Leh
Team : Leh-dev
Asal : Amerika
Nilai : 986
*/