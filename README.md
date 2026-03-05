# MediaFeed --- Desafío React Native (Corrección y Extensión)

![React Native](https://img.shields.io/badge/React%20Native-CLI-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Habilitado-blue)
![Tests](https://img.shields.io/badge/Cobertura%20de%20Tests-48.63%25-brightgreen)

## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Stack Tecnológico](#stack-tecnológico)
- [Cómo Ejecutar el Proyecto](#cómo-ejecutar-el-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Mi Solución](#mi-solución)
- [Bugs Detectados](#bugs-detectados)
- [Bugs Corregidos](#bugs-corregidos)
- [Refactorizaciones](#refactorizaciones)
- [Estrategia de Testing](#estrategia-de-testing)
- [Decisiones Técnicas](#decisiones-técnicas)
- [Uso de IA](#uso-de-ia)
- [Problemas de Compilación (Android/iOS)](#problemas-detectados-durante-la-compilación)

---

# Descripción General

Este repositorio contiene una aplicación **React Native CLI (sin Expo)** diseñada intencionalmente con **errores y funcionalidades incompletas**.

El desafío se centra en evaluar la capacidad de:

- Comprender una base de código existente.
- Depurar (debug) problemas reales.
- Mejorar la arquitectura y la calidad del código.
- Añadir pruebas unitarias.
- Utilizar la IA **como herramienta**, no como reemplazo del juicio de ingeniería.

⬆️ [Volver al índice](#tabla-de-contenidos)

---

# Stack Tecnológico

- React Native CLI
- TypeScript
- React Navigation
- Redux Toolkit
- Axios
- AsyncStorage
- react-native-video
- Jest
- React Native Testing Library

⬆️ [Volver al índice](#tabla-de-contenidos)

---

# Cómo Ejecutar el Proyecto

## Requisitos

- Node >= 22
- Android Studio
- Xcode (para iOS)
- Java y Android SDK correctamente configurados

## Instalación

```bash
cd cediaFeedChallenge
npm install or yarn install
```

## Android

```bash
npm start
npm run android
```

## iOS

```bash
cd ios
pod install
cd ..

npm start
npm run ios
```

⬆️ [Volver al índice](#tabla-de-contenidos)

---

# Estructura del Proyecto

```text
src
 ├── api
 │   └── newsApi.ts (Lógica de llamadas a API)
 ├── assets (Images of errors and IA prompts)
 │   ├── errores
 │   │   └── error-1.png
 │   │   └── error-2.png
 │   │   └── error-3.png
 │   ├── IA 
 │   │   └── error-ios.png
 │   │   └── prompt-documentacion.png
 │   └── tests
 │       └── test-coverage.png  
 ├── components
 │   
 ├── features
 │       └── favorites
 │       └── feed
 ├── navigation
 │   └── AppNavigator.tsx (Navegación principal)
 ├── storage
 │   └── favoritesStorage.ts (Almacenamiento de favoritos)
 ├── store
 │   ├── slices (Reducers y acciones de Redux)
 │   └── store.ts (Configuración de la tienda)
 │
 ├── types 
 │
 └── utils
```

⬆️ [Volver al índice](#tabla-de-contenidos)

---

# Mi Solución

## Resumen

Durante el proceso de desarrollo, se realizó un análisis completo del código base para identificar inconsistencias y problemas arquitectónicos.

### Logros Clave

- **5 bugs críticos corregidos.**
- **Cobertura de tests aumentada al 48.63%.**
- **Rendimiento de búsqueda mejorado con debounce.**
- **Persistencia de favoritos confiable mediante AsyncStorage.**
- **Funcionalidad de "Salir" añadida al Tab Bar.**

⬆️ [Volver al índice](#tabla-de-contenidos)

---

# Bugs Detectados

### 1 — Error de importación en favoritesSlice

**Ubicación:** `src/store/slices/favoritesSlice.ts`  
**Problema:** Falta la implementación del almacenamiento (storage).  
**Impacto:** Crash durante la hidratación de favoritos.

🩹 [Ir al Fix 1](#fix-1--persistencia-de-favoritos)


### 2 — Duplicación de artículos en el Store

**Ubicación:** `src/store/slices/articlesSlice.ts`  
**Problema:** Uso de `state.items.concat(...)` sin limpiar el estado anterior.  
**Impacto:** Duplicación infinita y degradación del rendimiento.

🩹 [Ir al Fix 2](#fix-2--búsqueda-con-debounce)

### 3 — Falta de Debounce en la búsqueda

**Ubicación:** `src/features/feed/screens/FeedScreen.tsx`  
**Problema:** Las peticiones a la API se disparan con cada pulsación de tecla.  
**Impacto:** Tráfico de red excesivo y condiciones de carrera (race conditions).

🩹 [Ir al Fix 3](#fix-3--reemplazo-en-lugar-de-concatenación)

### 4 — Duplicación de favoritos en la interfaz

**Ubicación:** `src/features/favorites/screens/FavoritesScreen.tsx`  
**Problema:** Los favoritos se identificaban por `title` en lugar de un ID único.

🩹 [Ir al Fix 4](#fix-4--claves-de-favoritos-únicas)

### 5 — URL de video fija (Hardcoded)

**Ubicación:** `src/api/newsApi.ts`  
**Problema:** Todos los artículos utilizaban el mismo video.

🩹 [Ir al Fix 5](#fix-5--videos-dinámicos)

### 6 — Podfile de iOS corrupto

**Ubicación:** `ios/Podfile`  
**Impacto:** Fallo al ejecutar `pod install` debido a un workaround obsoleto.

⬆️ [Volver al índice](#tabla-de-contenidos)

---

# Bugs Corregidos

## Fix 1 — Persistencia de Favoritos
Se creó `src/storage/favoritesStorage.ts` para manejar correctamente `loadFavoriteKeys()` y `saveFavoriteKeys()`.

## Fix 2 — Búsqueda con Debounce
Se implementó un `setTimeout` con limpieza (cleanup) para retrasar las búsquedas **500ms**.

## Fix 3 — Reemplazo en lugar de Concatenación
Se cambió `state.items.concat()` por `state.items = action.payload` para evitar duplicación.

## Fix 4 — Claves de Favoritos Únicas
Se cambió el identificador de `title` a `String(article.id)`.

## Fix 5 — Videos Dinámicos
Se implementó una lógica de selección basada en el ID: `video = SAMPLE_VIDEOS[id % SAMPLE_VIDEOS.length]`.

⬆️ [Volver al índice](#tabla-de-contenidos)

---

# Refactorizaciones

### 1 — Eliminación de useMemo innecesarios
Se simplificó la lógica en `ArticleDetailScreen.tsx` donde el memoing no aportaba beneficios.

### 2 — Mejora de Mocks en Tests
Se estandarizaron los mocks en `__tests__/articlesSlice.test.ts` para pruebas más predecibles.

⬆️ [Volver al índice](#tabla-de-contenidos)

---

# Estrategia de Testing

**Resultado Final: 48.63% de cobertura.**  
**Objetivo del Challenge:** >= 40%.  
Todos los tests pasan correctamente.

### Tests Agregados:
- `ArticleListItem.test.tsx`
- `favoritesStorage.test.ts`
- `FavoritesScreen.test.tsx`
- `favoritesSlice.test.ts`

### Resultado del Test Coverage:

![Test Coverage](src/assets/test/test-coverage.png)

⬆️ [Volver al índice](#tabla-de-contenidos)

---

# Decisiones Técnicas

### Redux Toolkit
Se utilizó `createAsyncThunk` para gestionar los flujos de estado asíncronos de manera robusta.

### Tipado Estricto
- IDs de Artículos → `number`
- Claves de Favoritos → `string`

⬆️ [Volver al índice](#tabla-de-contenidos)

---

# Uso de IA

La IA se utilizó como **asistente de desarrollo**, principalmente para:
- Analizar errores en el Podfile y crashes en iOS.
- Generar mocks para las pruebas unitarias.
- Estructurar notas de depuración.
- Solución al problema de compilación en iOS ([Ver archivo](Fixing%20pod%20install%20error.md)).
- Solución al crash de lanzamiento en iOS ([Ver archivo](Fixing%20ios%20crash%20error.md)).

Todas las decisiones arquitectónicas y de depuración finales se tomaron manualmente.

⬆️ [Volver al índice](#tabla-de-contenidos)

---

# Problemas Detectados durante la compilación

## Android

1. **Error de Java Home:**
   - **Problema:** Error al intentar correr la aplicación por ruta de Java incorrecta.
   - **Solución:** Actualizar `gradle.properties` con la ruta correcta en `org.gradle.java.home`.

2. **Versión de SDK:**
   - **Problema:** Desajuste en la versión recomendada del SDK.
   - **Solución:** Actualizar `compileSdkVersion` en `build.gradle`.

3. **Errores en tiempo de ejecución:**
   - **Solución:** Creación del módulo `favoritesStorage.ts` para evitar fallos en la carga inicial.

## iOS

1. **Error en Podfile:**
   - **Solución:** Reparación del `Podfile` eliminando workarounds antiguos incompatibles. ([Ver solución](src/prompt-pod-issue.md)).
2. **Crash al iniciar (bundleURL):**
   - **Solución:** Renombrar el método en `AppDelegate.mm` a `bundleURL` para compatibilidad con React Native 0.74+. ([Ver solución](src/prompt-app-ios-crash.md)).

⬆️ [Volver al índice](#tabla-de-contenidos)

---
# Preguntas & Respuestas
**1. Qué partes del desarrollo resolviste con ayuda de IA y cuáles de manera manual.**
- **IA:** La usé principalmente para el análisis inicial de los errores de compilación (especialmente el `Podfile` de iOS que estaba corrupto) y para organizar las notas de los bugs detectados durante el testing manual (QA). También me sugirió estructuras base para los mocks de `AsyncStorage` en los tests.
- **Manual:** El debugging en tiempo real, la implementación del debounce (aunque es un patrón conocido), la corrección de la lógica de duplicación en el store y la decisión de cambiar `title` por `id` en favoritos. La validación final y el "feeling" de la app fueron 100% manuales.

**2. Qué prompts/pedidos usaste o cómo te ayudó la IA en tu proceso.**
- Use **GitHub Copilot** directamente en VS Code dándole contexto del archivo `Podfile` para que detectara por qué fallaba el `pod install`.
- "Analizá este Podfile y decime por qué falla el pod install en una arquitectura M1/M2 con React Native 0.73" -> Me sugirió las líneas de `post_install` para forzar el deployment target.
- "Generame un mock para AsyncStorage en Jest" -> Lo usé como base para `favoritesStorage.test.ts`.

**3. Qué decisiones técnicas tomaste vos y por qué.**
- Cambiar la lógica de favoritos de `title` a `id`. El título es propenso a errores si la noticia se actualiza o si hay duplicados en el feed.
- Implementar el debounce de 500ms. Es un equilibrio justo para que no se sienta lento pero que ahorre muchísimas llamadas a la API.

**4. Cómo validaste que el código cumple con lo pedido y es de calidad.**
- Corriendo `npm test -- --coverage` para asegurar el cumplimiento del KPI de testing.
- Testing manual en simulador (haciendo scroll, buscando términos aleatorios, marcando favoritos y reiniciando la app para ver la persistencia).
- Revisión de la pestaña Network en el debugger para verificar que el Debounce realmente funcionara.

**5. Si usaste código sugerido por IA, qué adaptaciones le hiciste y por qué.**
- En el código de los tests sugeridos por la IA, tuve que adaptar los mocks porque mi store usa `useAppDispatch` y `useAppSelector` tipados, y la sugerencia genérica no los tomaba en cuenta. Tuve que mockear los hooks de `src/store/hooks.ts` manualmente.
- En el Podfile, la IA sugirió borrar varias líneas de Flipper, pero yo preferí mantenerlas y ajustarlas para que no rompieran el build, ya que Flipper es útil para debugear red y logs.

⬆️ [Volver al índice](#tabla-de-contenidos)

