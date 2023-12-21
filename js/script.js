window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem', this.window.scrollY > 0)
})

//scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});