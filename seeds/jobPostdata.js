const { Post } = require('../models');

const jobDescription = [
    {
        title: 'Job Title 1',
        content: 'This is the first job description',
        user_id: 1
    },
    {
        title: 'Job Title 2',
        content: 'This is the second job description',
        user_id: 2
    },
    {
        title: 'Job Title 3',
        content: 'This is the third job description',
        user_id: 3
    },
    {
        title: 'Job Title 4',
        content: 'This is the fourth job description',
        user_id: 4
    },
    {
        title: 'Job Title 5',
        content: 'This is the fifth job description',
        user_id: 5
    },
];

const jobPosts = () => Post.bulkCreate(postData);
module.exports = jobPosts;