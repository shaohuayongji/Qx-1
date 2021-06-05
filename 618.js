/*

^https:\/\/ms\.jr\.jd\.com\/gw\/generic\/hy\/h5\/m\/queryRsSecKillDetail  url script-response-body https://raw.githubusercontent.com/puss3888/Qx/main/618.js



*/



var modifiedBody = $response.body; 

modifiedBody = modifiedBody.replace(/"canBuy":\w+/g, '"canBuy":true');

$done(modifiedBody);
