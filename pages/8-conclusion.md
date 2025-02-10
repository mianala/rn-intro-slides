---
layout: two-cols
---

# Conclusion
## What's Next? 🚀

<div class="mt-8 space-y-6">

### Immediate Actions
<div class="checklist">
  <label class="checkbox-item">
    <input type="checkbox"> Sign up for the bootcamp
  </label>
  <label class="checkbox-item">
    <input type="checkbox"> Sign up for the startup course
  </label>
</div>

### Course Value
<div class="value-prop mt-4">
  <span class="text-2xl">💎</span>
  <p>I hope you got at least 10x your money's worth!</p>
</div>

</div>

::right::

<div class="mt-8 space-y-6">

### Future Improvements
<div class="checklist">
  <label class="checkbox-item">
    <input type="checkbox"> Complete documentation coverage
  </label>
  <label class="checkbox-item">
    <input type="checkbox"> Add chapter introductions
  </label>
  <label class="checkbox-item">
    <input type="checkbox"> Improve navigation
  </label>
  <label class="checkbox-item">
    <input type="checkbox"> Simplify technical content
  </label>
</div>

</div>

<style>
.checkbox-item {
  @apply flex items-center gap-2 text-sm text-gray-700 mb-2 cursor-pointer;
}
.checkbox-item input {
  @apply w-4 h-4 rounded border-gray-300;
}
.value-prop {
  @apply flex items-center gap-3 p-4 bg-blue-50 rounded-lg text-blue-700;
}
</style>

---
layout: two-cols
---

# Thank You! 🙏
## For Being Part of This Journey

<div class="mt-8 space-y-6">

<div class="thank-you-card">
  <span class="icon">💫</span>
  <p>Your presence made this workshop special</p>
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
    <a href="#">Stage App</a>
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
  "event": "React Native Workshop",
  "status": "completed",
  "host": {
    "name": "Loharano",
    "website": "Loha.dev",
    "email": "mianalaloharano@gmail.com"
  },
  "venue": "Happy Place",
  "message": "Thank you for attending! 🚀",
  "next_steps": {
    "bootcamp": "Coming soon",
    "community": "Join our Discord",
    "support": "24/7 available"
  },
  "feedback": "Always appreciated! 💝"
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