'use strict';

$(document).ready(function() { 
  let gameOver = false
  let play = 'x'
  let dataCell = $('div[data-cell]')
  let playArray =[]

  dataCell.click(function(){
    const attrVal = $(this).attr('data-cell')
    if (playArray[attrVal] || gameOver) return;
    if (play === 'x') {
      $(this).append('x')
      playArray[attrVal] = play
      checkWin()
      play = 'o'
      
    } else {
      $(this).append('o')
      playArray[attrVal] = play
      checkWin()
      play = 'x'
      
    }
    console.log(playArray)
    
  })

  function checkWin() {
    
    const winCombos = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6] ]
    winCombos.forEach(winCombo => {
      if(isWin(winCombo)) {
        $('#announce-winner').html(play + " wins!")
        gameOver = true
      }
    })
    function isWin(winCombo) {
      const a = winCombo[0]
      const b = winCombo[1]
      const c = winCombo[2]
      if (playArray[a] === playArray[b] && playArray[b] === playArray[c] && playArray[a] === play) {
        
        return true
    
      }
      return false
    }

  }
  
  

  $('#clear').on('click', function() {
    dataCell.empty();
    playArray = []
    play = 'x'
    gameOver = false
    $('#announce-winner').html("")

  })
  

  
})
