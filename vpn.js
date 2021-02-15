/*
vpn一键连

https:\/\/api\.1jainlian\.xyz:21987\/api\/app\/auth\/user\/profile url script-response-body https://raw.githubusercontent.com/puss3888/Qx/main/vpn.js

api.1jainlian.xyz
*/




var modifiedBody = $response.body; 
var obj = JSON.parse(modifiedBody);

obj.data.packagesBalance.usedDataTraffic = 0;
obj.data.packagesBalance.totalDataTraffic = 999999;

modifiedBody = JSON.stringify(obj); 
$done(modifiedBody);
