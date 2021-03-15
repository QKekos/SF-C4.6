
Array.prototype.last = function() {
    return this[this.length - 1];
}

function updateImageCount(e) {
    value = Number(e.target.value)

    if (value && !isNaN(value)) {
        imageCount = value
        updateImageArray()
    }
}

function updateImageArray() {
    if (imageCount > 20) {
        alert(`Max ${MAX_IMAGE_COUNT} images, count will be set to ${MAX_IMAGE_COUNT}`)
        inputField.value = String(MAX_IMAGE_COUNT)
        imageCount = MAX_IMAGE_COUNT
    } else if (imageCount < 1) {
        alert('Min 1 image, count will be set to 1')
        inputField.value = '1'
        imageCount = 1
    }

    imageArray = []

    for (let i = 1; i <= imageCount; i += 1) {
        imageArray.push(i)
    }

    if (imageCount < currentImage) {
        currentImage = imageCount
        updateImage()
    }
}

function previousImage() {
    if (currentImage === 1) {
        currentImage = imageArray.last()
    } else {
        currentImage -= 1
    }

    updateImage()
}

function nextImage() {
    if (currentImage === imageArray.last()) {
        currentImage = 1
    } else {
        currentImage += 1
    }

    updateImage()
}

function updateImage() {
    slider.style.backgroundImage = `url('img/${currentImage}.png')`
}

let MAX_IMAGE_COUNT = 20

let value
let imageCount
let imageArray = [1]
let currentImage = 1

let inputField = document.querySelector('.image_counter_input')
let slider = document.querySelector('.slider')
let previousImageButton = document.querySelector('.arrow-left')
let nextImageButton = document.querySelector('.arrow-right')

inputField.value = '1'
inputField.addEventListener('input', updateImageCount)
previousImageButton.addEventListener('click', previousImage)
nextImageButton.addEventListener('click', nextImage)
