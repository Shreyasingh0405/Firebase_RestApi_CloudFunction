## 🚀 Firebase REST API with Cloud Functions

This project provides a RESTful API using Firebase Cloud Functions to perform CRUD operations on user data stored in Firebase Firestore. Built with Node.js, Express.js, and the Firebase Admin SDK, it's scalable, efficient, and easy to deploy!

## 🌟 Features

1. 📝 Create, Read, Update, and Delete user data in Firebase Firestore.
2. ☁️ Hosted as a Firebase Cloud Function for seamless scalability.
3. 🔧 Easy to deploy and test locally using Firebase CLI.

## 📋 Prerequisites

Before starting, ensure the following tools are installed on your system:

1. Node.js (v14 or later) 🟢
2. npm (comes with Node.js) 📦
3. Firebase CLI (Install using: npm install -g firebase-tools) 🔥
🛠️ Setup Steps

1️⃣ Clone the Repository
1. ## git clone https://github.com/Shreyasingh0405/Firebase_RestApi_CloudFunction.git

2. cd Firebase_RestApi_CloudFunction

2️⃣ Initialize Firebase
1. Login to Firebase CLI:
     firebase login
2. Initialize Firebase in your project:
     firebase init
3. Select Functions (and optionally Firestore if needed).
4. Choose your existing Firebase project or create a new one.
5. Pick your preferred language (JavaScript or TypeScript). here    Javascript
6. Select Yes when prompted to install dependencies.

3️⃣ Install Dependencies
Navigate to the functions directory and install dependencies:
     cd functions
     npm install

▶️ Running the Project Locally

To test the API locally:
  firebase serve --only functions

Access the API at:
http://localhost:5000/<YOUR_PROJECT_ID>/us-central1/api

🌐 Deployment

To deploy the API to Firebase:

firebase deploy --only functions
The deployed API will be accessible at:
https://<REGION>-<YOUR_PROJECT_ID>.cloudfunctions.net/api

## 🔗 API Endpoints

1️⃣ Create a User

Method: POST /api/users

Description: Adds a new user to Firestore.

Request Body:

{

  "name": "John Doe",
  
  "age": 30
  
}

Response:

{

  "message": "User created successfully"
  
}



2️⃣ Get All Users

Method: GET /api/users

Description: Retrieves all users from Firestore.

Response:

{

  "status": 1,
  
  "message": "Data fetched successfully",
  
  "data": [
  
    {
    
      "id": "document_id_1",
      
      "name": "John Doe",
      
      "age": 30
      
    }
    
  ]
  
}



3️⃣ Update a User

Method: POST /api/updateUsers

Description: Updates an existing user in Firestore.

Request Body:

{

  "id": "document_id_1",
  
  "name": "John Updated",
  
  "age": 31
  
}

Response:

{

  "message": "User updated successfully!"
  
}



4️⃣ Delete a User

Method: POST /api/deleteUsers

Description: Deletes a user from Firestore.

Request Body:

{

  "id": "document_id_1"
  
}

Response:

{

  "message": "User deleted successfully!"
  
}



## 📜 Summary

1. Clone the repository and navigate to the project directory.
2. Initialize Firebase to set up configurations.
3. Install dependencies for the functions directory.
4. Run the project locally using firebase serve.
5. Deploy the API to Firebase with firebase deploy.

🚀 Happy Coding! 💻🔥

