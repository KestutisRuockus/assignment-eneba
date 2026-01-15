# AI_PROMPTS

#### • React + express + db project. How init express project?

#### • What nodemon do?

#### • What cors do?

#### • express folder structure? where I should put endpoints?

#### • Initialized FE part. How to check or cors works fine and FE and BE works together?

#### • it's time for db part. Thinking about sqlite3. Offer another two ways to store for small size data to db. it's for a small assignment. IT should use SQL. compare all three ways to store. show cons and pros

#### • how to connect db PostgreSQL on Render? using express

#### • DATABASE_URL must be internal or external url?

#### • creating new web services on render. what start command it uses? the same one - npm run dev ?

#### • how to check or table exist in db (render)?

#### • I am using ts, show example in ts

#### • changed js files to ts. error on tunning BE server: Cannot find module 'D:\NodeJS\assignment-eneba\backend\src\index.js'. read there are also ts types for express and cors. Do I need to install them?

#### • added this to BE folder/tsconfig.json:

{
"compilerOptions": {
"target": "ES2020",
"module": "NodeNext",
"moduleResolution": "NodeNext",
"outDir": "dist",
"rootDir": "src",
"strict": true,
"esModuleInterop": true,
"skipLibCheck": true
}
}

and in all folders there is a ts error:
all are the same about extension at the imports
Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean './db/initDB.js'?

#### • is it better to seed games list on initDb function call? or on every server run?

#### • when seeding I meant to check or games list exist. If not seed games list to table.

#### • I don't like your idea to check every row. I think it would be better to check or table isn't empty. InitDb check or table exist. it creates the table if not. then call seed function to check or games table is not empty. if empty then seed table with the games list

#### • How to seed games only once (skip if table already has rows)?

#### • in render.com where BE is deployed. I have

error while deploaying:
Error: Cannot find module '/opt/render/project/src/backend/dist/index.js'

#### • express GET method. Get all rows from games table

#### • how to add ts to check type in express?

#### • Postgres returns number, integers as string,?

#### • integer (small) and numeric. Both returns as string?

#### • Then I should to convertor to a number. In frontend it will be used as number. When it is better to convert them into number? while fetching? Or on posting to db?

#### • Failed to start server: AggregateError [ECONNREFUSED]

connect ECONNREFUSED ::1:5432
connect ECONNREFUSED 127.0.0.1:5432

#### • locally works fine. Crashed on deploying

#### • is it a good practice to share types between frontend and backend folders? or it must have them separated?

#### • how to make div bg blured and transparent?

#### • express search by query, takes query from req.query and call endpoint /list?search={search}

#### •
