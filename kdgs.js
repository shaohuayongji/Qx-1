/*
#口袋故事
^https:\/\/api\.idaddy\.cn\/api\.php\/\?method=audio\.getAudioInfo url script-response-body https://raw.githubusercontent.com/puss3888/Qx/main/kdgs.js

hostname = api.idaddy.cn, 47.102.23.164
*/

var modifiedBody = $response.body; 
var obj = JSON.parse(modifiedBody);

obj.audio.chapters.forEach(function (item, idnex, array) {
    item.is_free=true;
})

modifiedBody = JSON.stringify(obj); 
$done(modifiedBody);
