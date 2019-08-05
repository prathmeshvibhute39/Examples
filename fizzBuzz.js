function fizzBizz(){
    let num = 1;
    while(num <= 100){
        if(num % 3 == 0){
            document.write("Fizz" +"<br>");
        }else if(num % 5 ==0){
            document.write("Buzz"  +"<br>");
        }else if(num % 3 == 0 && num % 5 ==0){
            document.write("FizzBuzz"  +"<br>")
        }else{
        document.write(num + "<br>");
            }
        num+=1;
    }
    
}

fizzBizz();


function star(){
    for(let i=0; i<=10; i++){
        
              for(let j=0; j<=i; j++){
                  
                  document.write("*")
              }
        document.write("<br>")
    }
  }
  star();
