// 我也是今天才知道这道题使用异或这么优雅
// 异或运算就是如果两个数字（0或者1）相同,则输出为0; 
// 如果两个数字（0或者1）不相同,就输出为1
// a⊕0=a
// a⊕a=0
// a⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=b
impl Solution {
    pub fn single_number(nums: Vec<i32>) -> i32 {
        let mut result = nums[0];

        for (i, &n) in nums.iter().enumerate() {
            if i != 0 {
                result ^= n;
            }
        }
        result
    }
}