



let data1 = '[{"roll":101,"name":"Mizan Rahman","fathers_name":"Mofizaul Islam","mothers_name":"Bibi kawchara","location":"Noakhali","bn":70,"en":75,"mt":80,"s":68,"ss":74,"rel":86},{"roll":102,"name":"Rahim","fathers_name":"Shofique","mothers_name":"Fatema","location":"chittagong","bn":70,"en":75,"mt":80,"s":68,"ss":74,"rel":86},{"roll":103,"name":"Masud Rana","fathers_name":"Mostafizaur","mothers_name":"Momena Begum","location":"Dhaka","bn":70,"en":75,"mt":80,"s":68,"ss":74,"rel":86},{"roll":104,"name":"Karim","fathers_name":"Kamal","mothers_name":"Monora Begum","location":"Noakhali","bn":70,"en":75,"mt":80,"s":68,"ss":74,"rel":86},{"roll":105,"name":"Khalilur Rahman","fathers_name":"Khorshed Alom","mothers_name":"Khadija","location":"Dhaka","bn":70,"en":75,"mt":80,"s":68,"ss":74,"rel":86},{"roll":106,"name":"Alamin","fathers_name":"Shikder","mothers_name":"Rekha","location":"Dhaka","bn":70,"en":75,"mt":80,"s":68,"ss":74,"rel":86},{"roll":107,"name":"Jubaier","fathers_name":"Neamot Ullah","mothers_name":"Sahana","location":"Chittagong","bn":70,"en":75,"mt":80,"s":68,"ss":74,"rel":86},{"roll":108,"name":"Monjurul Islam","fathers_name":"Monirul islam","mothers_name":"Monora","location":"Noakhali","bn":70,"en":75,"mt":80,"s":68,"ss":74,"rel":86},{"roll":109,"name":"Jahirul","fathers_name":"Iqbal","mothers_name":"Momana","location":"Dhaka","bn":70,"en":75,"mt":80,"s":68,"ss":74,"rel":86},{"roll":110,"name":"Ismeail","fathers_name":"Siraj","mothers_name":"Johura","location":"Noakhali","bn":70,"en":75,"mt":80,"s":68,"ss":74,"rel":86}]'




// let ob = JSON.parse( data1 );

// console.log( ob );









let data2 = '[{"name":"Ashraful Hoque","phone":"01716765498","profession":"Businessman"},{"name":"Maruful Hoque","phone":"01618635480","profession":"Job Holder"},{"name":"Jillur Rahmn","phone":"01929004783","profession":"Businessman"},{"name":"Mizanur Rahmna","phone":"01761084726","profession":"Job Holder"},{"name":"Ismeail Hossain","phone":"01850281622","profession":"Teacher"},{"name":"Nurul Abser","phone":"01398587262","profession":"Student"},{"name":"Atique Ullah","phone":"01798739801","profession":"Teacher"},{"name":"Tahmina Akter","phone":"01909763981","profession":"House Wife"},{"name":"Mamunur Rashid","phone":"01714986765","profession":"Job Holder"},{"name":"Fatema Khatun","phone":"01718320980","profession":"House Wife"}]'

// let ob = JSON.parse( data2 );

// console.log( ob );



let data3 = '[{"name":"Ashraful Hoque","age":30,"skill":"MERN stack Developer","location":"Dhaka","salary":1200},{"name":"Maruful Hoque","age":27,"skill":"Laravel Developer","location":"Chittagong","salary":1500},{"name":"Jillur Rahman","age":25,"skill":"Django Developer","location":"Dinajpur","salary":1600},{"name":"Mizanur Rahman","age":31,"skill":"MERN stack Developer","location":"Noakhali","salary":2000},{"name":"Nazmul Huda","age":40,"skill":"java Developer","Location":"Dhaka","salary":800},{"name":"Sheik shihab","age":29,"skill":"GoLang Developer","location":"Chittagong","salary":1200},{"name":"Sabbir Hossain","age":23,"skill":"WordPress Developer","location":"Rongpur","salary":2000},{"name":"Naimul Hasan","age":25,"skill":"GoLang Developer","location":"Kustia","salary":1700},{"name":"Rezwan Ahmed","age":40,"skill":"java Developer","location":"Comilla","salary":1400},{"name":"Mohammad Sujon","age":31,"skill":"WordPress Developer","location":"Jashor","salary":1000}]'


// let ob = JSON.parse( data3 );

// console.log( ob );



const all = [ data1, data2, data3 ];


document.write( JSON.stringify ( all ) );













