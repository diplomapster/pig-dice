
1. Roll button clicked returns random number between 1 and 6
  Input: button click
  Output: "4"
2. Page saves returned score sequentially
  Input: button click, button click
  Output: "4" + "3" = 7
3. When roll button clicked returns 1 randomly, score goes to zero
  Input: button click, button click, button click
  Output: 4 + 3 + 1 = 0
4. When pass button clicked score added to total score
  Input: pass button click
  Output: 7 points added to your total score 





Current player
Player 1 running total
Player 2 running total
Current player dice value field

Button = roll
Button = pass


player 1 goes first

roll button
roll = random between 1 and 6

  if (dice = 1 or if click button pass) {
    if (dice = 1){
      dice value field =0
    }
  add dice vaule to running total and pass turn to player 2  
  }


player 2


Winning
if player 1 temp score + total score >= 100
Return "Player 1 Wins"

if player 2 temp score + total score >= 100
Return "Player 1 Wins"
