import React from 'react';
import { ApiConnectorExample } from './components/ApiConntectorExample';

//Lista rzeczy do zrobienia:
// 1. Wyczyścić całą aplikacje.
// 2. Przygotować strukture atomic design.
// 3.Dodać Reduxa
// 4. Przygotowanie widoków statycznych
// 4.1 - Główny widok wyświetlenie wszystkich zdjęć.\
// 4.2 - Po kliknięciu w zdjęcie redirect do innej strony, użyj reduxa trzymaj tam dane to nie będzie problemu po przejściu na inną strone
// 4.3 Widok 3D zdjęcia plus po bokach kontrolki na środku obraz
// 5. Wyświetlenie wszystkich dostępnych zdjęć.
// 6. Dodanie zdjęć.
// 7. Pobranie informacji o konkretnym zdjeciu.
// 8. Stworzenie 2 gałęzi jedno dla każdej z bibliotek 3D
// 9. Wyświetlenie w każdej bibliotece obrazku w 3D.
// 10. Zmiana wyświetlania zdjęcia na podstawie kontrolek.
const App = () => (
  <div>
    <ApiConnectorExample />
  </div>
);

export default App;
