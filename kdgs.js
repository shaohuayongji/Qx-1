var modifiedBody = $response.body; 
var obj = JSON.parse(modifiedBody);

obj.data.is_vip = 1;
obj.data.is_subscribe = 1;
obj.daya.vip_valid_ts = "2222-2-22 22:22:22";

modifiedBody = JSON.stringify(obj); 
$done(modifiedBody);
