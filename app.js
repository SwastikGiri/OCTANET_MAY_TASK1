gsap.from('.headerlogo',{opacity: 0, duration: 1, delay: 1, y:10})
gsap.from('.navbar #link',{opacity: 0, duration: 1, delay: 1, y:30, stagger: 0.2})
gsap.from('.itemcontainer button',{opacity: 0, duration: 1, delay: 1.5, y:30, stagger: 0.3})
gsap.from('.caption',{opacity: 0, duration: 1, delay: 1.1, y:30})
gsap.from('.logoblack',{opacity: 0, duration: 1, delay: 1, y:30})


const changeImg=(btn)=>{
    const body = document.body;
    const currImg = document.querySelector('.active');
    const comp1 = document.getElementById('visual')
    const comp2 = document.getElementById('visualcircle')
    const Img1 = document.getElementById('1'); 
    const Img2 = document.getElementById('2'); 
    const Img3 = document.getElementById('3');  
    const Img4 = document.getElementById('4'); 
    if(btn === 'btn1'){
        body.style.backgroundColor='#4db91b'
        comp1.style.fill='#43f018'
        comp2.style.fill='#43f018'
        currImg.classList.remove('active');
        currImg.classList.add('inactive');
        Img1.classList.remove('inactive');
        Img1.classList.add('active');
    }else if(btn === 'btn2'){
        body.style.backgroundColor='#ec7488'
        comp1.style.fill='#d82e4a'
        comp2.style.fill='#d82e4a'
        currImg.classList.remove('active');
        currImg.classList.add('inactive');
        Img2.classList.remove('inactive');
        Img2.classList.add('active');
    }else if(btn === 'btn3'){
        body.style.backgroundColor='#111d26'
        comp1.style.fill='#508fc9'
        comp2.style.fill='#508fc9'
        currImg.classList.remove('active');
        currImg.classList.add('inactive');
        Img3.classList.remove('inactive');
        Img3.classList.add('active');
    }else{
        body.style.backgroundColor='#ff3700'
        comp1.style.fill='#a92019'
        comp2.style.fill='#a92019'
        currImg.classList.remove('active');
        currImg.classList.add('inactive');
        Img4.classList.remove('inactive');
        Img4.classList.add('active');
    }
}