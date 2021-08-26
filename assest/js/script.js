window.addEventListener("load" , ()=>{
    const loader = document.querySelector(".loader")
    loader.classList.add("hidden")
    console.log(",ilad")
})

/*owl-carsoul*/
$('.owl-projects').owlCarousel({

    ltr: true,
    dots:true,
    margin: 7,
    autoplayTimeout: 2000,
    autoplaySpeed: 1200,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },


        786: {
            items: 2
        },
        992: {
            items: 3,
        }
    }
});

let loading = document.querySelector(".loading")
function funcLoading() {
    loading.style.dispaly = "none"
}

funcLoading()