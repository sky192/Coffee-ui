CREATE DATABASE coffees;

CREATE USER 'admin'@'localhost' identified with mysql_native_password by 'coffee$';

GRANT ALL ON coffees.* TO 'admin'@'localhost';

USE coffees;

CREATE TABLE coffees (
  id INT auto_increment,
  title VARCHAR(255),
  description VARCHAR(255),
  ingredients VARCHAR(255),
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);

INSERT INTO coffees (title, description,  ingredients) VALUES
('Black', 'Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir', 'Coffee'),
('Latte', 'As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice.', 'ESpersso, Steamed Milk'),
('Cappuccino', 'Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.', 'Espersso, Steamed Milk, Foam'),
('Americano', 'With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water.', 'Esperrso, Hot Water'),
('Espersso', 'An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos.', '1oz Espresso'),
('Doppio', 'A double shot of espresso, the doppio is perfect for putting extra pep in your step.', '2oz Espresso'),
('Cortado', 'Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espresso’s acidity.', '1oz Espresso, 1oz Steamed Milk'),
('Red Eye', 'Named after those pesky midnight flights, a red eye can cure any tiresome morning. A full cup of hot coffee with an espresso shot mixed in, this will definitely get your heart racing.', 'Coffee, Espresso'),
('Galão', 'Originating in Portugal, this hot coffee drink is closely related to the latte and cappuccino. Only difference is it contains about twice as much foamed milk, making it a lighter drink compared to the other two.', 'Espresso, Foamed milk'),
('Lungo', 'A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy.', 'Long pulled espresso'),
('Macchiato', 'The macchiato is another espresso-based drink that has a small amount of foam on top. It’s the happy medium between a cappuccino and a doppio.', 'Espresso, Foam');
           


  