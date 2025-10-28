window.addEventListener('load', () => {
 console.log("yay app is working");

    // define window size
    let sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    // update window size with resize event
    window.addEventListener('resize', function() {
        
        // update window sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        console.log(sizes.width);

    })

    // move flashlight
    // effect reference from https://www.youtube.com/watch?v=vePNEQMzmC4
    let flashlight = document.getElementById('flashlight');

    document.addEventListener('mousemove', move => {
        flashlight.style.setProperty('--x', move.clientX + 'px');
        flashlight.style.setProperty('--y', move.clientY + 'px');
    })


})