var modifiedBody = $response.body; 
var obj = JSON.parse(modifiedBody);

obj.audio.chapters.forEach(function (item, idnex, array) {
    item.is_free=true;
})

modifiedBody = JSON.stringify(obj); 
$done(modifiedBody);
