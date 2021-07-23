class Solution {
    public List<String> summaryRanges(int[] nums) {
        // ArrayList 类是一个可以动态修改的数组，与普通数组的区别就是它是没有固定大小的限制
        List<String> result = new ArrayList<String>();
        int slow = 0;

        for (int fast = 0; fast < nums.length; fast++) {
            if (fast + 1 == nums.length || nums[fast + 1] != nums[fast] + 1) {
                // 和 String 类不同的是，StringBuilder 类的对象能够被多次的修改，并且不产生新的未使用对象。
                StringBuilder sb = new StringBuilder();

                sb.append(nums[slow]);

                if (slow != fast) {
                    sb.append("->").append(nums[fast]);
                }

                result.add(sb.toString());

                slow = fast + 1;
            }
        }

        return result;
    }
}