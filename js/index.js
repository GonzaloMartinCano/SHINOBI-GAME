
window.onload = () => {
    document.onkeyup = e =>{
       
        document.querySelector('header').classList.add('vanish')
        document.querySelector('body').classList.remove('pregame')           
        document.getElementById('gameCanvas').classList.remove('game')   
        shinobiApp.init()
        startGame()
    }

    function startGame() {
}
}
