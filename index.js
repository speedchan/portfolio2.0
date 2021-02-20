hours = parseInt(new Date().getHours())
let night = '🌜'
let day = '🌞'

if (hours >= 19 || hours < 7 ) {
    // Night
    document.getElementById('cssFile').setAttribute('href', 'dark.css')
    document.querySelector('#toggleStyleButton').value = `Toggle ${day} mode`
}


changeCss = () => {
    let currentStyle = document.getElementById('cssFile').getAttribute('href')

    if (currentStyle === 'dark.css') {
        document.getElementById('cssFile').setAttribute('href', 'light.css')
        document.querySelector('#toggleStyleButton').value = `Toggle ${night} mode`
        console.log("Light now")
    }
    else {
        document.getElementById('cssFile').setAttribute('href', 'dark.css')
        document.querySelector('#toggleStyleButton').value = `Toggle ${day} mode`
    }
}

