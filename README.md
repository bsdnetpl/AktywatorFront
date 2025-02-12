AktywatorFront

AktywatorFront to frontendowa aplikacja Angular służąca do aktywacji licencji. Aplikacja łączy się z backendem API w celu generowania i weryfikacji kluczy licencyjnych.

🔧 Wymagania

Przed rozpoczęciem pracy upewnij się, że masz zainstalowane:

Node.js (zalecana wersja LTS)

Angular CLI (zalecana wersja zgodna z projektem)

Git

📦 Instalacja

Sklonuj repozytorium:

git clone https://github.com/bsdnetpl/AktywatorFront.git
cd AktywatorFront

Zainstaluj zależności:

npm install

🚀 Uruchamianie aplikacji

Aby uruchomić aplikację w trybie deweloperskim, użyj:

ng serve

Domyślnie aplikacja będzie dostępna pod adresem: http://localhost:4200.

🔄 API Backend

Aplikacja komunikuje się z backendem, który powinien być uruchomiony pod adresem:

https://localhost:7268/api

🔑 Generowanie klucza licencyjnego

Endpoint: POST /api/License

Przykładowe wywołanie:

this.licenseService.generateKey({ nip: '1234567890' }).subscribe(response => {
  console.log(response.key);
});

✅ Walidacja klucza licencyjnego

Endpoint: POST /api/License/validate

Przykładowe wywołanie:

this.licenseService.checkKey({ nip: '1234567890', licenseKey: 'XXXXX-XXXXX' }).subscribe(response => {
  console.log(response.isValid);
});

📁 Struktura projektu

AktywatorFront/
│── src/
│   ├── app/
│   │   ├── components/  # Komponenty Angular
│   │   ├── services/    # Serwisy HTTP
│   │   ├── interfaces/  # Definicje interfejsów
│   ├── assets/         # Zasoby statyczne
│   ├── environments/   # Konfiguracje środowiskowe
│── angular.json        # Konfiguracja Angular CLI
│── package.json        # Lista zależności npm
│── README.md           # Ten plik 😉

🎨 Stylizacja

Aplikacja korzysta z Bootstrap do stylizacji komponentów. Jeśli chcesz dostosować wygląd, edytuj plik styles.css lub dodaj własne klasy CSS.

🛠️ Konfiguracja API

Jeśli backend działa na innym porcie, edytuj LicenseService w src/app/services/license.service.ts:

private url = 'https://localhost:7268/api/License';

📜 Licencja

Projekt jest udostępniany na licencji MIT.
