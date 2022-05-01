-- https://www.codewars.com/kata/58112f8004adbbdb500004fe/train/sql
-- For this challenge you need to create a UNION statement, there are two tables ussales and eusales the parent company tracks each sale at its respective location in each table, you must all filter the sale price so it only returns rows with a sale greater than 50.00. You have been tasked with combining that data for future analysis. Order by location (US before EU), then by id.

-- (us/eu)sales table schema
-- id
-- name
-- price
-- card_name
-- card_number
-- transaction_date

-- resultant table schema
-- location (EU for eusales and US for ussales)
-- id
-- name
-- price (greater than 50.00)
-- card_name
-- card_number
-- transaction_date

-- Add location column to ussales table and set it to 'US'
ALTER TABLE ussales ADD COLUMN location VARCHAR(3) NOT NULL DEFAULT 'US';
-- Add location column to eusales table and set it to 'EU'
ALTER TABLE eusales ADD COLUMN location VARCHAR(3) NOT NULL DEFAULT 'EU';
--- Filter the sale price so it only returns rows with a sale greater than 50.00. Combine that data for future analysis, use UNION ALL
SELECT location, ussales.id, ussales.name, ussales.price, ussales.card_name, ussales.card_number, ussales.transaction_date
FROM ussales
WHERE ussales.price > 50.00
UNION ALL
SELECT location, eusales.id, eusales.name, eusales.price, eusales.card_name, eusales.card_number, eusales.transaction_date
FROM eusales
WHERE eusales.price > 50.00
-- For ORDER BY, US comes before EU
ORDER BY ussales.location, id;
