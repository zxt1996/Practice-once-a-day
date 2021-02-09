impl Solution {
    pub fn maximum_time(time: String) -> String {
        let mut temp: Vec<char> = time.chars().collect();

        for i in 0..temp.len() {
            if temp[i] == '?' {
                match i {
                    0 => {
                        let mut z = 0;
                        if temp[i+1] != '?' {
                            z = (temp[i+1].to_string()).parse::<i32>().unwrap();
                        }
                        if z < 4 {
                            temp[i] = '2';
                        } else {
                            temp[i] = '1';
                        }
                    },
                    1 => {
                        if temp[0] != '2' {
                            temp[i] = '9';
                        } else {
                            temp[i] = '3';
                        }
                    },
                    3 => {
                        temp[i] = '5';
                    },
                    4 => {
                        temp[i] = '9';
                    },
                    _ => {}
                }
            }
        }

        let result: String = temp.into_iter().collect();

        return result;
    }
}