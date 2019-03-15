var notify = document.querySelector('.notify')
var teams = document.querySelectorAll('.team')
var itemsTotal = document.querySelector('.items-total')
var saveBtn = document.querySelector('.button')

var teamsSelected = []
var i = 0

while(i < teams.length) {
  teams[i].onclick = function(e) {
    var teamTitle = this.querySelector('.title').textContent
    
    if (this.classList.contains('selected') !== true) {
      this.classList.add('selected')
      teamsSelected.push(teamTitle)
    } else {
      this.classList.remove('selected')
      teamsSelected = teamsSelected.filter(function(item) {
        return item !== teamTitle
      })
    }
    console.log(teamsSelected)
  }
  i++
}

saveBtn.onclick = function() {
  itemsTotal.textContent = teamsSelected.length + ' members requested'
  notify.classList.add('active')
  
  setTimeout(function(){
    notify.classList.remove('active')
  }, 2000)
  
  console.log('requested')
}