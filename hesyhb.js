/*
hong en shuang yu hui ben
[rewrite_local]
^https:\/\/bookapi\.ihuman\.com\/v1\/get_enlightening_book_info url script-response-body https://raw.githubusercontent.com/puss3888/Qx/main/hesyhb.js
^https:\/\/bookapi\.ihuman\.com\/v3\/get_book_info url script-response-body https://raw.githubusercontent.com/puss3888/Qx/main/hesyhb.js
[mitm]
hostname = bookapi.ihuman.com
*/


var modifiedBody = $response.body; 
var obj = JSON.parse(modifiedBody);
obj.result.books.forEach(function (item, idnex, array) {
    item.is_vip = 0;
})
modifiedBody = JSON.stringify(obj); 
$done(modifiedBody);
