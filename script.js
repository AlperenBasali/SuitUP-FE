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

let carouselDivSecondContent = document.querySelector(".carouselDivSecondContent")
let carouselDivSecondContenth3 = document.querySelector(".carouselDivSecondContent h4")

function carouselDivSecondContenthover(){
    if(carouselDivSecondContent.style.backgroundColor = "#383838"){
        carouselDivSecondContenth3.style.color = "white"
    }
}
function carouselDivSecondContentexit(){
    if(carouselDivSecondContent.style.backgroundColor = "white"){
        carouselDivSecondContenth3.style.color = "black"
    }
}



let divs = document.querySelectorAll(".catDiv1 .col-3");

divs.forEach((div, index) => {
   
    if (index % 2 === 0) {
       
        div.style.color = "black";
    } else {
       
        div.style.color = "#6fcfb8";
    }
});


let divs2 = document.querySelectorAll(".catDiv2 .col-3");


divs2.forEach((div, index) => {
    
    if (index % 2 != 0) {
      
        div.style.color = "black";
    } else {
      
        div.style.color = "#6fcfb8";
    }
});



let hardOneButton = document.querySelector(".hardOneButton")

function hardOneHover(){

    hardOneButton.insertAdjacentHTML("afterbegin"," <a class='hardOneButtonInclude' href='#'><img src='//theme644-clothes-free.myshopify.com/cdn/shop/products/mixed_media_top_1_80x100_crop_top.jpg?v=1553073315' alt=''><p>Mixed Media Top</p><h5>$265.00</h5></a>")

}

function hardOneLeave(){
    hardOneButton.innerHTML = " <a class='hardOneButtonPlus' href=''><i class='bi bi-plus'></i></a>"
}


let hardOneButton2 = document.querySelector(".hardOneButton2")

function hardOneHover2(){

    hardOneButton2.insertAdjacentHTML("afterbegin"," <a class='hardOneButtonInclude' href='#'><img src='//theme644-clothes-free.myshopify.com/cdn/shop/products/sloane_crewneck_cashmere_sweater_1_80x100_crop_top.jpg?v=1553073276' alt=''><p>Sloane Crewneck Cashmere Sweater</p><h5>$110.00</h5></a>")

}

function hardOneLeave2(){
    hardOneButton2.innerHTML = " <a class='hardOneButtonPlus' href=''><i class='bi bi-plus'></i></a>"
}
let hardOneButton3 = document.querySelector(".hardOneButton3")

function hardOneHover3(){

    hardOneButton3.insertAdjacentHTML("afterbegin"," <a class='hardOneButtonInclude3' href='#'><img src='//theme644-clothes-free.myshopify.com/cdn/shop/products/the_lux_tailored_straight_leg_pants_1_80x100_crop_top.jpg?v=1553073268' alt=''><p>The Lux' Tailored Straight Leg Pants</p><h5>$340.00</h5></a>")

}

function hardOneLeave3(){
    hardOneButton3.innerHTML = " <a class='hardOneButtonPlus' href=''><i class='bi bi-plus'></i></a>"
}


// SEASONSECTION


$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});



// topbtn
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

