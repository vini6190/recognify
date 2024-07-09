const togglerButton = document.querySelector("button.navbar-toggler")

togglerButton.addEventListener('click', () => {
    document.querySelector("body").classList.toggle("active")
})




window.onload = function () {
    slider('slider')
    reverseslider("reverse_slider")
};

const ANIMATION_TIME = 0.6





function slider(slider_class) {
    const slider = document.querySelector(`.${slider_class}`);
    const sliderItems = document.querySelectorAll(`.${slider_class} .slider-item`);
    let itemHeight = sliderItems[0].offsetHeight;
    let currentTop = 0;

    function animateSlider() {
        currentTop -= ANIMATION_TIME; // Adjust speed by changing the decrement value
        // When the first element scrolls out of view, move it to the end
        if (Math.abs(currentTop) >= itemHeight) {
            currentTop = 0;
            const firstItem = slider.querySelector('.slider-item');
            slider.appendChild(firstItem);
            const sliderItems = document.querySelectorAll(`.${slider_class} .slider-item`);
            itemHeight = sliderItems[0].offsetHeight;
            slider.style.transform = `translateY(${currentTop}px)`;
        } else {
            slider.style.transform = `translateY(${currentTop}px)`;
        }

        requestAnimationFrame(animateSlider);
    }

    animateSlider();
}



function reverseslider(slider_class) {
    const slider = document.querySelector(`.${slider_class}`);
    const sliderItems = document.querySelectorAll(`.${slider_class} .slider-item`);
    let itemHeight = sliderItems[0].offsetHeight;

    let currentTop = -itemHeight; // Start with offset to hide the initial first element

    function animateSlider() {
        currentTop += ANIMATION_TIME; // Adjust speed by changing the increment value

        // When the last element scrolls out of view, move it to the top
        if (currentTop >= 0) {
            currentTop = -itemHeight;
            const lastItem = slider.querySelector(`.${slider_class} .slider-item:last-child`);
            slider.prepend(lastItem);
            const sliderItems = document.querySelectorAll(`.${slider_class} .slider-item`);
            currentTop = -lastItem.offsetHeight;
            slider.style.transform = `translateY(${currentTop}px)`;
        } else {
            slider.style.transform = `translateY(${currentTop}px)`;
        }

        requestAnimationFrame(animateSlider);
    }

    animateSlider();
}