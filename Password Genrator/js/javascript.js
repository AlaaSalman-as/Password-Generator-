




function generatePassword(){
    var passwordLength = document.getElementById("length").value;
    var upperCaseLetters = document.getElementById("upperCaseLetter").value;
    var lowerCaseLetters = document.getElementById("lowerCaseLetter").value;
    var numberCase=document.getElementById("numbers").value;
    var symbol = document.getElementById("symbols").value;
    //var result = document.getElementById("result").innerText;
    var upperRandom =[];

    if(passwordLength != " " ){
        //var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
        // var upperRandom =
        if(upperCaseLetters === true & lowerCaseLetters ===false & symbol ===false & numberCase === false){
            var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for(var i=1 ; i<=passwordLength ;i++ ){
                var x = math.round(math.random() * 100);
                upperRandom = upper.charAt(x)[i];

                if(i === passwordLength){
                    document.getElementById("result").innerText=upperRandom;
                }
            }
        }else if(lowerCaseLetters === true & upperCaseLetters ===false & symbol ===false & numberCase === false){
            var lower ="abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
            for(var i=1 ; i<=passwordLength ; i++){
                var x = math.round(math.random() * 100);
                upperRandom = lower.charAt(x)[i];

                if(i === passwordLength){
                    document.getElementById("result").innerText=upperRandom;
                }
            }
        }else if(symbol ===true & upperCaseLetters ===false & lowerCaseLetters ===false & numberCase === false){
            var symb = "~!@#$%^&*()_+=-/*.~!@#$%^&*()_+=-/*.~!@#$%^&*()_+=-/*.~!@#$%^&*()_+=-/*.";
            for(var i=1 ; i<=passwordLength ; i++){
                var x = math.round(math.random() * 100);
                upperRandom = symb.charAt(x)[i];

                if(i === passwordLength){
                    document.getElementById("result").innerText=upperRandom;
                }
            }
        }
        else if(numberCase ===true & upperCaseLetters ===false & lowerCaseLetters ===false & symb === false){
            var num = "012345678901234567890134567890123456789012345678901234567890123456789";
            for(var i=1 ; i<=passwordLength ; i++){
                var x = math.round(math.random() * 100);
                upperRandom = num.charAt(x)[i];

                if(i === passwordLength){
                    document.getElementById("result").innerText=upperRandom;
                }
            }
        }else if(numberCase ===true & upperCaseLetters ===true & lowerCaseLetters ===true & symb === true){
            var num = "012345678901234567890134567890123456789012345678901234567890123456789";
            var symb = "~!@#$%^&*()_+=-/*.~!@#$%^&*()_+=-/*.~!@#$%^&*()_+=-/*.~!@#$%^&*()_+=-/*.";
            var lower ="abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
            var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for(var i=1 ; i<=passwordLength ; i++){
                var x = math.round(math.random() * 100);
                upperRandom = num.charAt(x)[i] ,symb.charAt(x)[i] ,lower.charAt(x)[i] , upper.charAt(x)[i];

                if(i === passwordLength){
                    document.getElementById("result").innerText=upperRandom;
                }
                else if( i> passwordLength){
                    document.getElementById("result").innerText=upperRandom.substr(1,passwordLength);
                }
            } if(numberCase ===true & upperCaseLetters ===true & lowerCaseLetters ===true & symb === false){
                var num = "012345678901234567890134567890123456789012345678901234567890123456789";
                var lower ="abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
                var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
                for(var i=1 ; i<=passwordLength ; i++){
                    var x = math.round(math.random() * 100);
                    upperRandom = num.charAt(x)[i],lower.charAt(x)[i] , upper.charAt(x)[i];
    
                    if(i === passwordLength){
                        document.getElementById("result").innerText=upperRandom;
                    }
                    else if( i> passwordLength){
                        document.getElementById("result").innerText=upperRandom.substr(1,passwordLength);
                    }
                }
            }else if(numberCase ===true & upperCaseLetters ===true & lowerCaseLetters ===false & symb === false){
                var num = "012345678901234567890134567890123456789012345678901234567890123456789";
                var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
                for(var i=1 ; i<=passwordLength ; i++){
                    var x = math.round(math.random() * 100);
                    upperRandom = num.charAt(x)[i] , upper.charAt(x)[i];
    
                    if(i === passwordLength){
                        document.getElementById("result").innerText=upperRandom;
                    }
                    else if( i> passwordLength){
                        document.getElementById("result").innerText=upperRandom.substr(1,passwordLength);
                    }
                }
    }else if(numberCase ===true  & lowerCaseLetters ===true & symb === false & upperCaseLetters ===false){
        var num = "012345678901234567890134567890123456789012345678901234567890123456789";
        var lower ="abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";

        for(var i=1 ; i<=passwordLength ; i++){
            var x = math.round(math.random() * 100);
            upperRandom = num.charAt(x)[i] ,lower.charAt(x)[i] ;

            if(i === passwordLength){
                document.getElementById("result").innerText=upperRandom;
            }
            else if( i> passwordLength){
                document.getElementById("result").innerText=upperRandom.substr(1,passwordLength);
            }
        }
    }  
    else if (passwordLength == " "){
        alert("You Have To Choose Your Password Length .");
    }

}}}