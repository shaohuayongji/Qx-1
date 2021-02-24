/*
阿布睡前故事

^http:\/\/tutugushiapi\.tutuerge\.com\/default\.aspx url script-response-body https://raw.githubusercontent.com/puss3888/Qx/main/absqgs.js

*/



var modifiedBody = $response.body; 

modifiedBody = modifiedBody.replace(/"MediaPayStatus":\w+/g, '"MediaPayStatus":true').replace(/"downvip":"\d+"/g, '"downvip":"0"');

$done(modifiedBody);
