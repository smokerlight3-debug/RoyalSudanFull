CREATE DATABASE RoyalSudanResto;
USE RoyalSudanResto;
CREATE TABLE CustomerOrders(
order_id INT AUTO_INCREMENT PRIMARY KEY,
customer_name VARCHAR(150),
phone_number VARCHAR(20),
delivery_address TEXT,
order_content TEXT,
total_price DECIMAL(10,2)
);
