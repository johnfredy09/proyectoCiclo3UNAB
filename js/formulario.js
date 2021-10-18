function calcularImc(){
    var Estatura=0,Peso=0,imc=0,Documento;
    var Documento=document.getElementById("Documento").value;
    var Nombre=document.getElementById("Nombre").value;
    var Apellido=document.getElementById("Apellido").value;
    var Peso=document.getElementById("Peso").value;
    var Estatura=document.getElementById("Estatura").value;
    //var Estatura=parseInt(document.getElementById("Estatura").value);
    //var Peso=parseInt(document.getElementById("Peso").value);
    var Sexo=document.getElementById("Sexo").value;
    if(Peso!="" && Estatura!=""){
        //aplicamos la fórmula
        Estatura = parseInt(Estatura)/100;
        imc=Peso/(Estatura*Estatura);
        document.getElementById("imc").value=imc.toFixed(2);

        if(imc<18.5){
            alert("Bajo peso");
        }
        else if(imc>18.5 && imc<=24.9){
            alert("Su peso es Normal")
        }
        else if(imc>=25 && imc<=29.9){
            alert("Sobre peso")
        }
        /*else if(imc=30){
         //   alert("Su imc es: " + imc + " Obesidad ")
        } */      
        else if(imc>=30 && imc<=34.9){
            alert("Su imc es: " + imc + " Obesidad 1")
        }  
        else if(imc>=35 && imc<39.9){
            alert("Su imc es: " + imc + " Obesidad 2")
        }  
    }
    


    

}
