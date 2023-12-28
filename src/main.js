const headerMenuElement=document.querySelector('#header-menu')
const headerToggleElement=document.querySelector('#header-toggle')
const headerItem=document.querySelectorAll('#header-item')
const btnOutElement=document.querySelector('#btn-out')
const modalLayout=document.querySelector('#modal')
const cartHeader=document.querySelector('#cart-header')






const handleClick2 = (e) => {
    e.preventDefault()
    if (cartHeader.contains(e.target)) {
        modalLayout.classList.toggle('hidden');
    }
};
const handleClick3=(e)=>{
    if (btnOutElement.contains(e.target)) {
        modalLayout.classList.toggle('hidden');
    }
}
const toggleItem=()=>{
    headerItem.forEach((item) => {
        item.classList.toggle('ct-top-menu-item')
        item.classList.toggle('appear-headers-item')
    });
}
window.addEventListener("resize", (e) => {
    if (window.innerWidth > 1024) {
        if (headerMenuElement.classList.contains("appear-headers")) {
            headerMenuElement.classList.add("hidden");
            headerMenuElement.classList.toggle("appear-headers");
            headerItem.forEach((item) => {
                item.classList.toggle('ct-top-menu-item')
            });
        }
    }
});
const handleClick1=(e)=>{
    if (headerToggleElement.contains(e.target)) {
        headerMenuElement.classList.toggle('hidden')
        headerMenuElement.classList.toggle('appear-headers')
        toggleItem()
    } else {
        if (headerMenuElement.classList.contains('appear-headers')) {
            headerMenuElement.classList.remove('appear-headers')
            headerMenuElement.classList.add('hidden')
            toggleItem()
        }
    }
}
document.addEventListener('click',handleClick1)
cartHeader.addEventListener('click',handleClick2)
btnOutElement.addEventListener('click',handleClick3)
