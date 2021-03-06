const express=require('express');

const router = express.Router();


const {authCheck} =require('../middlewares/auth');

const {userCart,
    getUserCart,
    emptyCart,
    saveAddress,
applyCouponToUserCart,
createOrder
}=require('../controllers/user');

router.post('/user/cart',authCheck,userCart);
router.get('/user/cart',authCheck,getUserCart);
router.put('/user/cart',authCheck,emptyCart);
router.post('/user/address',authCheck,saveAddress);
router.post('/user/order',authCheck,createOrder)
// router.get('/user',(req,res)=>{
//     res.json({
//         data:' User API Successfull'
//     })
// })
router.post('/user/cart/coupon',authCheck,applyCouponToUserCart);

module.exports = router;