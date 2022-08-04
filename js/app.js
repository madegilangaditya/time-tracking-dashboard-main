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
                    <img src="./images/icon-ellipsis.svg" alt="elipsis">
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

