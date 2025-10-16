// References
const grid = document.getElementById("projectGrid");
const modal = document.getElementById("projectModal");

const modalVideoContainer = document.getElementById("modalVideoContainer");
const modalVideo = document.getElementById("modalVideo");
const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");

const modalInfo = document.getElementById("modalInfo");
const modalLink = document.getElementById("modalLink");

const modalDescription = document.getElementById("modalDescription");
const modalExtra = document.getElementById("modalExtra");

const closeBtn = document.querySelector(".close");

// Generate Project Boxes
projects.forEach((project, index) =>{
    const box = document.createElement("div");
    box.className = "project-box";
    box.innerHTML = `<img src="${project.image}" alt="${project.title}"><h3>${project.title}</h3>`;
    box.addEventListener("click", () => openModal(index));
    grid.appendChild(box);
});

// Open Modal
function openModal(index){
    const project = projects[index];
    // TITLE
    modalTitle.textContent = project.title;

    modalImage.style.display = "none";

    // VIDEO / IMAGE
    if (project.video && project.video.trim() !== "") { // Show Video
        console.log("Video available, checking if youtube.");
        if (isYoutubeUrl(project.video)) { // Show Youtube Video
            modalVideoContainer.style.display = "block";

            const embedUrl = GetYoutubeEmbedUrl(project.video);
            modalVideo.src = embedUrl;
        } else{ // Show Local Video
            modalVideoContainer.style.display = "block";
            
            handleLocalVideo(project.video, project.image);
        }
    }
    else{
        modalVideoContainer.style.display = "none";
    }
    
    // INFO
    modalInfo.innerHTML = `
    <div class="info-line">
        <span><strong>Engine:</strong> ${project.engine}</span>
        ${project.engineIcon ? `<img src="${project.engineIcon}" alt="${project.engine}">` : ""}
    </div>

    <div class="info-line">
        <span><strong>Platform:</strong> ${project.platform}</span>
    </div>
        
    <div class="info-line">
        <span><strong>Status:</strong> ${project.status}</span>
        ${project.storeIcon ? `<img src="${project.storeIcon}" alt="${project.status}">` : ""}
    </div>
    `;

    // DESCRIPTION
    modalDescription.textContent = project.description;
    // EXTRA
    modalExtra.innerHTML = project.extra;
    
    if (project.link && project.link.trim() !== "") {
        modalLink.href = project.link;
        modalLink.style.display = "inline-block";
    }
    else{
        modalLink.style.display = "none";
    }
    
    modal.style.display = "flex";
}

// Close Modal
closeBtn.onclick = () => {
    modal.style.display = "none";
    stopVideo();
}

window.onclick = (e) => { 
    if(e.target === modal) {
        modal.style.display = "none";
        stopVideo();
    }
}

// Checks If Link Is Youtube Link
function isYoutubeUrl(url){
    return url.includes('youtube.com') || url.includes('youtu.be');
}

// Converts Youtube Link To Embed Video
function GetYoutubeEmbedUrl(url){
    console.log("converting url to embed:", url);
    if (url.includes('embed')) {
        return url;
    }

    let videoId = '';

    if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('v=')[1];
        const ampersandPosition = videoId.indexOf('&');
        if (ampersandPosition !== -1) {
            videoId = videoId.substring(0, ampersandPosition);
        }
    } else if (url.includes('youtu.be/')){
        videoId = url.split('youtu.be/')[1];
        const questionMarkPosition = videoId.indexOf('?');
        if (questionMarkPosition !== -1) {
            videoId = videoId.substring(0, questionMarkPosition);
        }
    }

    console.log("extracted video ID:", videoId);
    return `https://www.youtube.com/embed/${videoId}?rel=0`;
}

function handleLocalVideo(videoUrl, posterImage) {
    modalVideo.src = videoUrl;
}

function stopVideo(){
    if (modalVideo.src.includes('youtube.com')) {
        modalVideo.src = '';
    }
}