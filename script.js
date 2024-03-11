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
    var offcanvasStart = new bootstrap.Offcanvas(document.getElementById('offcanvasNavbar'));
    var offcanvasEnd = new bootstrap.Offcanvas(document.getElementById('offcanvasRight'));
    var offcanvasBackdrops = document.querySelectorAll('.offcanvas-backdrop');

    offcanvasStart.hide();
    offcanvasEnd.hide();
    
    offcanvasBackdrops.forEach(function(offcanvasBackdrop) {
        
        offcanvasBackdrop.classList.remove("show");
    });
    
}

function extraClick(){
    let offcanvasLeftClose = document.getElementById("offcanvasLeftClose")

    offcanvasLeftClose.click()
}

//mobil görüntü



function getDropdownPrice1(){
    
    let dropdownProduct1 = document.querySelector(".dropdownProduct1")
    
    
    if (dropdownProduct1.style.display === "none" ){
        dropdownProduct1.style.display = "block"
    }
   
}
function getoutDropdownPrice1(){
    let dropdownProduct1 = document.querySelector(".dropdownProduct1")

    if(dropdownProduct1.style.display ==="block"){
        dropdownProduct1.style.display ="none"
    }
}

function getDropdownPrice2(){
    
    let dropdownProduct2 = document.querySelector(".dropdownProduct2")
    
    
    if (dropdownProduct2.style.display === "none" ){
        dropdownProduct2.style.display = "block"
    }
   
}
function getoutDropdownPrice2(){
    let dropdownProduct2 = document.querySelector(".dropdownProduct2")

    if(dropdownProduct2.style.display ==="block"){
        dropdownProduct2.style.display ="none"
    }
}

function getDropdownPrice3(){
    
    let dropdownProduct3 = document.querySelector(".dropdownProduct3")
    
    
    if (dropdownProduct3.style.display === "none" ){
        dropdownProduct3.style.display = "block"
    }
   
}
function getoutDropdownPrice3(){
    let dropdownProduct3 = document.querySelector(".dropdownProduct3")

    if(dropdownProduct3.style.display ==="block"){
        dropdownProduct3.style.display ="none"
    }
}

function getDropdownPrice4(){
    
    let dropdownProduct4 = document.querySelector(".dropdownProduct4")
    
    
    if (dropdownProduct4.style.display === "none" ){
        dropdownProduct4.style.display = "block"
    }
   
}
function getoutDropdownPrice4(){
    let dropdownProduct4 = document.querySelector(".dropdownProduct4")

    if(dropdownProduct4.style.display ==="block"){
        dropdownProduct4.style.display ="none"
    }
}



// CAROUSEL
// let carouselItem = document.querySelector(".carousel-item")
// let carouselIndicatorsList = document.querySelectorAll('.carousel-indicators button.active[aria-current="true"]');
// let carouselControlNext = document.querySelector(".carousel-control-next");

// carouselControlNext.addEventListener("click", function () {
//     // Tüm eşleşen öğeleri seç
//     let carouselIndicatorsList = document.querySelectorAll('.carousel-indicators button[data-bs-target="#carouselExampleCaptions"]');

//     // Tüm eşleşen öğeleri döngü ile kontrol et
//     carouselIndicatorsList.forEach(function(carouselIndicators) {
//         console.log("carouselIndicators");
//         carouselIndicators.style.backgroundColor = "#6fcfb8";
//         carouselIndicators.style.borderRadius = "0";
//     });
// });

CAROUSEL İÇERİKLE DEVAM