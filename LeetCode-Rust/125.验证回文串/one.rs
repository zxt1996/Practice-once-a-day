impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        let mut temp:Vec<String> = s.chars()
            .filter(|x| x.is_ascii_alphanumeric())
            .map(|x| x.to_uppercase().to_string())
            .collect();
        // println!("{:?}", temp);
        if temp.len() == 0 {
            return true;
        }
        let mut start = 0;
        let mut end = temp.len() - 1;

        while start < end {
            if temp[start] != temp[end] {
                return false;
            } else {
                start += 1;
                end -= 1;
            }
        }

        return true;
    }
}