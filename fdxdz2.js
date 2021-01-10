/*
樊登小读者
^https:\/\/uapi\.xfanread\.com\/core\/book\/detail\/get\/\* url script-response-body https://raw.githubusercontent.com/puss3888/Qx/main/fdxdz.js

^https:\/\/uapi\.xfanread\.com\/core\/member\/summery\/get url script-response-body https://raw.githubusercontent.com/puss3888/Qx/main/fdxdz.js
*/



var modifiedBody = $response.body; 

modifiedBody = modifiedBody.replace(/canPlay":\w+/g, 'canPlay":true').replace(/canDownload":\w+/g, 'canDownload":true').replace(/unlocks":\d+/g, 'unlocks":1'). replace(/isPreview":\w+/g, 'isPreview":false') .replace(/vip":\w+/g, 'vip":true') .replace(/vipExpireDate":".*?"/g, 'vipExpireDate":"2030-11-11"');

$done(modifiedBody);
