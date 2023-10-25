
            // Color of the Objects
        
            function getRandomColor() {
                var letters = "0123456789ABCDEF";
                var color = "#";
                for ( var i = 0; i < 6; i++ ) {
                    color = color + letters[Math.floor(Math.random() * 16)];
                }
                return(color);
            }

            // Size of Objects 

            function getRandomSize() {
                var size = Math.floor((Math.random() * 100) + 100);
                return(size);
            }

            // Shape of Objects

            function getRandomShape() {
                var shape = Math.floor((Math.random() * 100) + 1);
                return(shape);
            }

            // Position of Objects Vertically

            function getRandomVertical() {
                var position = Math.floor((Math.random() * 200) + 1);
                return(position);
            }

            // Positions of Objects Horizontally

            function getRandomHorizontal() {
                var position = Math.floor((Math.random() * 1000) + 1);
                return(position);
            }

            // Objects finalized here

            function objects() {
                var shapes = document.getElementById("shape");
                shapes.style["background-color"] = getRandomColor();
                shapes.style["height"] = getRandomSize() + "px";
                shapes.style["width"] = getRandomSize() + "px";
                shapes.style["position"] = "relative";
                shapes.style["top"] = getRandomVertical() + "px";
                shapes.style["bottom"] = getRandomVertical() + "px";
                shapes.style["right"] = getRandomHorizontal() + "px";
                shapes.style["left"] = getRandomHorizontal() + "px";
                if ( ( getRandomShape() % 2 ) == 0) {
                    shapes.style["border-radius"] = "50%" ; 
                } else {
                    shapes.style["border-radius"] = "0%" ;
                }
            }

            // Starting of The Trainer
            var highscore = 10;
            var accuracy = 100;
            document.getElementById("Start").onclick = function() {
                var hits = 0;
                var miss = 0;
                var initial = new Date().getTime();
                objects();
                document.getElementById("shape").onclick = function() {
                    miss--;
                    hits++;
                    objects();
                    var final = new Date().getTime();
                    var timing = (final - initial) / 1000 ; 
                    document.getElementById("timer").innerHTML = " Timing: " + timing + "s";
                    if ( highscore > timing ) {
                        highscore = timing ;
                        document.getElementById("highscore").innerHTML = " Best Time: " + highscore + "s";
                    } 
                    if ( miss <= 0 ) {
                        accuracy = 100;
                    } else {
                        accuracy = ((hits / (hits + miss)) * 100);
                        accuracy = Math.round((accuracy + Number.EPSILON) * 100) / 100;
                    }
                    document.getElementById("accuracy").innerHTML = " Accuracy: " + accuracy + "%";
                    initial = final ;                    
                }
                document.getElementById("clicksection").onclick = function() {
                    miss++;
                }
                document.getElementById("Stop").onclick = function() {
                    alert ("Thank You for Playing. Your scores are given below: \n Best Time: " + highscore + "\n Successful Hits: " + hits + " Misses: " + miss + "\n Accuracy: " + accuracy + "%");
                    location.reload();
                }
            }