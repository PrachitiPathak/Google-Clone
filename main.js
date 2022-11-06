const searchInput=document.querySelector("#search_input");
searchInput.addEventListener("keydown",function(event){
    if(event.code ==="Enter"){
        search();
    }
});
function search(){
    const input= searchInput.value;

    window.location.href="https://www.google.com/search?q="+input +"&oq=hello&aqs=chrome.0.0i355i433i512j46i433i512j0i433i512j0i512l2j0i131i433i512j0i512j46i131i433j0i512j46i512.1476j1j15&sourceid=chrome&ie=UTF-8"
}