function toggleSidebar(){
    let sidebar = document.querySelector(".sidebar");
    let content = document.querySelector(".main-content");

    sidebar.classList.toggle("hide");
    content.classList.toggle("full");
}