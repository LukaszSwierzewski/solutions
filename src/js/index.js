const test = document.getElementById('test').innerHTML= 'diy lego 3!'.toUpperCase() 
const elements = {
    rating: document.querySelector('#rating'),
    description: document.querySelector('#description'),
    setDisplay: document.querySelector('.setDisplay'),
    button: document.querySelector('.my--button')
   
};
const list = [
    {name: 'Creativity'},
    {name: 'Production'},
    {name: 'Entertainment'}
]
list.forEach((element) => {
    const loader = `
    <div class='col-md star--border'>
    <strong>${element.name}</strong>
    <i class="fas fa-star star--checked"></i>
    <i class="fas fa-star star--checked"></i>
    <i class="fas fa-star star--unchecked"></i>
    <i class="fas fa-star star--unchecked"></i>
    <i class="fas fa-star star--unchecked"></i>
    </div>`
    elements.rating.insertAdjacentHTML('afterbegin', loader);
})

const description = [
    {name: 'Physical aggresion', emoji: true, color: 'border--green'},
    {name: 'Seperation', emoji: true, color: 'border--green'},
    {name: 'Kissing - mild', emoji: true, color: 'border--green'},
    {name: 'Kissing - passionate', emoji: false, color: 'border--red'},
    {name: 'Non-religious exclamations (dang, shoot, nuts - minimal)', emoji: false, color: 'border--green'},
    {name: 'Hate speech/slurs', emoji: false, color: 'border--red'},
    {name: 'Advertising', emoji: false, color: 'border--red'},
    {name: 'Brands shown prominently', emoji: false, color: 'border--red'},
    {name: 'Medicine (abuse)', emoji: false, color: 'border--red'},
    {name: 'Themes in line with character strenghts', emoji: false, color: 'border--green'},
    {name: 'Negative social interactions (more than brief appearance)', emoji: false, color: 'border--red'},
    {name: 'Postiive, firendly interactions', emoji: true, color: 'border--green'},
    {name: 'Responsible adults/caregivers', emoji: true, color: 'border--green'},
    {name: 'Language & Reading'},
    {name: 'Promotes school readiness'}
]
description.reverse();
description.forEach((element) => {
    if(element.emoji) { 
        element.emoji = '<i class="far fa-smile emoji--smile"></i>'
    } else if (element.emoji === false) {
       element.emoji = '<i class="far fa-frown emoji--sad"></i>'
    } else {
        element.emoji = '';
    }
    const loader = `
    <div class='star--border ${element.color} emoji'>
    ${element.emoji}${element.name}
    </div>
    `
    elements.description.insertAdjacentHTML('afterbegin', loader);
})

$(document).ready(function(){
    $(".my--button").click(function(){
      $(".setDisplay").fadeToggle();
        const $this = $(this);
            $this.html() === "<i class='fas fa-arrow-up'></i>Show Less" ? $this.html("Show more") : "<i class='fas fa-arrow-up'></i>Show Less"
    });
  });

  $(document).ready(function(){
    $('#my--button').click(function(){
        var $this = $(this);
        $(".setDisplay").slideToggle();
        $this.toggleClass('toggleButton');
        if($this.hasClass('toggleButton')){
            $this.html('<i class="fas fa-arrow-up"></i> Show less');
        } else {
            $this.html('<i class="fas fa-arrow-down"></i> Show more');
        }
    });
});