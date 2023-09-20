# Ethica AI Take Home Assessment
> **Objective**: Build a movie review web application using React and node.js that allows users to input a movie review, generate a sentiment analysis of the review, and store that in a table for others to agree/disagree with.

[Visit Live](https://ethica-ai-takehome.vercel.app/)  ||
[YT Video Demo](https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley)

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
- [x] Pagination
- [x] Hide Column

## Deliverables
### Describe a limitation of your application?
The web app is not mobile responsive.

### If given more time, what features would you like to add? 
1. Ssecure authentication system
2. Databse instad of localStorage
3. Custom rate limiting
   
- [x] Github - [@cantbesubh/ethica-ai-takehome](https://github.com/CantBeSubh/ethica-ai-takehome)
- [x] Vercel Live Link - https://ethica-ai-takehome.vercel.app/

