impl Solution {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        if needle.len() == 0 {
            return 0;
        }

        let mut h:Vec<char> = haystack.chars().collect();
        let mut n:Vec<char> = needle.chars().collect();

        let mut nStart = 0;
        let mut hStart = 0;

        for i in 0..h.len() {
            if h[i] == n[0] {
                hStart = i;
                while hStart < h.len() && nStart < n.len() && h[hStart] == n[nStart] {
                    nStart += 1;
                    hStart += 1;
                }

                if nStart > n.len() - 1 {
                    return i as i32;
                } else {
                    nStart = 0;
                    continue;
                }
            }
        }

        return -1;
    }
}