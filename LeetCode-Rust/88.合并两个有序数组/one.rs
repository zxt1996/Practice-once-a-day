impl Solution {
    pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
        let mut temp = Vec::new();
        let mut mStart: i32 = 0;
        let mut nStart: i32 = 0;

        while mStart < m && nStart < n {
            if nums1[mStart as usize] < nums2[nStart as usize] {
                temp.push(nums1[mStart as usize]);
                mStart += 1;
            } else {
                temp.push(nums2[nStart as usize]);
                nStart += 1;
            }
        }

        while mStart < m {
            temp.push(nums1[mStart as usize]);
            mStart += 1;
        }

        while nStart < n {
            temp.push(nums2[nStart as usize]);
            nStart += 1;
        }

        *nums1 = temp;
    }
}