console.log('masuk');
const cardList = document.querySelector('#card-list');
let html = '';
let url = './../data.json';
let type = 'Weekly';
const periods = document.querySelectorAll('.period ul li'); 

loadData(url);
periods.forEach((period)=>menuClick(period));

function menuClick(period){
    period.addEventListener('click', (e)=>{
        periods.forEach((menu)=>{
            menu.children[0].classList.remove('active');
        });
        period.children[0].classList.add('active');
        type = period.children[0].textContent;
        getData(url, type);
    });
}

function getData(url,type){
    fetch(url).then(
        (response) => response.json()
    ).then(
        (data) => (
            data.forEach(datas => {
                if(type == 'Weekly'){
                    html += `
                    <div class="card ${datas.title.toLowerCase().replaceAll(' ', '-')}">
                        <div class="card-wrap">
                        <div class="card-wrap-title">
                            <h6>${datas.title}</h6>
                            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                        </div>
                        <div class="card-wrap-time">
                            <p class="time-title">${datas.timeframes.weekly.current}hrs</p>
                            <p class="last-week">Last Week - ${datas.timeframes.weekly.previous}hrs</p>
                        </div>
                        </div>
                    </div>
                    `;
                }else if(type == 'Daily'){
                    html += `
                    <div class="card ${datas.title.toLowerCase().replaceAll(' ', '-')}">
                        <div class="card-wrap">
                        <div class="card-wrap-title">
                            <h6>${datas.title}</h6>
                            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                        </div>
                        <div class="card-wrap-time">
                            <p class="time-title">${datas.timeframes.daily.current}hrs</p>
                            <p class="last-week">Last Day - ${datas.timeframes.daily.previous}hrs</p>
                        </div>
                        </div>
                    </div>
                    `;
                }else{
                    html += `
                    <div class="card ${datas.title.toLowerCase().replaceAll(' ', '-')}">
                        <div class="card-wrap">
                        <div class="card-wrap-title">
                            <h6>${datas.title}</h6>
                            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                        </div>
                        <div class="card-wrap-time">
                            <p class="time-title">${datas.timeframes.monthly.current}hrs</p>
                            <p class="last-week">Last Month - ${datas.timeframes.monthly.previous}hrs</p>
                        </div>
                        </div>
                    </div>
                    `;
                }
                cardList.innerHTML = html;
            })
        )
    );  
    html ='';
}

function loadData(url){
    fetch(url).then(
        (response) => response.json()
    ).then(
        (data) => (
            data.forEach(datas => {
                
                html += `
                <div class="card ${datas.title.toLowerCase().replaceAll(' ', '-')}">
                    <div class="card-wrap">
                    <div class="card-wrap-title">
                        <h6>${datas.title}</h6>
                        <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                    </div>
                    <div class="card-wrap-time">
                        <p class="time-title">${datas.timeframes.weekly.current}hrs</p>
                        <p class="last-week">Last Week - ${datas.timeframes.weekly.previous}hrs</p>
                    </div>
                    </div>
                </div>
                `;
                cardList.innerHTML = html;
                
            })
            
        )
    );    
}
