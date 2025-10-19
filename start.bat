@echo off
echo ========================================
echo    ABE Vitrine - Configuration rapide
echo ========================================
echo.

REM Vérifier si Docker est lancé
docker info >nul 2>&1
if errorlevel 1 (
    echo [ERREUR] Docker n'est pas lance ou n'est pas installe.
    echo Veuillez demarrer Docker Desktop et relancer ce script.
    pause
    exit /b 1
)

echo [1/5] Demarrage de PostgreSQL...
docker-compose up -d
if errorlevel 1 (
    echo [ERREUR] Impossible de demarrer PostgreSQL
    pause
    exit /b 1
)

echo [2/5] Attente du demarrage de la base de donnees...
timeout /t 5 /nobreak >nul

echo [3/5] Generation du client Prisma...
call npx prisma generate
if errorlevel 1 (
    echo [ERREUR] Echec de la generation Prisma
    pause
    exit /b 1
)

echo [4/5] Creation des tables de base de donnees...
call npx prisma db push
if errorlevel 1 (
    echo [ERREUR] Echec de la creation des tables
    pause
    exit /b 1
)

echo [5/5] Creation du fichier .env.local...
if not exist .env.local (
    echo DATABASE_URL="postgresql://%DB_USER%:%DB_PASSWORD%@localhost:5432/abe_vitrine?schema=public"> .env.local
    echo NODE_ENV="development">> .env.local
    echo Fichier .env.local cree avec succes
) else (
    echo Le fichier .env.local existe deja
)

echo.
echo ========================================
echo    Configuration terminee avec succes!
echo ========================================
echo.
echo Services disponibles:
echo - PostgreSQL:    localhost:5432
echo - Adminer:       http://localhost:8080
echo - Prisma Studio: npx prisma studio
echo.
echo Pour demarrer le serveur de developpement:
echo   npm run dev
echo.
echo Pour arreter PostgreSQL:
echo   npm run db:down
echo.
pause



