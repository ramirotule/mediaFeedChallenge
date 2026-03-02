## MediaFeed — Challenge (Fix & Extend)

Este repositorio contiene una app **React Native CLI (sin Expo)** intencionalmente **incompleta y con bugs**.

La idea es evaluar tu capacidad para:
- Leer código existente y entender arquitectura/estado.
- Reproducir problemas, debuggear y corregirlos.
- Mejorar calidad (tests, tipado, modularidad, performance).
- Usar IA de manera **crítica** (no “copiar/pegar”).

### Stack
- **React Native CLI** (TypeScript)
- **React Navigation**
- **Redux Toolkit**
- **Axios**
- **AsyncStorage**
- **react-native-video**
- **Jest** (+ Testing Library instalada)

---

## Cómo correr

### Requisitos
- Node >= 22
- Android Studio (emulador) y/o Xcode (iOS)
- Java/SDKs configurados según la guía oficial RN

### Instalación

```bash
cd <YOUR_WORKSPACE_FOLDER>/MediaFeedChallenge
npm install
```

### Android

```bash
npm start
npm run android
```

### iOS

```bash
cd ios && pod install && cd ..
npm start
npm run ios
```

---

## Estructura del proyecto (high level)
- `src/api`: cliente y mapeo de API
- `src/store`: Redux slices/store
- `src/features/*`: pantallas por feature
- `src/components`: componentes reutilizables
- `src/storage`: wrapper de AsyncStorage

