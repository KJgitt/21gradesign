var test_model=require("../models/test_model")

exports.get_test=async function(req,res,next){
    let id=req.body.id;
    await new Promise((resolve,reject)=>{
        test_model.sel_get_test(id,function(err,data){
            if(err){
                reject()
            }else{
                if(data.length>0){
                    res.json({
                        "code":101,
                        "data":data
                    })
                }else {
                    reject();
                }
            }
        })
    })
}