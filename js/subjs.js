//  **************수량 증가 및 가격증가***************************

var cnt=1;
price1 =89000;

var cnt2=1;
price2 =89000;

var cnt3=1;
price3 =89000;

var cnt4=1;
price4 =89000;

var cnt5=1;
price5 =89000;

var cnt6=1;
price6 =89000;

var cnt7=1;
price7 =89000;

// function sizecancle(){
//     var con=document.getElementById("size225");
//     con.style.display= "bolck";
// }



function count(type){
    if(type === 'plus220'){
        
        cnt=cnt+1;
        document.querySelector(".sulyangMain").innerHTML=cnt;

        price1= cnt * 89000;
        document.querySelector(".pricemain1").innerHTML=price1;
    
    }else if(type === 'minus220'){
        cnt=cnt-1;
        if(cnt < 1){
            cnt=1;
            document.querySelector(".sulyangMain").innerHTML=cnt;

        }else{
            document.querySelector(".sulyangMain").innerHTML=cnt;

            price1= cnt * 89000;
            document.querySelector(".pricemain1").innerHTML=price1;
        }
        //************ 225사이즈*************************
    }else if(type ==='plus225'){
        cnt2=cnt2+1;
        document.querySelector(".sulyangMain2").innerHTML=cnt2;

        price2= cnt2 * 89000;
        document.querySelector(".pricemain2").innerHTML=price2;

    }else if(type === 'minus225'){
        cnt2=cnt2-1;
        if(cnt2 < 1){
            cnt2=1;
            document.querySelector(".sulyangMain2").innerHTML=cnt2;


        }else{
            document.querySelector(".sulyangMain2").innerHTML=cnt2;

            price2= cnt2 * 89000;
            document.querySelector(".pricemain2").innerHTML=price2;
        }
    }
    //************ 230사이즈*************************
            else if(type ==='plus230'){
        cnt3=cnt3+1;
        document.querySelector(".sulyangMain3").innerHTML=cnt3;

        price3= cnt3 * 89000;
        document.querySelector(".pricemain3").innerHTML=price3;

    }else if(type === 'minus230'){
        cnt3=cnt3-1;
        if(cnt3 < 1){
            cnt3=1;
            document.querySelector(".sulyangMain3").innerHTML=cnt3;


        }else{
            document.querySelector(".sulyangMain3").innerHTML=cnt3;

            price3= cnt3 * 89000;
            document.querySelector(".pricemain3").innerHTML=price3;
        }
    }
    //************ 235사이즈*************************
    else if(type ==='plus235'){
        cnt4=cnt4+1;
        document.querySelector(".sulyangMain4").innerHTML=cnt4;

        price4= cnt4 * 89000;
        document.querySelector(".pricemain4").innerHTML=price4;

    }else if(type === 'minus235'){
        cnt4=cnt4-1;
        if(cnt4 < 1){
            cnt4=1;
            document.querySelector(".sulyangMain4").innerHTML=cnt4;


        }else{
            document.querySelector(".sulyangMain4").innerHTML=cnt4;

            price4= cnt4 * 89000;
            document.querySelector(".pricemain4").innerHTML=price4;
        }
    }

    //************ 240사이즈*************************
    else if(type ==='plus240'){
        cnt5=cnt5+1;
        document.querySelector(".sulyangMain5").innerHTML=cnt5;

        price5= cnt5 * 89000;
        document.querySelector(".pricemain5").innerHTML=price5;

    }else if(type === 'minus240'){
        cnt5=cnt5-1;
        if(cnt5 < 1){
            cnt5=1;
            document.querySelector(".sulyangMain5").innerHTML=cnt5;


        }else{
            document.querySelector(".sulyangMain5").innerHTML=cnt5;

            price5= cnt5 * 89000;
            document.querySelector(".pricemain5").innerHTML=price5;
        }
    }
    //************ 245사이즈*************************
    else if(type ==='plus245'){
        cnt6=cnt6+1;
        document.querySelector(".sulyangMain6").innerHTML=cnt6;

        price6= cnt6 * 89000;
        document.querySelector(".pricemain6").innerHTML=price6;

    }else if(type === 'minus245'){
        cnt6=cnt6-1;
        if(cnt6 < 1){
            cnt6=1;
            document.querySelector(".sulyangMain6").innerHTML=cnt6;


        }else{
            document.querySelector(".sulyangMain6").innerHTML=cnt6;

            price6= cnt6 * 89000;
            document.querySelector(".pricemain6").innerHTML=price6;
        }
    }

    //************ 250사이즈*************************
    else if(type ==='plus250'){
        cnt7=cnt7+1;
        document.querySelector(".sulyangMain7").innerHTML=cnt7;

        price7= cnt7 * 89000;
        document.querySelector(".pricemain7").innerHTML=price7;

    }else if(type === 'minus250'){
        cnt7=cnt7-1;
        if(cnt7 < 1){
            cnt7=1;
            document.querySelector(".sulyangMain7").innerHTML=cnt7;


        }else{
            document.querySelector(".sulyangMain7").innerHTML=cnt7;

            price7= cnt7 * 89000;
            document.querySelector(".pricemain7").innerHTML=price7;
        }
    }
}

// ***********여러사진 클릭시 사진변경*****************

function imgbox2click1(){
    document.getElementById("changeimg").src="img/subimg/반스1.png"
}

function imgbox2click2(){
    document.getElementById("changeimg").src="img/subimg/반스2.png"
}

function imgbox2click3(){
    document.getElementById("changeimg").src="img/subimg/반스3.png"
}

function imgbox2click4(){
    document.getElementById("changeimg").src="img/subimg/반스4.png"
}


