// Accessing menu section and adding food items dynamically 
const menu = document.getElementById('menu');
const menuContent = [
    {url:"images/Pulihora.jpg", itemName:"Pulihora", amt:"55", type:"veg"},
    {url:"images/Paayasam.avif", itemName:"Paayasam", amt:"80", type:"veg", type:"veg"},
    {url:"images/Naatukodi_pulusu.jpeg", itemName:"Naatukodi pulusu", amt:"150", type:"non-veg"},
    {url:"images/royyala_vepudu.jpeg", itemName:"Royyala vepudu", amt:"190", type:"non-veg"},
    {url:"images/vada.jpeg", itemName:"Vada", amt:"40", type:"veg"},
    {url:"images/tomato_rice.jpeg", itemName:"Tomato rice", amt:"75", type:"veg"},
    {url:"images/meals.jpeg", itemName:"Meals", amt:"90", type:"veg"},
    {url:"images/gulab_jamun.jpeg", itemName:"Gulab jamun", amt:"99", type:"veg"},
    {url:"images/egg_curry.jpeg", itemName:"Egg curry", amt:"80", type:"egg"},
    {url:"images/mutton_kheema.jpeg", itemName:"Mutton kheema", amt:"165", type:"non-veg"},
    {url:"images/daddojanam.jpeg", itemName:"Daddojanam", amt:"60", type:"veg"},
    {url:"images/poornalu.jpeg", itemName:"Poornam boorelu", amt:"75", type:"veg"},
]

const menuItems = () => {
    return menu.innerHTML = menuContent.map((x) => {
        return `
        <div class="col-6 col-md-4 col-lg-4 col-xl-3 ">
            <div class="menu-card">
                    <img src="${x.url}" alt="${x.itemName}" />
                    <h5 class="${x.type}">${x.itemName}</h5>
                    <div class="amount">
                        <h5><b>${x.amt}rs</b></h5>
                        <div>
                            <i class="fa-duotone text-secondary fa-solid fa-square-minus"></i> <span>0</span> <i class="fa-duotone text-secondary fa-solid fa-square-plus"></i></p>
                        </div>
                    </div>
            </div>
        </div>
        `
    }).join('')
}

menuItems()

// Accessing hamburger menu and section items then adding css styling to navbar when ham menu is clicked

const ham = document.getElementById('hamburger');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

ham.addEventListener('click', () => {
    ul.classList.toggle('show');
})

li.forEach((x) => {
    x.addEventListener('click', () => {
        ul.classList.toggle('show');
    })
})

  
