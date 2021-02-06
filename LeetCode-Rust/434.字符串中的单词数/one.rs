impl Solution {
    pub fn count_segments(s: String) -> i32 {
        s.split_whitespace().map(|x| x.to_string()).collect::<Vec<String>>().len() as i32
    }
}