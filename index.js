const pathForChange = document.querySelector('.e_p_button')

function hoverScale() {

    if (window.innerWidth >= '800') {
        pathForChange.addEventListener('mouseover', function () {
            const path = document.querySelector('.e_p_svg_path')
            path.setAttribute('style', 'transform:scale(1.1);')
        })

        pathForChange.addEventListener('mouseout', function () {
            const path = document.querySelector('.e_p_svg_path')
            path.setAttribute('style', 'transform:scale(1);')
        })
    }
}
hoverScale()