//create function range
//range(5)->[1,2,3,4,5]
//range(5,8)->[5,6,7,8]
//range(5,10,2)->[5,7,9]
//range(19,15)->[19,18,17,16,15]
//range(4,-3,2)->[4,2,0,-2]
let passo = (first,end=1,step=1) => {
    let number=[]
    if(first>end){
        (function(n,n2,n3){
            for(n2=n2;n2<=n;n2+=n3)
            {
                number.push(n2)
            }
        })(first,end,step);
    }else if(first<end) {
        (function(n,n2,n3){
            for(n=n;n<=n2;n+=n3)
            {
                number.push(n)                
            }
        })(first,end,step);
    }
    console.log(number)
}
passo(-10,5)
