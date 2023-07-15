$(function(){

    function blink(element, color, minVal, maxVal, speed) {
        let i = 0;
        let flag = 0;

        
        var Interval = setInterval(function interval() {
            if(i <= minVal || flag == 0){
                element.style.cssText = "text-shadow: " + color +" " + " 0 0 " + " " + i++ + "px";
                if(i >= maxVal) {
                    flag = 1;
                }
            };
            if(i >= maxVal || flag == 1) {
                element.style.cssText = "text-shadow: " + color + " " + " 0 0 " + " " + i-- + "px";
                if(i <= minVal){
                    flag =0;
                }
            }
        }, speed);   
    }

    //получаем элементы
    let title_text = document.querySelector('.header__title p');
    let tester_text = document.querySelector('.tester__window__text');
    let tester_content = document.querySelector('.content__tester');
    let tester_window = document.querySelector('.tester__window');
    let records_list = document.querySelector('.records-list');

    let startFlag = 0;
    let record_index = 1;
    let color = "";
    tester_content.addEventListener('click', function() {
        tester_text.style.display = "none";
        if(startFlag == 0) {
            startTest();
            startFlag = 1;
        }
    } );

    blink(title_text, "greenyellow", 5, 40, 20);
    blink(tester_text, "orange", 2, 20,25);
    
    

   

    function startTest () {
        
        console.log("startTest");

        tester_content.removeEventListener('click', startTest);
        tester_window.style.backgroundColor = '#F6B300';
        tester_window.innerHTML = '<p class="wait-text">Wait Green</p>';

        let startFlag = 0;


        let Timeout = setTimeout(countdown, (Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random() +2)*1000);


        function countdown() {
            console.log("startCountdown");

            clearTimeout(Timeout);
            
            
            tester_window.innerHTML = '<p class="click-text">Click</p>';
            tester_window.style.backgroundColor = '#3CDB5E';


            let totalTime;
            let start = new Date();

            if(startFlag == 0){
            
                tester_content.addEventListener('mousedown', endTest);
                
                
            }


            function endTest() {
                tester_content.removeEventListener('mousedown', endTest);

                totalTime = new Date - start;

                console.log(totalTime);

                console.log("endTest");
                tester_window.innerHTML = " ";
                tester_window.style.backgroundColor = ' ';

                tester_window.innerHTML = `<p class="result-text">${totalTime} ms</p>`;
                tester_window.style.backgroundColor = '#084449';

                if(totalTime < 220) {
                    color = "greenyellow";

                } else if(totalTime >= 220 && totalTime < 300) {
                    color = "orange";
                } else color = "red";

                records_list.insertAdjacentHTML('beforeend',`<li class="records-list__record"> <span style="color:white">${record_index++})</span> <span style="color:${color}">${totalTime}</span> <span style="color:white">ms</span></li>`);

                setTimeout(function () {
                tester_content.addEventListener('click', startTest);}
                ,300);
                

            }
 
        }
        return;
    }



});


