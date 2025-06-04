//import getCatagorywiseProduct from "../../../backend/controller/product/getCatagoryWiseproduct";





const backendDomain="http://localhost:8080"
const SummerApi={
    signup:{
        url:`${backendDomain}/api/signup`,
        method:"post"
    },
    signIn:{
        url:`${backendDomain}/api/signin`,
        method:'post'
    },
    createTask:{
        url:`${backendDomain}/api/create-task`,
        method:"post"
    },
    getAllTask:{
        url:`${backendDomain}/api/get-all-task`,
        method:"get"
    },


    current_user:{
        url:`${backendDomain}/api/user-details`,
        method:"get"
    },
    logout_user:{
        url:`${backendDomain}/api/Logout`,
        method:'get'
    },
    allUser:{
        url:`${backendDomain}/api/all-User`,
        method:'get'
    },
    updateUser:{
        url:`${backendDomain}/api/update-user`,
        method:"post"  

    },
    uploadProduct:{
       url:`${backendDomain}/api/upload-product`,
            method:"post"  
    },
    getallProduct:{
       url:`${backendDomain}/api/get-products`,
            method:"get"  
    },
    updateProduct:{
        url:`${backendDomain}/api/update-product`,
        method:"post"
    },
    catagoryProduct:{
        url:`${backendDomain}/api/get-product-catagory`
    },
    getCatagorywiseProduct:{
        url:`${backendDomain}/api/catagory-product`,
        method:"post"
    },
    productDetails : {
        url : `${backendDomain}/api/product-details`,
        method : 'post'
    },
    addToCartProduct:{
         url : `${backendDomain}/api/addtocart`,
         method : 'post'
    },
    addToProductiCount:{
        url:`${backendDomain}/api/countAddToCartProduct`,
        method:'get'
    },
    addToCartViewProduct:{
        url:`${backendDomain}/api/addToCartViewProduct`,
        method:'get'
    },
    updateCartProduct:{
        url:`${backendDomain}/api/update-cart-product`,
        method:'post'
    },
    deleteCartProduct:{
        url:`${backendDomain}/api/delete-cart-product`,
        method:'post'
    },
    searchProduct:{
        url:`${backendDomain}/api/search`,
        method:'get'
        },
    filterProduct:{
        url:`${backendDomain}/api/filter-product`,
        method:'post'
    }



}

export default SummerApi;