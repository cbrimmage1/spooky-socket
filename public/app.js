window.addEventListener('load', () => {
    console.log("yay app is working");

    // let users*****
    let users = {};


    // initialize and connect socket
    let socket = io();

    //listen for confirmation of socket connection
    socket.on('connect', () => {
        console.log("Connected");
    });

    // define window size
    let sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    // update window size with resize event
    window.addEventListener('resize', function () {

        // update window sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

    })

    // move flashlight
    // effect reference from https://www.youtube.com/watch?v=vePNEQMzmC4
    let flashlight = document.getElementById('flashlight');

    document.addEventListener('mousemove', move => {
        flashlight.style.setProperty('--x', move.clientX + 'px');
        flashlight.style.setProperty('--y', move.clientY + 'px');

        // store mouse position in a variable
        let position = {
            xpos: move.clientX + 'px',
            ypos: move.clientY + 'px',
        }

        //send mouse move data object to the server
        socket.emit('message', position);

    })

    //listen for an event named 'message-share' from the server
    socket.on('message-share', (data) => {
        console.log(data);
        users[data.id] = data;
        console.log(users);

    });



})