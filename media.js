const bar =document.querySelector('.bar')
        const navlinks = document.querySelector('.nav-links')
        const links= document.querySelectorAll('.link')
        const close =document.querySelector('.close')
        const ba =document.querySelector('.ba')
        ba.addEventListener('click' , e=>{
            navlinks.style.visibility ='inherit'
            close.style.display='block'
            ba.style.display='none'
        });
        close.addEventListener('click', e=>{
            navlinks.style.visibility='hidden'
            ba.style.display='block'
            close.style.display='none'

        });
