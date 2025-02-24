# README - Arthrohard Website

## Opis Projektu
Arthrohard to responsywna strona internetowa zaprojektowana jako część zadania rekrutacyjnego dla FrontEnd Developera. Strona prezentuje suplement diety dla psów i kotów wspierający zdrowie stawów. Implementacja obejmuje dynamiczne ładowanie produktów z API, obsługę pop-upów oraz możliwość wyboru liczby wyświetlanych produktów.

## Technologie
- **HTML** - Struktura strony
- **CSS** - Stylizacja i responsywność
- **JavaScript** - Obsługa dynamicznych funkcji

## Funkcjonalności
1. **Responsywny projekt** - Strona dostosowuje się do różnych urządzeń.
2. **Dynamiczne pobieranie produktów** - Produkty są ładowane z API.
3. **Infinite Scroll** - Po przewinięciu do końca listy, kolejne produkty są pobierane automatycznie.
4. **Popup z informacjami o produkcie** - Po kliknięciu na produkt wyświetla się okienko z dodatkowymi informacjami.
5. **Opcja wyboru liczby wyświetlanych produktów** - Możliwość ustawienia ilości elementów na stronie (20, 50, 100).

## Instalacja i Uruchomienie
1. Pobierz pliki projektu i rozpakuj paczkę.
2. Otwórz plik `index.html` w przeglądarce internetowej.
3. Strona powinna działać bez potrzeby konfiguracji dodatkowego środowiska.

## Pobieranie Produktów z API
- API znajduje się pod adresem:
  ```
  https://brandstestowy.smallhost.pl/api/random
  ```
- Parametry zapytań:
  - `pageNumber` - numer strony
  - `pageSize` - liczba elementów na stronie
- Przykładowe zapytanie:
  ```
  https://brandstestowy.smallhost.pl/api/random?pageNumber=3&pageSize=50
  ```

## Struktura Plików
```
Arthrohard/
│── index.html   # Strona główna
│── styles.css   # Arkusz stylów
│── script.js    # Skrypt JavaScript obsługujący dynamiczne funkcje
│── assets/      # Folder z obrazkami i innymi zasobami
```

## Dodatkowe Informacje
- Projekt można zobaczyć w Figmie: [Figma Link](https://www.figma.com/file/ZR8RRI5bqfYu6H4uRr0BPI/Arthrohard-TEST?type=design&node-id=0-1&mode=design)

---
