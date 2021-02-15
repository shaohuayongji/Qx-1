/*
textnow去广告

https:\/\/api\.textnow\.me\/api2\.0\/users\/ url script-response-body https://raw.githubusercontent.com/puss3888/Qx/main/tn.js

api.textnow.me
*/




var modifiedBody = $response.body; 
var obj = JSON.parse(modifiedBody);

obj.show_ads = false;

modifiedBody = JSON.stringify(obj); 
$done(modifiedBody);
