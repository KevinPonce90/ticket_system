# Ticket System

Proyecto Laravel + React (Inertia) para la gestión de un sistema de tickets.

Este repositorio combina un backend Laravel con una interfaz frontend en React (Inertia + Typescript). Incluye autenticación y rutas generadas para Laravel Fortify.

---

## Requisitos

- PHP 8.1+ (según composer.json)
- Composer
- Node.js 16+ y npm (o pnpm/yarn)
- SQLite/MySQL/Postgres (según `config/database.php`)
- Git
- Laragon 

## Preparación (Windows - PowerShell)

1. Clona el repo:

```powershell
git clone <repositorio> .
```

2. Instala dependencias PHP y JS:

```powershell
composer install
npm ci
```

3. Copiar el fichero de entorno y generar la clave de la app:

```powershell
copy .env.example .env
php artisan key:generate
```

4. Ajusta las variables de `.env` (DB, MAIL, APP_URL, etc.). Si usas Laragon normalmente APP_URL será `http://ticket_system.test` o similar.

5. Ejecuta migraciones y seeders (si procede):

```powershell
php artisan migrate --seed
```

## Desarrollo

Levanta los assets en modo desarrollo (Vite):

```powershell
npm run dev
```

Para el servidor PHP puedes usar Laragon o el servidor embebido de PHP:

```powershell
php artisan serve --host=127.0.0.1 --port=8000
```

Abrir la app en el navegador en la URL configurada (`APP_URL`), por ejemplo `http://localhost:8000` o la del host de Laragon.

## Build para producción

```powershell
npm run build
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## Comprobaciones y tests

- Verificación de TypeScript (rápida, no genera archivos):

```powershell
npx tsc --noEmit
```

- Ejecutar tests PHP (Pest / PHPUnit):

```powershell
php vendor/bin/pest

vendor\bin\pest.bat
```

## Notas sobre correcciones realizadas

Durante la última sesión reparé varios ficheros TypeScript que estaban corruptos o con imports duplicados. Los cambios principales fueron:

- `resources/js/routes/password/index.ts` — comentario mal formado y referencias reparadas.
- `resources/js/actions/Laravel/Fortify/Http/Controllers/AuthenticatedSessionController.ts` — eliminadas líneas duplicadas y una export corrupta.
- `resources/js/routes/login/index.ts` — eliminada import duplicada.
- `resources/js/actions/Laravel/Fortify/Http/Controllers/PasswordResetLinkController.ts` — eliminada import duplicada.
- `resources/js/routes/index.ts` — añadido un helper top-level con exports `home`, `dashboard`, `login`, `register`, `logout` para facilitar importaciones desde `@/routes`.

Estas correcciones restauraron la compilación TypeScript (`npx tsc --noEmit`).
