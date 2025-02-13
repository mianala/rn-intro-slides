---
layout: center
---

<div class="flex flex-col items-center justify-center h-full">
  <h1 class="text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
    Questions & Réponses
  </h1>
</div>

<style>
h1 {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}
</style>

---
layout: two-cols
---

# Merci ! 🙏

## D'Avoir Participé à Cette Aventure

<div class="mt-8 space-y-6">

<div class="thank-you-card">
  <span class="icon">💫</span>
  <p>Votre présence a rendu cet atelier spécial</p>
</div>

<div class="contact-info">
  <div class="item">
    <span class="icon">📧</span>
    <a href="mailto:mianalaloharano@gmail.com">mianalaloharano@gmail.com</a>
  </div>
  <div class="item">
    <span class="icon">🌐</span>
    <a href="https://loha.dev">loha.dev</a>
  </div>
  <div class="item">
    <span class="icon">📱</span>
    <a href="https://stage.loha.dev">Stage App</a>
  </div>
  <div class="item">
    <span class="icon">👥</span>
    <a href="https://web.facebook.com/aitimg/?_rdc=1&_rdr#">Facebook</a>
  </div>
</div>

</div>

::right::

<div class="terminal">
  <div class="terminal-header">
    <span class="dot red"></span>
    <span class="dot yellow"></span>
    <span class="dot green"></span>
  </div>
  <div class="terminal-body">

```json
{
  "événement": "Atelier React Native",
  "statut": "terminé",
  "hôte": {
    "nom": "Loharano",
    "site": "Loha.dev",
    "email": "mianalaloharano@gmail.com"
  },
  "lieu": "Happy Place",
  "message": "Merci de votre participation ! 🚀",
  "prochaines_étapes": {
    "bootcamp": "Bientôt disponible",
    "communauté": "Rejoignez AITI sur Facebook",
    "support": "Disponible"
  },
  "retour": "Toujours apprécié ! 💝"
}
```

  </div>
</div>

<style>
.thank-you-card {
  @apply p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl;
  @apply flex items-center gap-4 text-gray-700;
}
.contact-info {
  @apply space-y-3;
}
.contact-info .item {
  @apply flex items-center gap-2 text-sm text-gray-600;
}
.contact-info a {
  @apply hover:text-blue-600 transition-colors;
}
.terminal {
  @apply bg-white rounded-lg shadow-lg overflow-hidden ml-4;
}
.terminal-header {
  @apply bg-gray-100 p-3 flex gap-2;
}
.dot {
  @apply w-3 h-3 rounded-full;
}
.red { @apply bg-red-400; }
.yellow { @apply bg-yellow-400; }
.green { @apply bg-green-400; }
.terminal-body {
  @apply p-4 text-sm font-mono;
}
pre {
  @apply text-gray-800;
}
</style>
