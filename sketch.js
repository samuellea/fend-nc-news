const timeago = require("timeago.js");

const ts = '2018-01-19T14:47:14.514Z';

const tsToDate = new Date(ts);
console.log(tsToDate, '<--- tsToDate')
let timeAgo = timeago.format(tsToDate);  
console.log(timeAgo);




