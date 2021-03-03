/*
伴鱼绘本 讲故事

^https:\/\/.+\.ipalfish\.com\/pfapi\/ugc\/picturebook\/product\/productid\/page\/list url script-response-body byhb_story.js

*/




var modifiedBody = $response.body; 
var obj = JSON.parse(modifiedBody);

obj.data.ent.readpagecn = obj.data.ent.offset;
obj.data.ext.readpagecn = obj.data.ent.offset;

modifiedBody = JSON.stringify(obj); 
$done(modifiedBody);
