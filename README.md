# BugBusters Startup 2



Welcome to the **BugBusters Startup 2** repository, a dynamic platform designed to revolutionize gaming experiences with cutting-edge features, detailed game listings, and a seamless user experience. This project is the collaborative effort of the talented **YouCode Class E 2024-2025** team.

## 📖 Overview

BugBusters Startup 2 is a gaming platform that provides users with an engaging way to browse, view, and purchase games. The platform integrates responsive design, local storage management, and dynamic rendering to ensure smooth operation and an immersive gaming marketplace experience.

### Key Features:
- **Dynamic Game Listings**: Games are dynamically displayed with details like title, price, discounts, and descriptions.
- **Image Carousel**: Users can browse game images via an interactive and responsive carousel.
- **Purchase Options**: Supports adding games to the cart or directly purchasing them with an auto-generated receipt in PDF format.
- **Local Storage Integration**: Game data and user selections are managed persistently in the browser using `localStorage`.
- **Responsive Design**: A user-friendly interface optimized for various screen sizes.

---

## 🚀 Project Structure

```
📂 BugBusters_startup2
├── 📁 assets          # Contains images, logos, and static resources, game details
│    └── 📂 css  # Modular UI components (styling)
│         └── 📜 output.css  # Styling for the application
├── 📜 index.html      # Main entry point for the app, carousel
├── 📜 README.md       # Documentation
└── 📜 package.json    # Dependencies and project metadata
```

---

## 🎯 Goals and Vision

The **BugBusters Startup 2** project aims to:
1. **Simplify Gaming Purchases**: Provide a streamlined process for browsing and buying games.
2. **Enhance User Engagement**: Use responsive and visually appealing elements to make gaming exploration enjoyable.
3. **Showcase Team Collaboration**: Reflect the collaborative spirit of the **YouCode Class E 2024-2025** team by creating a robust and well-documented project.

---

## 🔑 Core Features

### Dynamic Game Details
- Game details are fetched and displayed dynamically using `localStorage` and `URLSearchParams`.
- Each game page includes title, platform, edition, bonuses, and pricing details.

### Interactive Image Carousel
- Scrollable and animated carousel for showcasing multiple images per game.
- Smooth navigation with `next` and `prev` buttons.

### Purchase System with Receipt
- Clicking "Buy Now" generates a downloadable PDF receipt for the user.
- Receipt includes the game's title and price, simulating a real purchase experience.

### Local Storage Management
- All game data is stored and retrieved using `localStorage`, ensuring persistent user data.

### Fully Responsive Design
- Developed with Tailwind CSS for modern and adaptive layouts.

---

## 🛠️ Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Youcode-Classe-E-2024-2025/BugBusters_startup2.git
   cd BugBusters_startup2
   ```

2. **Install Dependencies**:
   If using Node.js, install dependencies (if applicable):
   ```bash
   npm install
   ```

3. **Run Locally**:
   Open `index.html` in your browser using a local server or file explorer.

4. **External Libraries**:
   - **jsPDF**: Used for PDF generation.
   - **Tailwind CSS**: For responsive design.

---

## 👥 Contributors and Roles

| Contributor       | Role                          | Description                              |
|-------------------|-------------------------------|------------------------------------------|
| **Achraf Sikal**    | Lead Developer               | Manages repository and feature development. |
| **Hamza Atig** | UI/UX         | Designs responsive and user-friendly interfaces. |
| **hassan belaqdour**  | Developers and Testers        | Develops features, fixes bugs, and ensures quality. |
| **tawba zf**  | Developers and Testers        | Develops features, fixes bugs, and ensures quality. |
| **Zakariae El Hassad**  | Developers and Testers        | Develops features, fixes bugs, and ensures quality. |

[See all contributors](https://github.com/Youcode-Classe-E-2024-2025/BugBusters_startup2/graphs/contributors)

---

## 💡 Future Enhancements

- **Payment Gateway Integration**: Connect with APIs for real-world transactions.
- **User Profiles**: Add account management features.
- **Search and Filter**: Enable users to search and filter games dynamically.
- **Backend Integration**: Replace `localStorage` with a database for scalability.

---

## 📝 License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it. See the [LICENSE](LICENSE) file for details.

---

## 📫 Contact

For questions, feedback, or collaboration inquiries:
- **Achraf Sikal**: [GitHub Profile](https://github.com/achraf-sik)
- **Zakariae El Hassad**: [GitHub Profile](https://github.com/zakariae-elhassad)
- **Atig Hamza**: [GitHub Profile](https://github.com/Atig-Hamza)
