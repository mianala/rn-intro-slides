---
theme: seriph
title: "L'Ère du Mobile : Créez des Applications avec React Native !"
titleTemplate: '%s - Loha.dev'
author: Randriamanasina Mianala Loharano
innfo: A presentation of the Loha.dev seminar about React Native
keywords: react,react-native,software,development,loha,seminaire,learn,tutoriel,tools,dev-tools,pipeline,start,monetization
exportFilename: Loha.dev-react-native
monaco: true
monacoTypesSource: cdn
selectable: true
favicon: '/images/logo.png'
layout: image
image: /slides/1.jpg
---

---
layout: image
image: /slides/2.jpg
---


---
layout: image-right
image: /images/Mianala-Family.jpg
---

# Randriamanasina Mianala Loharano
#### Software Enngineer | Founder of [*Stage*](stage.loha.dev) and [*Loha.dev*](loha.dev)
<br/>

> 10+ years of experience in Software Development

<br/>


### 🚀 Expertise
<br/>

- Full-Stack Development 
- Mobile App Development
- Marketing
- Technical and Practical Leadership
- Software Architecture
- DevOps & CI/CD

---
layout: image-right
image: /images/Mianala.jpg
---

# Randriamanasina Mianala Loharano
#### Software Enngineer | Founder of [*Stage*](stage.loha.dev) and [*Loha.dev*](loha.dev)
<br/>

> 10+ years of experience in Software Development

<br/>

### 🎓 Education & Certifications

<br/>

- Master's in Computer Science
- English - Business Certificate 
- DevOps Certification


---
layout: two-cols
---

# My Journey

<br/>



