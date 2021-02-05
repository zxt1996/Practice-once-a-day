use std::collections::HashMap;

impl Solution {
    pub fn first_uniq_char(s: String) -> i32 {
        let mut temp: Vec<char> = s.chars().collect();
        let mut map = HashMap::new();

        for i in 0..temp.len() {
            if map.contains_key(&temp[i]) {
                map.insert(&temp[i], 2);
            } else {
                map.insert(&temp[i], 1);
            }
        }

        for i in 0..temp.len() {
            let value = map.get(&temp[i]);
            if let Some(mut x) = value {
                if *x == 1 {
                    return i as i32;
                }
            }
        }

        return -1;
    }
}