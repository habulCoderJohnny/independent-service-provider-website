import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>Difference between authorization and authentication</h1>
            <h5>ANSWER: Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. </h5>
            <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
            <h5>ANSWER:
                Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system</h5>
            <h1>What other services does firebase provide other than authentication?</h1>
            <h5>ANSWER: here are many services which Firebase provides, Most useful of them are:
                Cloud Firestore.
                Cloud Functions.
                Authentication.
                Hosting.
                Cloud Storage.
                Google Analytics.
                Predictions.
                Cloud Messagin</h5>
        </div>
    );
};

export default Blog;