$(document).ready(function() {


    $("#tabs").tabs({
        show: {effect: "fadeIn", duration: "slow"}
    })

    function setColors(redColor, greenColor, blueColor, elem) {   

        function refreshSwatch() {
            let red = $(redColor).slider('value')
            let green = $(greenColor).slider('value')
            let blue = $(blueColor).slider('value')

            if (elem === '#swatch') {
                $(elem).css('background-color', `rgb(${red}, ${green}, ${blue})`)
            } else {
                $(elem).css('color', `rgb(${red}, ${green}, ${blue})`)
            }
        }
    
        $(function() {
            $(`${redColor}, ${greenColor}, ${blueColor}`).slider({
                orientation: 'horizontal',
                range: 'min',
                max: 255,
                value: 127,
                slide: refreshSwatch,
                change: refreshSwatch
            })

            function initialColor(r, g, b) {
                $(redColor).slider('value', r);
                $(greenColor).slider('value', g);
                $(blueColor).slider('value', b);
            }

            if (elem === '#swatch') {
                initialColor(255, 140, 60)
            } else {
                initialColor(255, 255, 255)
            }
            
        });
    }
        
    setColors('#redBg', '#greenBg', '#blueBg', '#swatch')
    setColors('#redText', '#greenText', '#blueText', '#text')
    
})
