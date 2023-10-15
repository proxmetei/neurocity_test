class Slider {
    constructor(images = []) {
        this.images = images;
        this.slideIndex = 0;
    }
    showNextSlide() {
        this.slideIndex = (this.slideIndex + 1) % this.images.length;
        return this.getCurrentImage();
    }
    showPreviousSlide() {
        this.slideIndex = (this.slideIndex - 1) % this.images.length;
        return this.getCurrentImage();
    }
    getCurrentImage(){
        return this.images[this.slideIndex];
    }

    getP
}
let slider = new Slider(["https://w.forfun.com/fetch/6e/6e1cb712e57e8a72e9abc442b35c9031.jpeg",
 "https://sportishka.com/uploads/posts/2022-11/1667563044_28-sportishka-com-p-oslo-priroda-vkontakte-29.jpg",
 "https://traveltimes.ru/wp-content/uploads/2022/07/4C93B02D7F0001017EF5149798A2045D-2.jpg"]);
let sliderImage  = document.querySelector('.slider__container-image');
console.log(sliderImage);
sliderImage.setAttribute("src", slider.getCurrentImage());
document.querySelector('.slider__prev-button').addEventListener('click', () => {
    sliderImage.setAttribute("src", slider.showPreviousSlide());
});
document.querySelector('.slider__next-button').addEventListener('click', () => {
    sliderImage.setAttribute("src", slider.showNextSlide());
});

