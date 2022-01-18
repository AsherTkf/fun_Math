function addUser() {
    player1_name = document.getElementById("player_1_name_input").value;
    player2_name = document.getElementById("player_2_name_input").value;

    localStorage.setItem("player1 name", player1_name);
    localStorage.setItem("player2 name", player2_name);
    
    window.location.replace("game_page.html");

    
    
}

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number_1) * parseInt(number_2);
}

question_number = "<h4>" + number1 + "X"+ number2 + "<h4>";
input_box = "<br>Answer; <input type  =  'text' id = 'input_check_box'>";
check_button = "<br><br><button class = 'btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";