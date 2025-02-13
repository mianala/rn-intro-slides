---
layout: two-cols
---

# Testing Framework

## End-to-End Testing with

<div class="relative flex">
<span v-mark.yellow="{ at: 0, type: 'highlight'}" class="text-3xl">
Maestro
</span>  
<img src="/images/maestro.png" class="w-8 h-8" />
</div>
<div class="mt-8 space-y-2">

### Why E2E Testing?

- Validates entire user flows
- Catches integration issues
- Simulates real user behavior
- Ensures app stability

### Maestro Features

- Simple YAML syntax
- Cross-platform support
- Visual testing tools
- CI/CD integration
</div>

::right::

### Example Flow

```yaml
flow: Login Test
appId: com.myapp
---
- launchApp
- tapOn: "Email Input"
- inputText: "user@example.com"
- tapOn: "Password Input"
- inputText: "password123"
- tapOn: "Login Button"
- assertVisible: "Dashboard"
```

<br/>

> 😪 Je n'ai pas réussi à le configurer sur Windows. Uniquement sur Mac.

---
layout: two-cols
---

# Débogage & Performance

## Outils et Bonnes Pratiques

<br/>

### Outils de Développement React

- Appuyez sur J pour ouvrir DevTools
- Journalisation console
- Surveillance réseau
- Inspection des composants

::right::

### Profileurs

- Profileur Android Studio
- Instruments Xcode
- Utilisation mémoire
- Performance CPU
- Appels réseau

---
layout: two-cols
---

# Surveillance des Performances

### [Sentry](https://sentry.io) <img src="/images/sentry.svg" class="w-8 h-8" />

- Suivi des erreurs
- Surveillance des performances
- Rapport de plantage
- Analytique utilisateur

<br/>

### [PostHog](https://posthog.com) <img src="/images/posthog.svg" class="w-8 h-8" />

- Analytique produit
- Drapeaux de fonctionnalités
- Enregistrement de session
- Tests A/B

::right::

### [Firebase Analytics](https://developers.google.com/analytics/) <img src="/images/analytics.png" class="w-8 h-8" />

- Comportement utilisateur
- Rapport de plantage
- Surveillance des performances
- Événements personnalisés

---
layout: two-cols
---

# Bonnes Pratiques de Sécurité

<div class="space-y-2">

### Sécurité API

- Ne jamais exposer les clés API dans le code
- Utiliser des variables d'environnement
- Implémenter la rotation des clés
- Utiliser uniquement des points d'accès sécurisés

### Stockage iOS

- Utiliser Keychain via `react-native-keychain`
- Stocker les tokens de manière sécurisée
- Chiffrer les données sensibles
- Éviter AsyncStorage pour les secrets

</div>

::right::

<div class="space-y-2">

### Stockage Android

- Utiliser SharedPreferences Chiffré
- Implémenter Keystore

### Principes Fondamentaux

- Gestion sécurisée des tokens
- Accès protégé au stockage
- Chiffrement des données sensibles
- Protection contre les attaques courantes

</div>

---
layout: two-cols
---

# Solutions de Sécurité

### MMKV (Mmap Memory Key Value)

> Stockage haute performance développé par WeChat, optimisé pour les applications mobiles

```tsx
// MMKV avec chiffrement
import { MMKV } from "react-native-mmkv";
const storage = new MMKV({
  id: "app-storage",
  encryptionKey: "your-secure-key",
});
```

### EncryptedStorage

> Solution de stockage chiffré native pour iOS et Android

```tsx
import EncryptedStorage from "react-native-encrypted-storage";
```

::right::

<div class="mt-8">

<div class="notice warning">
  <span class="icon">⚠️</span>
  <div>
    <strong>Important:</strong> N'utilisez jamais AsyncStorage pour les données sensibles - ce n'est pas sécurisé pour stocker des tokens ou des clés.
  </div>
</div>

<div class="notice info">
  <span class="icon">💡</span>
  <div>
    <strong>Conseil:</strong> Utilisez toujours <strong>HTTPS</strong> pour les requêtes API. HTTP n'est pas sécurisé et peut exposer vos données.
  </div>
</div>

</div>

<style>
.notice {
  @apply p-4 rounded-lg flex items-start gap-3 mt-4;
}

.notice.warning {
  @apply bg-amber-50 text-amber-700 border border-amber-200;
}

.notice.info {
  @apply bg-blue-50 text-blue-700 border border-blue-200;
}

.notice .icon {
  @apply text-xl;
}

h3 {
  @apply text-xl font-semibold mb-2 text-gray-800;
}

.space-y-4 > * + * {
  margin-top: 1rem;
}
</style>

---
layout: center
---

<div class="container mx-auto max-w-3xl p-6">

<div class="flex items-center justify-center gap-4">
  <img src="/images/react.svg" class="w-16 h-16 my-4" alt="React Native Logo">
  <span class="text-2xl font-bold">React Native</span>
</div>

<div class="notice info">
  <span class="icon">💡</span>
  <div>
    I understand that you may not use all of them. But at least now you're assured that they're there when you need them.
  </div>
</div>

<div class="text-center mt-8 text-xl font-semibold text-blue-800">
  All these things combined ⇒ Makes React Native quite hard to beat
</div>

</div>

<style>
.notice {
  @apply p-4 rounded-lg flex items-start gap-3;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
}

.notice .icon {
  @apply text-2xl;
}
</style>
