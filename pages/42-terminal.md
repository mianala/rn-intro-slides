---
layout: center
---

<div class="text-center relative">
  <div class="absolute inset-0 -z-10">
    <div class="absolute inset-0 bg-[url('/images/sparkles.png')] opacity-10 animate-pulse"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20 blur-3xl"></div>
  </div>
  
  <h1 class="text-6xl font-bold mb-6 animate-float">
    <span class="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
      ✨ Entrons dans Le Paradis des Développeurs
    </span>
  </h1>
  
  <p class="text-2xl text-gray-600 flex items-center justify-center gap-3">
    <span class="animate-bounce">🪄</span>
    La Vraie Magie de React Native Commence
    <span class="animate-spin-slow">💫</span>
  </p>
</div>

<style>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}
.animate-spin-slow {
  animation: spin 3s linear infinite;
}
</style>

---
layout: iframe-left
url: https://docs.expo.dev/more/create-expo/
---

<SectionTitle position="right" title="IV - Le Paradis des Développeurs"/>

<div class="terminal-window">
        <div class="terminal-header">
            <div class="terminal-buttons">
                <span class="close"></span>
                <span class="minimize"></span>
                <span class="maximize"></span>
            </div>
            <div class="terminal-title">Terminal</div>
        </div>
        <div class="terminal-body">
            <div v-click class="command-line">
                <span class="prompt">$</span>
                <span class="command">npx create-expo-app@latest --example</span>
            </div>
            <div v-click class="output">
                Need to install the following packages: <br />
                create-expo-app@latest <br />
                Ok to proceed? (y)
            </div>
            <div class="command-line">
                <div v-click>
                    <span v-if="$clicks===3" class="prompt-blue">? </span>
                    <span v-if="$clicks > 3" class="prompt-blue">✅ </span>
                    <span>Choose an example: › </span>
                </div>
                <div>
                    <span v-if="$clicks === 3" class="text-neutral-300">- Use arrow-keys. Return to submit.</span>
                    <span v-click>with-camera</span>
                    <span class="cursor">_</span>
                </div>
            </div>
            <div v-click class="flex flex-col gap-2 pt-2 pl-6 text-neutral-400">
                <span>with-canary-react-19</span>
                <span>with-custom-font</span>
                <span class="text-blue-400"> ❯ with-camera</span>
                <span>with-dev-client</span>
                <span>with-drawer-navigation</span>
                <span> with-facebook-auth</span>
                <span>with-firebase-saml-login</span>
                <span>with-formdata-image-upload</span>
                <span>↓ with-formik</span>
            </div>
            <div class="command-line">
                <div v-if="$clicks  ===4">
                    <span class="prompt-blue">? </span>
                    <span class="text-neutral-300">What is your app named? › my-app </span>
                </div>
            </div>
            <div class="command-line">
                <div v-click>
                    <span class="prompt-blue">? </span>
                    <span class="text-neutral-300">What is your app named? ... Kamera </span>
                </div>
            </div>
            <div class="command-line">
                <div v-click>
                    <span class="prompt">✔ </span>
                    <span class="text-neutral-300"> Downloaded and extracted example files.
                    </span>
                </div>
            </div>
            <div v-click class="command-line">
                    <span class="text-neutral-300">
                                npm <span class="text-yellow-500">warn</span> <span class="text-purple-400">deprecated</span> inflight@1.0.6: This module is not supported, and leaks memory.
                                Do
                                not use it. Check out lru-cache if you want a good and tested way to coalesce async
                                requests by a key value, which is much more comprehensive and powerful. <br />
                                npm <span class="text-yellow-500">warn</span> <span class="text-purple-400">deprecated</span> glob@7.2.3: Glob versions prior to v9 are no longer supported
                                <br />
                                npm <span class="text-yellow-500">warn</span> <span class="text-purple-400">deprecated</span> glob@7.2.3: Glob versions prior to v9 are no longer supported
                                <br />
                    </span>
            </div>
            <div class="command-line">
                <div v-click>
                    <span class="text-neutral-300">
                              added 887 packages, and audited 888 packages in 9m <br />
                              72 packages are looking for funding <br />
                              run npm fund for details <br />
                              found <span class="prompt">0</span> vulnerabilities <br />
                              ✅ Your project is ready! <br />
                              To run your project, navigate to the directory and run one of the following npm commands. <br />
                              <span>- cd kamera </span> <br/>
                              <span>- npm run android </span> <br/>
                              <span>- npm run ios </span> <br/>
                              <span>- npm run web </span> <br/>
                    </span>
                </div>
            </div>
        </div>
    </div>

<style>
.terminal-window {
  @apply bg-gray-900 rounded-lg overflow-scroll h-[50vh];
}

.terminal-header {
  @apply bg-gray-800 px-4 py-2 flex items-center;
}

.terminal-buttons {
  @apply flex gap-2;
}

.terminal-buttons span {
  @apply w-3 h-3 rounded-full;
}

