# SecureComm - Dokumentation

## 1. Projekt-Setup & Struktur

### 1.1 Repository & Code-Organisation

**Repository:** SecureComm  
**Struktur:**
```
/SecureComm
├── frontend/               # React UI mit Tailwind CSS & React Router
├── backend/                # Node.js (NestJS oder Express)
├── infrastructure/         # Terraform & Kubernetes Deployment
├── scripts/                # Automatisierungs-Skripte
├── docs/                   # Dokumentation
├── .github/workflows/      # CI/CD-Pipelines
├── .gitignore              # Ausschluss von sensiblen Daten
├── README.md               # Projektdokumentation
```
**Projektmanagement:** GitHub Issues & Kanban Board für agile Entwicklung.

---

## 2. Frontend Einrichtung

### 2.1 React-Projekt initialisieren
Falls noch nicht geschehen, erstelle das React-Projekt im `frontend`-Ordner:
```bash
npx create-react-app frontend
cd frontend
```
Falls TypeScript nicht gewünscht ist:
```bash
npx create-react-app frontend --use-npm
```

### 2.2 Unnötige Dateien entfernen
Lösche nicht benötigte Standarddateien:
```bash
rm -rf src/App.css src/App.test.js src/logo.svg src/setupTests.js src/reportWebVitals.js
```

### 2.3 Projektstruktur anpassen
Navigiere in den `frontend`-Ordner und erstelle die grundlegende Ordnerstruktur:
```bash
mkdir -p src/components src/pages src/hooks src/utils src/assets
```
**Erklärung der Ordner:**
- `components/` → Wiederverwendbare UI-Komponenten (z. B. Buttons, Modals)
- `pages/` → Hauptseiten der App (z. B. Login, Chat, Video-Call)
- `hooks/` → Eigene React Hooks (z. B. `useWebRTC`)
- `utils/` → Hilfsfunktionen (z. B. Formatierungen, API-Calls)
- `assets/` → Bilder, Icons, Styles

---

## 3. Tailwind CSS einrichten

### 3.1 Tailwind installieren
Navigiere in den `frontend`-Ordner und installiere Tailwind CSS mit den benötigten Abhängigkeiten:
```bash
npm install -D tailwindcss postcss autoprefixer
```
Initialisiere Tailwind:
```bash
npx tailwindcss init
```

### 3.2 Tailwind konfigurieren
Öffne `tailwind.config.js` und stelle sicher, dass die `content`-Option korrekt ist:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 3.3 Tailwind in `index.css` integrieren
Öffne `src/index.css` und füge die folgenden Tailwind-Direktiven hinzu:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3.4 Testen
Erstelle eine Testkomponente in `src/App.js`, um zu überprüfen, ob Tailwind funktioniert:
```jsx
import React from "react";

function App() {
  return (
    <div className="bg-green-500 text-white p-10 text-3xl font-bold">
      Tailwind funktioniert! 🎉
    </div>
  );
}

export default App;
```
Starte das Projekt:
```bash
npm start
```
Wenn die Seite einen grünen Hintergrund hat, ist Tailwind erfolgreich installiert.

---

## 4. React Router einrichten

### 4.1 Installation von React Router
Navigiere in den `frontend`-Ordner und installiere `react-router-dom`:
```bash
npm install react-router-dom
```

### 4.2 Router in der App konfigurieren
Bearbeite die Datei `src/App.js`, um die Navigation zu ermöglichen:
```jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### 4.3 Neue Seite für den Chat erstellen
Erstelle die Datei `src/pages/Chat.jsx`:
```bash
touch src/pages/Chat.jsx
```
Füge folgenden Code ein:
```jsx
import React from "react";

const Chat = () => {
  return (
    <div>
      <h1>Chat</h1>
      <p>Hier wird die sichere Kommunikation stattfinden.</p>
    </div>
  );
};

export default Chat;
```

### 4.4 Navigation hinzufügen
Aktualisiere `src/pages/Home.jsx`, um eine Navigation zu ermöglichen:
```jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Willkommen bei SecureComm</h1>
      <p>Dezentrale, sichere Kommunikation.</p>
      <Link to="/chat">Zum Chat</Link>
    </div>
  );
};

export default Home;
```

### 4.5 Testen
Starte das Projekt und überprüfe, ob die Navigation funktioniert:
```bash
npm start
```

- `http://localhost:3000/` → Home-Seite
- `http://localhost:3000/chat` → Chat-Seite

Die Navigation im Frontend ist nun eingerichtet und bereit für weitere Features.

