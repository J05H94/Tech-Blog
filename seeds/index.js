const sequelize = require('../config/connection');
const seedComments = require('./commentSeeds');
const seedPosts = require('./postSeeds');
const seedUser = require('./userSeeds');

const seedDatabase = async () => {
    await sequelize.sync({force: true});
    console.log("\n -----DATABASE SYNCED-----\n")
    
    await seedUser()
    console.log("\n -----USERS SYNCED-----\n")

    await seedPosts()
    console.log("\n -----POSTS SYNCED-----\n")
    
    await seedComments()
    console.log("\n -----COMMENTS SYNCED-----\n")

    process.exit(0);
};

seedDatabase();