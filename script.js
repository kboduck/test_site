window.addEventListener('scroll', e => {
    let navbar = document.getElementById('navbar').classList;
    let active_class = "menu_scrolled";
    if(pageYOffset > 120){
        navbar.add(active_class)
}
    else{
        navbar.remove(active_class);
    }
});
