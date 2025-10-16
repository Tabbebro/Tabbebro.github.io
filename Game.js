// References
const grid = document.getElementById("projectGrid");
const modal = document.getElementById("projectModal");
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
    modalTitle.textContent = project.title;
    modalImage.src = project.image;
    modalImage.alt = project.title;
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
    modalDescription.textContent = project.description;
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
closeBtn.onclick = () => {modal.style.display = "none";}
window.onclick = (e) => { if(e.target === modal) modal.style.display = "none";}