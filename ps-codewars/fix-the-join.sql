-- https://www.codewars.com/kata/580fb94e12b34dd1c40001f0/train/sql
-- The sample is compiled of 100 applicants each with a job and a salary
-- Display each unique job, the total average salary, the total people and the total salary and order by highest average salary.

-- people table schema
-- id
-- name

-- job table schema
-- id
-- people_id
-- job_title
-- salary

-- resultant table schema
-- job_title (unique)
-- average_salary (float, 2 dp)
-- total_people (int)
-- total_salary (float, 2 dp)

-- Display each unique job, the total average salary, the total people and the total salary and order by highest average salary.
-- Join two tables
-- total_salary and averatge_salary should be float 2dp
SELECT 
    job.job_title,
    -- average_salary (float, 2 dp)
    ROUND(SUM(job.salary) / COUNT(job.salary), 2) AS average_salary,
    COUNT(job.salary) AS total_people,
    -- total_salary (float, 2 dp)
    SUM(job.salary) AS total_salary
FROM people
JOIN job ON people.id = job.people_id
GROUP BY job.job_title
ORDER BY average_salary DESC;

