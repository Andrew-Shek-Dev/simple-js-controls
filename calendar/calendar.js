const dayElementDataClosure = () => {
    let dayInfo = [[],[],[],[],[],[],[]];weekMapping = new Map();
    return ({locale,weekday},date) => {
        if(!date) return {dayInfo,weekMapping};
        const [weekdayIdx,weekdayName] = [date.getDay(),date.toLocaleDateString(locale,{weekday})];
        weekMapping.set(weekdayIdx,weekdayName);
        dayInfo[weekdayIdx].push(date.getDate());
        return {dayInfo,weekMapping};
    };
}
const dayElementData = dayElementDataClosure();
const template = (data)=>`<div id='div-${data}' class='template'>${data}</div>`;
function SimpleCalendar({year,month,select,locale="en-US",weekday="short"},container){
    Array(31).fill(0).forEach((_,idx)=>dayElementData({locale,weekday},new Date(year,month-1,idx+1)));
    const col = (days,idx)=>days.reduce((acc,day)=>acc+template(new Date().toLocaleDateString("en-US")===`${month}/${day}/${year}`?`<span id="div-${day}" class="today">${day}</span>`:day),
    `<div>${template(weekMapping.get(idx))}`)+"</div>"
    const {dayInfo,weekMapping} = dayElementData({});
    const calendar = dayInfo.reduce((div,days,idx)=>div+col(days,idx),`<div id="header">${month}-${year}</div><div id="root">`)+`</div>`;
    container.insertAdjacentHTML("afterbegin",calendar);
    Array(31).fill(0).forEach((_,idx)=>document.getElementById(`div-${idx+1}`)?.addEventListener("click",(event)=>{select( new Date(year,month-1,event.target.innerHTML)) }));
}