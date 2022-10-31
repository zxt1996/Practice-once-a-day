/**
 * @param {number[]} bits
 * @return {boolean}
 */
 var isOneBitCharacter = function(bits) {
    const AllType = ['0', '10', '11'];
    let getIsBits = (tempList) => {
        if (!tempList || tempList.length === 0) {
            return true;
        }

        let isCanOne = AllType.includes(`${tempList[tempList.length - 1]}`) && getIsBits(tempList.slice(0, -1));

        if (tempList.length === bits.length) {
            return isCanOne;
        }

        let isCanTwo = AllType.includes(`${tempList[tempList.length - 2]}${tempList[tempList.length - 1]}`) && getIsBits(tempList.slice(0, -2));



        return isCanOne || isCanTwo;
    }

    return getIsBits(bits);
};