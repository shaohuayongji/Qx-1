var modifiedBody = $response.body; 
var obj = JSON.parse(modifiedBody);
var modifiedHeaders = $response.headers;
var modifiedStatus = 'HTTP/1.1 200 OK'

//$response.statusCode = 200;
obj.userid = "5e8b22ad80ac550b214fb9d3";
obj.expire = 9999999999999;
obj.username = "Fly";
obj.type = "gold";
obj.verify = true;
obj.email = "nobody@qq.com";
obj.token =  "1e132dc23df9d4e3a75df4066313a7b2";
 obj.publickey = "307b87e5e2deb035";

modifiedBody = JSON.stringify(obj); 
//$done(body);

$done({body: modifiedBody, headers: modifiedHeaders, status: modifiedStatus})
