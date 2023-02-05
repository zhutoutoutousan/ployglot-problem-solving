-- # write your SQL statement here: you are given a table 'disemvowel' with column 'str', return a table with column 'str' and your result in a column named 'res'.
-- # Remove vowel letter in a string

-- Code - PostgreSQL 13.0
-- Variable for vowels as one string (a, e, i, o, u) and capital vowels (A, E, I, O, U)
WITH vowels AS (SELECT '[aeiouAEIOU]' AS letter)

-- Query: Replace all vowels in a row with empty string, use Regex
SELECT str, regexp_replace(str, (SELECT letter FROM vowels), '', 'g') AS res
FROM disemvowel;
