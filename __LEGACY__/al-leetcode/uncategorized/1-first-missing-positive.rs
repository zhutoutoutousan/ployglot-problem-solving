impl Solution {
    pub fn first_missing_positive(nums: Vec<i32>) -> i32 {
        let mut nums = nums;
        let len = nums.len();
        for i in 0..len {
            let mut j = nums[i];
            while j > 0 && j <= len as i32 && nums[j as usize - 1] != j {
                let tmp = nums[j as usize - 1];
                nums[j as usize - 1] = j;
                j = tmp;
            }
        }
        for i in 0..len {
            if nums[i] != i as i32 + 1 {
                return i as i32 + 1;
            }
        }
        len as i32 + 1
    }
}