### Early Days
- <span v-mark.red="{ at: 1, type: 'strike-through' }"> [zahividy.mg](http://zahividy.mg) (2015)  </span>
  *All tech, no business skills*


<br/>


### Government Projects
- Built <span v-mark.blue="{ at: 2, type: 'highlight' }"> critical systems </span> for Ministry of Finance
- [dgbf.mg/transparence](https://www.dgbf.mg/transparence)


<br/>



### Freelancing Success
- <span v-mark.green="{ at: 3, type: 'highlight' }"> **$60,000+** </span> revenue over 3 years
- International SAAS projects

::right::
### Leadership

- <span v-mark.blue="{ at: 4, type: 'underline' }"> Chief Technical Officer </span> at Olona
- Backend operations expertise
- Team management


<br/>


### Education
- <span v-mark.yellow="{ at: 4, type: 'circle' }"> Teaching 100k-500k Ar </span>class
- Mentoring new developers


---
layout: iframe-right
url: https://stage.loha.dev
---

# Current Focus: <span v-mark="{ at: 1, color: '#FFB6C1', type: 'highlight' }">Stage</span>

<div class="mt-4">

### A Platform for Performers

<br/>

- Web App (NextJS)
- Mobile App (React Native)
- **Available now** on App Store & Play Store
- Free plan for everyone

</div>

<div class="px-4 py-4 rounded-sm">

### Development Progress

![Development Stats](/files/image%204.png "Github Progress")


</div>

<style>
.slidev-layout {
  padding: 2rem;
}
</style>

---
layout: center
class: text-center
---

<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
<div class="flex flex-col items-center justify-center h-full">
  <div
    v-motion
    :initial="{ opacity: 0, scale: 2, y: -50 }"
    :enter="{ opacity: 1, scale: 1, y: 0, transition: { delay: 400, duration: 800, type: 'spring' } }"
    class="text-9xl mb-12 filter drop-shadow-lg"
  >
    🔥
  </div>

  <div
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
    class="text-2xl tracking-wide font-light text-gray-500 mb-6"
  >
    Today, I'll share everything you need to know about
  </div>

  <div
    v-motion
    :initial="{ opacity: 0, scale: 0.6 }"
    :enter="{ opacity: 1, scale: 1, transition: { delay: 800, duration: 800, type: 'spring' } }"
    class="text-7xl font-extrabold tracking-tight mb-8"
  >
    <span v-mark.blue="{ at: 1, type: 'highlight' }">Mobile App </span>
    <span v-mark.teal="{ at: 2, type: 'underline' }">Development</span>
  </div>

  <div
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1, transition: { delay: 1600, duration: 1000 } }"
    class="text-xl font-medium tracking-wide text-teal-300"
  >
    <span v-mark.yellow="{ at: 3, type: 'bracket' }">
      Learn all about mobile app creation with React Native
    </span>
  </div>
</div>
<div 
  v-motion
  :initial="{ opacity: 0, rotate: -30 }"
  :enter="{ opacity: 0.2, rotate: 0, transition: { delay: 2000, duration: 1000 } }"
  class="absolute bottom-8 right-8 w-32 h-32"
>
  <img src="/images/react_light.svg" alt="React Logo" class="w-full h-full" />
</div>


<style>
.slidev-layout {
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.02em;
  padding:0 !important
}

.font-extrabold {
  letter-spacing: -0.04em;
}

.text-7xl {
  line-height: 1.1;
}
</style>


---


<div class="flex flex-col w-full h-full">
  <div class="bg-gray-100 border-b border-gray-200 px-6 py-4">
    <div class="flex items-center justify-between max-w-6xl mx-auto">
      <div class="text-xl font-medium text-gray-700">What will you learn?</div>
      <div class="flex gap-8">
        <a href="#developers" class="text-blue-600 hover:text-blue-800 font-medium" :class="{ 'border-b-2 border-blue-600': $slidev.nav.currentPage === 8 }">Developers</a>
        <a href="#students" class="text-slate-600 hover:text-emerald-800 font-medium" :class="{ 'border-b-2 border-emerald-600': $slidev.nav.currentPage === 9 }">Students</a>
        <a href="#entrepreneurs" class="text-slate-600 hover:text-purple-800 font-medium" :class="{ 'border-b-2 border-purple-600': $slidev.nav.currentPage === 10 }">Entrepreneurs</a>
      </div>
    </div>
  </div>

  <div class="flex-1 p-12">
    <h1 id="developers" class="text-4xl font-bold mb-12">For Developers</h1>
    <br/>
    <div class="max-w-2xl mx-auto">
      <div class="text-2xl leading-relaxed mb-8 text-blue-800">
        Build practical solutions with new tools for your toolkit
      </div>
      <br/>
      <div class="flex gap-3 flex-wrap justify-center">
        <span class="px-4 py-2 bg-blue-100 rounded-full text-blue-800">🛠️ New Tools</span>
        <span class="px-4 py-2 bg-blue-100 rounded-full text-blue-800">⚡ Practical Skills</span>
        <span class="px-4 py-2 bg-blue-100 rounded-full text-blue-800">🎯 Real Solutions</span>
      </div>
    </div>
  </div>
</div>

---


<div class="flex flex-col w-full h-full">
  <div class="bg-gray-100 border-b border-gray-200 px-6 py-4">
    <div class="flex items-center justify-between max-w-6xl mx-auto">
      <div class="text-xl font-medium text-gray-700">What will you learn?</div>
      <div class="flex gap-8">
        <a href="#developers" class="text-slate-600 hover:text-blue-800 font-medium" :class="{ 'border-b-2 border-blue-600': $slidev.nav.currentPage === 8 }">Developers</a>
        <a href="#students" class="text-emerald-600 hover:text-emerald-800 font-medium" :class="{ 'border-b-2 border-emerald-600': $slidev.nav.currentPage === 9 }">Students</a>
        <a href="#entrepreneurs" class="text-slate-600 hover:text-purple-800 font-medium" :class="{ 'border-b-2 border-purple-600': $slidev.nav.currentPage === 10 }">Entrepreneurs</a>
      </div>
    </div>
  </div>

  <div class="flex-1 p-12">
    <h1 id="students" class="text-4xl font-bold mb-12">For Students</h1>
    <br/>
    <div class="max-w-2xl mx-auto">
      <div class="text-2xl leading-relaxed mb-8 text-emerald-800">
        Learn the essential skills through hands-on mobile development
      </div>
      <br/>
      <div class="flex gap-3 flex-wrap justify-center">
        <span class="px-4 py-2 bg-emerald-100 rounded-full text-emerald-800">📚 Bootcamp</span>
        <span class="px-4 py-2 bg-emerald-100 rounded-full text-emerald-800">📱 Mobile Dev</span>
        <span class="px-4 py-2 bg-emerald-100 rounded-full text-emerald-800">🎓 Guided Learning</span>
      </div>
    </div>
  </div>
</div>

---


<div class="flex flex-col w-full h-full">
  <div class="bg-gray-100 border-b border-gray-200 px-6 py-4">
    <div class="flex items-center justify-between max-w-6xl mx-auto">
      <div class="text-xl font-medium text-gray-700">What will you learn?</div>
      <div class="flex gap-8">
        <a href="#developers" class="text-slate-600 hover:text-blue-800 font-medium" :class="{ 'border-b-2 border-blue-600': $slidev.nav.currentPage === 8 }">Developers</a>
        <a href="#students" class="text-slate-600 hover:text-emerald-800 font-medium" :class="{ 'border-b-2 border-emerald-600': $slidev.nav.currentPage === 9 }">Entrepreneurs</a>
        <a href="#entrepreneurs" class="text-purple-600 hover:text-purple-800 font-medium" :class="{ 'border-b-2 border-purple-600': $slidev.nav.currentPage === 10 }">Students</a>
      </div>
    </div>
  </div>

  <div class="flex-1 p-12">
    <h1 id="entrepreneurs" class="text-4xl font-bold mb-12">For Entrepreneurs</h1>
      <br/>
    <div class="max-w-2xl mx-auto">
      <div class="text-2xl leading-relaxed mb-8 text-purple-800">
        Gain the visibility you need to make informed decisions
      </div>
      <br/>
      <div class="flex gap-3 flex-wrap justify-center mb-8">
        <span class="px-4 py-2 bg-purple-100 rounded-full text-purple-800">💡 Product Vision</span>
        <span class="px-4 py-2 bg-purple-100 rounded-full text-purple-800">📊 Market Understanding</span>
        <span class="px-4 py-2 bg-purple-100 rounded-full text-purple-800">🚀 Strategic Growth</span>
      </div>
      <br/>
      <div class="text-lg text-purple-600 italic text-center mt-8">
        "The more you know, the more you can help, the more value you can create"
      </div>
    </div>
  </div>
</div>


<style>
.slidev-layout {
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.02em;
  padding:0 !important
}

</style>



---
layout: center
fonts:
  sans: Robot
  weights: '200,400,600'
  italic: false
---

<div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
<div class="grid grid-cols-4 gap-4 p-8 h-full">
  <div v-click class="rounded-lg row-span-2 flex flex-col justify-start gap-5">
    <h2 class="text-xl font-bold">The <br/> plan</h2>
    <div v-click class="bg-white rounded-lg p-6 flex flex-col items-center justify-center grow shadow-lg hover:shadow-xl transition-all relative">
      <div class="text-6xl relative group transition-all duration-300 hover:scale-110">
        <span class="relative z-10">⏰</span>
        <div class="absolute inset-0 blur-lg bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 group-hover:opacity-30 transition-opacity scale-150"></div>
      </div>
      <h2 class="text-xl text-center font-bold mt-4">Why now?</h2>
      <div class="absolute right-2 top-2 p-2 bg-pink-600 text-white shadow-md rounded-full w-8 h-8 grid place-items-center place-content-center">
<span class="text-white text-lg">+</span>
      </div>
    </div>
  </div>
<div v-click class="relative bg-white cursor-pointer rounded-lg p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all">
    <div class="text-6xl relative group transition-all duration-300 hover:scale-110">
      <span class="relative z-10">📝</span>
      <div class="absolute inset-0 blur-lg bg-gradient-to-r from-cyan-400 to-sky-400 opacity-20 group-hover:opacity-30 transition-opacity scale-150"></div>
    </div>
    <h2 class="text-xl text-center font-bold mt-4">Prerequisites</h2>
    <div class="absolute right-2 top-2 p-2 bg-pink-600 text-white shadow-md rounded-full w-8 h-8 grid place-items-center place-content-center">
<span class="text-white text-lg">+</span>
      </div>
  </div>
  <div v-click class="relative bg-white cursor-pointer rounded-lg p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all">
    <div class="text-6xl relative group transition-all duration-300 hover:scale-110">
      <span class="relative z-10">🔄</span>
      <div class="absolute inset-0 blur-lg bg-gradient-to-r from-amber-400 to-orange-400 opacity-20 group-hover:opacity-30 transition-opacity scale-150"></div>
    </div>
    <h2 class="text-xl text-center font-bold mt-4">Pipeline</h2>
    <div class="absolute right-2 top-2 p-2 bg-pink-600 text-white shadow-md rounded-full w-8 h-8 grid place-items-center place-content-center">
<span class="text-white text-lg">+</span>
      </div>
  </div>
  <div v-click class="relative bg-white cursor-pointer rounded-lg p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all">
    <div class="text-6xl relative group transition-all duration-300 hover:scale-110">
      <span class="relative z-10">🛠️</span>
      <div class="absolute inset-0 blur-lg bg-gradient-to-r from-emerald-400 to-teal-400 opacity-20 group-hover:opacity-30 transition-opacity scale-150"></div>
    </div>
    <h2 class="text-xl text-center font-bold mt-4">Developer's Paradise</h2>
    <div class="absolute right-2 top-2 p-2 bg-pink-600 text-white shadow-md rounded-full w-8 h-8 grid place-items-center place-content-center">
<span class="text-white text-lg">+</span>
      </div>
  </div>
  <div v-click class="relative bg-white cursor-pointer rounded-lg p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all">
    <div class="text-6xl relative group transition-all duration-300 hover:scale-110">
      <span class="relative z-10">🚀</span>
      <div class="absolute inset-0 blur-lg bg-gradient-to-r from-indigo-400 to-purple-400 opacity-20 group-hover:opacity-30 transition-opacity scale-150"></div>
    </div>
    <h2 class="text-xl text-center font-bold mt-4">Publishing</h2>
    <div class="absolute right-2 top-2 p-2 bg-pink-600 text-white shadow-md rounded-full w-8 h-8 grid place-items-center place-content-center">
<span class="text-white text-lg">+</span>
      </div>
  </div>

  <div v-click class="relative bg-white cursor-pointer rounded-lg p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all">
    <div class="text-6xl relative group transition-all duration-300 hover:scale-110">
      <span class="relative z-10">💰</span>
      <div class="absolute inset-0 blur-lg bg-gradient-to-r from-teal-400 to-green-400 opacity-20 group-hover:opacity-30 transition-opacity scale-150"></div>
    </div>
    <h2 class="text-xl text-center font-bold mt-4">Monetization</h2>
    <div class="absolute right-2 top-2 p-2 bg-pink-600 text-white shadow-md rounded-full w-8 h-8 grid place-items-center place-content-center">
<span class="text-white text-lg">+</span>
      </div>
  </div>

  <div v-click class="relative bg-white cursor-pointer rounded-lg p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all">
    <div class="text-6xl relative group transition-all duration-300 hover:scale-110">
      <span class="relative z-10">💭</span>
      <div class="absolute inset-0 blur-lg bg-gradient-to-r from-fuchsia-400 to-pink-400 opacity-20 group-hover:opacity-30 transition-opacity scale-150"></div>
    </div>
    <h2 class="text-xl text-center font-bold mt-4">Q&A Session</h2>
    <div class="absolute right-2 top-2 p-2 bg-pink-600 text-white shadow-md rounded-full w-8 h-8 grid place-items-center place-content-center">
<span class="text-white text-lg">+</span>
      </div>
  </div>
</div>

<style>
.slidev-layout {
  padding: 0 !important;
}
</style>

---
layout: center
class: text-center
---

<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(circle_800px_at_50%_50%,#e9f5ff,transparent)]"></div>

<div class="flex flex-col items-center justify-center h-full">
  <div 
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    class="text-6xl font-bold tracking-tight mb-8 text-center"
  >
    Ready?
  </div>

  <div 
    v-motion
    :initial="{ scale: 0, rotate: -180 }"
    :enter="{ scale: 1, rotate: 0, transition: { delay: 800, duration: 1000, type: 'spring' } }"
    class="relative"
  >
    <div class="text-8xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent text-center">
      GO
    </div>
    <div class="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-600/30 to-teal-600/30 -z-10"></div>
  </div>

  <div 
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1, transition: { delay: 1600, duration: 1000 } }"
    class="absolute bottom-8 text-gray-400"
  >
    Press Space to continue
  </div>
</div>

<style>
.slidev-layout {
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.02em;
}
</style>

---
layout: cover
background: /slides/bg-1-why-now.jpg
---

<div class="absolute inset-0 -z-10 h-full w-full bg-[rgba(0,0,0,0.4)] backdrop-blur-sm"></div>

<div class="flex flex-col items-center justify-center h-full max-w-4xl mx-auto">
  <div 
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    class="text-5xl font-bold mb-12 bg-gradient-to-r from-sky-300 to-teal-200 bg-clip-text text-transparent drop-shadow-lg"
  >
    I. Why now?
  </div>

  <div 
    v-motion
    :initial="{ opacity: 0, scale: 0.9 }"
    :enter="{ opacity: 1, scale: 1, transition: { delay: 400, duration: 800 } }"
    class="text-3xl text-center font-light text-gray-100 leading-relaxed"
  >
    I believe that most of you already know this.
    <span class="block mt-4 text-white font-medium">And that's why you came.</span>
  </div>

  <div 
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1, transition: { delay: 1000, duration: 800 } }"
    class="mt-16 text-sm text-gray-200"
  >
    Let's explore why this is the perfect moment
  </div>
