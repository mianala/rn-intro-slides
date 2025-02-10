---
layout: center
---

# Mobile APIs
## Native Device Features

<div class="mt-8 grid grid-cols-2 gap-8">

<div class="space-y-4">

### Common APIs
- Camera & QR Code
- Location Services
- Push Notifications
- Biometrics
- File System
- Contacts
- Calendar

</div>

<div class="space-y-4">

### Benefits
- Native Performance
- Device Integration
- Offline Capabilities
- Enhanced UX
- Platform Features

</div>

</div>

---
layout: two-cols
---

# Testing Framework
## End-to-End Testing with Maestro

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
<img src="/images/maestro.png" class="w-8 h-8">

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

> 😪 I wasn’t able to set it up with windows. Only on Mac.

---
layout: two-cols
---

# Debugging & Performance
## Tools and Best Practices

### React Developer Tools
- Press J to open DevTools
- Console logging
- Network monitoring
- Component inspection

### Profilers
- Android Studio Profiler
- Xcode Instruments
- Memory usage
- CPU performance
- Network calls

::right::

### Performance Monitoring

#### Sentry
- Error tracking
- Performance monitoring
- Crash reporting
- User analytics

#### PostHog
- Product analytics
- Feature flags
- Session recording
- A/B testing

#### Firebase Analytics
- User behavior
- Crash reporting
- Performance monitoring
- Custom events


---
layout: two-cols
---

# Security Best Practices

<div class="space-y-2">

### API Security
- Never expose API keys in code
- Use environment variables
- Implement key rotation
- Use secure endpoints only
### iOS Storage
- Use Keychain via `react-native-keychain`
- Store tokens securely
- Encrypt sensitive data
- Avoid AsyncStorage for secrets
### Android Storage
- Use Encrypted SharedPreferences
- Implement Keystore

</div>

::right::

<div class="space-y-2">

- Secure token management
- Protected storage access


### Secure Solutions
```tsx
// Encrypted Storage
import EncryptedStorage from 'react-native-encrypted-storage';
// MMKV with encryption
import { MMKV } from 'react-native-mmkv';
const storage = new MMKV({
  id: 'app-storage',
  encryptionKey: 'your-secure-key'
})
```

</div>

<div class="mt-8">

<div class="notice warning">
  <span class="icon">⚠️</span>
  <div>
    <strong>Important:</strong> Never use AsyncStorage for sensitive data - it's not secure for storing tokens or keys.
  </div>
</div>

<div class="notice info">
  <span class="icon">💡</span>
  <div>
    <strong>Tip:</strong> Always use <strong>HTTPS</strong> for API requests. HTTP is not secure and may expose your data.
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