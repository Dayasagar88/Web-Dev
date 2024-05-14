const modal = document.querySelector(".modal-div");
const overlay = document.querySelector(".overlay");
const myProfile = document.querySelector(".my-profile");
const subHeading = document.querySelector(".sub-heading");



const openModal = () => {
    console.log("Modal is Open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
    myProfile.innerText = "Share My Profile";
    subHeading.innerText = "Share Via :";
};


const closeModal = () => {
    console.log("Modal is Closed");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive")
};

const openModal2 = () => {
    console.log("Modal is Open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
    myProfile.innerText = "Follow Me";
    subHeading.innerText = "Follow Via :";
};


