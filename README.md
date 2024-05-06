# Moment 4.1 för registrering och inloggning

# Beskrivning
Denna webbtjänst är en enkel autentiseringsserver för registrering och inloggning av användare. Den är skriven med Node.js och Express.js och använder en MongoDB-databas för att lagra användarinformation. Autentiseringen är baserad på JSON Web Tokens (JWT).

# Installation
Klona eller ladda ner koden från GitHub.
Installera Node.js.
Installera projektets beroenden genom att köra kommandot npm install.
Skapa en fil med namnet .env i rotmappen och konfigurera variablerna enligt din konfiguration.

# Variabler
Följande variabler måste konfigureras i filen .env:

DATABASE=[MongoDB URI]
PORT=[Server port]
JWT_SECRET_KEY=[Din JWT hemliga nyckel]

# Användning

1. Registrering
Metod: POST
URI: /api/register
Beskrivning: Skapar en ny användare med angivet användarnamn och lösenord.

2. Inloggning
Metod: POST
URI: /api/login
Beskrivning: Autentiserar en användare med angivet användarnamn och lösenord och utfärdar en JWT-token.

3. Åtkomst till Skyddade Resurser
Metod: GET
URI: /api/secret
Beskrivning: Tillhandahåller åtkomst till en skyddad resurs genom autentisering med en giltig JWT-token.