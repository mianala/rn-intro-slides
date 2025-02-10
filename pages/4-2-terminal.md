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


