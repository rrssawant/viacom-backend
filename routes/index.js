const router = require('express').Router();

/* list api */

router.get('/data',function(req,res,next){
  try {
    return res.status(200).json({ status: true, data: 'Viacom18 Media Pvt. Ltd. is one of India’s fastest growing entertainment networks and a house of iconic brands that offers multi-platform, multi-generational and multicultural brand experiences. A joint venture of Network18, which owns 51%, and ViacomCBS, with a 49% stake, Viacom18 defines entertainment in India by touching the lives of people through its properties on air, online, on ground, in shop and through cinema.'})
 
  } catch (error) {
    return res.status(400).json({ status: false})

  }
})  

let cites = ['India','USA','Canada','UK','Japan']

router.get('/cities',function(req,res,next){
    return res.status(200).json({ status: true , data : cites})

})  



module.exports = router;
