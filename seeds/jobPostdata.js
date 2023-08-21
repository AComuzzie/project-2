const { Listing } = require('../models');

const jobPostData = [
    {
        title: 'Job Title 1',
        business_name: 'Business Name 1',
        job_description: 'This is the first job description',
        job_location: 'This is the first job location',
        email: 'email1@example.com',
        user_id: 1
    },
    {
        title: 'Job Title 2',
        business_name: 'Business Name 2',
        job_description: 'This is the second job description',
        job_location: 'This is the second job location',
        email: 'email2@example.com',
        user_id: 2
    },
    {
        title: 'Job Title 3',
        business_name: 'Business Name 3',
        job_description: 'This is the third job description',
        job_location: 'This is the third job location',
        email: 'email3@example.com',
        user_id: 3
    },
    {
        title: 'Job Title 4',
        business_name: 'Business Name 4',
        job_description: 'This is the fourth job description',
        job_location: 'This is the fourth job location',
        email: 'email4@example.com',
        user_id: 4
    },
    {
        title: 'Job Title 5',
        business_name: 'Business Name 5',
        job_description: 'This is the fifth job description',
        job_location: 'This is the fifth job location',
        email: 'email5@example.com',
        user_id: 5
    },
];

const seedPosts = () => Listing.bulkCreate(jobPostData);
module.exports = seedPosts;