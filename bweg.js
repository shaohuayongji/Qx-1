/*
https:\/\/iface\.beva\.com\/order\/device\/vip url script-response-body https://raw.githubusercontent.com/puss3888/Qx/main/bweg.js


[MITM]
hostname = iface.beva.com

*/


var modifiedBody = $response.body; 
var obj = JSON.parse(modifiedBody);

obj.data.is_vip = 2;
obj.data.end_time_fmt = "1890754389";
obj.data.is_annual = 2;

modifiedBody = JSON.stringify(obj); 
$done(modifiedBody);
