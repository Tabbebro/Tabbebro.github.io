// References
const grid = document.getElementById("projectGrid");
const modal = document.getElementById("projectModal");
const modalVideoContainer = document.getElementById("modalVideoContainer");
const modalVideo = document.getElementById("modalVideo");
const modalTitle = document.getElementById("modalTitle");
const modalInfo = document.getElementById("modalInfo");
const modalLink = document.getElementById("modalLink");
const modalDescription = document.getElementById("modalDescription");
const modalExtra = document.getElementById("modalExtra");
const modalGallery = document.getElementById("modalGallery");
const galleryGrid = document.getElementById("galleryGrid");
const closeBtn = document.querySelector(".close");

// Create lightbox element
const lightbox = document.createElement("div");
lightbox.className = "gallery-lightbox";
lightbox.innerHTML = `
    <span class="gallery-lightbox-close">&times;</span>
    <img src="" alt="">
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector("img");
const lightboxClose = lightbox.querySelector(".gallery-lightbox-close");

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

    // VIDEO - Only show if available
    if (project.video && project.video.trim() !== "") {
        modalVideoContainer.style.display = "block";
        
        if (isYoutubeUrl(project.video)) {
            const embedUrl = GetYoutubeEmbedUrl(project.video);
            modalVideo.src = embedUrl;
        } else {
            // Handle local videos if needed
            modalVideo.src = project.video;
        }
    } else {
        modalVideoContainer.style.display = "none";
    }
    
    // GALLERY
    if (project.gallery && project.gallery.length > 0) {
        modalGallery.style.display = "block";
        galleryGrid.innerHTML = "";
        
        project.gallery.forEach((imageSrc, imageIndex) => {
            const galleryItem = document.createElement("div");
            galleryItem.className = "gallery-item";
            galleryItem.innerHTML = `<img src="${imageSrc}" alt="Gallery image ${imageIndex + 1}">`;
            
            galleryItem.addEventListener("click", () => {
                lightboxImg.src = imageSrc;
                lightbox.style.display = "flex";
                
                // Optional active state
                document.querySelectorAll('.gallery-item').forEach(item => {
                    item.classList.remove('active');
                });
                galleryItem.classList.add('active');
            });
            
            galleryGrid.appendChild(galleryItem);
        });
    } else {
        modalGallery.style.display = "none";
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
    clearGalleryActiveState();
}

window.onclick = (e) => { 
    if(e.target === modal) {
        modal.style.display = "none";
        stopVideo();
        clearGalleryActiveState();
    }
}

// Checks If Link Is Youtube Link
function isYoutubeUrl(url){
    return url.includes('youtube.com') || url.includes('youtu.be');
}

// Converts Youtube Link To Embed Video
function GetYoutubeEmbedUrl(url){
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

    return `https://www.youtube.com/embed/${videoId}?rel=0`;
}

function stopVideo(){
    if (modalVideo.src && modalVideo.src.includes('youtube.com')) {
        const currentSrc = modalVideo.src;
        modalVideo.src = '';
        modalVideo.src = currentSrc;
    }
}

// Lightbox functionality
lightboxClose.onclick = () => {
    lightbox.style.display = "none";
    clearGalleryActiveState();
};

lightbox.onclick = (e) => {
    if (e.target === lightbox || e.target === lightboxImg) {
        lightbox.style.display = "none";
        clearGalleryActiveState();
    }
};

function clearGalleryActiveState(){
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.classList.remove('active');
    });
}