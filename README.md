# 🎮 Memory Game

A fun, interactive memory card game built with React where players match pairs of cards with the same emoji.

![Memory Game Screenshot](https://github.com/NuelEzeiruaku/Memory-Game-Project/blob/main/memorygame.png?raw=true)

## ✨ Features

- 📱 Responsive design that works on mobile, tablet, and desktop
- 🎭 Different emoji categories to choose from
- 🔢 Adjustable difficulty by changing the number of cards
- 🎨 Clean, intuitive UI with smooth animations
- ♿ Accessibility features for screen readers

## 🚀 Live Demo

[Play the Memory Game](https://your-memory-game-url.com)

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- CSS3 with responsive design
- Vite for fast development and building

## 📋 How to Play

1. Select an emoji category
2. Choose the number of cards you want to play with
3. Click on cards to reveal emojis
4. Try to find matching pairs
5. Match all pairs to win the game

## 🔧 Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/NuelEzeiruaku/Memory-Game-Project.git
   cd memory-game-project
   ```

2. Install dependencies:
   ```bash
   npm install
   npm install html-entities
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

The build files will be located in the `dist` directory.

## 🔄 Game Logic

The game follows these key steps:

1. Users select game parameters via the form component
2. Random emojis are selected based on the chosen category
3. Each emoji is included twice and the array is shuffled
4. Players click cards to reveal emojis
5. The game tracks selected and matched cards
6. When all pairs are matched, the game displays a victory screen


## 📝 License

[MIT](LICENSE)

## 👨‍💻 Author

Created by Nuel Ezeiruaku

Feel free to contribute to this project by opening issues or submitting pull requests!
