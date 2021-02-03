impl Solution {
    pub fn reverse_words(s: String) -> String {
        s.trim().split_whitespace().map(|x| x.to_string()).collect::<Vec<String>>().into_iter().rev().collect::<Vec<String>>().join(" ")
    }
}