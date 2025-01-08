
## Future Enhancements 🚀

Here's what I plan for the next iteration of **Melius**:

- **Donation Feature**: Allow users to support the platform through donations.
- **Voice Chat**: Enable voice communication between users for additional support.
- **Goal Setting**: Add a feature to set monthly or weekly goals. Completing these goals will reward users with points or achievements.

- **Graphs of users progress.**

- **Tests**: Add a feature to make users take small quizzes to measure their addiction levels.

- **AI**: Add an AI engine to manage posts.

There's always room to refine and evolve this project, and I'm excited about future possibilities.

---

## Screenshots and Visuals 🖼️

Here are some screenshots of the app in action:
| Image | Description |
|-------|-------------|
| ![Image 1](./images/landing_page.jpg) | Landing Page |
| ![Image 2](./images/features.jpg) | Features |
| ![Image 3](./images/sign_up.jpg) | Sign Up page |
| ![Image 3](./images/login.jpg) | Login page |
| ![Image 3](./images/home.jpg) | Home page |
| ![Image 3](./images/leaderboard.jpg) | leaderboard for top 10 users |
| ![Image 3](./images/challenges.jpg) | challenge page |
| ![Image 3](./images/achievements.jpg) | Achievements section |
| ![Image 3](./images/posts.jpg) | Community Posts page |
| ![Image 3](./images/articles.jpg) | Articles page |

## Installation :cd:

You can either use the provided Bash script or manually install the application as detailed below.

### Install with Bash Script

Run the automated installation with the following commands:

```bash
cd /var
chmod u+x melius.sh
./melius.sh
```

## Manual Installation

### Prerequisites

- Python 3.x
- Pip
- MySQL
- Nginx
- Node.js
- npm

### Clone the Repository

```bash
git clone https://github.com/eyadfattah23/Melius.git
cd Melius
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Install frontend dependencies:

```bash
cd frontend
npm install
```

### Set Up MySQL

```bash
cd /var/Melius
mysql -u root < setup_mysql_dev.sql
```

### Set Up Nginx

Update Nginx configuration with the appropriate settings

### Run the Application

```bash
cd /var/Melius
python3 -m api.v1.app
```

```bash
cd frontend
npm run dev
```

## Usage 📖

Once the application is running, access it via your browser:

- Backend: <http://localhost:5050>
- Frontend: <http://localhost:3000>
- API Documentation : <http://localhost:5050/apidocs/>
- API Endpoint : <http://localhost:5050/api/v1>

Users can create anonymous accounts, track their progress, and access resources.

## Contributing 🤝

Contributions are welcome! To contribute:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-branch`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature-branch`).
5.  Open a pull request.

Ensure your code follows PEP8 guidelines, is documented, and includes unit tests for any new features.

## Related Projects 🌐

- **[NoFap](https://nofap.com/)**: A community-driven platform supporting recovery.
- **[Reboot Nation](https://rebootnation.org/)**: Another initiative aimed at overcoming porn addiction.

## License ⚖️

This project is licensed under the MIT License. See the LICENSE file for more details.
