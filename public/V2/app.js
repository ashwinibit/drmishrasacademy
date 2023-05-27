const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

async function myRepeat() {
    var arList = [
                  '<br /><br />अहिंसा परमो धर्मः <br /> धर्म हिंसा तथैव च:',
                  '<br /><br />विद्यां ददाति विनयं, विनयाद् याति पात्रताम्। <br /> पात्रत्वात् धनमाप्नोति,धनात् धर्मं ततः सुखम्॥',
                  '<br /><br />चलत बिमान कोलाहल होई। जय रघुबीर कहइ सबु कोई। <br /> सिंहासन अति उच्च मनोहर। श्री समेत प्रभु बैठे ता पर॥'
                ]
    
    const sleep = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time))
    }
    
    for(var i = 0; i < arList.length;i++){
        
        console.log(arList[i]);
        document.getElementById('shlok').innerHTML = "";
        document.getElementById('shlok').innerHTML = arList[i];
        
        await sleep(5000);
        
        
    }
     
    setInterval(myRepeat,5000);
}


function PageTransitions(){
    //Button click
    for(let i = 0; i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }
    allSections.addEventListener('click',(e)=>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            //hide other sectoions
            sections.forEach((section) =>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',()=>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}
PageTransitions()
myRepeat() 
