---
layout: iframe-right
url: https://tamagui.dev/ui/intro
---

# Tamagui <img src="/images/tamagui.png" class="inline-block w-12 h-12 align-middle ml-4"/>

<div class="flex items-center gap-3 mt-2 mb-6">
  <span class="flex items-center gap-1 text-gray-700">
    <span class="text-yellow-400">★</span> 8.2k
  </span>
  <span class="text-gray-400">|</span>
  <span class="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">v1.89.19</span>
</div>

> Kit UI universel et solution de style pour React Native & Web

#### Fonctionnalités

- ✓ Composants universels pour native & web
- ✓ Near-zero runtime styling
- ✓ Atomic CSS-in-JS engine

#### Code Example

```tsx
import { Button, Text } from "tamagui";

export default () => (
  <Button theme="purple" circular>
    <Text>Hello Tamagui!</Text>
  </Button>
);
```

Visitez [tamagui.dev](https://tamagui.dev) pour plus de détails.

---
layout: iframe-right
url: https://gluestack.io/
---

# Gluestack UI <img src="/images/gluestack.png" class="inline-block w-12 h-12 align-middle ml-4"/>

<div class="flex items-center gap-3 mt-2 mb-6">
  <span class="flex items-center gap-1 text-gray-700">
    <span class="text-yellow-400">★</span> 2.1k
  </span>
  <span class="text-gray-400">|</span>
  <span class="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">v0.1.0</span>
</div>

> Composants Universels & Accessibles pour React Native & Web

#### Features

- ✓ Composants entièrement personnalisables
- ✓ Accessibilité en priorité
- ✓ Système de design thématique

#### Code Example

```tsx
import { Button, ButtonText } from "@gluestack-ui/themed";

export default () => (
  <Button size="md" variant="solid">
    <ButtonText>Hello Gluestack!</ButtonText>
  </Button>
);
```

Visitez [https://gluestack.io](https://gluestack.io/) pour plus de détails.

---
layout: iframe-right
url: https://callstack.github.io/react-native-paper/
---

# React Native Paper <img src="/images/callstack.png" class="inline-block w-12 h-12 align-middle ml-4"/>

<div class="flex items-center gap-3 mt-2 mb-6">
  <span class="flex items-center gap-1 text-gray-700">
    <span class="text-yellow-400">★</span> 11.2k
  </span>
  <span class="text-gray-400">|</span>
  <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">v5.11.1</span>
</div>

> Composants Material Design pour React Native

#### Fonctionnalités

- ✓ Implémentation Material Design
- ✓ Compatibilité multi-plateformes
- ✓ Mises à jour et maintenance régulières

#### Code Example

```tsx
import { Button } from "react-native-paper";

export default () => (
  <Button mode="contained" onPress={() => console.log("Pressed")}>
    Hello Paper!
  </Button>
);
```

Visitez [callstack.github.io](https://callstack.github.io/react-native-paper/) pour plus de détails.

---
layout: iframe-right
url: https://rnr-docs.vercel.app/
---

# RNR (React Native Reusable) <img src="/images/rnr.png" class="inline-block w-12 h-12 align-middle ml-4"/>

<div class="flex items-center gap-3 mt-2 mb-2">
  <span class="flex items-center gap-1 text-gray-700">
    <span class="text-yellow-400">★</span> 1.2k
  </span>
  <span class="text-gray-400">|</span>
  <span class="px-2 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">v1.0.0</span>
</div>

> Inspiré par shadcn/ui, mais pour React Native

#### Fonctionnalités

- ✓ Composants copiables-collables
- ✓ Entièrement personnalisable
- ✓ TypeScript en priorité

#### Code Example

```tsx
import { Button } from "@/components/ui/button";

export default () => (
  <Button variant="default" size="lg">
    Hello RNR!
  </Button>
);
```

Visitez [rnr-docs.vercel.app](https://rnr-docs.vercel.app/) pour plus de détails.

---

# Style dans React Native

## 1. [Tailwind (NativeWind)](https://www.nativewind.dev/) <img src="/images/tailwindcss.svg" class="inline-block w-12 h-12 align-middle ml-4"/>

> Framework CSS utilitaire, compilé en code natif

```tsx
import { View, Text, Pressable } from "react-native";

export default function Card() {
  return (
    <View className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-bold text-gray-900">Hello Tailwind!</Text>
      <Pressable className="mt-2 bg-blue-500 px-4 py-2 rounded-md">
        <Text className="text-white font-medium">Press me</Text>
      </Pressable>
    </View>
  );
}
```

---

## 2. [API StyleSheet](https://reactnative.dev/docs/stylesheet)

> Performance native

```tsx
import { StyleSheet, View, Text } from "react-native";
import * as stylex from "@stylexjs/stylex";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: "bold" },
});

export default function Card() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello StyleSheet!</Text>
    </View>
  );
}
```

---

## 3. [Stylex](https://stylexjs.com/) <img src="/images/stylex.png" class="inline-block w-12 h-12 align-middle ml-4"/>

> Solution multi-plateformes de Meta

```tsx
import { StyleSheet, View, Text } from "react-native";
import * as stylex from "@stylexjs/stylex";

const styleX = stylex.create({
  button: {
    marginTop: 8,
    backgroundColor: "#3b82f6",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  buttonText: { color: "white", fontWeight: "500" },
});

export default function Card() {
  return (
    <View>
      <Pressable {...stylex.props(styleX.button)}>
        <Text {...stylex.props(styleX.buttonText)}>Press me</Text>
      </Pressable>
    </View>
  );
}
```

---

## [Tailwind](https://tailwindcss.com/) <img src="/images/tailwindcss.svg" class="inline-block w-12 h-12 align-middle ml-4"/> + AI Magic <img src="/images/claude.svg" class="inline-block w-12 h-12 align-middle ml-4"/> [Claude](https://claude.ai/)

1. 1. Décrivez votre interface à l'IA

```plaintext
"Créer une carte avec des coins arrondis, une ombre, un titre principal,
et un bouton dégradé avec effet au survol"
```

2. L'IA génère les classes Tailwind:

```tsx
<View className="p-6 bg-white rounded-xl shadow-lg">
  <Text className="text-2xl font-bold text-gray-800">Carte Générée par IA</Text>
  <Pressable
    className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 
    px-6 py-3 rounded-lg active:opacity-80"
  >
    <Text className="text-white font-semibold text-center">Bouton Magique</Text>
  </Pressable>
</View>
```

> 💡 Astuce : Utilisez l'IA pour prototyper rapidement des composants UI et apprendre les motifs Tailwind

---
layout: iframe-right
url: https://results.2023.stateofreactnative.com/platform-apis
---

# [Bibliothèques Essentielles](https://results.2023.stateofreactnative.com/platform-apis)

> Qu'est-ce qui rend une application mobile vraiment native ? Voici les bibliothèques clés qui permettent des fonctionnalités natives.

<br/>

## Caméra & QR Code

Accès natif à la caméra et capacités de scan de QR code pour votre application.

```tsx
import { Camera } from "expo-camera";
```

<br/>

## Bottom Sheet

Feuilles de bas de page fluides et basées sur les gestes avec @gorhom/bottom-sheet.

---

<br/>

## Animations

- **Reanimated**: Animations haute performance
- **Lottie**: Belles animations vectorielles
- **Skia**: Jeu + Graphiques 2D accélérés

<br/>

> 💡 Ces bibliothèques sont éprouvées et largement utilisées dans les applications en production.

---
layout: two-cols
---

# Gestion de l'État Local

## [useState](https://react.dev/reference/react/useState)

> La façon fondamentale de gérer l'état au niveau des composants dans React Native

### Quand l'utiliser

- Données spécifiques aux composants
- Valeurs des formulaires
- États de basculement (afficher/masquer)
- État simple de l'interface

### Avantages

- Intégré à React
- Modèle mental simple
- Pas de dépendances externes
- Parfait pour l'état local

::right::

```tsx
import { useState } from "react";
import { View, Text, Button } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  return (
    <View className="p-4">
      <Text className="text-xl">Count: {count}</Text>
      <Button
        title={isActive ? "Active" : "Inactive"}
        onPress={() => {
          setCount(count + 1);
          setIsActive(!isActive);
        }}
      />
    </View>
  );
}
```

---
layout: two-cols
---

# État Partagé

## [useContext](https://react.dev/reference/react/useContext)

> Partager l'état entre les composants sans prop drilling

### Quand l'utiliser

- Données de thème
- Authentification utilisateur
- Préférences globales de l'application
- Configuration partagée

### Avantages

- Intégré à React
- Pas de dépendances externes
- Évite le prop drilling
- API simple

::right::

```tsx
import { createContext, useContext, useState } from "react";

// Create context
const ThemeContext = createContext(null);

// Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Usage in components
export function ThemeSwitch() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Button
      title={`Switch to ${theme === "light" ? "dark" : "light"}`}
      onPress={() => setTheme(theme === "light" ? "dark" : "light")}
    />
  );
}
```

---
layout: iframe-right
url: https://zustand-demo.pmnd.rs/
---

# État Global

## [Zustand](https://zustand.docs.pmnd.rs/)

> Gestion d'état simple, rapide et évolutive

### Quand l'utiliser

- État global complexe
- Mises à jour multiples d'état
- Applications critiques en performance
- Quand Redux est trop lourd

### Avantages

- Taille minimale
- Pas de boilerplate
- Compatible TypeScript
- Support des DevTools

---
layout: iframe-right
url: https://legendapp.com/open-source/state/v3/
---

# État Observable

## [LegendState](https://legendapp.com/)

> Gestion d'état réactive haute performance

### Quand l'utiliser

- Interactions d'état complexes
- Besoin de persistance
- Exigences de synchronisation en temps réel
- Applications critiques en performance

### Avantages

- Meilleures performances
- Persistance intégrée
- Synchronisation automatique
- Mises à jour granulaires

---
layout: iframe-right
url: https://tanstack.com/query/latest
---

# État Serveur

## [TanStack Query](https://tanstack.com/query/latest)

> Gestion d'état asynchrone puissante

### Quand l'utiliser

- Récupération de données API
- Mise en cache d'état serveur
- Mises à jour en temps réel
- Support hors ligne

### Avantages

- Mise en cache automatique
- Mises à jour en arrière-plan
- Mises à jour optimistes
- Requêtes infinies

---
layout: iframe-right
url: https://react-hook-form.com/
---

# Gestion des Formulaires

## [React Hook Form](https://react-hook-form.com/)

> Validation et gestion des formulaires axées sur la performance

### Quand l'utiliser

- Formulaires complexes
- Validation de formulaires
- Formulaires critiques en performance
- Formulaires multi-étapes

### Avantages

- Re-rendus minimaux
- Validation intégrée
- Compatible TypeScript
- Taille minimale (~8KB)

---
layout: two-cols
---

# Listes Awesome React & React Native 🌟

## Listes Officielles

- [**awesome-react-native**](https://github.com/jondot/awesome-react-native) - La référence principale pour React Native ⭐ 34.9k
- [**awesome-react**](https://github.com/enaqx/awesome-react) - Resources React essentielles ⭐ 66.7k

## Listes Par Catégorie

### React Native

- [**react-native-elements**](https://github.com/react-native-elements/react-native-elements) - Kit UI Cross-Platform ⭐ 23.4k

- [**awesome-reactnative-ui**](https://github.com/madhavanmalolan/awesome-reactnative-ui) - Collection de composants UI ⭐ 3.4k

::right::

- [**react-native-community**](https://github.com/react-native-community) - Modules maintenus par la communauté

### React Web

- [**awesome-react-components**](https://github.com/brillout/awesome-react-components) - Composants React réutilisables ⭐ 37.1k
- [**awesome-nextjs**](https://github.com/unicodeveloper/awesome-nextjs) - Resources Next.js ⭐ 11.2k

### State Management

- [**awesome-react-state-management**](https://github.com/olegrjumin/awesome-react-state-management) - Solutions de gestion d'état ⭐ 2.8k

### Animation

- [**awesome-react-native-animation**](https://github.com/jondot/awesome-react-native-animation) - Bibliothèques d'animation ⭐ 1.2k

### Testing

- [**awesome-react-testing**](https://github.com/huoriyu/awesome-react-testing) - Outils de test React ⭐ 987

<div class="text-sm text-gray-500 mt-4">
Note: Les étoiles GitHub sont à jour au 12 février 2025
</div>

---
layout: two-cols
class: p-4
---

# Composants DOM dans React Native

### Que sont les Composants DOM ?

<br />

> Une fonctionnalité puissante qui permet d'utiliser des bibliothèques web React directement dans votre application React Native via une WebView interactive.

<br />

### Avantages Clés

<br />

- **Bibliothèques Web en Natif** : Utilisez n'importe quel composant web React
- **Intégration Transparente** : Communication bidirectionnelle entre web et natif

::right::

- **Performance** : Rendu optimisé dans un contexte isolé
- **Flexibilité** : Parfait pour les fonctionnalités web complexes

<br />

### Cas d'Utilisation

<br />

- 📊 Graphiques et Visualisations Complexes
- 🎵 Notation Musicale (comme l'app Stage)
- 📝 Éditeurs de Texte Riches
- 🗺️ Cartes Interactives
