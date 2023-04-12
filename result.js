let resultPhrase = ""

function resultPhraseF(){
    if(score == 0){
        return resultPhrase = "On ne peux plus rien faire pour vous";
    }
    
    if(score > 0 && score < 6){
        return resultPhrase = "Vous êtes un homosexuel notoire";
    }
    
    if(score > 5 && score < 11){
        return resultPhrase = "Forte tendance homosexuel";
    }
    
    if(score > 10 && score < 16){
        return resultPhrase = "Forte bicurieusité";
    }
    
    if(score > 15 && score < 20){
        return resultPhrase = "Lègere bicurieusité";
    }
    
    if(score == 20){
        return resultPhrase = "On vous la fait pas !"
    }
}

