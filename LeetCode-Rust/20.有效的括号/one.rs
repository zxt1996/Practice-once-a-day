use std::collections::HashMap;

impl Solution {
    pub fn is_valid(s: String) -> bool {
        let teams  = vec!['(', '{', '['];
		let initial_scores = vec![')', '}', ']'];
		let scores: HashMap<_, _> = teams.iter().zip(initial_scores.iter()).collect();
        let mut temp: Vec<char> = s.chars().collect();
        let mut result: Vec<char> = Vec::new();
        // println!("{:?}", temp);

        for i in 0..temp.len() {
            if result.len() == 0 || scores.contains_key(&temp[i]) {
                result.push(temp[i]);
            } else {
                let value = scores.get(&result[result.len() - 1]);
                if let Some(v) = value {
                    if **v == temp[i] {
                        result.pop();
                    } else {
                        result.push(temp[i]);
                    }
                }
            }
        }

        // println!("{}", result.len());
        return result.len() == 0;
    }
}