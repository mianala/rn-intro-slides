---
layout: center
background: https://source.unsplash.com/collection/94734566/1920x1080
---

<div class="container mx-auto max-w-3xl p-8 bg-white/90 backdrop-blur-sm rounded-xl">

# Monetization 💰

<div class="mt-8 text-lg text-gray-700 space-y-4">

I strongly encourage everyone here. If you have money to invest, building mobile app in Madagascar is at most a tenth of what it takes for anyone else. If you can test your idea and execute, there's no better place and time than now.

<div class="notice info mt-8">
  <span class="icon">💳</span>
  <div>
    You'll need a bank account that the stores can send money to.
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

# RevenueCat 🔥
## In-App Purchase Management

<div class="mt-2 space-y-2">

### Setup Process
1. Sign In
2. Create Project
3. Create Products + Entitlements
4. Export API keys
5. Create a paywall
### Benefits
- Cross-platform support
- Analytics dashboard
- Server-side receipt validation
- Subscription management
- A/B testing capabilities

</div>

::right::





<div class="mt-8">
<img src="/files/image%2026.png" class="rounded-lg shadow-lg" />
</div>

---
layout: two-cols
---

# App Store
## iOS Monetization

<div class="mt-8 space-y-6">

### Setup Steps
1. Apps > YOUR APP > Subscriptions
2. Create Subscription Groups
3. Sign agreements at https://appstoreconnect.apple.com/business
4. Add bank account
5. Fill Tax Info

<div class="notice warning">
  <span class="icon">💸</span>
  <div>
    <strong>Apple Tax:</strong> 30% of revenue
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
layout: two-cols
---

# Google Play
## Android Monetization

<div class="mt-8 space-y-6">

### Setup Process
1. App > Monetize with Play
2. Products > Subscriptions > Create
3. Create offer & Set price
4. Setup bank account

<div class="notice success">
  <span class="icon">💰</span>
  <div>
    <strong>Google Tax:</strong> 15% of revenue
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

# Other Options
## Additional Payment Methods

<div class="mt-8 space-y-6">

### Platform Keys
- Apple store connect
- Android publisher key

### Stripe Integration
<div class="notice info">
  <span class="icon">💳</span>
  <div>
    <strong>Fee:</strong> 2.9% + 30¢
    <br/>
    <small>Recommended for NextJS integration</small>
  </div>
</div>

</div>

::right::

<div class="mt-8 space-y-6">

### Tax Considerations
<div class="notice success">
  <span class="icon">🎉</span>
  <div>
    <strong>US Tax:</strong> 0%
  </div>
</div>

### API Integration
```typescript
// Example Stripe integration
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [{
    price: 'price_H5ggYwtDq4fbrJ',
    quantity: 1,
  }],
  mode: 'subscription',
  success_url: 'https://example.com/success',
  cancel_url: 'https://example.com/cancel',
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
