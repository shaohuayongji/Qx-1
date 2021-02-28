/*
兔小贝拼音

https:\/\/(.+)-api\.tuxiaobei\.com\/v1\/user\/ url script-response-body https://raw.githubusercontent.com/puss3888/Qx/main/txbpy.js
*-api.tuxiaobei.com
*/

body = $response.body.replace(/vip":0/g, 'vip":1').replace(/vip_expire_at":null/g, 'vip_expire_at":"1800000000"').replace(/vip_type":""/g, 'vip_type":"2"');
$done({body});
