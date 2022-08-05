console.log('masuk');
const cardList = document.querySelector('#card-list');
let html = '';
fetch('../data.json').then(
    (response) => response.json()
).then(
    (data) => (
        data.forEach(datas => {
            console.log(datas);
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
            console.log(html);
            cardList.innerHTML = html;
            
        })
        
    )
);

