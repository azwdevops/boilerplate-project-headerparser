# Request Header Parser Microservice

This is a simple API that returns information about the client making the request, including IP address, preferred language, and software details.

## API Endpoint

### `GET /api/whoami`

---

### Behavior

- Returns a JSON object with the following keys:
  - `ipaddress`: The IP address of the client
  - `language`: The preferred language of the client (from `Accept-Language` header)
  - `software`: Information about the client's software (from `User-Agent` header)

---

## Example Response

```json
{
  "ipaddress": "159.20.14.100",
  "language": "en-US,en;q=0.5",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
}
```

---

## How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/azwdevops/boilerplate-project-headerparser.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. Visit:
   ```
   http://localhost:3000/api/whoami
   ```

---

## Notes

- The IP address, language, and software information are extracted directly from the request headers.

---
