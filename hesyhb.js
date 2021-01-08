/*
洪恩双语绘本
[rewrite_local]
^https:\/\/bookapi\.ihuman\.com\/v1\/get_enlightening_book_info url script-response-body https://github.com/puss3888/Qx/blob/main/hesyhb.js
^https:\/\/bookapi\.ihuman\.com\/v3\/get_book_info url script-response-body https://github.com/puss3888/Qx/blob/main/hesyhb.js

[mitm]
hostname = bookapi.ihuman.com
*/



var modifiedBody = $response.body; 

modifiedBody = modifiedBody.replace(/is_vip\":1/g, 'is_vip":0');

$done(modifiedBody);
