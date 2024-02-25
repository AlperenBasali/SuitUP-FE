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

function openDropdown(){
    navDropdownMenu = document.querySelector(".navDropdownMenus")
    navDropdownMenu.classList.add("show")
   
}

function closeDropdown(){ //herhangi bir yere onclick="closeDropdown()" bunu ata

    timeoutId = setTimeout(function() {
        
        navDropdownMenu = document.querySelector(".navDropdownMenus")
        navDropdownMenu.classList.remove("show")
    }, 1000);
    
}

