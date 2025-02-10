
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
        Need to install the following packages: <br/>
        create-expo-app@latest <br/>
        Ok to proceed? (y)
      </div>
      <div class="command-line">
        <div v-click>
            <span v-if="$clicks===3" class="prompt-blue">? </span>
            <span v-if="$clicks > 3" class="prompt-blue">✅</span>
            <span >Choose an example: › </span>
        </div>
        <div>
            <span v-if="$clicks === 3" class="text-neutral-300" >- Use arrow-keys. Return to submit.</span>
            <span v-click>with-camera</span>
            <span class="cursor">_</span>
        </div>
        <div v-if="$clicks === 4" class="flex flex-col gap-2 pt-2 pl-6 text-neutral-400">
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
    </div>
  </div>

<style>
.terminal-window {
  @apply bg-gray-900 rounded-lg overflow-hidden h-full;
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
layout: two-cols
---

  <div class="editor-window">
    <div class="editor-header">
      <div class="file-tabs">
        <div class="tab active">app.json</div>
        <div class="tab">App.tsx</div>
      </div>
    </div>
    <div class="monaco-editor">
      {
        "expo": {
          "name": "my-app",
          "slug": "my-app",
          "version": "1.0.0",
          "orientation": "portrait",
          "icon": "./assets/icon.png",
          "userInterfaceStyle": "light",
          "splash": {
            "image": "./assets/splash.png",
            "resizeMode": "contain",
            "backgroundColor": "#ffffff"
          }
        }
      }
    </div>
  </div>
::right::
  <div class="terminal-window">
    <div class="terminal-header">
      <div class="terminal-buttons">
        <span class="close"></span>
        <span class="minimize"></span>
        <span class="maximize"></span>
      </div>
      <div class="terminal-title">Development Server</div>
    </div>
    <div class="terminal-body">
      <div class="output">
        Starting development server...
        
        › Metro waiting on exp://192.168.1.5:8081
        › Scan the QR code above with Expo Go (Android) or the Camera app (iOS)
        
        › Press a │ open Android
        › Press i │ open iOS simulator
        › Press w │ open web
        
        › Press j │ open debugger
        › Press r │ reload app
        › Press m │ toggle menu
      </div>
      <div class="qr-code">
        [QR Code Placeholder]
      </div>
    </div>
  </div>

<style>
.editor-window {
  @apply bg-gray-800 rounded-lg overflow-hidden h-full;
}

.editor-header {
  @apply bg-gray-700 px-4 py-2;
}

.file-tabs {
  @apply flex gap-2;
}

.tab {
  @apply px-3 py-1 rounded-t text-gray-400;
}

.tab.active {
  @apply bg-gray-800 text-white;
}

.monaco-editor {
  @apply p-4 text-sm font-mono text-white;
}
</style>