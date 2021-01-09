/*儿歌点点 A+
http:\/\/gateway.ergedd.com\/dduser\/user\/center\/set url script-response-body https://raw.githubusercontent.com/puss3888/Qx/main/egdd.js
*/


let a = JSON.parse($response.body);
a.data.is_vip = 1;
a.data.is_svip = 1;
a.data.vip_endtime = 1800000000
a.data.svip_endtime = 1800000000

$done({body: JSON.stringify(a)});
