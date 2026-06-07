<div align="center">

# 🚀 Belajar NestJS — From Zero to Production

<p>
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
</p>

<p>Roadmap belajar NestJS dari dasar hingga siap kerja — 15 pertemuan terstruktur.</p>

</div>

---

## 🎯 Target Akhir

Setelah menyelesaikan roadmap ini kamu akan bisa:

- ✅ Membangun **REST API production-ready**
- ✅ Implementasi **JWT Authentication**
- ✅ Koneksi database dengan **Prisma + PostgreSQL**
- ✅ Menerapkan **RBAC** (Role Based Access Control)
- ✅ Handle **File Upload** dengan Multer
- ✅ Menulis kode dengan **struktur project profesional**

---

## 🗺️ Peta Perjalanan

```
📦 FASE 1 — FONDASI          📦 FASE 2 — DATABASE & AUTH    📦 FASE 3 — FITUR LANJUTAN
────────────────────          ───────────────────────────    ───────────────────────────
Pertemuan 1  Arsitektur  ──►  Pertemuan 6  Prisma Setup ──► Pertemuan 11  Error Handling
Pertemuan 2  Routing          Pertemuan 7  CRUD DB           Pertemuan 12  Middleware
Pertemuan 3  DI & Service     Pertemuan 8  JWT Auth          Pertemuan 13  File Upload
Pertemuan 4  Module           Pertemuan 9  Guard             Pertemuan 14  Struktur Enterprise
Pertemuan 5  DTO & Validation Pertemuan 10 RBAC         ──►  Pertemuan 15  Mini Project 🎓
```

---

## 📚 Kurikulum Lengkap

### 🧱 Fase 1 — Fondasi (Pertemuan 1–5)

<details>
<summary><b>Pertemuan 1 — Pengenalan NestJS & Arsitektur</b></summary>

**Teori:**
- Apa itu NestJS & kenapa perusahaan suka NestJS
- NestJS vs Express
- Dependency Injection
- Request Lifecycle

**Praktik:**
```bash
npm install -g @nestjs/cli
nest new my-project
```

**Hasil:** Paham alur dasar:
```
main.ts → AppModule → AppController → AppService
```
</details>

<details>
<summary><b>Pertemuan 2 — Controller & Routing</b></summary>

**Teori:** Decorator & Routing di NestJS

**Praktik:** Membuat CRUD endpoint:
```
GET    /users
GET    /users/:id
POST   /users
PATCH  /users/:id
DELETE /users/:id
```

**Hasil:** Bisa membuat endpoint sendiri.
</details>

<details>
<summary><b>Pertemuan 3 — Dependency Injection</b></summary>

**Teori:** Provider, `@Injectable()`, Dependency Injection

**Praktik:**
```
UserController  →  UserService
```

**Hasil:** Mengerti kenapa service dipisah dari controller.
</details>

<details>
<summary><b>Pertemuan 4 — Module</b></summary>

**Teori:** Feature Module, `imports`, `exports`

**Praktik:** Membuat `UserModule` dan `AuthModule`

**Hasil:** Paham cara memecah aplikasi besar.
</details>

<details>
<summary><b>Pertemuan 5 — DTO & Validation</b></summary>

**Teori:** DTO (Data Transfer Object), `ValidationPipe`

**Praktik:**
```typescript
// CreateUserDto
export class CreateUserDto {
  @IsEmail()    email: string;
  @MinLength(8) password: string;
  @IsString()   name: string;
}
```

**Hasil:** Request tervalidasi otomatis.
</details>

---

### 🗄️ Fase 2 — Database & Auth (Pertemuan 6–10)

<details>
<summary><b>Pertemuan 6 — Database dengan Prisma</b></summary>

**Teori:** ORM & Prisma

**Praktik:**
```bash
npm install prisma @prisma/client
npx prisma init
npx prisma migrate dev
```

**Hasil:** NestJS tersambung ke PostgreSQL.
</details>

<details>
<summary><b>Pertemuan 7 — CRUD Database</b></summary>

**Praktik:** Implementasi Create, Read, Update, Delete untuk entity `User` menggunakan Prisma Client.

**Hasil:** CRUD database penuh.
</details>

<details>
<summary><b>Pertemuan 8 — Authentication JWT</b></summary>

**Teori:** Authentication & JSON Web Token

**Praktik:**
```
POST /auth/register  →  daftar akun baru
POST /auth/login     →  dapat access token
```

**Hasil:** User bisa login dan mendapatkan token.
</details>

<details>
<summary><b>Pertemuan 9 — Guard & Protected Route</b></summary>

**Teori:** Guard di NestJS

**Praktik:**
```typescript
@UseGuards(AuthGuard('jwt'))
@Get('profile')
getProfile(@Request() req) { ... }
```

**Hasil:** Memahami `AuthGuard` — endpoint hanya bisa diakses user yang login.
</details>

<details>
<summary><b>Pertemuan 10 — Role Based Access Control</b></summary>

**Teori:** Authorization & Roles

**Praktik:**
```typescript
@Roles(Role.ADMIN)
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Delete('/users/:id')
remove(@Param('id') id: string) { ... }
```

