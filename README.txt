I. Tools Used: 

    - $ npm install 
    - $ npm install --save express
    - $ npm install --save body-parser
    - $ npm install --save ejs pug express-handlebars
    - $ npm install --save express-handlebars@3.0
    - $ npm install --save mysql2
    - $ npm install --save sequelize
    - $ npm install --save mongodb
    - $ npm install --save mongoose

    - https://www.mysql.com/
        MySQL Community Server
        https://dev.mysql.com/downloads/mysql/
        > download DMG file

        MySQL Workbench: 
        https://dev.mysql.com/downloads/workbench/
        
        Go to /Desktop/Trung/Programs > open workbench

        setup video > video 138

    - MongoDB atlas (cloud database, no need to install)
        +, Just need to login, see login in password app
        +, Setting up MongoDB: Video 178

    - MongoDB Compass: GUI for MongoDb data
        +, help us to explore and manipulate our
        cloud MongoDB atlas
    https://www.mongodb.com/products/compass
    > install to machine to use
    > use at set up guide at video 184

II. Core Concepts: 
    1. What is Mongoose ?
        - Mongoose: 
            +, similiar to sequelize, which helps 
                us to worry less about query and focus on working
                with data
            +, Mongoose is: ODM(Object Document Mapping) Library
            +, Sequelize is: ORM (Object Relational Mapping) Library
        
        - Example of using Mongoose: 
        https://drive.google.com/file/d/1OqeBKSM-bgMGF_rOtFq-MDCl8GejREmI/view?usp=sharing

            +, Allow us to work with models easily
                and query will be done behind the scene
    
    2. Core steps of using mongoose: 
        - Step 1: Define Models with schema. 
            NOTE: Even though mongodb (noSQL) is schemaless, 
                But the reason we define schema in our models is 
                to be able to work with data more and focus less 
                on the queries

        - Step 2: Create an instance of the model
        - Step 3: run mongoose queries with that instance
            created

    
III. Module Notes: 
    1. Connecting MongoDB Server with Mongoose: 
        - Code in 2nd Commit
        - app.js to see how to connect 

    2. Basic CRUD operations: 
        a. Creating Product Schema: 
            - Code in 3rd Commit
            - ./models/product.js: to see how to create a product 
                schema
        
        b. Fetching Data: 
            - Code in 3rd Commit
            - Fetching all products: 
                +, using find() > mongoose method to find all 
                +, ./controllers/shop.js: under getProducts(), 
                and getIndex()

            - Fetching a single product: 
                +, using findById(id)
                +, ./controllers/shop.js: under getProducts(), 
                and getIndex() 
        
        c. Updating Product: 
            - Code in 3rd Commit
            - Using save() method provided by Mongoose
            - ./models/admin.js under postEditProduct()
        
        d. Deleting Product: 
            - Code in 3rd Commit
            - Using findByIdAndRemove(id) provided by mongoose
            - ./models/admin.js under findByIdAndRemove()

        


IV. Other Notes: 
    What's in this module ?
        - What is Mongoose ?
        - Using Mongoose in Node.js Apps
    
    Official docs: 
        https://mongoosejs.com/

        
