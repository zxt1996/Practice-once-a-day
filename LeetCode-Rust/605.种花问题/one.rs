impl Solution {
    pub fn can_place_flowers(mut flowerbed: Vec<i32>, mut n: i32) -> bool {
        for i in 0..flowerbed.len() {
            if flowerbed[i] == 0 && i == 0 && (flowerbed.len() == 1 || flowerbed[1] != 1) {
                flowerbed[0] = 1;
                n -= 1;
            } else if flowerbed[i] == 0 && i > 0 && flowerbed[i - 1] != 1 && (i == flowerbed.len() - 1 || flowerbed[i+1] != 1) {
                flowerbed[i] = 1;
                n -= 1;
            }
        }

        return n <= 0;
    }
}