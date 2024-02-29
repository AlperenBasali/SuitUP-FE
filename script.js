document.getElementById('USD').addEventListener('click', function() {
    const arrow = document.querySelector('.arrow');
    arrow.classList.toggle('flipped');
    
});

document.getElementById('USD').addEventListener('mousemove',function(){
    document.getElementById('USD').style.color = "#6fcfb8"
    document.getElementById('arrow').style.borderColor = "#6fcfb8 transparent transparent transparent"
})

document.getElementById('USD').addEventListener('mouseout',function(){
    document.getElementById('USD').style.color = "rgb(189,189,189)"
    document.getElementById('arrow').style.borderColor = "rgb(189,202,221) transparent transparent transparent"
})

document.querySelector(".searchButton").addEventListener("click", function(){
    searchForm=document.getElementById("searchForm")
    searchButton = document.querySelector(".searchButton")
    biSearchSmall=document.querySelector(".biSearchSmall")
     
    if(searchForm.style.display == "none"){
        searchForm.style.display="block"
         searchButton.style.display="none"
         biSearchSmall.style.display="none"
        }
})
biSearchX=document.querySelector(".biSearchX")

biSearchX.addEventListener("click",function(){
    searchForm.style.display="none"
    searchButton.style.display="block"
    biSearchSmall.style.display="block"
})

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
function clickDropdownHome(){
    navDropdownMenu = document.querySelector(".navHome")
    navDropdownMenu.classList.add("show")
    navDropdownMenu.classList.remove("show")
    navDropdownMenu.classList.toggle("show")
}
function openDropdownHome(){
    navDropdownMenu = document.querySelector(".navHome")
    navDropdownMenu.classList.add("show")
    navDropdownMenu = document.querySelector(".navCategories")
    navDropdownMenu.classList.remove("show")
    navDropdownMenu = document.querySelector(".navSale")
    navDropdownMenu.classList.remove("showSale")
    navDropdownMenu = document.querySelector(".navCart")
    navDropdownMenu.classList.remove("show")
}
function closeDropdownHome(){ //herhangi bir yere onclick="closeDropdown()" bunu ata
    timeoutId = setTimeout(function() {
        navDropdownMenu = document.querySelector(".navHome")
        navDropdownMenu.classList.remove("show")
    }, 1000);
}

function clickDropdownCategories(){
    navDropdownMenu = document.querySelector(".navCategories")
    navDropdownMenu.classList.add("show")
    navDropdownMenu.classList.remove("show")
}

function openDropdownCategories(){
    navDropdownMenu = document.querySelector(".navCategories")
    navDropdownMenu.classList.add("show")
    navDropdownMenu = document.querySelector(".navHome")
    navDropdownMenu.classList.remove("show")
    navDropdownMenu = document.querySelector(".navSale")
    navDropdownMenu.classList.remove("showSale")
    navDropdownMenu = document.querySelector(".navCart")
    navDropdownMenu.classList.remove("show")

}
function closeDropdownCategories(){ //herhangi bir yere onclick="closeDropdown()" bunu ata
    timeoutId = setTimeout(function() {
        navDropdownMenu = document.querySelector(".navCategories")
        navDropdownMenu.classList.remove("show")
    }, 1000);
}


function clickDropdownSale(){
    navDropdownMenu = document.querySelector(".navSale")
    navDropdownMenu.classList.add("showSale")
    navDropdownMenu.classList.remove("showSale")
}


function openDropdownSale(){
    navDropdownMenu = document.querySelector(".navSale")
    navDropdownMenu.classList.add("showSale")
    navDropdownMenu = document.querySelector(".navHome")
    navDropdownMenu.classList.remove("show")
    navDropdownMenu = document.querySelector(".navCategories")
    navDropdownMenu.classList.remove("show")
    navDropdownMenu = document.querySelector(".navCart")
    navDropdownMenu.classList.remove("show")

}
function closeDropdownSale(){ //herhangi bir yere onclick="closeDropdown()" bunu ata
    timeoutId = setTimeout(function() {
        navDropdownMenu = document.querySelector(".navSale")
        navDropdownMenu.classList.remove("showSale")
    }, 1000);
}


function clickDropdownCart(){
    navDropdownMenu = document.querySelector(".navCart")
    navDropdownMenu.classList.add("show")
    navDropdownMenu.classList.remove("show")
}

function openDropdownCart(){
    navDropdownMenu = document.querySelector(".navCart")
    navDropdownMenu.classList.add("show")
    navDropdownMenu = document.querySelector(".navHome")
    navDropdownMenu.classList.remove("show")
    navDropdownMenu = document.querySelector(".navCategories")
    navDropdownMenu.classList.remove("show")
    navDropdownMenu = document.querySelector(".navSale")
    navDropdownMenu.classList.remove("showSale")

}
function closeDropdownCart(){ //herhangi bir yere onclick="closeDropdown()" bunu ata
    timeoutId = setTimeout(function() {
        navDropdownMenu = document.querySelector(".navCart")
        navDropdownMenu.classList.remove("show")
    }, 1000);
}
//mobil görüntü


function openBothOffcanvas() {
    var offcanvasStart = new bootstrap.Offcanvas(document.querySelector('.offcanvasNavbarStart'));
    var offcanvasEnd = new bootstrap.Offcanvas(document.querySelector('.offcanvasNavbarEnd'));

    offcanvasStart.show();
    offcanvasEnd.show();
}

function toggleBothOffcanvas() {
    var offcanvasStart = new bootstrap.Offcanvas(document.querySelector('.offcanvasNavbarStart'));
    var offcanvasEnd = new bootstrap.Offcanvas(document.querySelector('.offcanvasNavbarEnd'));

  
        // offcanvasStart.hide();
        // offcanvasEnd.hide();
        offcanvasStart.style.display ="none"
        offcanvasEnd.style.display ="none"
   
        
    
}