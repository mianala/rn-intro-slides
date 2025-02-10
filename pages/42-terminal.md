---
layout: center
---

<div class="text-center">
  <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
    Getting Started
  </h1>
  <p class="text-xl text-gray-600">Your First React Native App</p>
</div>

---
layout: iframe-left
url: https://docs.expo.dev/more/create-expo/ 
---

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
            <div v-click v-if="$clicks === 4" class="flex flex-col gap-2 pt-2 pl-6 text-neutral-400">
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
            <div v-click="['+1','+1']" class="command-line" v-if="$clicks < 9">
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
  @apply bg-gray-900 rounded-lg overflow-scroll h-[60vh];
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
layout: center
---

<div class="text-center">
  <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
    The Magic Moment
  </h1>
  <p class="text-xl text-gray-600">One codebase, everywhere!</p>
</div>

---
layout: two-cols
---

<div class="flex flex-col gap-6 pr-8">
  <div class="bg-gray-900 rounded-lg p-6">
    <pre class="text-white font-mono"><span class="text-green-400">$</span> npx expo start</pre>
  </div>
  
  <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 shadow-lg">
    <h3 class="text-2xl font-bold mb-4 text-indigo-900">Wait... What? 🤯</h3>
    <p class="text-lg text-gray-700 leading-relaxed">
      "When my brother told me about it, I was skeptical. A WebView again? NO, NO NONONO! It just CAN compile to web while being truly native!"
    </p>
  </div>
</div>

::right::

<div class="flex flex-col gap-6 pl-8">
  <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 shadow-lg">
    <h3 class="text-xl font-semibold text-emerald-900 mb-3">🪄 The Same Code Runs On:</h3>
    <ul class="space-y-3 text-gray-700">
      <li class="flex items-center gap-2">
        <span class="text-2xl">📱</span> iOS Devices
      </li>
      <li class="flex items-center gap-2">
        <span class="text-2xl">🤖</span> Android Devices
      </li>
      <li class="flex items-center gap-2">
        <span class="text-2xl">🌐</span> Web Browsers
      </li>
    </ul>
  </div>

  <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
    <p class="text-amber-800">
      <span class="font-semibold">Pro Tip:</span> As long as you don't use mobile-specific APIs, you can develop everything in your browser first!
    </p>
  </div>
</div>

---
layout: center
---

<div class="grid grid-cols-3 gap-8 w-full max-w-4xl mx-auto">
  <div class="flex flex-col items-center gap-4 p-6 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg shadow-lg">
    <div class="text-4xl">📱</div>
    <h3 class="text-xl font-bold text-blue-900">Mobile Native</h3>
    <p class="text-center text-gray-700">True native performance with platform-specific APIs</p>
  </div>

  <div class="flex flex-col items-center gap-4 p-6 bg-gradient-to-b from-green-50 to-green-100 rounded-lg shadow-lg">
    <div class="text-4xl">🔄</div>
    <h3 class="text-xl font-bold text-green-900">Hot Reload</h3>
    <p class="text-center text-gray-700">Instant updates across all platforms</p>
  </div>

  <div class="flex flex-col items-center gap-4 p-6 bg-gradient-to-b from-purple-50 to-purple-100 rounded-lg shadow-lg">
    <div class="text-4xl">🎯</div>
    <h3 class="text-xl font-bold text-purple-900">One Codebase</h3>
    <p class="text-center text-gray-700">Write once, run everywhere</p>
  </div>
</div>

---
layout: image-left
image: /files/expo-go.png
---

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
  </div>

  <div class="qr-container bg-white px-6 pb-2 rounded-lg text-center">
    <div class="text-lg font-semibold mb-4">Scan with Expo Go</div>
    <div class="qr-code-placeholder w-48 h-48 mx-auto bg-gray-100 flex items-center justify-center">
<img src="/files/qr-code.png" alt="QR Code" class="w-full h-full object-contain" />
    </div>
    <div class="mt-4 text-sm text-gray-600">
      exp://192.168.1.5:8081
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

<div class="flex flex-col gap-6 pr-8">
  <div class="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-lg p-8 shadow-xl">
    <h2 class="text-3xl font-bold mb-4">CNG 🔥</h2>
    <p class="text-xl mb-2">Continuous Native Generation</p>
    <p class="text-lg opacity-90">When you need mobile-only features, things are getting serious!</p>
  </div>

  <div class="bg-gray-50 rounded-lg p-5 shadow-lg">
    <h3 class="text-lg font-semibold mb-3 text-gray-800">Development Requirements & Setup</h3>
    <div class="gap-4">
      <div>
        <h4 class="text-sm font-medium mb-2">Wireless Setup</h4>
        <ul class="space-y-2">
          <li class="flex items-center gap-2">
            <span class="text-base">📱</span>
            <div>
              <p class="text-sm font-medium">iOS - XCode wireless</p>
            </div>
          </li>
          <li class="flex items-center gap-2">
            <span class="text-base">🤖</span>
            <div>
              <span class="text-sm font-medium">Android - Wireless debug</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
::right::

<div class="flex flex-col gap-2 pl-8">
  <div class="bg-gray-50 rounded-lg p-5 shadow-lg">
        <h4 class="text-sm font-medium mb-2">Required Tools</h4>
        <ul class="space-y-2">
          <li class="flex items-center gap-2">
            <div class="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-lg">
              <img src="/images/xcode.svg" alt="XCode" class="w-full h-auto"/>
            </div>
            <span class="text-sm">XCode</span>
          </li>
          <li class="flex items-center gap-2">
            <div class="w-6 h-6 flex items-center justify-center bg-green-100 rounded-lg">
            <img src="/images/android-studio.svg" />
            </div>
            <span class="text-sm">Android Studio</span>
          </li>
        </ul>
      </div>
  <div class="rounded-lg overflow-hidden shadow-lg">
    <img src="/files/image 16.png" alt="Wireless Debugging Setup" class="w-full h-auto"/>
  </div>

 

</div>

<style>
.slidev-layout {
  @apply bg-gradient-to-br from-gray-50 to-gray-100;
}
</style>