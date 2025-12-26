function bmiCalculator(){
    const weight=parseFloat(document.getElementById("weight").value);
    const heightcm=parseFloat(document.getElementById("height").value);
    let print=document.getElementById("print");

    if (isNaN(weight) || isNaN(heightcm)){
        print.innerHTML="Please Enter valid details";
    }
    else{
        let bmi="";
        const heightm=(heightcm/100);
        bmi=(weight/(heightm*heightm)).toFixed(1);
        // print.innerHTML="Your BMI is: "+bmi
        if (bmi<18.5){
            print.innerHTML="Your BMI is: "+bmi ;
            print.innerHTML+=" <br>UNDERWEIGHT"
        }
        else if (bmi>=18.5 && bmi<=24.9){
            print.innerHTML="Your BMI is: "+bmi;
            print.innerHTML+="<br>NORMAL"
        }else if(bmi>=25.0 && bmi<=29.9){
            print.innerHTML="Your BMI is: "+bmi;
            print.innerHTML+=" <br>OVERWEIG0HT"
        }else{
            print.innerHTML="Your BMI is: "+bmi;
            print.innerHTML+="<br>OBESE"
        }
    }
}