</div>

<style>
.slidev-layout {
  padding: 2rem;
}
</style>

---
layout: two-cols
---

# Screen Time Analysis

<div class="mt-4">
<div class="text-4xl font-bold text-blue-600 mb-2">5.4h</div>
<div class="text-lg text-gray-600">Daily Mobile Usage</div>

<div class="text-4xl font-bold text-gray-600 mt-6 mb-2">2.9h</div>
<div class="text-lg text-gray-600">Daily Desktop Usage</div>

<div class="mt-6 text-sm text-gray-500">
Source: DataReportal Digital 2023
</div>
</div>

### Key Insights
- Mobile dominates screen time
- 65% more mobile vs desktop usage
- Consistent YoY growth
- Social media as main driver

::right::

<div class="h-full flex items-center justify-center">

```mermaid {theme: 'neutral', scale: 0.8}
pie title Daily Usage Distribution
    "Mobile" : 5.4
    "Desktop" : 2.9
```

<div class="absolute bottom-4 right-4 text-sm">
  <a href="https://datareportal.com/reports/digital-2023-global-overview-report" class="text-blue-500 hover:text-blue-700">
    Source →
  </a>
</div>
</div>

---
layout: two-cols
---

# Global Device Usage

<div class="mt-4">
<div class="text-4xl font-bold text-green-600 mb-2">83.32%</div>
<div class="text-lg text-gray-600">Global Smartphone Adoption</div>

