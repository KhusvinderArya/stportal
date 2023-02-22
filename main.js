function login(){
    let k = confirm("you now drive to a new page");
    if(k == true) 
    {
        let p = document.getElementById("login_page");
        p.setAttribute("href","index_.html")
    }
}
function about(){
        let p = document.getElementById("about");
        p.setAttribute("href","index_1.html")
}
