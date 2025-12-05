
# API Contracts

## 1. Contact Form Submission
**Endpoint:** `POST /api/contact`
**Description:** Stores contact form inquiries in the database.
**Request Body:**
```json
{
  "name": "John Doe",
  "phone": "+91 9999999999",
  "email": "john@example.com",
  "requirement_type": "General Inquiry",
  "message": "I need 50 printers."
}
```
**Response:**
```json
{
  "id": "unique_id",
  "message": "Inquiry received successfully",
  "timestamp": "2023-10-27T10:00:00Z"
}
```

## 2. Newsletter Subscription
**Endpoint:** `POST /api/newsletter`
**Description:** Subscribes an email to the newsletter.
**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```
**Response:**
```json
{
  "id": "unique_id",
  "message": "Subscribed successfully",
  "timestamp": "2023-10-27T10:00:00Z"
}
```

## Data Models (MongoDB)

**Collection:** `contact_inquiries`
- name (str)
- phone (str)
- email (str)
- requirement_type (str)
- message (str)
- created_at (datetime)

**Collection:** `newsletter_subs`
- name (str)
- email (str)
- created_at (datetime)
