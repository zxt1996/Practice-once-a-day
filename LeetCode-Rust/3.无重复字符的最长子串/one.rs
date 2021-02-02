use std::cmp;
use std::collections::HashSet;

impl Solution {
    pub fn length_of_longest_substring(mut s: String) -> i32 {
        if s.len() == 0 {
            return 0;
        }
        let mut start = 0;
        let mut end = 0;
        let mut max = 1;
        let mut set: HashSet<char> = HashSet::new();
        let values: Vec<_> = s.chars().collect();
        set.insert(values[start]);

        while end < values.len() - 1 {
            end += 1;
            if set.contains(&values[end]) {
                max = cmp::max(max, end - start);
                start += 1;
                end = start;
                set.clear();
                set.insert(values[start]);
            } else {
                set.insert(values[end]);
                if end == values.len() - 1 {
                    let mut temp = end - start + 1;
                    max = cmp::max(max, temp);
                }
            }
        }

        return max as i32;
    }
}