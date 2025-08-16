

# 🎸 Online Guitar Shop

An interactive **React + Apollo Client** application that showcases a guitar shop experience powered by a **GraphQL API**.

This project was built as part of an internship application to demonstrate skills in **frontend development, GraphQL data fetching, React state management, and UI design**.

🔗 **API**: [GraphQL Endpoint](https://graphql-api-brown.vercel.app/api/graphql)
🎨 **Design Reference**: [*Figma link here*](https://www.figma.com/design/Q9sgkZlKkPIkiX3eRSKCJP/Design-Task?node-id=1-2&p=f&t=fXfaLNyNsylZJWVY-0)

---

## 📖 Features

### 🔹 Page 1 – Guitar Brands

* Fetches and displays all guitar brands.
* Clicking a brand navigates to its models page.

### 🔹 Page 2 – Guitar Models

* Displays models for the selected brand.
* **Search bar** to filter models by name.
* **Filter** to narrow by guitar type.
* **Pagination** (with optional infinite scroll as a bonus).
* Clicking a model navigates to the details page.

### 🔹 Page 3 – Guitar Details

* **Specification Tab** – Displays guitar specifications.
* **Musicians Tab** – Lists musicians who play the guitar (2 per view, with navigation dots).

---

## ⚙️ Tech Stack

* **React** (functional components + hooks)
* **Apollo Client** (GraphQL queries & caching)
* **React Router** (page navigation)
* **CSS** (custom styling for tabs, layouts, carousel)
* Responsive, clean UI with loading/error handling

---


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/online-guitar-shop.git
cd online-guitar-shop
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

App runs on `http://localhost:3000`

---

