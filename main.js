player1_name=localStorage.getItem("Player_1_name");
player2_name=localStorage.getItem("Player_2_name");
 player1_score=0;
 player2_score=0;

 document.getElementById("name1").innerHTML= player1_name + ":";
 document.getElementById("name2").innerHTML= player2_name +":";

 document.getElementById("Score_p1").innerHTML= player1_score;
 document.getElementById("Score_p2").innerHTML= player2_score;

 document.getElementById("Question_turn").innerHTML= "Question turn -" + player1_name;
 document.getElementById("Answer_turn").innerHTML= "Answer turn -" + player2_name;

 function send(){
     number1=document.getElementById("Quiz_questioner").value;
     number2=document.getElementById("Quiz_questioner2").value;
     actual_answer= parseInt(number1)*parseInt(number2);

     question_number="<h4>"+number1+"x"+number2+"</h4>";
     input_box="<br>Answer : <input type='text' id='input_check_box'>";
     check_button="<br><br> <button class='btn btn_info' onclick='check()'>Check</button>";
     row= question_number+input_box+check_button;

     document.getElementById("Output").innerHTML=row;

     document.getElementById("number1").value="";
     document.getElementById("number2").value="";
}