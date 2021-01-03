var modifiedBody = $response.body; 
var obj = JSON.parse(modifiedBody);

obj.vip = 1;
obj.is_buy_vip = true;
obj.vip_valid_ts = "2222-2-22 22:22:22";

modifiedBody = JSON.stringify(obj); 
$done(modifiedBody);
