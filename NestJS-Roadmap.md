# 🚀 Roadmap Belajar NestJS (15 Pertemuan)

> **Target Akhir:**
> Bisa bikin REST API production-ready dengan JWT Auth, Prisma + PostgreSQL, RBAC, Upload File, dan Struktur Project Profesional.

---

## 📋 Ringkasan Pertemuan

| # | Topik | Hasil |
|---|-------|-------|
| 1 | Pengenalan NestJS & Arsitektur | Paham `main.ts`, Module, Controller, Service |
| 2 | Controller & Routing | Bisa membuat endpoint sendiri |
| 3 | Dependency Injection | Mengerti kenapa service dipisah dari controller |
| 4 | Module | Paham cara memecah aplikasi besar |
| 5 | DTO & Validation | Request tervalidasi otomatis |
| 6 | Database dengan Prisma | NestJS tersambung ke database |
| 7 | CRUD Database | CRUD database penuh |
| 8 | Authentication JWT | User bisa login dan mendapatkan token |
| 9 | Guard & Protected Route | Memahami AuthGuard |
| 10 | Role Based Access Control | Membatasi akses berdasarkan role |
| 11 | Exception Filter & Error Handling | Response error yang konsisten |
| 12 | Middleware, Pipe, Interceptor | Mengerti alur request NestJS secara utuh |
| 13 | File Upload | Bisa upload file ke server |
| 14 | Struktur Project Enterprise | Struktur seperti project perusahaan |
| 15 | Mini Project Akhir | Course Marketplace API |

---

## 🧱 Fase 1 — Fondasi (Pertemuan 1–5)

### Pertemuan 1 — Pengenalan NestJS & Arsitektur

**Teori:**
- Apa itu NestJS
- Kenapa perusahaan suka NestJS
- NestJS vs Express
- Dependency Injection
- Request Lifecycle

**Praktik:**
- Install NestJS CLI
- Generate project pertama

**Hasil:** Paham struktur dasar:
```
main.ts → Module → Controller → Service
```

---

### Pertemuan 2 — Controller & Routing

**Teori:**
- Decorator
- Routing di NestJS

**Praktik:** CRUD sederhana
```
GET    /users
GET    /users/:id
POST   /users
PATCH  /users/:id
DELETE /users/:id
```

**Hasil:** Bisa membuat endpoint sendiri.

---

### Pertemuan 3 — Dependency Injection

**Teori:**
- Provider
- `@Injectable()`
- Dependency Injection

**Praktik:**
```
UserController
     ↓
UserService
```

**Hasil:** Mengerti kenapa service dipisah dari controller.

---

### Pertemuan 4 — Module

**Teori:**
- Feature Module
- `imports` / `exports`

**Praktik:** Membuat:
- `UserModule`
- `AuthModule`

**Hasil:** Paham cara memecah aplikasi besar.

---

### Pertemuan 5 — DTO & Validation

**Teori:**
- DTO (Data Transfer Object)
- `ValidationPipe`

**Praktik:**
- `CreateUserDto`
- `UpdateUserDto`

Validasi field: `email`, `password`, `name`

**Hasil:** Request tervalidasi otomatis.

---

## 🗄️ Fase 2 — Database & Auth (Pertemuan 6–10)

### Pertemuan 6 — Database dengan Prisma

**Teori:**
- ORM
- Prisma

**Praktik:**
```bash
npm install prisma @prisma/client
```
- Setup database PostgreSQL
- Jalankan `prisma migrate`

**Hasil:** NestJS tersambung ke database.

---

### Pertemuan 7 — CRUD Database

**Praktik:** Entity: `User`

Implementasi menggunakan Prisma:
- Create User
- Get User
- Update User
- Delete User

**Hasil:** CRUD database penuh.

---

### Pertemuan 8 — Authentication JWT

**Teori:**
- Authentication
- JSON Web Token (JWT)

**Praktik:** Endpoint:
```
POST /register
POST /login
```

**Hasil:** User bisa login dan mendapatkan token.

---

### Pertemuan 9 — Guard & Protected Route

**Teori:**
- Guard

**Praktik:**
```
GET /profile  →  hanya bisa diakses user login
```

**Hasil:** Memahami `AuthGuard`.

---

### Pertemuan 10 — Role Based Access Control

**Teori:**
- Authorization
- Roles

**Praktik:**
- Role: `ADMIN`, `USER`
- Custom decorator: `@Roles()`
- `RolesGuard`

**Hasil:** Membatasi akses berdasarkan role.

---

## ⚙️ Fase 3 — Fitur Lanjutan (Pertemuan 11–14)

### Pertemuan 11 — Exception Filter & Error Handling

**Teori:**
- `HttpException`
- Exception Filter

**Praktik:** Membuat error handling konsisten

**Hasil:** Response error seragam:
```json
{
  "success": false,
  "message": "User tidak ditemukan"
}
```

---

### Pertemuan 12 — Middleware, Pipe, Interceptor

**Teori:** Request Lifecycle lebih dalam

| Komponen | Contoh |
|----------|--------|
| Middleware | Logger |
| Pipe | Validation |
| Interceptor | Transform Response |

**Hasil:** Mengerti alur request NestJS secara utuh.

---

### Pertemuan 13 — File Upload

**Praktik:** Upload menggunakan **Multer**:
- Avatar
- Thumbnail
- Course Image

**Hasil:** Bisa upload file ke server.

---

### Pertemuan 14 — Struktur Project Enterprise

**Praktik:** Refactor project menjadi struktur profesional:
```
src/
├── auth/
├── users/
├── courses/
├── common/
├── config/
└── prisma/
```

**Hasil:** Struktur seperti project perusahaan.

---

## 🎯 Pertemuan 15 — Mini Project Akhir

### Course Marketplace API

> Mirip sistem UpSkill — membangun API lengkap dari nol.

**Module:**
- `Auth`
- `User`
- `Course`
- `Category`
- `Enrollment`

**Fitur yang Dibangun:**

| Fitur | Status |
|-------|--------|
| Register | ✅ |
| Login JWT | ✅ |
| CRUD Course | ✅ |
| Role Instructor | ✅ |
| Role Student | ✅ |
| Upload Thumbnail | ✅ |
| Prisma + PostgreSQL | ✅ |

---

## 📈 Setelah Lulus Roadmap Dasar

### Level Intermediate (Pertemuan 16+)

- Refresh Token
- Email Verification
- Google OAuth
- Swagger Documentation
- Pagination
- Search & Filter
- Redis Cache

### Level Advanced (Pertemuan 20+)

- Docker
- Testing (Jest)
- BullMQ
- WebSocket
- Microservices
- CQRS
- Event Driven Architecture

---

## 💡 Catatan Penting

> Untuk kamu yang sudah biasa Express, **Pertemuan 1–10 adalah fase paling penting**.
>
> Setelah paham **Controller, Service, Module, DTO, Prisma, dan JWT** — kamu sudah bisa mengerjakan sekitar **80% kebutuhan backend startup dan skripsi** menggunakan NestJS.