<div class="text-4xl font-bold text-purple-600 mt-6 mb-2">48.20%</div>
<div class="text-lg text-gray-600">Madagascar Smartphone Users</div>

<div class="mt-6 text-sm text-gray-500">
Source: BankMyCell 2023
</div>
</div>

### Market Analysis
- Urban areas lead adoption
- Rural growth accelerating
- Affordable devices driving change
- Mobile-first internet access

::right::

<div class="h-full flex items-center justify-center flex-col gap-4">

```mermaid {theme: 'neutral', scale: 0.8}
graph TD
    World["Global Market"]
    
    World -->|"83.32%"| WorldSmartphone["Smart Devices"]
    World -->|"16.68%"| WorldOther["Basic Phones"]

style WorldSmartphone fill:#86efac
```

```mermaid {theme: 'neutral', scale: 0.8}
graph TD
    Madagascar["Madagascar"]
        
    Madagascar -->|"48.20%"| MadSmartphone["Smart Devices"]
    Madagascar -->|"51.80%"| MadOther["Basic Phones"]

style MadSmartphone fill:#c084fc
```


</div>

---
layout: two-cols
---

# Market Overview

<div class="mt-4">
<div class="text-4xl font-bold text-orange-600 mb-2">$935B</div>
<div class="text-lg text-gray-600">Mobile Revenue (2023)</div>

