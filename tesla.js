                var header = document.getElementById("header");
                var ms = document.getElementById("models");
                var m3 = document.getElementById("model3");
                var mx = document.getElementById("modelx");
                var my = document.getElementById("modely");
                var model = document.getElementById("model");
                var zerotosixty = document.getElementById("zerotosixty");
                var topspeed = document.getElementById("topspeed");
                var maxrange = document.getElementById("maxrange");

                ms.onclick = function(){
                    header.style.backgroundImage = "url(image-1)";
                    model.innerHTML = "Model S";
                    zerotosixty.innerHTML = "1.9s";
                    topspeed.innerHTML = "200mph";
                    maxrange.innerHTML = "396mi";
                }
                m3.onclick = function(){
                    header.style.backgroundImage = "url(image-2)";
                    model.innerHTML = "Model 3";
                    zerotosixty.innerHTML = "1.7s";
                    topspeed.innerHTML = "220mph";
                    maxrange.innerHTML = "415mi";
                }
                mx.onclick = function(){
                    header.style.backgroundImage = "url(image-3)";
                    model.innerHTML = "Model X";
                    zerotosixty.innerHTML = "1.5s";
                    topspeed.innerHTML = "240mph";
                    maxrange.innerHTML = "458mi";
                }
                my.onclick = function(){
                    header.style.backgroundImage = "url(image-4)";
                    model.innerHTML = "Model Y";
                    zerotosixty.innerHTML = "1.3s";
                    topspeed.innerHTML = "250mph";
                    maxrange.innerHTML = "510mi";
                }
