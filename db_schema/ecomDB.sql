DROP DATABASE IF EXISTS ecomDB;
CREATE DATABASE ecomDB;

USE ecomDB;

CREATE TABLE products(
  product_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  product_description VARCHAR(1000) NOT NULL,
  quantity INT NOT NULL,
  img VARCHAR(250) NOT NULL,
  typeOfproduct VARCHAR(100) NOT NULL,
  primary key(product_id)
);

CREATE TABLE contacts(
  contact_id INT AUTO_INCREMENT NOT NULL,
  fullName VARCHAR(40) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phoneNumber VARCHAR(15) NOT NULL,
  comments VARCHAR(5000) NOT NULL,
  primary key(contact_id)
);

CREATE TABLE prices(
  price_id INT AUTO_INCREMENT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  product_productID INT NOT NULL,
  primary key(price_id),
  INDEX `product_idx` (`product_productID` ASC) VISIBLE,
  CONSTRAINT product_productID 
  FOREIGN KEY (product_productID)
  REFERENCES `ecomDB`.`products`(`product_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION);
  

INSERT INTO products (product_name, product_description, quantity, img,  typeOfproduct)
VALUES (
		"Samsung Smart tv ", 
		"Step up from Full HD with the clarity of the UN55NU6900. 
		Get 4X the resolution of Full HD, plus non-4K TV content is upscaled to 4K via a powerful UHD Engine. 
		This TV is a clear upgrade for your content. Motion Rate 240 (120Hz refresh rate)", 
        20, 
		"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6268/6268404_sd.jpg;maxHeight=640;maxWidth=550", 
        "tv"
        ),
        
		(
        "Samsung Soundbar", 
        "A wireless subwoofer delivers powerful low-end bass to enhance movies and songs, 
        while a game mode enhances sound effects in your favorite games.It has six speakers with a dedicated center channel 
        to provide crisp, clear dialog.",
        34, 
        "https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/ts-2019-samsung-soundbar-systems_hw-r450_hw-r550_hw-r650_hw-q60r_1.jpg?itok=WgQnPCoH", 
        "speakers"
        ),
        
        (
        "Playstation 4 Pro",
        "Support for faster frame rates delivers super-sharp action for select PS4 games. 
        One unified gaming community. With up to 4K streaming and 4K auto-upscaling for video content. 
        Performance capable of 4K gaming and HDR.", 
        24, 
        "https://i5.walmartimages.com/asr/33de3a32-863c-4457-9cce-1fb65036d73c_1.93c6433ebb65dc7ef7d0a3d30dee21fc.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF", 
        "play console"
        ),
        
		(
        "iPhone 8 with 64GB", 
        "The Apple iPhone 8 is a new generation of iPhone. Updated features include a new design, improved camera, 
        and the A11 Bionic chip with four efficiency cores and two performance cores for fast performance. Faster A11 processor.",
		 44, 
		"https://images-na.ssl-images-amazon.com/images/I/51LXiIAOkfL._SY550_.jpg",
        "phone"
        ),
          
        (
        "DJI - Mavic 2 Pro", 
        "It has a powerful 1-inch CMOS sensor to capture 20-megapixel 4K images and an adjustable-aperture lens 
		for clear footage in various lighting situations. This DJI Mavic 2 Pro aircraft has 8GB of internal storage and supports 
		microSD cards up to 128GB.",
        54,
        "https://www.adorama.com/images/Large/fslfs80.jpg",
        "drone"
        ),
        
        (
        "Echo Smart Alarm", 
        "Echo Spot is designed to fit anywhere in your home. Use 2nd generation far-field voice recognition to watch the news, 
        see music lyrics, weather forecasts, to-do and shopping lists, browse and listen to Audible audiobooks, and more.",
        74,
        "https://lh3.googleusercontent.com/proxy/ihT6BfpnPfJjnIrThW1f004hDTOuknJJmymLvNbDmoU8G5ht4S8eOrdwfrW8CWcLJH4JCdor5STew9g5gMs1bcPbQjwc6QinIqrIJQ7rV0wypZPFSKtF4de3Y1pVZpfHYw14RSnacNDEhwtRUQdnK24j366iCNITPRIAsW3HHTHLGOBJEQ=s1000-pd-e365-rw-pc0xffffff",
        "alarm"
        ),
        
        (
        "Gamer Processor",
        "Get the most out of your computing experience with the CYBERPOWERPC Gamer Ultra series of computers. These desktops feature powerful AMD multi-core processors to not only handle your intense gaming sessions.",
        54,
        "https://i5.walmartimages.com/asr/c0c50c76-2e18-4d03-ba55-7aec5a42a67b_1.3103e139b5e8da25dbebb452aba63f8b.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
        "processor"
        ),
        
        (
        "Dell HD Computer",
        "Enjoy the adaptable, intuitive design of these versatile wireless headphones. The flexible neckband maintains a strong, comfortable fit during workouts or workdays, while the JBL-engineered hardware delivers crisp, rich audio.",
        34,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS01uMLCG6Tm5KsdCyOmHY83r_z2rYnlIGYEo7hMlgm65QFjL-b",
        "computer"
        ),
        
        (
        "JBL - Headphones",
        "Enjoy the adaptable, intuitive design of these versatile wireless headphones. The flexible neckband maintains a strong, comfortable fit during workouts or workdays, while the JBL-engineered hardware delivers crisp, rich audio.",
        68,
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6180/6180317_sd.jpg;maxHeight=640;maxWidth=550",
        "headphone"
        ),
        
        (
        "Canon - EOS Rebel",
        "Take stunning pictures with vibrant colors using this EOS Rebel T7 camera. The built-in Wi-Fi makes printing and sharing pictures quick and easy, and the auto-focus system creates crisp images at a moment's notice. Optical Sensor Size. 15.1 x 22.7 mm.",
        84,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrtuu3359uLrtT7R9NMEKRYhtWt5hpqAAwVJsHMJ8yISyp6u6bCw",
        "camera"
        ),
        
        (
        "11-Inch iPad Pro",
        "The new 11-inch iPad Pro features an advanced Liquid Retina display that goes edge to edge.¹ Face ID, so you can securely unlock iPad Pro, log in to apps, and pay with just a glance. Edge-to-edge display without Home button.",
        15,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTX9_cQ6FDouOZzreQ_dXMckaF9y3hPBAkZ5OVSnmX447Y4h3V",
        "iPad"
        ),
        
        (
        "Apple Watch",
        "Fundamentally redesigned and reengineered. The largest Apple Watch display yet. Built-in electrical heart sensor. Low and high heart rate notifications. Fall detection and Emergency SOS. New Breathe watch faces.",
        11,
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5543/5543300_sd.jpg;maxHeight=239;maxWidth=221",
        "watch"
        );
        
INSERT INTO contacts (fullName, email, phoneNumber, comments)
VALUES (
		"Jeff Hrought", 
		"jeffhrougth@gmail.com", 
		'7043854568', 
		"Just received the PAL/NTSC converter for my DVD/VCR combo to my TV. It works perfectly! I must confess I was skeptical but it works great! Wonderful picture!. 
		Thank you very much!"
),

	  (
		"Christopher Desmal",
        "christopherdesmal@gmail.com",
        '7867456578',
		"I got my CMD-1500 and I have to say it’s a great convertor!! 
        I bought it for my PAL Phillips Videopac G7400 (Odyssey3) Videogame system to play on my NTSC T.V."
	),
    
    (
		"James Hawkins",
        "jameshawkins.re@gmail.com",
        '7767950516',
		"I wanted to let you know that I am quite pleased with you fast delivery & your product , which works well. As advertised"
	),
    
    (
		"Linda Cals",
        "lindacalsos.tr@gmail.com",
        '404185277',
		"Thank you for your prompt reply.  I received the remaining two boxes yesterday."
	),
    
      (
		"Jim Fernandez",
        "jimfernandez.tr@gmail.com",
        '7685679081',
		"Victor B, Sorry, I forgot to email you earlier. I recieved the tv in about one week and it is in perfect condition and works like a dream.
        Thank you so much for excellent customer service and an excellent product."
	),
    
    (
		"Les Angel", 
		"lesangel.68@gmail.com", 
		'5094584325', 
		"We received it (CMD-850) today in the mail. It was much smaller, lighter and simpler than I had imagined, but when we plugged it in, it performed excellently. 
        We get a superb picture. Now you have an advocate customer. Thanks."
	),

	  (
		"Frank Burke",
        "frankburke54@gmail.com",
        '906897345',
		"Just wanted to tell you that I am really pleased with the converter. Much better than using the Samsung SV-5000W."
	 ),
    
    (
		"Trevor Thomas",
        "treverthomas54.re@gmail.com",
        '3056284561',
		"I received the (DVC-920) converter last week Monday. Excellent service and I am very happy with the machine."
	),
    
    (
		"Rosell Even",
        "roselleven.te@gmail.com",
        '1025978970',
		"I just wanted to thank you guys. I purchased a Daewood DVD 5800 from you in August and am plesantly suprised by how well it performs for such a reasonable price.."
	),
    
      (
		"Jhon Harm",
        "jhonharm@gmail.com",
        '8795471777',
		"Thank you for great service.  I will be looking the R520M next week. 
		Thanks for offering the R520M at the same price as the T260"
	);

INSERT INTO prices (price, product_productID)
VALUES (527.99, 1),
		(399.99, 2),
        (373.45, 3),
        (599.65, 4),
        (1399.99,5),
        (129.99, 6),
        (489.99, 7),
        (299.45, 8),
        (129.99, 9),
        (499.99, 10),
        (499.55, 11),
        (379.35, 12);
        
SELECT * FROM products INNER JOIN prices ON products.product_id = prices.product_productID;