.close { @apply bg-red-500; }
.minimize { @apply bg-yellow-500; }
.maximize { @apply bg-green-500; }

.terminal-title {
  @apply text-gray-400 ml-4;
}

.terminal-body {
  @apply p-4 text-gray-100 font-mono text-sm;
}

.command-line {
  @apply flex gap-2 items-center;
}
.command-line-2 {
  @apply flex flex-col gap-2 items-center;
}

.prompt {
  @apply text-green-400;
}
.prompt-blue {
  @apply text-blue-400;
}

.command {
  @apply text-white;
}

.output {
  @apply text-gray-400 mt-2 mb-4;
}

.cursor {
  @apply bg-white w-2 h-5 animate-pulse;
}
</style>

---
layout: iframe-left
url: https://t4stack.com/
---

<SectionTitle position="right" title="IV - Le Paradis des Développeurs"/>

<div class="terminal-window">
      <div class="terminal-header">
          <div class="terminal-buttons">
              <span class="close"></span>
              <span class="minimize"></span>
              <span class="maximize"></span>
          </div>
          <div class="terminal-title">Terminal</div>
      </div>
      <div class="terminal-body pb-15 mb-10">
          <div v-click class="command-line">
              <span class="prompt">$</span>
              <span class="command">bun create t4-app@latest</span>
          </div>
          <div  v-click class="command-line">
              <span class="text-3xl prompt">T4 APP</span>
          </div>
          <div  v-click class="command-line-2">
              <span class="text-pink-500">
                  "Build Universal React (Native) Apps with Ease" <br />
                  ft. Tamagui + TypeScript + tRPC + Tauri <br /></span>
              <span class="prompt">
                  Now with Bun! 🐰 <br />
                  Enter the name of the project: </span>
          </div>
          <div  v-click class="command-line-2 text-yellow-400">
          > playlist <br/>
          👉 Setting up a new t4 project. <br/>
          This script follows the steps below to create your project: <br/>
          1. Clone the t4-app repository into the specified folder. <br/>
          2. Remove git history <br/>
          3. Install dependencies <br/>
          4. Generate Drizzle client <br/>
          </div>
          <div v-click class="command-line-2 text-green-400">
            ✔ Cloning t4-app into playlist <br/>
            ✅ Repository cloned successfully. <br/>
            <span className="text-neutral-500"> <br/>
            Removed: playlist/.git <br/>
            All paths removed successfully! <br/>
            </span>
            ✅ Git history removed. <br/>
            ⠴ Installing dependencies <br/>
            ✅ Dependencies installed. <br/>
            ✅ Drizzle client generated. <br/> <br/>
      </div><div v-click class="command-line-2 text-green-400">
           <span class="text-amber-300">💭 Remember to set up your environment variables properly: <br/>
1. Duplicate the .env.example file, rename it to .env.local, and enter your variables. <br/>
2. Configure Cloudflare Wrangler configs inside /apps/next/wrangler.toml and /packages/api/wrangler.toml to match your deployment environment.</span>
<br><br>
<span class="text-green-500">
🚀 Successfully created t4 project! <br/>
Make sure you have a Supabase account and have created a new project.<br/>
After filling out your .env file, run 'bun migrate:local' to create your database tables.<br/>
To start the API and web development servers, run 'bun api' and 'bun web' in separate terminal tabs. </span>
      </div>
      </div>
</div>

<style>
.terminal-window {
  @apply bg-gray-900 rounded-lg overflow-scroll h-[80vh];
}

.terminal-header {
  @apply bg-gray-800 px-4 py-2 flex items-center;
}

.terminal-buttons {
  @apply flex gap-2;
}

.terminal-buttons span {
  @apply w-3 h-3 rounded-full;
}

.close { @apply bg-red-500; }
.minimize { @apply bg-yellow-500; }
.maximize { @apply bg-green-500; }

.terminal-title {
  @apply text-gray-400 ml-4;
}

.terminal-body {
  @apply p-4 text-gray-100 font-mono text-sm;
}

.command-line {
  @apply flex gap-2 items-center;
}
.command-line-2 {
  @apply flex flex-col gap-2;
}

.prompt {
  @apply text-green-400;
}
.prompt-blue {
  @apply text-blue-400;
}

.command {
  @apply text-white;
}

.output {
  @apply text-gray-400 mt-2 mb-4;
}

.cursor {
  @apply bg-white w-2 h-5 animate-pulse;
}
</style>

---
layout: two-cols
---

<SectionTitle title="IV - Le Paradis des Développeurs"/>

<div class="flex flex-col gap-6 pr-8">
<div class="text-center">
  <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
    Le Moment Magique 🪄
  </h1>
  <p class="text-xl text-gray-600">Un code unique, des possibilités infinies</p>
</div>
  <div class="bg-gray-900 rounded-lg p-6">
    <pre class="text-white font-mono"><span class="text-green-400">$</span> npx expo start</pre>
  </div>
  
  <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 shadow-lg">
    <h3 class="text-2xl font-bold mb-4 text-indigo-900">Une Révélation 🤯</h3>
    <p class="text-lg text-gray-700 leading-relaxed">
      "Au début, j'étais sceptique. Encore une WebView ? Pas du tout ! C'est une vraie application native qui peut aussi être compilée pour le web !"
    </p>
  </div>
