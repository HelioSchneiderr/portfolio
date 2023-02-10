window.sr = ScrollReveal({ reset: true });

let time = 1500

sr.reveal(`#apresentation`, 

    {
        duration: time,
        distance: "50px",
        origin: 'left'
    }
    
)

sr.reveal(`.about-me-scroll`, 

    {
    duration: time,
    distance: "50px",
    origin: 'left'
    }
    
)


sr.reveal(`.card-skills`, 

    {
    duration: time,
    distance: "50px",
    origin: 'left'
    }
    
)
