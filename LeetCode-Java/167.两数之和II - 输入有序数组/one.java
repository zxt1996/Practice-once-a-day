class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int start = 0;
        int end = numbers.length - 1;

        while (start < end) {
            int nowValue = numbers[start] + numbers[end];
            if (nowValue == target) {
                return new int[]{start + 1, end + 1};
            } else if (nowValue < target) {
                start += 1;
            } else {
                end -= 1;
            }
        }
        return new int[]{-1, -1};
    }
}