<div class="text-4xl font-bold text-indigo-600 mt-6 mb-2">$593B</div>
<div class="text-lg text-gray-600">Traditional Software</div>

<div class="mt-6 text-sm text-gray-500">
Source: Statista Market Outlook
</div>
</div>

### Industry Trends
- Mobile-first dominance
- Faster mobile growth
- Higher engagement rates
- Lower entry barriers


::right::


<div class="h-full flex items-center justify-center">

```mermaid {theme: 'neutral', scale: 0.8}
graph TD
    Market["Software Market"]
    Mobile["Mobile<br/>$935B"]
    Traditional["Desktop<br/>$593B"]
    
    Market --> Mobile
    Market --> Traditional
    
    Mobile --> AppStore["iOS<br/>$85B"]
    Mobile --> PlayStore["Android<br/>$48B"]
    Mobile --> Other["Others"]
    
style Mobile fill:#fdba74
style Traditional fill:#818cf8
```

</div>


---
layout: two-cols
---

<div class="flex flex-col justify-center h-full pr-8">
  <div 
    v-motion
    :initial="{ opacity: 0, x: -50 }"
    :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
    class="text-4xl font-bold leading-tight mb-8 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
  >
    "Meet users where they are - on mobile"
  </div>

  <div class="space-y-6">
    <div 
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { delay: 400, duration: 800 } }"
      class="flex gap-3 flex-wrap"
    >
      <span class="px-4 py-2 bg-blue-100 rounded-full text-blue-800">📱 Mobile First</span>
      <span class="px-4 py-2 bg-teal-100 rounded-full text-teal-800">🎯 Direct Access</span>
      <span class="px-4 py-2 bg-indigo-100 rounded-full text-indigo-800">💫 Better Experience</span>
    </div>
