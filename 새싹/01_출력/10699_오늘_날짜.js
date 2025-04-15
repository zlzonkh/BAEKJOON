let nowDate = new Date();
let utc = nowDate.getTime() + nowDate.getTimezoneOffset() * 60 * 1000;
let seoulDate = new Date(utc + 9 * 60 * 60 * 1000);
console.log(seoulDate.getFullYear() + '-' 
        + String((seoulDate.getMonth() + 1)).padStart(2, '0') + '-'
        + String(seoulDate.getDate()).padStart(2, '0'));
