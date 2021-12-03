var btn2 = document.getElementById('btn2');
var n = Math.floor((Math.random()*100)+1);
var dd = document.getElementById('tmp');

var attemp = 10;


btn2.addEventListener('click', function(){
    attemp-=1;
    var input = document.getElementById('inp').value;
    if(input==n){
        if(attemp==1 || attemp==2){
            document.getElementById("khaoula1").innerHTML = "Bravo, vous etes un Génie !!!" ;
        }
        if(attemp>=3){
            document.getElementById("khaoula1").innerHTML = "Félicitations, vous avez gagné après "+attemp+" tentatives";
        }
    }
    else if(input<n){
        document.getElementById("khaoula1").innerHTML = "oops!essayer un grand nombre" ;
        attemp-=1;;
        dd.innerHTML = attemp;
    }
    else if(input>n){
        document.getElementById("khaoula1").innerHTML = "oops!essayer un petit nombre" ;
        attemp-=1;
        dd.innerHTML = attemp;
    }
    else if(attemp==0){
        document.getElementById("khaoula1").innerHTML = "C'est raté !!" ;
        attemp=10;
        dd.innerHTML = attemp;

    }
})
