# SecureComm – Erweiterter Projektplan (Upgrade)

## Ziel
Die Erweiterung von SecureComm verfolgt das Ziel, eine dezentrale, sichere Kommunikationsplattform bereitzustellen, bei der die Peer-to-Peer-Verbindung nach initialer Vermittlung über einen Server vollständig direkt erfolgt. Das System soll leistungsstarke Video- und Datenübertragungen ermöglichen, ohne Bandbreiten- oder Speicherrestriktionen durch zentrale Server. Zudem wird ein modernes DevOps-Setup mit CI/CD, Infrastrukturautomatisierung, Tests und Monitoring etabliert.

---

## Erweiterte Anforderungen

### 1. Peer-basierte Qualitätskontrolle für Medienstreams
- **Jeder Peer kann individuell einstellen:**
  - Auflösung (z. B. 720p, 1080p, 4K)
  - Framerate (30, 60, 120 fps)
  - Bitrate (z. B. 2.000–80.000 kbit/s)
- UI-Komponente zur Qualitätsauswahl pro Verbindung
- Dynamisches Umschalten der Übertragungsqualität während laufender Verbindung
- Qualitätsanpassung nach Verbindungsstatus (z. B. schwache Verbindung = automatische Reduktion)

### 2. Bandbreiten- & Verbindungserkennung
- Anzeige der aktuellen Upload- & Download-Geschwindigkeit pro Peer
- Nutzung von:
  - WebRTC `getStats()` zur Verbindungsauswertung
  - Netzwerk-API `navigator.connection` (sofern unterstützt)
- Bandbreitendiagramm und farbliche Bewertung (grün = gut, gelb = mittel, rot = kritisch)

### 3. Datentransfer-Vorschau & Speichercheck
- Vor jeder Datei-/Ordner-Übertragung:
  - Vorschau der Dateigröße
  - Lokaler Speicherplatz wird abgefragt (sofern möglich, z. B. mit FileSystem Access API oder nativem Zugriff)
  - Bestätigungsdialog: Datei akzeptieren oder ablehnen
- Optional: automatische Annahme für bekannte Kontakte oder nach Benutzerregel
- Fortschrittsanzeige mit Cancel-Möglichkeit

### 4. Kommunikationsaufbau
- Zentrale Plattform übernimmt:
  - OAuth2-Login & Registrierung
  - Authentifizierungs-Token-Management
  - Kontakte/Kontaktanfragen, Blockieren, Statusabfrage
  - Vermittlung initialer Peer-Verbindungen (Signalisierungsserver)
- Kommunikation anschließend:
  - Peer-to-Peer via WebRTC/libp2p/TOX
  - Ende-zu-Ende-verschlüsselt (z. B. X25519, NaCl, libsodium)

---

## Technologischer Stack

| Komponente         | Technologie                                     |
|-------------------|--------------------------------------------------|
| **Frontend**      | React + Tailwind CSS                            |
| **P2P-Kommunikation** | WebRTC + DataChannels, später evtl. TOX/libp2p |
| **Backend**       | Node.js + Express (OAuth2, Vermittlung)         |
| **Authentifizierung** | OAuth2 (Google, GitHub)                         |
| **CI/CD**         | GitHub Actions + Docker + Kubernetes (Helm)     |
| **Infrastructure as Code** | Terraform (AWS S3, EC2, RDS, EKS)                  |
| **Monitoring**    | Prometheus + Grafana + Loki/ELK                 |
| **Testing**       | Jest, React Testing Library, Supertest          |

---

## DevOps-Aspekte

### CI/CD Pipelines (GitHub Actions)
#### Frontend:
- Format- & Lint-Checks (Prettier, ESLint)
- Unit & Integration Tests (React Testing Library)
- Build über Docker
- Deployment auf AWS S3 + CloudFront mit Versionierung

#### Backend:
- Code-Linting, Tests (Jest, Supertest)
- Sicherheits-Checks mit `npm audit`, `snyk`
- Docker-Image Build & Push (ECR oder DockerHub)
- Helm-basierter Rollout in Kubernetes Cluster (EKS)

### Infrastrukturautomatisierung (IaC)
- Terraform Modules für:
  - S3 Buckets (Frontend Hosting)
  - RDS Instanz für Benutzerdaten
  - EKS Cluster für skalierbare Services
  - EC2 Server für Signalisierungsdienste & TURN
- Deployment über `terraform apply` – integriert in CI/CD Pipeline

### Monitoring & Logging
- Prometheus zur Metrikerfassung (Verbindungsdauer, Qualität, Bandbreite)
- Grafana Dashboards für:
  - Echtzeitverbindungen
  - Authentifizierungen & Logins
  - Systemlast der Instanzen
- Logging via Loki oder ELK Stack (Elasticsearch, Logstash, Kibana)
- Alerts über Grafana + Slack/Mail/Webhook

### Tests & Sicherheit
- **Frontend:** Jest + React Testing Library + Cypress für E2E
- **Backend:** Supertest + Jest + Integrationstests gegen Dev-Datenbank
- **Security Testing:** OWASP-Zap Proxy, Dependency Scans (Snyk, npm audit)
- Penetration-Tests geplant vor Launch (Phase 7)

---

