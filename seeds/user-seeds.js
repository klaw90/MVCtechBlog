const { User } = require('../models');

const userData = [
    {
        username: "amani_c",
        twitter: "amanic",
        github: "amanic",
        email: "amani_c@email.com",
        password: "p@ssword1"
    },
    {
        username: "noah_c",
        twitter: "noahc",
        github: "noahc",
        email: "noah_c@email.com",
        password: "p@ssword2"
    },
    {
        username: "kevin_c",
        twitter: "kevinc",
        github: "kevinc",
        email: "kevin_c@email.com",
        password: "p@ssword3"
    },
    {
        username: "melissa_p",
        twitter: "melissap",
        github: "melissap",
        email: "melissa_p@email.com",
        password: "p@ssword4"
    },
    {
        username: "shannon_b",
        twitter: "shannonb",
        github: "shannonb",
        email: "shannon_b@email.com",
        password: "p@ssword5"
    },
    {
        username: "ericka_r",
        twitter: "erickar",
        github: "erickar",
        email: "ericka_r@email.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;