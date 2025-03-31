# 💰 Finanzierungsmodell & Werbestrategie für NoSpices

## Ziel
NoSpices soll sich durch eine **nachhaltige, faire und datenschutzfreundliche Finanzierung** tragen. Dabei werden keine Nutzerverhaltensdaten erhoben oder gespeichert. Die Kosten für Infrastruktur (z. B. AWS oder Azure) sollen durch dezente Werbung und ein freiwilliges Abo-Modell gedeckt werden.

---

## 📦 Werbestrategie: Privacy-first

### Eingesetzte Netzwerke (empfohlen)
| Anbieter       | Beschreibung                          | Trackingfrei | Abrechnung        |
|----------------|----------------------------------------|---------------|-------------------|
| **EthicalAds** | Textbasierte Werbung für Entwickler     | ✅ Ja         | CPM (pro 1000 Impressions) |
| **Carbon Ads** | Hochwertige Anzeigen für Tech-Zielgruppen | ✅ Ja         | Pauschale oder CPM |

- Die Werbeeinblendung erfolgt **ohne Cookies, ohne IP-Tracking, ohne personalisierte Daten**.
- Die Einbindung erfolgt über ein einfaches `<iframe>` oder `<script>`-Snippet im UI.
- **Zählung & Abrechnung übernimmt das Werbenetzwerk selbst** – NoSpices muss keine Daten erfassen.

### Alternative: Eigene Sponsoren
- Werbung kann auch **direkt mit Partnern/Sponsoren** vereinbart werden.
- Beispiel: NGOs, Bildungsinitiativen, Open-Source-Projekte.
- Abrechnung erfolgt **zeitbasiert oder pauschal** – z. B. „50 €/Monat für feste Werbeplatzierung“.

### Positionierung der Werbung
- Dezenter Werbeblock im UI, z. B. am unteren Rand („wie Yahoo Mail“)
- Kein Einfluss auf Kernfunktionen wie Chat, Video oder Dateiübertragung
- Werbeblock ist klar als **„Anzeige“** gekennzeichnet

---

## 🧾 Einnahmenmodell

### Standardnutzung (kostenlos)
- Alle Nutzer sehen den Werbeblock
- Keine Funktionseinschränkungen

### Premium-Modell (werbefrei)
- Für **0,50 $ / Monat** (In-App-Kauf über Apple/Google)
- **Vorteile:**
  - Keine Werbung
  - Volle Funktionalität wie in der kostenlosen Version
- Abwicklung über:
  - **Google Play Billing API**
  - **Apple In-App Purchase (IAP)**

---

## 🔒 Datenschutz & Rechtssicherheit
- Keine Nutzertracking-Technologien (kein Google Analytics, keine Cookies)
- DSGVO-konform: Keine personenbezogenen Daten werden zu Werbezwecken erfasst
- Werbung wird ausschließlich **über externe, datenschutzkonforme Partner** eingebunden
- Kein Weiterverkauf oder Export von Nutzerdaten

---

## 📈 Reporting & Abrechnung
- NoSpices speichert keine Interaktionsdaten mit Werbung
- **Das Werbenetzwerk selbst übernimmt die Abrechnung**:
  - Anzahl Einblendungen (Impressions)
  - Einnahmen pro Periode (z. B. Woche, Monat)
- Berichte werden vom Anbieter bereitgestellt (z. B. EthicalAds Dashboard)

---

## Fazit
Das Finanzierungsmodell von NoSpices setzt auf Transparenz, Fairness und Datenschutz. Werbefinanzierung und Premium-Option ermöglichen den nachhaltigen Betrieb der Plattform – ohne Kompromisse bei der Privatsphäre der Nutzer.
