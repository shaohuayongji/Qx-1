/*
咿啦看书
^https:\/\/bookapi\.ellabook\.cn\/rest\/api\/service url script-response-body https://raw.githubusercontent.com/puss3888/Qx/main/ylks.js

bookapi.ellabook.cn
*/



var modifiedBody = $response.body; 

modifiedBody = modifiedBody.replace(/"is_svip":"\w+"/g, '"is_svip":"YES"').replace(/"is_vip":"\w+"/g, '"is_vip":"YES"').replace(/"isLbVip":"\w+"/g, '"isLbVip":"YES"').replace(/vip_end_date":-\d/g, 'vip_end_date":1800000000').replace(/status":"\d"/g, 'status":"1"');

$done(modifiedBody);
