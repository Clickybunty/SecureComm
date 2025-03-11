# SecureComm - Projektplan

## Ziel
Eine sichere, Ende-zu-Ende-verschlüsselte Kommunikationsplattform mit Text-, Sprach- und Video-Kanälen, gehostet auf AWS mit Kubernetes, Terraform und CI/CD-Pipelines.

---

## 1. Projekt-Setup & Struktur

### 1.1 Repository & Code-Organisation (GitHub Public)

**Repository:** SecureComm  
**Struktur:**
```
/SecureComm
├── frontend/               # React UI mit WebRTC
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

## 2. Funktionale Anforderungen

### 2.1 Benutzerverwaltung & Authentifizierung
- Anmeldung/Registrierung mit JWT oder OAuth2 (Google, GitHub, Keycloak)
- Ende-zu-Ende-verschlüsselte Key-Paare für sichere Chats (NaCl / Signal-Protokoll)
- Verifizierung über QR-Code oder Schlüsselabgleich, um Man-in-the-Middle-Angriffe zu verhindern

### 2.2 Text-Chats & Gruppenkommunikation
- Ende-zu-Ende-verschlüsselte Chats (NaCl/libsodium)
- Selbstzerstörende Nachrichten (optional)
- Gruppen-Chats mit Rollen & Rechten (Admins, Moderatoren, Teilnehmer)

### 2.3 Sprach- und Video-Kanäle (WebRTC)
- Peer-to-Peer-Verbindung (P2P) via WebRTC, verschlüsselt mit DTLS/SRTP
- Fallback auf TURN-Server, falls P2P nicht funktioniert
- Echtzeit-Kommunikation mit niedriger Latenz

### 2.4 Infrastruktur & Sicherheit
- Kein zentraler Server speichert Nachrichten oder Medien
- Kubernetes-basierte Infrastruktur auf AWS für Skalierbarkeit
- Logging & Monitoring mit Grafana & Prometheus
- AWS Load Balancer, Auto-Scaling, CloudFront (für WebRTC Signalisierung)

---

## 3. Technologie-Stack

| Bereich              | Technologie |
|----------------------|------------|
| **Frontend**        | React + WebRTC |
| **Backend**         | Node.js (NestJS oder Express) |
| **Datenbank**       | PostgreSQL (AWS RDS) oder dezentrale DB (OrbitDB) |
| **Verschlüsselung** | NaCl/libsodium, Signal-Protokoll |
| **CI/CD**          | GitHub Actions, Docker, Kubernetes |
| **Cloud**          | AWS EC2, S3, RDS, CloudFront, EKS |
| **Infrastructure as Code** | Terraform |
| **Monitoring**     | Prometheus, Grafana |

---

## 4. Architektur & Infrastruktur

### 4.1 Infrastruktur-Komponenten (AWS + Kubernetes + Terraform)
- **Frontend:** React-App gehostet auf AWS S3 + CloudFront (CDN für schnelle Auslieferung)
- **Backend:** Node.js/Express gehostet auf AWS EKS (Kubernetes Cluster)
- **Datenbank:** PostgreSQL gehostet in AWS RDS, verschlüsselte Speicherung
- **WebRTC Signalisierungsserver:** Node.js/Socket.io in Kubernetes mit Load Balancer
- **TURN/STUN-Server:** Coturn auf AWS EC2
- **Secrets Management:** AWS Secrets Manager
- **CI/CD mit GitHub Actions:** Automatische Tests, Builds und Deployments

### 4.2 Kubernetes-Setup mit Terraform
- Terraform-Skripte für automatisierte Bereitstellung der Infrastruktur:
  - AWS EKS-Cluster für Kubernetes
  - AWS RDS für PostgreSQL
  - AWS S3 für statische Inhalte (Frontend)
  - AWS CloudFront für optimierte Latenz
  - Helm-Charts für Kubernetes-Deployment

---

## 5. Entwicklungsphasen & Meilensteine

| Phase | Ziel | Dauer |
|-------|------|-------|
| **Phase 1** | GitHub Repo, CI/CD Pipeline, Terraform AWS Setup | 1-2 Wochen |
| **Phase 2** | Benutzerverwaltung (JWT Auth, Registrierung/Login) | 2 Wochen |
| **Phase 3** | Text-Chats & Gruppenkommunikation | 2 Wochen |
| **Phase 4** | WebRTC Sprach & Video (TURN-Server) | 2-3 Wochen |
| **Phase 5** | Kubernetes Deployment auf AWS EKS | 2 Wochen |
| **Phase 6** | Logging & Monitoring (Prometheus, Grafana) | 1 Woche |
| **Phase 7** | Testing & Security Checks | 2 Wochen |
| **Phase 8** | Beta-Launch & Feedback | 3 Wochen |

---

## 6. Sicherheitsmaßnahmen
- ✅ Ende-zu-Ende-Verschlüsselung für Nachrichten (NaCl/Sodium)
- ✅ WebRTC mit DTLS/SRTP für sichere Sprach- und Videochats
- ✅ Zero-Trust-Prinzip: Keine zentralen Logs mit Klartextdaten
- ✅ Penetration-Testing für Sicherheitslücken (z. B. OWASP Top 10)

---

## 7. CI/CD-Workflow mit GitHub Actions

### Frontend CI/CD:
- Linter & Unit-Tests für React
- Docker-Container Build
- Deployment auf AWS S3 + CloudFront

### Backend CI/CD:
- Unit & Integration Tests
- Sicherheitschecks (z. B. Dependency Scans)
- Deployment in Kubernetes mit Helm

---

## 8. Deployment-Prozess
- Terraform initialisiert Infrastruktur auf AWS
- Kubernetes-Cluster (EKS) wird provisioniert
- Datenbank (RDS) wird erstellt
- Frontend & Backend werden mit CI/CD deployed
- WebRTC TURN-Server wird aufgesetzt
- Monitoring & Logging mit Grafana & Prometheus

---

## Nächste Schritte
- ✅ GitHub Repository anlegen & erste Commits pushen
- ✅ Terraform-Skripte für AWS-Setup schreiben
- ✅ Kubernetes-Cluster & CI/CD-Pipeline einrichten
- ✅ Erste Version des Frontends & Backends erstellen
- ✅ Verschlüsselung & Sicherheit testen

