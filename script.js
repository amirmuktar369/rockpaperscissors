var score_user = 0;
var score_comp = 0;

function rock() {

    var rand = Math.round((Math.random())*2);
 
    var user_rock = document.getElementById("user_rock");
    var user_paper = document.getElementById("user_paper");
    var user_sciss = document.getElementById("user_sciss");
    
    var computer_rock = document.getElementById("comp_rock");
    var computer_paper = document.getElementById("comp_paper");
    var computer_sciss = document.getElementById("comp_sciss");
    
    user_paper.style.background = "#154588";
    user_sciss.style.background = "#154588";
    
    user_rock.style.background = "black";
    
    var comments = document.getElementById("comment");
    
    
    if(rand == 0) {
        computer_paper.style.background = "#154588";
        computer_paper.style.color = "white";
        computer_sciss.style.background = "#154588";
        computer_sciss.style.color = "white";
    
        computer_rock.style.background = "gold";
        computer_rock.style.color = "red";
        
        comments.style.color = "#ffffea";
        comments.innerHTML = "Equal";
        
    }else if(rand == 1) {
        score_comp += 1;
    
        computer_rock.style.background = "#154588";
        computer_rock.style.color = "white";
        computer_sciss.style.background = "#154588";
        computer_sciss.style.color = "white";
    
        computer_paper.style.background = "gold";
        computer_paper.style.color = "red";
        
        comments.style.color = "red";
        comments.innerHTML = "Ohpps!";
        
    }else {
        score_user += 1;
    
        computer_paper.style.background = "#154588";
        computer_paper.style.color = "white";
        computer_rock.style.background = "#154588";
        computer_rock.style.color = "white";
    
        computer_sciss.style.background = "gold";
        computer_sciss.style.color = "red";
        
        comments.style.color = "lime";
        comments.innerHTML = "Hurahhy!";
    }
    
    document.getElementById("comp_score").innerHTML = score_comp;
    document.getElementById("user_score").innerHTML = score_user;
    
}

function paper() {

    var rand = Math.round((Math.random())*2);

    var user_rock = document.getElementById("user_rock");
    var user_paper = document.getElementById("user_paper");
    var user_sciss = document.getElementById("user_sciss");
    
    var computer_rock = document.getElementById("comp_rock");
    var computer_paper = document.getElementById("comp_paper");
    var computer_sciss = document.getElementById("comp_sciss");
    
    user_rock.style.background = "#154588";
    user_sciss.style.background = "#154588";

    user_paper.style.background = "black";
    
    var comments = document.getElementById("comment");
    
    if(rand == 0) {
        score_user += 1;
    
        computer_paper.style.background = "#154588";
        computer_paper.style.color = "white";
        computer_sciss.style.background = "#154588";
        computer_sciss.style.color = "white";
    
        computer_rock.style.background = "gold";
        computer_rock.style.color = "red";
        
        comments.style.color = "lime";
        comments.innerHTML = "Hurahhy!";
        
    }else if(rand == 1) {
        computer_rock.style.background = "#154588";
        computer_rock.style.color = "white";
        computer_sciss.style.background = "#154588";
        computer_sciss.style.color = "white";
    
        computer_paper.style.background = "gold";
        computer_paper.style.color = "red";
        
        comments.style.color = "#ffffea";
        comments.innerHTML = "Equal";
        
    }else {
        score_comp += 1;
    
        computer_paper.style.background = "#154588";
        computer_paper.style.color = "white";
        computer_rock.style.background = "#154588";
        computer_rock.style.color = "white";
    
        computer_sciss.style.background = "gold";
        computer_sciss.style.color = "red";
        
        comments.style.color = "red";
        comments.innerHTML = "Ohpps!";
    }
    
    document.getElementById("comp_score").innerHTML = score_comp;
    document.getElementById("user_score").innerHTML = score_user;
    
}

function scissors() {

    var rand = Math.round((Math.random())*2);

    var user_rock = document.getElementById("user_rock");
    var user_paper = document.getElementById("user_paper");
    var user_sciss = document.getElementById("user_sciss");
    
    var computer_rock = document.getElementById("comp_rock");
    var computer_paper = document.getElementById("comp_paper");
    var computer_sciss = document.getElementById("comp_sciss");

    user_paper.style.background = "#154588";
    user_rock.style.background = "#154588";

    user_sciss.style.background = "black";
    
    var comments = document.getElementById("comment")
    
    if(rand == 0) {
        score_comp += 1;
    
        computer_paper.style.background = "#154588";
        computer_paper.style.color = "white";
        computer_sciss.style.background = "#154588";
        computer_sciss.style.color = "white";
    
        computer_rock.style.background = "gold";
        computer_rock.style.color = "red";
        
        comments.style.color = "red";
        comments.innerHTML = "Ohpps!";
        
    }else if(rand == 1) {
        score_user += 1;
    
        computer_rock.style.background = "#154588";
        computer_rock.style.color = "white";
        computer_sciss.style.background = "#154588";
        computer_sciss.style.color = "white";
    
        computer_paper.style.background = "gold";
        computer_paper.style.color = "red";
        
        comments.style.color = "lime";
        comments.innerHTML = "Hurahhy!";
        
    }else {
        computer_paper.style.background = "#154588";
        computer_paper.style.color = "white";
        computer_rock.style.background = "#154588";
        computer_rock.style.color = "white";
    
        computer_sciss.style.background = "gold";
        computer_sciss.style.color = "red";
     
        comments.style.color = "#ffffea";
        comments.innerHTML = "Equal";
        
    }
    
    document.getElementById("comp_score").innerHTML = score_comp;
    document.getElementById("user_score").innerHTML = score_user;
    
}
function restart() {
    score_user = 0;
    score_comp = 0;
    document.getElementById("comment").innerHTML = "";
    document.getElementById("comp_score").innerHTML = 0;
    document.getElementById("user_score").innerHTML = 0;
}


