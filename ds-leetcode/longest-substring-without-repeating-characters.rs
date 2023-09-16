impl Solution {
    // Do not use HashSet or implement it manually
    // Double pointer starting with one at the left and another on the right
    pub fn length_of_longest_substring(s: String) -> i32 {
        let mut max = 0;
        let mut left = 0;
        let mut right = 0;
        let mut chars = [false; 128];
        let bytes = s.as_bytes();
        while right < bytes.len() {
            let c = bytes[right] as usize;
            if chars[c] {
                max = max.max(right - left);
                while bytes[left] != bytes[right] {
                    chars[bytes[left] as usize] = false;
                    left += 1;
                }
                left += 1;
            } else {
                chars[c] = true;
            }
            right += 1;
        }
        max.max(right - left) as i32
    }
}
