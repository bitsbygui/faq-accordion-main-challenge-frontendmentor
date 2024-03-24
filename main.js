const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
         this.classList.toggle('active')
         const accordionDescription = this.nextElementSibling;
         const iconsContainer = this.parentNode.querySelector('.icons');
         const plusIcon = iconsContainer.querySelector('.plus-icon');
         const minusIcon = iconsContainer.querySelector('.minus-icon');

        if(accordionDescription.style.maxHeight){
            accordionDescription.style.maxHeight = null
            plusIcon.style.display = 'block'
            minusIcon.style.display = 'none'
        } else {
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px'
            plusIcon.style.display = 'none'
            minusIcon.style.display = 'block'
        }

    })
})