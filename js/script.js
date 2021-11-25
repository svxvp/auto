document.addEventListener('DOMContentLoaded', function() {
    var ColorButtons = document.querySelectorAll('.color_button');
    var BlockPhotos = document.querySelectorAll('.block_photos');
    

    ColorButtons.forEach(element => {
        element.addEventListener('click', SelectColor)
    });

    


    function SelectColor() {
        let CarName = this.getAttribute('car-name');
        let CarColor = this.getAttribute('car-color');
        SwapImg(CarName, CarColor);
    }

    function SwapImg(Name, Color) {
        BlockPhotos.forEach(element => {

            if (element.classList.contains(Name)) {
                var CurrentBlock = element;
                let Images = CurrentBlock.getElementsByClassName('car_img');

                for(let i = 0; i < Images.length; i++) {
                    if (Images[i].classList.contains('first')) {
                        Images[i].src = "img/models/"+Name+"/"+Color+"/1.png";
                        
                    } else {
                        Images[i].src = "img/models/"+Name+"/"+Color+"/2.png";
                    }
                }
            
            }
        })
    }

});


function app() {
    const buttons = document.querySelectorAll('.button')
    const cards = document.querySelectorAll('.card')
 
    function filter(category, items){
        items.forEach((item) => {
          const isItemFilter = !item.classList.contains(category)
          const isShowAll = category.toLowerCase() === 'all'
          if(isItemFilter && !isShowAll) {
              item.classList.add('anime')
 
          } else {
              item.classList.remove('hide')
             item.classList.remove('anime')
 
          }
 
        })
    
     }
 
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
            
        })
 
    })
    
    cards.forEach((card) => {
 
      card.ontransitionend = function (){
         if (card.classList.contains('anime')) {
             card.classList.add('hide')
         }
          
      }
 
    })
 
 }
 
 app()

$(function(){
   $('.slider').slick({
       arrows: false,
       fade:true,
       autoplay:3000,
       dots: true
       
   });
});







const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');


openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click',( ) => {
    popUp.classList.remove('active');
})


const accordions = document.querySelectorAll('.accordion-item');

for(item of accordions){
    item.addEventListener('click', function(){
        if (this.classList.contains('active')) {
            this.classList.remove('active');

        }else {
            for(el of accordions){
                el.classList.remove('active');
            }
            this.classList.add('active')


        }

    })
}

$(function(){
    $('.carousel__inner').slick({
        arrows:false,
        dots:true,
        slidesToShow: 3
    })
})




      