Role yang dibuat: `ADMIN`, `USER`

**Hasil:** Membatasi akses berdasarkan role.
</details>

---

### ⚙️ Fase 3 — Fitur Lanjutan (Pertemuan 11–14)

<details>
<summary><b>Pertemuan 11 — Exception Filter & Error Handling</b></summary>

**Teori:** `HttpException`, Exception Filter

**Hasil:** Response error yang konsisten di seluruh aplikasi:
```json
{
  "success": false,
  "message": "User tidak ditemukan",
  "statusCode": 404
}
```
</details>

<details>
<summary><b>Pertemuan 12 — Middleware, Pipe, Interceptor</b></summary>

**Teori:** Request Lifecycle lebih dalam

| Komponen | Fungsi | Contoh |
|----------|--------|--------|
| Middleware | Sebelum route handler | Logger |
| Pipe | Transformasi & validasi input | ValidationPipe |
| Interceptor | Transform response / logging | ResponseTransformer |

**Hasil:** Mengerti alur penuh request di NestJS.
</details>

<details>
<summary><b>Pertemuan 13 — File Upload</b></summary>

**Praktik:** Upload file menggunakan **Multer**:
- Avatar profil
- Thumbnail course
- Gambar konten

**Hasil:** Bisa menerima dan menyimpan file ke server.
</details>

<details>
<summary><b>Pertemuan 14 — Struktur Project Enterprise</b></summary>

**Praktik:** Refactor project menjadi struktur profesional:
```
src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.module.ts
│   └── strategies/
├── users/
├── courses/
├── common/
│   ├── decorators/
│   ├── filters/
│   ├── guards/
│   └── interceptors/
├── config/
└── prisma/
```

**Hasil:** Struktur siap dipakai di project perusahaan.
</details>

---

## 🎓 Pertemuan 15 — Mini Project Akhir

### Course Marketplace API

> Membangun API lengkap dari nol — mirip sistem platform kursus online.

**Stack:**

```
NestJS + TypeScript + Prisma + PostgreSQL + JWT + Multer
```

**Module yang dibangun:**

| Module | Deskripsi |
|--------|-----------|
| `AuthModule` | Register & Login JWT |
| `UserModule` | Manajemen user & profil |
| `CourseModule` | CRUD course oleh Instructor |
| `CategoryModule` | Kategori course |
| `EnrollmentModule` | Pendaftaran kursus oleh Student |

**Fitur lengkap:**

| Fitur | |
|-------|--|
| Register & Login JWT | ✅ |
| CRUD Course | ✅ |
| Role Instructor | ✅ |
| Role Student | ✅ |
| Upload Thumbnail | ✅ |
| Prisma + PostgreSQL | ✅ |

---

## 📈 Lanjutan Setelah Roadmap Dasar

### 🔵 Level Intermediate (Pertemuan 16+)

| Topik | Keterangan |
|-------|------------|
| Refresh Token | Perpanjang sesi tanpa login ulang |
| Email Verification | Aktivasi akun via email |
| Google OAuth | Login dengan akun Google |
| Swagger Docs | Dokumentasi API otomatis |
| Pagination | Ambil data per halaman |
| Search & Filter | Query dinamis |
| Redis Cache | Percepat response API |

### 🔴 Level Advanced (Pertemuan 20+)

| Topik | Keterangan |
|-------|------------|
| Docker | Containerize aplikasi |
| Testing (Jest) | Unit & E2E testing |
| BullMQ | Background job & queue |
| WebSocket | Realtime communication |
| Microservices | Pisah service secara independen |
| CQRS | Command Query Responsibility Segregation |
| Event Driven | Arsitektur berbasis event |

---

## 🛠️ Tech Stack

| Teknologi | Versi | Kegunaan |
|-----------|-------|---------|
| [NestJS](https://nestjs.com/) | v10+ | Framework utama |
| [TypeScript](https://www.typescriptlang.org/) | v5+ | Bahasa pemrograman |
| [Prisma](https://www.prisma.io/) | v5+ | ORM database |
| [PostgreSQL](https://www.postgresql.org/) | v15+ | Database |
| [JWT](https://jwt.io/) | — | Autentikasi token |
| [Multer](https://github.com/expressjs/multer) | — | Upload file |
| [class-validator](https://github.com/typestack/class-validator) | — | Validasi DTO |

---

## 🚦 Cara Mulai

```bash
# 1. Clone repository
git clone https://github.com/username/belajar-nestjs.git
cd belajar-nestjs

# 2. Masuk ke folder pertemuan yang dituju
cd pertemuan-01

# 3. Install dependencies
npm install

# 4. Jalankan development server
npm run start:dev
```

---

## 💡 Catatan

> Buat kamu yang sudah familiar dengan **Express**, Pertemuan 1–10 adalah fase terpenting.
>
> Setelah menguasai **Controller → Service → Module → DTO → Prisma → JWT**, kamu sudah bisa menangani sekitar **80% kebutuhan backend** untuk startup maupun skripsi menggunakan NestJS.

---

<div align="center">

Dibuat dengan ❤️ untuk komunitas developer Indonesia

</div>
