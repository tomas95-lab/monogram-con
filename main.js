const product = document.querySelectorAll(".product")

product.forEach(el => {
    const price = el.childNodes[ 5 ].childNodes[ 1 ].childNodes[ 1 ].childNodes[ 3 ]

    const $price = document.createElement("button")
    price.appendChild($price)

    $price.innerHTML = `Shop Now`
    $price.classList.add("price-btn")
    el.addEventListener("mouseenter", (e) => {
        $price.style.opacity = "1"
    })
    el.addEventListener("mouseleave", (e) => {
        $price.style.opacity = "0"
    })
})