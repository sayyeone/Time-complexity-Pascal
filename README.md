# Pascal Triangle Time Complexity Visualizer

A web-based visualization tool that compares **iterative** and **recursive** approaches for generating Pascal's Triangle. This project demonstrates how different algorithmic strategies can produce identical outputs while exhibiting vastly different performance characteristics as input size increases.

Pascal's Triangle serves as an excellent case study in algorithm courses due to its simple recursive definition and clear connection to computational complexity. This visualizer makes abstract time complexity concepts tangible by showing real-time performance differences between implementations.

## About the Project

Pascal's Triangle has an elegant recursive definition that makes it intuitive to implement with recursion. However, this approach suffers from repeated calculations of identical subproblems, leading to exponential time complexity that quickly becomes impractical for larger inputs.

This application places **iterative** and **recursive** implementations side by side. Both receive the same input and generate identical triangles, but their performance behaviors diverge dramatically. This comparison helps illustrate why algorithmically "elegant" solutions aren't always practical in real-world scenarios.

The interface intentionally stays minimal to keep focus on algorithmic behavior rather than visual flourish.

## What This Application Does

- Generate Pascal's Triangle dynamically by selecting row count
- Compare iterative vs recursive implementations in real-time
- Visualize time complexity growth as input increases
- Make the difference between **O(n²)** and **O(2ⁿ)** intuitive and observable

The goal isn't precise benchmarking, but rather conceptual understanding of algorithm efficiency through visual comparison.

## Tech Stack

Built with a modern, lightweight frontend stack:
- **React** – UI framework
- **Vite** – development and build tool
- **Tailwind CSS** – utility-first styling
- **Recharts** – complexity growth visualization

This stack prioritizes speed, readability, and maintainability.

## Project Structure

The codebase follows clean separation of concerns common in React projects:
- **Pages** – main view definitions
- **Sections** – logical interface groupings
- **Components** – reusable UI elements
- **Algorithms** – pure implementation logic
- **Utils** – helper functions for complexity calculations

This structure makes algorithm comparisons explicit while keeping UI code clean.

## How to Run

Clone the repository:
```bash
git clone https://github.com/sayyeone/Time-complexity-Pascal
cd Time-complexity-Pascal
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

## Key Features

- **Side-by-side comparison** – See both implementations simultaneously
- **Visual time complexity graphs** – Understand growth rates intuitively
- **Interactive input** – Test different row counts in real-time
- **Educational focus** – Designed for learning, not just demonstration

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests if you have ideas for improvements or find bugs.

## License

This project is open source and available under the MIT License.
