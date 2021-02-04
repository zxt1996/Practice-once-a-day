impl Solution {
    pub fn length_of_last_word(s: String) -> i32 {
        let temp: Vec<String> = s.trim().split_whitespace().map(|x| x.to_string()).collect();
        if temp.len() > 0 {
            temp[temp.len() - 1].len() as i32
        } else {
            0
        }
    }
}