<br/>
    <div 
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { delay: 800, duration: 800 } }"
      class="text-lg text-gray-600 leading-relaxed"
    >
      Your users are already on their phones. That's where your app needs to be - accessible, convenient, and ready to use.
    </div>
  </div>
</div>

::right::

<div class="flex flex-col gap-4 justify-center h-full">
  <div 
    v-motion
    :initial="{ opacity: 0, y: -20 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 800 } }"
    class="relative rounded-xl overflow-hidden shadow-lg"
  >
    <img 
      src="/images/travel app.webp" 
      alt="Fitness App Example" 
      class="w-full h-48 object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
  </div>

  <div 
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 1000, duration: 800 } }"
    class="relative rounded-xl overflow-hidden shadow-lg"
  >
    <img 
      src="/images/fitness app.webp" 
      alt="Travel App Example" 
      class="w-full h-48 object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
  </div>
</div>

<style>
.slidev-layout {
  justify-content: start;
  align-items: center;
  padding: 2rem
}
</style>

---
layout: two-cols
---

# My Mobile Journey

<div class="mt-8 relative">
  <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

  <div v-click class="flex items-center gap-4 mb-12 relative">
    <div class="absolute left-5 w-3 h-3 bg-blue-500 rounded-full shadow-lg z-10"></div>
    <div class="ml-16">
      <img src="/images/kotlin.svg" class="w-12 h-12 mb-2" />
      <div class="font-bold text-xl">Hira Fiderana</div>
      <div class="text-gray-600">Kotlin & Jetpack Compose</div>
    </div>
  </div>

  <div v-click class="flex items-center gap-4 mb-12 relative">
    <div class="absolute left-5 w-3 h-3 bg-purple-500 rounded-full shadow-lg z-10"></div>
    <div class="ml-16">
      <img src="/images/flutter.svg" class="w-12 h-12 mb-2" />
      <div class="font-bold text-xl">The Playlist</div>
      <div class="text-gray-600">Flutter</div>
    </div>
  </div>

  <div v-click class="flex items-center gap-4 relative">
    <div class="absolute left-5 w-3 h-3 bg-green-500 rounded-full shadow-lg z-10"></div>
    <div class="ml-16">
      <img src="/images/android.svg" class="w-12 h-12 mb-2" />
      <div class="font-bold text-xl">Native Android</div>
      <div class="text-gray-600">Java & Kotlin</div>
    </div>
  </div>
