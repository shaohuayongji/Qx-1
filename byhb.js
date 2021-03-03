/*
伴鱼绘本 每日读
^https:\/\/.+\.ipalfish\.com\/pfapi\/ugc\/picturebook\/(perusal\/entry|perusal\/level\/list|user\/learn\/get|profile\/get|detail) url script-response-body byhb.js


hostname = *.ipalfish.com
*/


var modifiedBody = $response.body; 

modifiedBody = modifiedBody.replace(/"disable":\w+/g, '"disable":false').replace(/vip":\w+/g, 'vip":true').replace(/"lock":\d+/g, '"lock":0'). replace(/status":\d+/g, 'status":0'). replace(/cate":\d+/g, 'cate":1');

$done(modifiedBody);
