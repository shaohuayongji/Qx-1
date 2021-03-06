/*
[rewrite_local]
xi chuang zhu
^https:\/\/avoscloud\.com\/1\.1\/users\/ url script-response-body https://raw.githubusercontent.com/puss3888/Qx/main/xcz.js

[MITM]
hostname:avoscloud.com

*/

var body = $response.body; 
var obj = JSON.parse(body); 

obj.lifetimeMembership = true;
obj.membership = true;

body = JSON.stringify(obj); 
$done(body);
