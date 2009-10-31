// Some JavaScript gothas
function Gotchas(){}
Gotchas.prototype.callParseInt = function(num,radix) {
    return parseInt(num,radix);
};
