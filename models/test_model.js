var db=require("./db")
exports.sel_get_test=function (id,callback){
    var sql="select * from test"
    db.query(sql,[id],callback)
}