# <img src="./src/assets/images/mascot.png" alt="TechTrek Mascot" width=50/>  TechTrek

## Introduction
TechTrek is an interactive learning platform designed to guide users through the basics of computer science. It takes users on a journey through key topics such as CPU, RAM, storage, binary code, and operating systems. As users progress, they unlock new challenges that improve their efficiency and technical skills. The final goal is to earn the Tech Guru Certification, marking the user's mastery in foundational tech concepts.

- **Authors**:
  - Lamia Hamdi –
    [GitHub](https://github.com/Lamia1406) | [LinkedIn](https://www.linkedin.com/in/lamia-hamdi/) | [Email](mailto://lamia.hamdi1406@gmail.com) 
- **Deployed site**: [TechQuest website](https://tech-quest-gv8g1j0rs-lamia1406s-projects.vercel.app/)

## Table of Contents
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [Technology Stack and Architecture](#technology-stack-and-architecture)
  - [Features](#features)
  - [Future Enhancements](#future-enhancements)
  - [DB Architecture](#db-architecture)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
## Technology Stack and Architecture
| **Category**        | **Technology/Approach**                                                                 |
|----------------------|-----------------------------------------------------------------------------------------|
| **Frontend**         | - **React**: Component-based architecture for efficient and interactive UI.            |
|                      | - **Tailwind CSS**: Utility-first framework for rapid and responsive styling.           |
|                      | - **Flowbite**: Pre-designed, customizable UI components to accelerate development.     |
| **Backend**          | - **Supabase**: Authentication and database schema management using PostgreSQL.         |
| **Deployment**       | - **Vercel**: Fast deployment with automated CI/CD and React integration.               |
| **Game Design**      | - **Pure Implementation**: Custom-built game interactions without external libraries.    |
## Features
- **Interactive Quizzes and Challenges:** Engaging activities based on computer fundamentals to test and improve knowledge.  
- **Gamified Learning Flow:** Level progression and scoring system to make learning fun and rewarding.  
- **Backend Integration:** Secure data storage and user authentication powered by Supabase.  
- **Vibrant Design and Storyline:** Immersive elements like the "Tech Jungle" theme and the "Tech Guru Certification" journey.
- - **Currently Available Levels:** Only Level 1 games are developed, providing foundational challenges.
  - **Future Levels:** Additional levels with new and diverse games will be added to enhance the learning experience. 
## Future Enhancements  
- **Badges and Rewards:** Introduce badges to reward users for achievements and milestones, enhancing motivation.  
- **Diverse Games:** Add more game types, such as counting challenges, drag-and-drop activities, and many others to ensure variety and engagement.  
- **Learning Summary Section:** Create a dedicated section to summarize all the concepts and skills the user has learned so far.  
- **Improved User Experience:** Conduct extensive testing and debugging to make the app more intuitive and interactive for all users.  
- **Enhanced Security:** Implement additional security measures to protect user data and prevent unauthorized access.  
- **Load Balancing:** Integrate load balancing to improve scalability and ensure seamless performance during high traffic.  
- **Custom Domain Configuration:** Set up a custom domain to give the app a professional and branded online presence.
## DB Architecture
<img src="./installation_package/db_architecture.png" alt="TechTrek Mascot" width=1000/>

## Installation

### Prerequisites
- Node.js
- npm

### Clone the Repository

```bash
git clone https://github.com/Lamia1406/TechQuest.git
cd TechQuest
```

### Install dependencies:

```bash
npm install
```

### Set Up Supabase
1. Open a Supabase project following the instructions on the Supabase Docs.
2. In the SQL editor, import the SQL file located in /installation_package/db.sql in the project.
3. Reference DB Architecture for more insights about the database architecture.
4. Paste your project's Supabase URL and ANON_KEY into /src/config.ts in the relevant variables (beware! There are private names, so avoid making them public).


### Run the Application

```bash
npm run dev
```

## Usage

Once the application is running, access it via your browser:
- [http://localhost:5173](http://localhost:5173) (or any link that was shown in the command line)

## Contributing

Contributions are welcome! To contribute:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-branch`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature-branch`).
5.  Open a pull request.
