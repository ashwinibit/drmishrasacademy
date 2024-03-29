const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click',()=>{
    let element = document.body;
    element.classList.toggle('light-mode')
})

function readPapersList(){
    const myForm = document.getElementById("myForm");
      const csvFile = document.getElementById("csvFile");
         e.preventDefault();
         const input = csvFile.files[0];
         const reader = new FileReader();
         reader.onload = function (e) {
            const text = e.target.result;
            document.write(text);
         };
         reader.readAsText(input);
}

function addPublishedPapers(){
    const t1 = document.getElementById("papersPublished");
    
    var timelineDiv = document.createElement("div");
    timelineDiv.className = "timeline";

    var timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item";

    var timeLineIcon = document.createElement("div");
    timeLineIcon.className = "tl-icon";

    timeLineIcon.innerHTML = '<i class="fas fa-briefcase"></i>';

    timelineItem.appendChild(timeLineIcon);
    timelineDiv.appendChild(timelineItem);
    t1.appendChild(timelineDiv);
}




addPublishedPapers()