</div>

::right::

```mermaid
  graph TD
    A[Code React Native] --> B[iOS natif]
    A --> C[Android natif]
    A --> D[Application Web]
    B --> E[Performance native]
    C --> E
    D --> F[Développement rapide]
    E --> G[Expérience utilisateur optimale]
    F --> G
```

---
layout: image-left
image: /files/expo-go.png
---

<SectionTitle position="right" title="IV - Le Paradis des Développeurs"/>

<div class="flex flex-col gap-6">
  <div class="terminal-window">
    <div class="terminal-header">
      <div class="terminal-buttons">
        <span class="close"></span>
        <span class="minimize"></span>
        <span class="maximize"></span>
      </div>
      <div class="terminal-title">Terminal</div>
    </div>
    <div class="terminal-body">
      <div v-click class="command-line">
        <span class="prompt">$</span>
        <span class="command">npm install -g eas-cli</span>
      </div>
      <div v-click class="command-line">
        <span class="prompt">$</span>
        <span class="command">eas login</span>
      </div>
      <div v-click class="output">
        ✔ Log in successful
      </div>
      <div v-click class="command-line">
        <span class="prompt">$</span>
        <span class="command">npx expo start</span>
      </div>
    </div>
     <div v-click class="qr-container px-6 pb-2 rounded-lg text-center">
    <div class="text-lg font-semibold mb-4 text-white">Scan with Expo Go</div>
    <div class="qr-code-placeholder w-48 h-48 mx-auto bg-gray-100 flex items-center justify-center">
<img src="/files/qr-code.png" alt="QR Code" class="w-full h-full object-contain" />
    </div>
    <div class="mt-4 text-sm text-gray-300">
      exp://192.168.1.5:8081
    </div>
  </div>
  </div>

</div>

<style>
.terminal-window {
  @apply bg-gray-900 rounded-lg overflow-hidden;
}

.terminal-header {
  @apply bg-gray-800 px-4 py-2 flex items-center;
}

.terminal-buttons {
  @apply flex gap-2;
}

.terminal-buttons span {
  @apply w-3 h-3 rounded-full;
}

.close { @apply bg-red-500; }
.minimize { @apply bg-yellow-500; }
.maximize { @apply bg-green-500; }

.terminal-title {
  @apply text-gray-400 ml-4;
}

.terminal-body {
  @apply p-4 text-gray-100 font-mono text-sm;
}

.command-line {
  @apply flex gap-2 items-center mb-2;
}

.prompt {
  @apply text-green-400;
}

.command {
  @apply text-white;
}

.output {
  @apply text-green-400 mt-2 mb-4;
}

.qr-container {
  @apply shadow-lg;
}
</style>

---
layout: two-cols
---

<SectionTitle title="IV - Le Paradis des Développeurs"/>

<div class="flex flex-col gap-6 pr-8">
  <div class="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-lg p-8 shadow-xl">
    <h2 class="text-3xl font-bold mb-4">CNG 🔥</h2>
    <p class="text-xl mb-2">Génération Native Continue</p>
    <p class="text-lg opacity-90">Quand vous avez besoin des fonctionnalités mobiles spécifiques, les choses deviennent sérieuses !</p>
  </div>
   <div class="bg-gray-900 rounded-lg p-6">
    <pre class="text-white font-mono"><span class="text-green-400">$</span> npx expo run:android</pre>
    <pre class="text-white font-mono"><span class="text-green-400">$</span> npx expo run:ios</pre>
  </div>
</div>

::right::

<div class="flex flex-col gap-2 pl-8">
  <div class="bg-gray-50 rounded-lg p-5 shadow-lg">
        <h3 class="text-lg font-semibold mb-3 text-gray-800">Prérequis & Configuration</h3>
        <h4 class="text-sm font-medium mb-2">Outils Nécessaires</h4>
        <ul class="space-y-2">
          <li class="flex items-center gap-2">
            <div class="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-lg">
              <img src="/images/xcode.svg" alt="XCode" class="w-full h-auto"/>
            </div>
            <span class="text-sm">XCode - iOS - XCode sans fi</span>
          </li>
          <li class="flex items-center gap-2">
            <div class="w-6 h-6 flex items-center justify-center bg-green-100 rounded-lg">
            <img src="/images/android-studio.svg" />
            </div>
            <span class="text-sm">Android Studio - Android - Débogage sans fil</span>
          </li>
        </ul>
      </div>
  <div class="rounded-lg overflow-hidden shadow-lg">
    <img src="/files/image 16.png" alt="Configuration du Débogage Sans Fil" class="w-full h-auto"/>
  </div>
</div>

<style>
.slidev-layout {
  @apply bg-gradient-to-br from-gray-50 to-gray-100;
}
</style>
