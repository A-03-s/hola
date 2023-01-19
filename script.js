const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)

function wrapping(sGift) {
    const arr_Gift = []
    l0 = sGift.length	
    for( j=0; j<l0; j++){
        myGift = sGift[j]
        myGift = "\t\r\n*" + myGift + "*\t\r\n"
        l = myGift.length - 2
        for( i=0; i<l; i++){
            myGift="*"+myGift+"*"
            }
        arr_Gift[j] = myGift;
        }		
    return arr_Gift;
    }
