let deadline = 'YYYY-MM-DD';

        function getTimeRemaining(endtime) {
            let t = Date.parse(endtime) - Date.parse(new Date()); // 
            let seconds = Math.floor((t/1000) % 60), // Секунды
                minutes = Math.floor(((t/1000/60)) % 60), // Минуты
                hours = Math.floor(((t/1000)/60/60) % 24), // Часы
                days = Math.floor((t/(1000 * 60 * 60 * 24))); // Дни

                return {
                    'total' : t,
                    'days' : days,
                    'hours' : hours,
                    'minutes' : minutes,
                    'seconds' : seconds,
                };
        }

        function setClock(id, endtime) {    //id таймера и конечная дата
            let timer = document.getElementById(id),
                days = timer.querySelector('.days'),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaining(endtime);

                function addZero(num){
                    if(num <= 9) {
                        return '0' + num;
                    } else return num;
                };
            
            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
                               

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                    days.textContent = '00';
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }
        }

        setClock('timer', deadline);

});