## UI-Komponenten
- `ConnectionSettings.jsx`: Video-/Audioqualität und Verbindungsüberblick
- `NetworkStats.jsx`: Bandbreitenanzeige & Qualitätsstatus
- `TransferPreview.jsx`: Dateiinfo + Speichercheck + Downloadzustimmung
- `ContactList.jsx`: Kontakte verwalten & Verbindungen initiieren
- `ChatWindow.jsx`: Nachrichten, Datei- & Medienversand

---

## Plattformstrategie & Verfügbarkeit

SecureComm wird als **plattformentsprechende App bereitgestellt**, sowohl für Desktop- als auch Mobile-Systeme:

- Web-App (PWA-fähig)
- Desktop-App (Electron)
- Mobile-Apps (React Native oder Flutter)
- App-Distribution über:
  - ✅ Offizielle Webseite (Registrierung nötig)
  - ✅ Google Play Store
  - ✅ Apple App Store

### Registrierung & Download-Strategie
- Anwendung ist nur nach Registrierung via OAuth2 (Google, GitHub, etc.) zugänglich
- Registrierung erfolgt entweder direkt auf der Webseite oder in der App
- Nach erfolgreichem Login wird die Anwendung zum Download bereitgestellt
- ✅ Vorteil: Schützt vor massenhaften, automatisierten Downloads zur Sabotage der Serverstruktur

---

## Datenschutz, App Store-Konformität & Einschränkungen

### Datenschutz & Datensparsamkeit
- Die Anwendung erhebt **nur die OAuth2-Registrierungsdaten**, die für das jeweilige Profil notwendig sind
- Es werden **keine Chat-, Video-, Datei- oder Verbindungsinhalte gespeichert oder analysiert**
- Keine temporäre Speicherung auf dem Server, Kommunikation ist ausschließlich Peer-to-Peer nach initialer Vermittlung

### Kontaktbasierte Verbindung
- Eine Verbindung zwischen zwei Nutzern ist **nur möglich, wenn beide eine bestätigte Kontaktanfrage** vorweisen
- So wird **Missbrauch (z. B. durch Spam oder ungewollten Kontakt)** unterbunden

### Apple-spezifische Einschränkungen (iOS)
- Aufgrund möglicher **App Store-Einschränkungen** auf iOS-Geräten:
  - **Dateiübertragungen können auf Wunsch deaktiviert** werden
  - Stattdessen erscheint die Meldung:
    > "Apple verhindert unkontrollierten Datenaustausch"
- Damit ist NoSpices vollständig **Store-konform und transparent** gegenüber Apple-Nutzern

### Verbindungsunterbrechung mit Feedback
- Wenn ein Teilnehmer nicht mehr sendet oder erreichbar ist, wird dies im Interface **verständlich erklärt** (z. B. „Teilnehmer sendet nicht mehr“)

---

## Monetarisierung & Traffic-Finanzierung

### Werbung als Einnahmequelle
- Alle Nutzer sehen standardmäßig einen **dezenten Werbestreifen**, ähnlich wie bei Yahoo Mail
- Die Werbung:
  - Ist **nicht personalisiert**, da keine Nutzerdaten erhoben werden
  - Wird **ausschließlich im Interface angezeigt**, nicht in der Kommunikation

### Werbefrei durch Abo-Modell
- Für **0,50 $ pro Monat** kann Werbung dauerhaft deaktiviert werden
- Die Zahlung erfolgt **über Apple In-App Purchase (IAP)** bzw. **Google Billing API** je nach Plattform
- Es gibt **keine weiteren Einschränkungen** – alle Features sind auch im freien Zugang enthalten

### Nachhaltige Finanzierung
- Die Werbung + Abo-Modell finanzieren die **AWS/Azure-Infrastrukturkosten**
- Kein Verkauf, Export oder Analyse von Nutzer- oder Verkehrsdaten
- Die Privatsphäre der Nutzer bleibt vollständig gewahrt

---

## Projektphasen (ergänzt)

| Phase | Ziel | Dauer |
|-------|------|-------|
| **1** | Repository + CI/CD + Terraform Setup | 1 Woche |
| **2** | OAuth2-Login & Nutzerverwaltung | 1 Woche |
| **3** | UI: Verbindungsübersicht + Peer-Steuerung | 1 Woche |
| **4** | WebRTC Verbindung + Video/Chat | 2 Wochen |
| **5** | Dateiübertragung + Transfer-Vorschau | 2 Wochen |
| **6** | Netzwerkstatus & Qualitätsanpassung | 1 Woche |
| **7** | Kubernetes-Rollout & Monitoring | 1 Woche |
| **8** | Sicherheitstests + Beta-Launch | 2 Wochen |

---

## Fazit
Mit dem erweiterten Plan wird SecureComm zur hochmodernen P2P-Kommunikationsplattform, die sich durch Sicherheit, Leistung und Dezentralität auszeichnet. Das Projekt ist stark DevOps-orientiert und technisch anspruchsvoll – bietet aber maximale Kontrolle und Privatsphäre für die Nutzer.

**Nächster Schritt:** Entscheidung, ob bestehendes React-Projekt genutzt oder neu aufgesetzt wird – und Start der OAuth2-Anbindung.

Let’s build it. 🚀

