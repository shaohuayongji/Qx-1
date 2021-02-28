/*
https:\/\/iface\.beva\.com\/order\/device\/vip url script-response-body https://raw.githubusercontent.com/puss3888/Qx/main/bweg.js


[MITM]
hostname = iface.beva.com

*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/order/device/vip';

if (url.indexOf(vip) != -1) {
	obj.data["is_vip"] = "2";
	obj.data["end_time_fmt"] = "1890754389";
	obj.data["is_annual"] = "2";
	body = JSON.stringify(obj);
 }
$done({body});
