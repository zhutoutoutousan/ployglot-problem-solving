-- -----------------------------------------
-- |     Table     |    Column      | Type |
-- |---------------+----------------+------|
-- | growing_plant | down_speed     | int  |
-- |               | up_speed       | int  |
-- |               | desired_height | int  |
-- -----------------------------------------
-- https://www.codewars.com/kata/58941fec8afa3618c9000184/train/sql
-- -----------------------------------------
-- Path: ps-codewars\grow_plant.sql
-- -----------------------------------------
-- Mathematically calculate the number of days it takes to reach desired_height, num_days should be int, return as num_days: int, use row number as id, 
-- PostgresSQL 13.0

-- Get variables from table
WITH variables AS (SELECT * FROM growing_plant)

-- Query
-- column "num_days" should be Integer, not BigDecimal
SELECT id, num_days::int AS num_days
FROM (
    SELECT id, 
        -- Calculate number of days it takes to reach desired_height
        -- Formula: (desired_height - down_speed) / (up_speed - down_speed)
        -- Round up to nearest integer
        CEIL((desired_height - down_speed) / (up_speed - down_speed)) AS num_days
    FROM variables
) AS num_days;