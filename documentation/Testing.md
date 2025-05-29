
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST
RAW GUIDE ON WHAT AND HOW TO TEST

🧭 ¿Qué deberías testear en React Native?
🔹 1. Lógica de negocio / lógica pura
Ejemplos:

Funciones que transforman datos

Validaciones

Utilidades o helpers

✅ Testear con Jest puro (funciones unitarias)

🔹 2. Componentes UI
Ejemplos:

Botones, inputs, vistas que muestran información

Comportamientos al tocar o escribir

✅ Usar React Native Testing Library (RNTL) + Jest


🔹 3. Hooks personalizados
Ejemplos:

Un hook useFetchUsers que llama a una API

Un hook useToggle

✅ Usar @testing-library/react-hooks o testear usando un componente dummy


🔹 4. Integraciones / efectos (useEffect, AsyncStorage, etc.)
Mockear APIs como fetch, axios, AsyncStorage, etc.

✅ Usar mocks con Jest + testear los efectos que ocurren




1. Renderizado
Verificar que el componente se renderiza sin errores.
Comprobar que muestra los textos, imágenes o elementos esperados según las props.

2. Interacción
Simular eventos (toques, cambios de texto, scroll, etc.) y verificar el comportamiento esperado.

4. Estados y Condiciones
Renderizar el componente con diferentes props/estados y verificar el resultado.



EJEMPLOS

Testear componente

// Button.test.tsx
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './Button';

test('calls onPress when pressed', () => {
  const onPressMock = jest.fn();
  const { getByText } = render(<Button title="Click me" onPress={onPressMock} />);

  fireEvent.press(getByText('Click me'));
  expect(onPressMock).toHaveBeenCalled();
});



Testear hooks

// useUsers.test.tsx
import { renderHook, waitFor } from '@testing-library/react-native';
import { useUsers } from './useUsers';
import axios from 'axios';

jest.mock('axios');

test('fetches users and returns data', async () => {
  (axios.get as jest.Mock).mockResolvedValue({ data: [{ name: 'Juan' }] });

  const { result } = renderHook(() => useUsers());

  await waitFor(() => expect(result.current.length).toBeGreaterThan(0));
});



🧰 Herramientas que vas a necesitar
Herramienta	Uso
jest	Motor de testeo
@testing-library/react-native	Testeo de componentes
@testing-library/jest-native	Matchers como toBeVisible, toHaveTextContent
@testing-library/react-hooks	Testeo de hooks (opcional)
jest-fetch-mock o msw	Para simular APIs


🔒 Qué NO deberías testear
Estilos visuales (padding, color, etc.)

Funcionalidades del sistema operativo (por ejemplo, navegación exacta, hardware, etc.) — esas se mockean

Lógica interna de librerías de terceros


✅ Lo que SÍ deberías testear sobre navegación
Podés y debés testear que se ejecuta la intención de navegar. Es decir:

🔍 Ejemplo: "Si toco este botón, se llama navigation.navigate('UserDetail')"

Apartado y Notas

1) MUCHAS cosas deberan ser mockeadas, por diferentes motivos?
   a- No nos interesa probar que se ejecuta alguna funcion, como por ejemplo el llamado a axios.get
   b- Solo nos interesa simular la respuesta de una funcion, en todos sus escenarios, por ejemplo
        si isNameValid devuelve true or false, simplemente la mockeo.
    c- muchas dependencias de React Native son imposibles de ejecutar en el entorno artificial de Jest, 
        por ejemplo posiciones de GPS, respuestas de la camara, imagenes, una navegacion!

Mockeo de la navegacion :

        import { render, fireEvent } from '@testing-library/react-native';
import { HomeScreen } from './HomeScreen';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

test('navigates to UserDetail screen on button press', () => {
  const { getByText } = render(<HomeScreen />);
  fireEvent.press(getByText('Go to detail'));
  expect(mockNavigate).toHaveBeenCalledWith('UserDetail');
});


🚫 Lo que NO deberías testear
No deberías testear si:

El navegador muestra otra pantalla (ya es responsabilidad de React Navigation)

La pantalla destino se montó o no (salvo en tests e2e)

❌ Esto no lo testees:
ts
Copiar
Editar
// Mal test: depende de implementación interna de la librería
expect(screen.getByText('Contenido de UserDetail')).toBeVisible();

🧠 ¿Por qué esta separación?
Porque:

Responsabilidad: Vos testeás que tu código intenta navegar, no que React Navigation lo haga correctamente (ese es trabajo de sus propios tests).

Fragilidad: Testear cambios de pantalla o navegación real te ata fuertemente a la implementación interna del stack.

E2E vs Unit Test: Si querés testear que efectivamente cambia la pantalla visual, eso ya es un test end-to-end con herramientas como Detox.





✅ COSAS QUE SÍ DEBERÍAS TESTEAR

| Categoría                 | ¿Qué testear?                                                | Cómo testearlo                                     |
| ------------------------- | ------------------------------------------------------------ | -------------------------------------------------- |
| Lógica pura               | Funciones, helpers, cálculos                                 | Jest unit tests                                    |
| Hooks personalizados      | Cambios de estado, efectos, llamadas a APIs                  | renderHook() o con componentes dummy               |
| Componentes de UI         | Que renderizan lo esperado, que responden a interacciones    | RNTL (getByText, fireEvent.press, etc.)            |
| Acciones del usuario      | Toques, inputs, scrolls, swipes, etc.                        | fireEvent, act()                                   |
| Intención de navegación   | Que se llamó navigation.navigate('Ruta')                     | Mock de useNavigation()                            |
| Llamadas a APIs o efectos | Que se llamó fetch, axios, etc. con los argumentos correctos | Mocks + expect(mockFn).toHaveBeenCalled()          |
| Estados vacíos / errores  | Que un mensaje de error se muestra, o un placeholder         | getByText, queryByText                             |
| Condicionales de UI       | Mostrar/ocultar elementos según props/estado                 | queryByTestId, getByTestId, toBeNull()             |
| Persistencia local        | Que AsyncStorage se lee o escribe                            | Mocks de @react-native-async-storage/async-storage |
