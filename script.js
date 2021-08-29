function deldiv1 () { 
    document.getElementById("hr").remove();   
    document.getElementById("box").remove();
};

 function deldiv2 () { 
    document.getElementById("hr1").remove(); 
    document.getElementById("box1").remove();
};

function deldiv3 () { 
    document.getElementById("hr2").remove();   
    document.getElementById("box2").remove();
};
// first
let salesm = document.getElementById('salesm');
let salesnum = 1;
let shoessalesnum = document.getElementById('salesnum');
let salesp = document.getElementById('salesp');
let price = document.getElementById('price');
let cena = 120;

salesp.onclick = function () { 
    if(salesnum <= 59) {
        salesnum++;
        shoessalesnum.innerHTML = salesnum;
        price.innerHTML = `${cena * salesnum} $`;
    }
}; 
salesm.onclick = function () { 
    if(salesnum > 1) {
        salesnum--;
        shoessalesnum.innerHTML = salesnum;
        price.innerHTML = `${cena * salesnum} $`;
    }
}; 
//second
let salesm1 = document.getElementById('salesm1');
let salesnum1 = 1;
let shoessalesnum1 = document.getElementById('salesnum1');
let salesp1 = document.getElementById('salesp1');
let price1 = document.getElementById('price1');
let cena1 = 150;

salesp1.onclick = function () { 
    if(salesnum1 <= 39) {
        salesnum1++;
        shoessalesnum1.innerHTML = salesnum1;
        price1.innerHTML = `${cena1 * salesnum1} $`;
    }
}; 
salesm1.onclick = function () { 
    if(salesnum1 > 1) {
        salesnum1--;
        shoessalesnum1.innerHTML = salesnum1;
        price1.innerHTML = `${cena1 * salesnum1} $`;
    }
}; 
//third
let salesm2 = document.getElementById('salesm2');
let salesnum2 = 1;
let shoessalesnum2 = document.getElementById('salesnum2');
let salesp2 = document.getElementById('salesp2');
let price2 = document.getElementById('price2');
let cena2 = 120;

salesp2.onclick = function () { 
    if(salesnum2 <= 19) {
        salesnum2++;
        shoessalesnum2.innerHTML = salesnum2;
        price2.innerHTML = `${cena2 * salesnum2} $`;
    }
}; 
salesm2.onclick = function () { 
    if(salesnum2 > 1) {
        salesnum2--;
        shoessalesnum2.innerHTML = salesnum2;
        price2.innerHTML = `${cena2 * salesnum2} $`;
    }
};

//heart
let btntrue = true; 
let like = document.getElementById("like1"); 



function btnchange1 () {
    if (btntrue == true){
     btntrue = false; 
     like.src="like.png";

     

    }
 else if (btntrue == false )  {
        btntrue = true;
        like.src="likej.png";

} 

}

///////////////////////////

let btntrue2 = true; 
let like2 = document.getElementById("like2"); 



function btnchange2 () {
    if (btntrue2 ==true){
     btntrue2 = false; 
     like2.src="like.png";

     

    }
 else if (btntrue2 == false )  {
        btntrue2 = true;
        like2.src="likej.png";

} 

}

/////////////////////////////////////

let btntrue3 = true; 
let like3 = document.getElementById("like3"); 



function btnchange3 () {
    if (btntrue3 ==true){
     btntrue3 = false; 
     like3.src="like.png";

     

    }
 else if (btntrue3 == false )  {
        btntrue3 = true;
        like3.src="likej.png";
        

    } 

}

// let btntrue = true;
// let like = document.getElementById("heart.img");

// function btnchange () {
//     if(btntrue == true) {
//         btntrue = false;
//         like.src = "like.png";
//     } else if (btntrue == false); {
//         btntrue = true;
//         like.src = "likej.png";
//     }
// }

// let btntrue1 = true; 
// let like1 = document.getElementById("heartimg1"); 

// function btnchange () {
//     if (btntrue == true){
//      btntrue1 = false; 
//      like1.src="like.png";

//     }
//  else if (btntrue1 == false )  {
//         btntrue1 = true;
//         like1.src="likej.png";

// } 

// }

//

// let btntrue2 = true; 
// let like2 = document.getElementById("heartimg2"); 

// function btnchange2 () {
//     if (btntrue2 ==true){
//      btntrue2 = false; 
//      like2.src="heartR.png";

//     }
//  else if (btntrue2 == false )  {
//         btntrue2 = true;
//         like2.src="heartW.png";

// } 

// }

//

// let btntrue3 = true; 
// let like3 = document.getElementById("heartimg3"); 

// function btnchange3 () {
//     if (btntrue3 ==true){
//      btntrue3 = false; 
//      like3.src="heartR.png";

//     }
//  else if (btntrue3 == false )  {
//         btntrue3 = true;
//         like3.src="heartW.png";

// } 

// }