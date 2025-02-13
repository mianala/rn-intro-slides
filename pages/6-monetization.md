---
layout: center
background: https://source.unsplash.com/collection/94734566/1920x1080
---

<div class="container mx-auto max-w-3xl p-8 bg-white/90 backdrop-blur-sm rounded-xl">

# Monétisation 💰

<div class="mt-8 text-xl text-gray-700 space-y-4">

Le développement d'applications mobiles à Madagascar représente une opportunité exceptionnelle. Le coût de développement est environ dix fois inférieur à celui d'autres pays, offrant ainsi un avantage concurrentiel significatif. C'est le moment idéal pour tester vos idées et les concrétiser.

<div class="notice info mt-8">
  <span class="icon">💳</span>
  <div>
    Un compte bancaire est nécessaire pour recevoir les paiements des stores.
  </div>
</div>

</div>
</div>

<style>
.notice {
  @apply p-4 rounded-lg flex items-start gap-3;
  @apply bg-blue-50 text-blue-700 border border-blue-200;
}
.notice .icon {
  @apply text-2xl;
}
</style>

---
layout: two-cols
---

# <a href="https://www.revenuecat.com/docs/getting-started/quickstart" target="_blanc"><img src="/images/revenuecat.png" class="inline-block w-32 align-middle" /></a> 🔥

## Gestion des Achats In-App

<div class="mt-2 space-y-2">

### Processus d'Installation

1. Se connecter
2. Créer un projet
3. Créer des produits + droits
4. Exporter les clés API
5. Créer une interface de paiement

### Avantages

- Support multi-plateformes
- Tableau de bord analytique
- Validation des reçus côté serveur
- Gestion des abonnements
- Capacités de tests A/B

</div>

::right::

<div class="mt-8">
<img src="/files/image%2026.png" class="rounded-lg shadow-lg" />
</div>

---

# App Store

## [Monétisation iOS](https://appstoreconnect.apple.com/business)

<div class="mt-8 space-y-6">

### Étapes de Configuration

1. Apps > VOTRE APP > Abonnements
2. Créer des Groupes d'Abonnement
3. Signer les accords sur https://appstoreconnect.apple.com/business
4. Ajouter un compte bancaire
5. Remplir les Informations Fiscales

<div class="notice warning">
  <span class="icon">💸</span>
  <div>
    <strong>Commission Apple :</strong> 30% des revenus
  </div>
</div>

</div>

<style>
.notice {
  @apply p-4 rounded-lg flex items-start gap-3;
  @apply bg-amber-50 text-amber-700 border border-amber-200;
}
.notice .icon {
  @apply text-2xl;
}
</style>

---

# Google Play

## [Monétisation Android](https://play.google.com/console/u/0/developers/7358940604964515304/paymentssettings)

<div class="mt-8 space-y-6">

### Processus de Configuration

1. App > Monétiser avec Play
2. Produits > Abonnements > Créer
3. Créer une offre & Définir le prix
4. Configurer le compte bancaire

<div class="notice success">
  <span class="icon">💰</span>
  <div>
    <strong>Commission Google :</strong> 15% des revenus
  </div>
</div>

</div>

<style>
.notice {
  @apply p-4 rounded-lg flex items-start gap-3;
  @apply bg-green-50 text-green-700 border border-green-200;
}
.notice .icon {
  @apply text-2xl;
}
</style>

---
layout: two-cols
---

# Autres Options

## Méthodes de Paiement Additionnelles

<div class="mt-8 space-y-6">

### Clés des Plateformes

- Connexion App Store
- Clé d'éditeur Android

### [Intégration Stripe](https://stripe.com/)

<div class="notice info">
  <span class="icon">💳</span>
  <div>
    <strong>Frais :</strong> 2.9% + 0,30€
    <br/>
    <small>Recommandé pour l'intégration NextJS</small>
  </div>
</div>

</div>

::right::

<div class="mt-8 space-y-6">

### Considérations Fiscales

<div class="notice success">
  <span class="icon">🎉</span>
  <div>
    <strong>Taxe US :</strong> 0%
  </div>
</div>

### API Integration

```typescript
// Example Stripe integration
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const session = await stripe.checkout.sessions.create({
  payment_method_types: ["card"],
  line_items: [
    {
      price: "price_H5ggYwtDq4fbrJ",
      quantity: 1,
    },
  ],
  mode: "subscription",
  success_url: "https://example.com/success",
  cancel_url: "https://example.com/cancel",
});
```

</div>

<style>
.notice {
  @apply p-4 rounded-lg flex items-start gap-3 mb-4;
}
.notice.info {
  @apply bg-blue-50 text-blue-700 border border-blue-200;
}
.notice.success {
  @apply bg-green-50 text-green-700 border border-green-200;
}
.notice .icon {
  @apply text-2xl;
}
</style>
