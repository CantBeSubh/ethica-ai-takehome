# Ethica AI Take Home Assessment
> **Objective**: Build a movie review web application using React and node.js that allows users to input a movie review, generate a sentiment analysis of the review, and store that in a table for others to agree/disagree with.

[Visit Live](https://ethica-ai-takehome.vercel.app/) 

## How to run locally?
1. Clone the repo
```
git clone https://github.com/CantBeSubh/ethica-ai-takehome.git
```
2. Create an account on Hugging Face.
3. Click this [link](https://huggingface.co/settings/tokens) to generate a secret token.
4. Rename `.env.example` to `.env`
5. Replace `HF_API_KEY` with the secret key you generated
6. Run this command
   ```
   npm i
   ```
10. Then, run this command
    ```
    npm run dev
    ```
12. Visit `localhost:3000`

## Tech Stack
1. NextJS 13.5.1
2. HuggingFace API
3. ShadcnUI / TailwindCSS
4. Zustand
5. Typescript

## Functionality
- [x] Button labelled “Add Review”, opens a textbox where users can input text.
- [x] Button labelled "Analyze", for  sentiment analysis.
- [x] A result component that displays the result ("Positive 🤗", "Negative 😡", or "Neutral 🤔").
- [x] Integrate [Hugging Face API](https://huggingface.co/distilbert-base-uncased-finetuned-sst-2-english) for sentiment analysis.
- [x] Each analyzed review is added to a table, along with the date and time of the review.
- [x] The user should be able to upvote/downvote the review, and all reviews in the table are sorted by the number of votes.
- [x] Used [Zustand](https://zustand-demo.pmnd.rs/) and LocalStorage for state management
### Extra
- [x] Dark/Light Theme Switch
- [x] Pagination(new page after 10 reviews)
- [x] Hide Column(s)

## Deliverables
- Github - [@CantBeSubh/ethica-ai-takehome](https://github.com/CantBeSubh/ethica-ai-takehome)
- Vercel Live Deployment - https://ethica-ai-takehome.vercel.app/
### Describe a limitation of your application.
The web app meets the functional requirements, but it has some areas for improvement. One of them is the mobile responsiveness, the website works well on tablets and PCs, but not on mobile devices. Another one is the use of Zustand, which forced me to use 'use client' for the main `page.tsx` component. This prevented me from using Server Side Rendering, which could have improved the performance.

### If given more time, what features would you like to add? 
To improve the security and functionality of my web application, I would implement the following features:

- A secure authentication system using **ClerkAuth**, which provides a simple and fast way to add user accounts, email verification, and password reset functionality.
- A database connection using **PlanetScale** and **MySQL**, which allows me to store and query data in a scalable and reliable way. I would replace the local storage with a database table to store the reviews and votes of the reviews.
- A logic to prevent users from liking a review more than once, to avoid any bias or propaganda against any movie. I would use a unique identifier for each user and review, and check if the user has already liked the review before allowing them to do so.
- A better machine learning model with higher accuracy, which can provide more reliable and relevant recommendations for the users. I would use a **dockerized Python server using FAST API**, which is a modern and fast web framework that supports asynchronous operations and automatic documentation.
- I would use docker to create a containerized environment that can run the server independently and consistently across different platforms and deploy the model on **AWS, GCP, Azure or Heroku**, which offer cloud computing services that can handle the computation and storage needs of the model.
- I would enable my own Rate Limiting with **Redis and Upstash**
   