</div>

::right::

<div v-click class="mt-8 relative">
  <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
  <div  class="flex items-center gap-4 mb-12 relative">
    <div class="absolute left-5 w-3 h-3 bg-blue-500 rounded-full shadow-lg z-10"></div>
    <div class="ml-16">
      <img src="/images/chromium.svg" class="w-12 h-12 mb-2" />
      <div class="font-bold text-xl">Webview wrappers</div>
      <div class="text-gray-600">Cordova & Phone Gap & Ionic</div>
    </div>
  </div>
</div>

---
layout: center
---

<div class="flex items-center justify-center gap-20">
  <div v-click class="text-center">
    <img src="/images/flutter.svg" class="w-32 h-32 mb-4" />
    <div class="text-2xl font-bold">Flutter</div>
  </div>

  <div  class="flex flex-col items-center">
    <div class="text-6xl mb-8">vs</div>
    <div class="text-xl text-gray-500 italic">Like Naruto & Sasuke</div>
  </div>

  <div  class="text-center">
    <img src="/images/react.svg" class="w-32 h-32 mb-4" />
    <div class="text-2xl font-bold">React Native</div>
  </div>
</div>

<div v-click class="text-center mt-12 text-xl text-gray-600">
  Pushing each other to get better 🚀
</div>

---
layout: center
class: text-center
---

# The Evolution of Mobile Development

<div class="grid grid-cols-3 gap-8 mt-12">
  <div v-click class="space-y-4 opacity-50">
    <div class="text-4xl">👶</div>
    <div class="font-bold">Early Days</div>
    <div class="text-sm text-gray-600">
      Webview Wrappers
      <br/>
      Cordova, Phonegap, Ionic
    </div>
  </div>

  <div v-click class="space-y-4 opacity-75">
    <div class="text-4xl">🏃‍♂️</div>
    <div class="font-bold">Growing Phase</div>
    <div class="text-sm text-gray-600">
      Cross-Platform Solutions
      <br/>
      Flutter, React Native
    </div>
  </div>

  <div v-click class="space-y-4">
    <div class="text-4xl">🚀</div>
    <div class="font-bold">Today</div>
    <div class="text-sm text-gray-600">
      Mature Ecosystem
      <br/>
      Production-Ready Tools
    </div>
  </div>
</div>

---
layout: cover
class: text-center
---

<div class="text-4xl font-bold mb-8">
  Why React Native, Why Now?
</div>

<div v-click class="text-6xl mb-12">
  🎯 SAFE
</div>

<div v-click class="text-6xl mb-12">
  🛡️ STABLE
</div>

<div v-click class="text-6xl">
  ⚡ RELIABLE
</div>

<div v-click class="mt-12 text-xl text-gray-600">
  It's never been easier to build production-ready mobile apps
</div>


---
layout: two-cols
---

# Building Mobile Apps: <br/> <span class="text-blue-600">Then vs Now</span>

<div class="mt-8 space-y-6">
  <div v-click class="flex items-start gap-4">
    <div class="text-3xl">🎯</div>
    <div>
      <div class="font-bold text-xl text-blue-800">Single Codebase</div>
      <div class="text-gray-600 mt-1">Write once, run everywhere</div>
    </div>
  </div>

  <div v-click class="flex items-start gap-4">
    <div class="text-3xl">⚡</div>
    <div>
      <div class="font-bold text-xl text-blue-800">Native Performance</div>
      <div class="text-gray-600 mt-1">Real native components, not WebView</div>
    </div>
  </div>

  <div v-click class="flex items-start gap-4">
    <div class="text-3xl">🔄</div>
    <div>
      <div class="font-bold text-xl text-blue-800">Live Reloading</div>
      <div class="text-gray-600 mt-1">Instant feedback loop</div>
    </div>
  </div>
</div>

::right::

<div class="h-full flex items-center justify-center">

