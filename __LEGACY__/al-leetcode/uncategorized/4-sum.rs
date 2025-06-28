impl Solution {
    pub fn four_sum(nums: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
        if nums.len() < 4 {
            return vec![]; // Return an empty vector for less than 4 elements.
        }        
        let mut result = Vec::new();
        let mut nums = nums;
        nums.sort();

        // Check if four maximum and four minimum number has overflow i32, if so flag it as has_overflow = true
        let mut has_overflow = false;
        let mut testMaximum = nums[nums.len() - 1] as i64 + nums[nums.len() - 2] as i64 + nums[nums.len() - 3] as i64 + nums[nums.len() - 4] as i64;
        if testMaximum > i32::max_value() as i64 {
            has_overflow = true;
        }
        let mut testMinimum = nums[0] as i64 + nums[1] as i64 + nums[2] as i64 + nums[3] as i64;
        if testMinimum < i32::min_value() as i64 {
            has_overflow = true;
        }


        for i in 0..nums.len() - 3 {
            // Skip duplicates to avoid duplicate quadruplets
            if i > 0 && nums[i] == nums[i - 1] {
                continue
            }

            for j in i + 1..nums.len() - 2 {
                // Skip duplicates to avoid duplicate quadruplets
                if j > i + 1 && nums[j] == nums[j-1] {
                    continue;
                }

                let mut left = j + 1;
                let mut right = nums.len() - 1;

                while left < right {
                    // Sums needs to address edge cases where it surpass the upper or lower limit of i32
                    // Only use type casting when necessary
                    // OPTIM: So we have to do edge check every time eh? What if we just do it once?

                    // Check has_overflow
                    if has_overflow {
                        let sum = nums[i] as i64 + nums[j] as i64 + nums[left] as i64 + nums[right] as i64;
                        if sum > i32::max_value() as i64 {
                            break;
                        }
                        else if sum < i32::min_value() as i64 {
                            break;
                        }
                    }

                    let sum = nums[i] + nums[j] + nums[left] + nums[right];


                    if sum == target {
                        result.push(vec![nums[i], nums[j], nums[left], nums[right]]);
                        // Skip duplicates
                        while left < right && nums[left] == nums[left + 1] {
                            left += 1;
                        }
                        while left < right && nums[right] == nums[right - 1] {
                            right -= 1;
                        }
                        left +=1;
                        right -= 1;
                    }
                    else if sum < target {
                        left += 1;
                    }
                    else {
                        right -= 1;
                    }
                }
            }
        }
        result
    }
}