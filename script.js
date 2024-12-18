document.addEventListener("DOMContentLoaded", () => {
    const doorContent = [
        { message: "Once upon a time..." },
        { message: "a star shone bright" },
        { message: "and Santa appeared" },
        { message: "the snow began to fall" },
        { message: "a snowman came to life" },
        { message: "cookies were shared" },
        { message: "the tree glowed with love" },
        { message: "ho ho ho, he laughed" },
        { message: "and joy filled the air" },
        { message: "snowflakes danced around" },
        { message: "together, they spread joy" },
        { message: "and warmth filled the hearts" },
        { message: "santa whispered softly" },
        { message: "the stars twinkled above" },
        { message: "a snowy friend was made" },
        { message: "magic was in the air" },
        { message: "the tree sparkled with cheer" },
        { message: "and the laughter echoed" },
        { message: "the stars shone even brighter" },
        { message: "the wonder of Christmas grew" },
        { message: "a season of joy was here" },
        { message: "hearts were filled with wonder" },
        { message: "and everyone sang together" },
        { message: "and so, they all lived happily!"},
    ];

    const doors = document.querySelectorAll(".door");

     // Get the audio element by its ID
     const xmasSong = document.getElementById("xmas-song");

    doors.forEach((door, index) => {
        door.addEventListener("click", () => {
            const today = new Date().getDate();
            const doorDay = index + 1;

            // if (doorDay <= today) {
                // Add the open class to trigger the flip animation
                door.classList.add("open");

                // Get unique content
                const { message } = doorContent[index];

                // Get the back of the door and set the message
                const doorBack = door.querySelector(".door-back");
                doorBack.innerHTML = `<p>${message}</p>`;

                // Check if it's the last door (for the Santa animation)
                if (index === doorContent.length - 1) {
                    playSantaAnimation();
                    playXmasSong();
                }
            // } else {
            //     alert("This door can't be opened yet!");
            // }
        });
    });

    // Santa Animation function
    function playSantaAnimation() {
        const santaContainer = document.getElementById('santa-animation');
        santaContainer.style.display = 'flex';  // Show the Santa animation container
    }

 // Function to play the Christmas song
    function playXmasSong() {
        if (xmasSong) {
            xmasSong.play();
        } else {
            console.error("Audio element not found!");
        }
    }

     // Snowflake animation
     const snowContainer = document.querySelector(".snow-container");

     function createSnowflake() {
         const snowflake = document.createElement("div");
         snowflake.classList.add("snowflake");
 
         // Randomize snowflake position and speed
         const size = Math.random() * 10 + 5;
         const left = Math.random() * 100;
         const duration = Math.random() * 3 + 3;
         const delay = Math.random() * 5;
 
         snowflake.style.width = `${size}px`;
         snowflake.style.height = `${size}px`;
         snowflake.style.left = `${left}%`;
         snowflake.style.animationDuration = `${duration}s`;
         snowflake.style.animationDelay = `${delay}s`;
 
         snowContainer.appendChild(snowflake);
 
         snowflake.addEventListener("animationend", () => {
             snowflake.remove();
         });
     }
 
     setInterval(createSnowflake, 200);
});