```mermaid {theme: 'neutral', scale: 0.8}
graph TD
    Start["Traditional Mobile Dev"] --> Native["Native Apps<br/>2x Development"]
    Start --> Hybrid["Hybrid Apps<br/>Poor Performance"]
    
    Modern["Modern RN Development"] --> Single["Single Codebase"]
    Single --> iOS["iOS"]
    Single --> Android["Android"]
    Single --> Web["Web Optional"]

style Modern fill:#93c5fd
style Single fill:#bfdbfe
```

</div>

---
layout: two-cols
---

# Community & Ecosystem

<div class="mt-4 space-y-6">
  <div v-click>
    <div class="text-4xl font-bold text-blue-600 mb-2">2M+</div>
    <div class="text-lg text-gray-600">Monthly npm Downloads</div>
  </div>

  <div v-click>
    <div class="text-4xl font-bold text-green-600 mb-2">50K+</div>
    <div class="text-lg text-gray-600">GitHub Stars</div>
  </div>

  <div v-click class="bg-blue-50 p-4 rounded-lg">
    <div class="font-medium text-blue-800">Backed by Industry Giants</div>
    <div class="text-sm text-blue-600 mt-2">Meta, Microsoft, Shopify, Discord</div>
  </div>
</div>

::right::

<div class="h-full flex items-center justify-center">

```mermaid {theme: 'neutral', scale: 0.8}
graph TD
    RN["React Native Ecosystem"]
    
    RN --> UI["UI Libraries"]
    RN --> State["State Management"]
    RN --> Native["Native Modules"]
    
    UI --> Paper["Paper"]
    UI --> Elements["Elements"]
    
    State --> Redux["Redux"]
    State --> Recoil["Recoil"]
    
    Native --> Camera["Camera"]
    Native --> Maps["Maps"]
    
style RN fill:#93c5fd
style UI fill:#bfdbfe
style State fill:#bfdbfe
style Native fill:#bfdbfe
```

</div>

---
layout: center
---

<div class="flex flex-col items-center">
  <div 
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    class="text-4xl font-bold mb-12 text-center"
  >
    Learning Curve Comparison
  </div>

  <div class="w-full max-w-3xl">

```mermaid {theme: 'neutral', scale: 0.8}
graph TD
    TS["TypeScript"] --> RN["React Native"]
    RN --> Mobile["Mobile Apps"]
    RN --> Web["Web Apps"]
    Web --> Next["Next.js Apps"]
    
    style TS fill:#93c5fd
    style RN fill:#bfdbfe
    style Mobile fill:#dbeafe
    style Web fill:#dbeafe
    style Next fill:#dbeafe
```
</div>

  <div class="mt-12 text-xl text-center text-gray-600">
    One language to rule them all: <span class="text-blue-600 font-medium">TypeScript</span>
  </div>
</div>

<style>
.slidev-layout {
  padding: 2rem;
}
</style>

---
layout: center
class: text-center
---

<div class="text-4xl font-bold mb-12">
  The Mobile Development Revolution
</div>

<div class="flex flex-col items-center gap-8">
  <div v-click class="text-2xl">
    <span class="text-green-600 font-bold">↗️ Value </span>
    <span class="text-gray-600">of mobile apps increased drastically</span>
  </div>

  <div v-click class="text-2xl">
    <span class="text-blue-600 font-bold">↘️ Difficulty </span>
    <span class="text-gray-600">in building decreased significantly</span>
  </div>
</div>

<div v-click class="mt-16 text-lg text-gray-500 italic">
  "From what I see, this is hands down the best tech to build mobile apps with"
</div>

---
src: ./pages/2-pipeline.md
---

---
src: ./pages/3-prerequisite.md
---

---
src: ./pages/4-code.md
---

---
src: ./pages/42-terminal.md
---

---
src: ./pages/43-ui-component.md
---

---
src: ./pages/44-backend.md
---

---
src: ./pages/45-text.md
---

---
src: ./pages/5-publish.md
---

---
src: ./pages/6-monetization.md
---

---
src: ./pages/7-tips.md
---

---
src: ./pages/8-conclusion.md
---