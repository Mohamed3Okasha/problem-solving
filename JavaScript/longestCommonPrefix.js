
/**
 * https://leetcode.com/problems/longest-common-prefix/
 */
var longestCommonPrefix = function(strs){
    let commonPrefix = '';
    if(strs === null || !strs.length) return commonPrefix;

    for(let i=0; i<strs[0].length; i++){
        const char = strs[0][i];
        for(let j=1; j<strs.length;j++){
            if(strs[0][i] !== strs[j][i]){
                return commonPrefix;
            }
        }
        commonPrefix += strs[0][i];
    }
    return commonPrefix;
}

strs = ["flower","flow","flight"];

console.log(longestCommonPrefix(strs));