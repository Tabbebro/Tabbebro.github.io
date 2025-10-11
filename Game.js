// References
const grid = document.getElementById("projectGrid");
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalInfo = document.getElementById("modalInfo");
const modalImage = document.getElementById("modalImage");
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
    modalInfo.textContent = `Engine: ${project.engine} | Platform: ${project.platform} | Status: ${project.status}`;
    modalDescription.textContent = project.description;
    modalExtra.innerHTML = project.extra;
    modal.style.display = "flex";
}

// Close Modal
closeBtn.onclick = () => {modal.style.display = "none";}
window.onclick = (e) => { if(e.target === modal) modal.style.display = "none";}