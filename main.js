
    document.getElementById("menu").addEventListener("click", showMenu)
    document.getElementById("menuclose").addEventListener("click", closeMenu)

    function showMenu(){
    document.getElementById("myNav").style.display = "flex";
    document.getElementById("menu").style.display = "none";
    document.getElementById("menuclose").style.display = "flex";
        setTimeout(()=>{
        document.getElementById("myNav").style.display = "none";
        document.getElementById("menu").style.display = "flex";
        document.getElementById("menuclose").style.display = "none";
        }, 5000)
    }

    function closeMenu(){
    document.getElementById("myNav").style.display = "none";
    document.getElementById("menu").style.display = "flex";
    document.getElementById("menuclose").style.display = "none";
    }