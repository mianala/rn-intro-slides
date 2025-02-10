# Tout sur la Creation d’Application Mobile avec React Native

Hi! I’m Loharano, owner of [Loha.dev](http://Loha.dev) and creator of the Stage mobile app.

A short story about myself:

1. I started [zahividy.mg](http://zahividy.mg) in 2015 → E-commerce → Failed, all tech no sales or management or marketing skills
2. Built multiple project for the Ministry of Finance → I know how the government works

   1. Made this for the finance ministry: https://www.dgbf.mg/transparence

      ![image.png](/files/image.png)

   2. Their mail system:

      ![image.png](/files/image%201.png)

3. Freelance → Got me 60.000$ over three years → I know what’s going on inside big SAAS companies abroad.

   ![image.png](/files/image%202.png)

4. Chief Technical Officer at Olona (3 months) → This role gave me deep insights into the outsourcing industry's backend operations, showing me what services are truly needed and what aren't.

   ![image.png](/files/image%203.png)

5. Teach individuals for 100.000-500.000Ar/class → This here is 500.000Ar value that I give to you for a 1/10 of the price because of how much I put into this.
6. Now I have put all my eggs in one basket called Stage. You can find it in the App Store and the Play Store, it has a free plan. It is for me impossible to live without after you use it if you are a singer, a musician or someone who goes on stage.
   1. Web App (NexJS)
   2. Mobile App
7. This is how much I’ve worked on it:

   ![image.png](/files/image%204.png)

Today, I’ll share everything you need to know about mobile app development.

Thank you for coming. We’re here to learn all about mobile app creation with react native.

**What you’ll be able to do after this:**

- [ ] Developers → Build. Everything I say here will be practical for you so you’ll get new tools to add to your toolkit.
- [ ] Student → Know what they should learn to do what they want to do. We’ll have a bootcamp on react native where each of us will build for mobile.
- [ ] Entrepreneurs → You won’t be the “I don’t care I have money” or “I need it by tomorrow guy/gal”. Remember what it takes to build a mobile app for your product, this will give you the visibility every entrepreneur needs. The more you know the more you can help, the more money you can make.

→ We’ll take notes for you so you can be focused 100%.

### The Plan

Let me break down the seminar that we’re going to have

1. Why now → The mobile app development revolution
2. The pipeline, building a software product
3. The prerequisites → before even thinking about building a mobile app, what do you need to have
4. Developer’s Paradise → tools, libraries, tips
5. Publishing → euh... Yes
6. Monetization → The why people would pay to use your app is another seminar, this is how to let them pay.
7. Last but not least ⇒ Q&A - feel free to jot down your question if you need clarification or more details and ask them at the end

---

Ready? → GO

---

### I- Why now

→ I believe that most of you already know this. And that’s why you came.

- How much time people spend on mobile vs desktop
- How many people (ratio) have smartphones → world and malagasy
- Sales in mobile vs in software (which includes the SAAS’s mobile app)

← We need to meet people where they are. On their phone, that’s why we build for mobile.

- Personnaly, I have built mobile apps before:
  - Hira Fiderana → Kotlin & Jetpack Compose (4 years ago)
  - The Playlist → Flutter || I like to think of Flutter and React native as Naruto and Sasuke → Pushing each other to get better
  - Native Android
  - Webview wrappers →
    - Cordova & Phonegap
    - Ionic

→ But why now? Because, it's never been easier. Out of many ways to do it, there one way that stands out as the SAFE, STABLE, and RELIABLE

**Building mobile app THEN vs NOW (with RN Expo)**

- **Single Codebase**
  - No need to write separate code for iOS and Android
  - Faster development and easier maintenance
- **Better Performance than Hybrid Frameworks**
  - Uses native components instead of WebView
  - Bridges to native APIs for smooth interactions
- **Live & Hot Reloading**
  - See changes instantly without recompiling the whole app
- **Easier UI Development**
  - Uses a declarative UI model similar to React for web
  - Faster iteration compared to traditional native development
- **Huge Developer Community & Ecosystem**
  - Many third-party libraries for common tasks
  - Backed by Facebook (Meta) and widely adopted by companies like Instagram, Airbnb, and Shopify
- **Cross-Platform Logic Sharing**
  - Business logic (e.g., authentication, API calls, state management) is shared
  - Only a few platform-specific tweaks are needed
- **Lower Development Costs**
  - One team can develop for both platforms
  - Faster time to market
- Learning curve
  - One language to rule them all Typescript
  - If this is your first language, knowing RN means you know react, you know react means you know NextJS.
- Libraries unlike any other. Nor native nor other multiplatforms can beat this.
- On the popular apps list
- Money generated by mobile apps
  - You noticed something?

← I call this a revolution. The value of mobile apps increased drastically while the difficulty in building it decreased.

All these doesn’t mean it’s so smooth that there’s no bug you can find that’s not from your code. It means that form what I see, this is hands down the best tech to build mobile app with.

### II- The pipeline (what was that chart creator app?) → this to prezi?

If you haven’t built an app from start to finish yet, here are the

1.  **Ideation & Planning**
    1. Define the **problem** and target audience.
    2. Outline key features (MVP scope).
    3. (…)
2.  **Design**
    1. Create wireframes and UI/UX mockups.
    2. Define user flows and interactions.
    3. Prototype for early feedback.
3.  **Development**
    1. **Backend**: Set up databases, authentication, APIs.
    2. **Frontend**: Build UI components and integrate with backend.
    3. **Mobile/Web**: Develop platform-specific or cross-platform apps.
    4. **Infrastructure**: Set up hosting, CI/CD pipelines, monitoring.
4.  **(Testing)**
5.  **Deployment**
    1. Set up deployment pipelines (CI/CD).
    2. Release beta version for testing.
    3. Deploy to production (App Store, Play Store, Web).
6.  (**Marketing & Growth)**
7.  **Maintenance**
8.  **Iteration**
    1. Monitor usage & fix bugs.
    2. Roll out feature updates.

### III- Prerequisites

What you should ideally have. This can be expensive for some of us. If you put in the work, this investment will at least 1000x.

1. Resources
   1. Computers → To code and build on. If you have a Macbook or apple computer, you are good. If you have a PC, go buy a Macbook. Ask your company or boss or invest in it.
   2. Phones →
      1. An iPhone
      2. Android Phone
   3. Tablet → Use this to test your apps on bigger screens
   4. Internet connection → This requires internet from start to finish. Don’t cheap out on internet until you KNOW you don’t need internet. Cheaping out on internet would just slow you down. Invest where you should.
2. Knowledge → Language & Framework. To write a book, we use English. To write software, we need programming languages. Just the basics are enough here.
3. Javascript & Typescript →

   1. Algorithm (Logic)

      ![image.png](/files/image%205.png)

   2. JSX (Templating) → JS + HTML (Markup/Description Language)
   3. We’ll have a bootcamp. If you can’t attend, just watch tutorials (AITI has some but I don’t recommend anymore).

4. React. Say, you could build a house with only the materials without the tools. That's how it feels like to use
5. Publish → They won't allow just anyone to publish on their platform. Apple is stricter and google is on the free-er side.

   1. iOS → Enterprise 299$ per year. Individual 99$ - You won’t be able to even use your device as a developer if you don’t pay this fee.

      ![image.png](/files/image%206.png)

   2. Android → 25$ once.

      ![image.png](/files/image%207.png)

   3. I’ve heard some of you weren’t able to create play store developer account. Try this and tell me if it works: Change your country in your google account to be US and when you create the account use a VPN.

      ![image.png](/files/image%208.png)

   4. One more tip: if you’re short on money, be strategical about when to pay these.

6. Receive payment → You can’t receive payments through MG banks accounts (From What I Know)
   1. Go abroad, create a bank account
   2. Have someone abroad create a bank account for you
   3. What I’m doing right now - pay services abroad, service + tax costs around 1,000$ per year
   4. You can work with me to if you want to publish your app and monetize it

### Code

This is the bread and butter. From here on, you need to focus and learn how impossibly easy it became.

**The Setup** → I missed this before and it didn’t go well.

1. https://reactnative.dev/docs/set-up-your-environment

   ![image.png](/files/image%209.png)

2. https://nodejs.org/en

   ![image.png](/files/image%2010.png)

3. [XCode](https://developer.apple.com/xcode/) (easy) & [Android Studio](https://developer.android.com/studio) (harder cause of env variables)

   ![image.png](/files/image%2011.png)

   ![image.png](/files/image%2012.png)

4. [VSCode](https://code.visualstudio.com/) https://code.visualstudio.com/

   ![image.png](/files/image%2013.png)

→ From here on is what I call the developer’s PARADISE

1. To start your new app you need just one line in your terminal →

   1. npx create-expo-app@latest —example [https://github.com/expo/examples](https://github.com/expo/examples)
   2. bun create t4-app@latest

      ![image.png](/files/image%2014.png)

   3. Now, just run → npx expo start → Your app can be opened in your browser if you want to test it. This is where I got skeptical when my brother told me about it cause I thought it’s a Webview again. NO, NO NONONO. It just CAN (has the ability to) compile to web.
      1. As long as you don’t use mobile APIs you can do everything in the browser and build for mobile 🪄. Know that mobile specific APIs won’t work in the browser so you need expo go or CNG.
   4. Expo Go - Nothing does it quite like this → This is the fastest and easiest setup EVER https://expo.dev/go

      1. Install the expo go app → Log in
      2. Install eas cli → Log in
      3. Anytime you start your app you’ll be able to find it in your expo go

      ![image.png](/files/image%2015.png)

   5. CNG (Continuous Native Generation) → When you need mobile only features → Things are getting serious 🔥

      1. Needs android studio / and XCode
      2. But can be done wirelessly

         1. XCode + iPhone, wireless
         2. Android studio wireless debugging

            ![image.png](/files/image%2016.png)

2. UI components (these help you start fast) → This is how you use components in React. If you aren’t making millions already you can finish the front-end of your app in days….. DAYS…

   1. Tamagui https://tamagui.dev/ui/intro

      ![image.png](/files/image%2017.png)

   2. Gluestack

      ![image.png](/files/image%2018.png)

   3. Reusable https://rnr-docs.vercel.app/getting-started/introduction/ → If you know chadcn, it’s like chadcn
   4. Callstack’s paper https://callstack.github.io/react-native-paper/

      ![image.png](/files/image%2019.png)

   5. There are more, feel free to chose.
   6. ← Having these doesn’t mean you can’t customize your app, you can customize these or create your own and there are ways that makes styling your app so EASY

3. Styling → I use tailwind, yes it’s compiled to native code after.
   1. But there’s also - Stylesheet, the default styling … in RN which I prefer over any alternatives by other technologies.
   2. Tailwind + AI = magic ✨ → DEMO with [claude.ai](http://claude.ai)
   3. Stylex → Io no ampiasan’i Facebook
4. Libraries → What makes a mobile app a mobile app? Offline feature, Interaction with Mobile APIs, UI, Navigation https://results.2023.stateofreactnative.com/platform-apis/
   1. Camera - QR Code → Demo Stage
   2. Gorhom Sheet → Sheet In Expo Router
   3. Animation: Reanimated
   4. Lottie
   5. Skia → Jeu et graphic
5. State management

   ![image.png](/files/image%2020.png)

   1. useState (component’s state)

      ![image.png](/files/image%2021.png)

   2. useContext https://react.dev/reference/react/useContext
   3. Zustand & Redux & Jotai → You choose, all have good performance
   4. LegendState → (global and observable) my pick https://legendapp.com/open-source/state/v3/

      1. boasting best performance
      2. has sync features
      3. has persist features

         ![image.png](/files/image%2022.png)

   5. Tanstack Query

      ![image.png](/files/image%2023.png)

      1. Best remote query
      2. Best adoption
      3. Manages mutation too
      4. Has offline support

   6. React Hook Form

6. Dom components → This one is to not underestimate because this enables you to bring any react web libraries that wouldn’t normally work with RN inside a webview you can interact with

   1. [image depicting how a webview can be a component inside native app]
   2. https://expo.dev/blog/the-magic-of-expo-dom-components
   3. Examples:

      ![image.png](/files/image%2024.png)

   4. We use it to display chords in Stage

7. Database
   1. Prisma
   2. Drizzle
8. Backend → usually

   1. Any backend tech use want to use

      1. If we weren’t using Tanstack query:

      ![image.png](/files/image%2025.png)

   2. GraphQL
   3. Supabase
   4. Firebase
   5. Realm

9. Mobile only APIs→ This makes everything you do much smother
10. Testing framework → You don’t know everything that could have been affected bu that code change you’ve just pushed.
    1. I only do E2E testing
    2. https://maestro.mobile.dev/
    3. One drawback with Maestro, I wasn’t able to set it up with windows. Only on Mac.
11. Debugging, Common issues and Performance optimization
    1. React Developer tools → Press J
       1. Console
       2. Network
    2. Android and Apple Simulator’s profiler
    3. Monitor your app’s performance
       1. Sentry
       2. PostHog
       3. Firebase Analytics
12. Security considerations and best practices
    1. You should not have private API keys or SECRETS inside your code (your mobile app is kinda exposed)
    2. **Use Secure Storage for Tokens**:
       - On iOS: Use **Keychain** (via `react-native-keychain`).
       - On Android: Use **Encrypted Shared Preferences** or **Keystore** (`AsyncStorage` is NOT secure).
    3. Use secure storage when you store sensitive data
       1. `react-native-encrypted-storage`
       2. `mmkv` (encrypted mode)
    4. Do not use non secure HTTP request in your app. Ask in the question part if you need more about this.

→ I understand that you may not use all of them. But at least now your’re assured that they’re there when you need them.

→ All these things combined ⇒ Makes react native quite hard to beat

### Publish

1. Play Store [link] &

   1. Create your account
   2. Create a new app
   3. Create a new release
   4. Upload AAB
   5. Add info
   6. Send for review
   7. Wait for a few hours

1. Appstoreconnect [link]
   1. Create your account
   2. Create an app
   3. Create a new version
   4. Select build
   5. Add info
   6. Send for review
   7. Wait for a few days
1. https://fastlane.tools/ → Haven’t used yet
1. https://bitrise.io/ → Haven’t used yet
1. EAS → Has given me enough until now
   1. Sign up in [Expo.dev](http://Expo.dev)
   2. Install EAS CLI if you haven’t yet
   3. eas build
   4. wait for build → one day max for me so far.
   5. Download AAB file
   6. Submit Apple binary file
   7. EAS 30 builds per month

### Monetize

I strongly encourage everyone here. If you have money to invest, building mobile app in Madagascar is at most a tenth of what it takes for anyone else. If you can test your idea and execute, there’s no better place and time than now.

As I said you need a bank account that the stores can send money to.

1. RevenueCat 🔥 https://www.revenuecat.com/docs/getting-started/quickstart

   ![image.png](/files/image%2026.png)

   1. Sign In
   2. Create Project
   3. Create Products + Entitlements
   4. Export API keys and
   5. Create a paywall

      ![image.png](/files/image%2027.png)

2. Appstore
   1. Apps > YOUR APP > Subscriptions > Create Subscription Groups
   2. Sign agreements and add your bank account in https://appstoreconnect.apple.com/business
   3. Fill Tax Info
   4. Apple Tax: 30%
3. Google Play Developer
   1. App > Monetize with Play > Products > Subscriptions > Create
   2. Create offer > Set price
   3. Setup bank account → https://play.google.com/console/u/0/developers/7358940604964515304/paymentssettings
   4. Google Tax: 15%
4. Options
   1. Apple and Android →
   2. Create API keys
      1. Apple store connect
      2. Android publisher key
5. Stripe **2.9% + 30¢ → NextJS**
6. US Tax → 0%

### Tips

- [ ] Learn English
- [ ] Use X/Twitter → Follow open source creators
- [ ] Be ready for change → There may be a better and easier way of doing what you’re doing tomorrow, that is GOOD, not bad.

### Conclusion

I hope you got at least 10x your money’s worth.

These are what you just need to do once

- [ ] Sign up for the bootcamp
- [ ] Sign up for the startup course

- [ ] Make it complete
  - [ ] Are these categories taking into account everything that people should know
- [ ] make this easier to follow
  - [ ] Always add what and why in the beginning of every chapter
  - [ ] Add visual indication of where we are
- [ ] make this not too technical
