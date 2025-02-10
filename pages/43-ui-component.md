---
layout: iframe-right
url: https://tamagui.dev
---

# Tamagui <img src="/images/tamagui.png" class="inline-block w-12 h-12 align-middle ml-4"/>

<div class="flex items-center gap-3 mt-2 mb-6">
  <span class="flex items-center gap-1 text-gray-700">
    <span class="text-yellow-400">★</span> 8.2k
  </span>
  <span class="text-gray-400">|</span>
  <span class="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">v1.89.19</span>
</div>

> The universal UI kit and styling solution for React Native & Web

#### Features
- ✓ Universal components for native & web
- ✓ Near-zero runtime styling
- ✓ Atomic CSS-in-JS engine
#### Code Example

```tsx
import { Button, Text } from 'tamagui'

export default () => (
  <Button theme="purple" circular>
    <Text>Hello Tamagui!</Text>
  </Button>
)
```

---
layout: iframe-right
url: https://gluestack.io/
---

# Gluestack UI <img src="/images/gluestack.png" class="inline-block w-12 h-12 align-middle ml-4"/>

<div class="flex items-center gap-3 mt-2 mb-6">
  <span class="flex items-center gap-1 text-gray-700">
    <span class="text-yellow-400">★</span> 2.1k
  </span>
  <span class="text-gray-400">|</span>
  <span class="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">v0.1.0</span>
</div>

> Universal & Accessible Components for React Native & Web

#### Features

- ✓ Fully customizable components
- ✓ Accessibility first
- ✓ Theme-able design system

#### Code Example

```tsx
import { Button, ButtonText } from '@gluestack-ui/themed'

export default () => (
  <Button size="md" variant="solid">
    <ButtonText>Hello Gluestack!</ButtonText>
  </Button>
)
```

---
layout: iframe-right
url: https://callstack.github.io/react-native-paper/
---

# React Native Paper <img src="/images/callstack.png" class="inline-block w-12 h-12 align-middle ml-4"/>

<div class="flex items-center gap-3 mt-2 mb-6">
  <span class="flex items-center gap-1 text-gray-700">
    <span class="text-yellow-400">★</span> 11.2k
  </span>
  <span class="text-gray-400">|</span>
  <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">v5.11.1</span>
</div>

> Material Design components for React Native

#### Features

- ✓ Material Design implementation
- ✓ Cross-platform compatibility
- ✓ Regular updates and maintenance

#### Code Example

```tsx
import { Button } from 'react-native-paper'

export default () => (
  <Button mode="contained" onPress={() => console.log('Pressed')}>
    Hello Paper!
  </Button>
)
```

---
layout: iframe-right
url: https://rnr-docs.vercel.app/
---

# RNR (React Native Reusable) <img src="/images/rnr.png" class="inline-block w-12 h-12 align-middle ml-4"/>

<div class="flex items-center gap-3 mt-2 mb-6">
  <span class="flex items-center gap-1 text-gray-700">
    <span class="text-yellow-400">★</span> 1.2k
  </span>
  <span class="text-gray-400">|</span>
  <span class="px-2 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">v1.0.0</span>
</div>

> Inspired by shadcn/ui, but for React Native

#### Features

- ✓ Copy-paste components
- ✓ Fully customizable
- ✓ TypeScript first

#### Code Example

```tsx
import { Button } from '@/components/ui/button'

export default () => (
  <Button variant="default" size="lg">
    Hello RNR!
  </Button>
)
```


---

# Styling in React Native

## 1. Tailwind (NativeWind) <img src="/images/tailwindcss.svg" class="inline-block w-12 h-12 align-middle ml-4"/>
> Utility-first CSS framework, compiled to native code

```tsx
import { View, Text, Pressable } from 'react-native'

export default function Card() {
  return (
    <View className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-bold text-gray-900">
        Hello Tailwind!
      </Text>
      <Pressable className="mt-2 bg-blue-500 px-4 py-2 rounded-md">
        <Text className="text-white font-medium">
          Press me
        </Text>
      </Pressable>
    </View>
  )
}
```

---

## 2. StyleSheet API 
> Native performance & Meta's cross-platform solution

```tsx
import { StyleSheet, View, Text } from 'react-native'
import * as stylex from '@stylexjs/stylex'

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: 'bold' },
})

export default function Card() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello StyleSheet!</Text>
    </View>
  )
}
```
---

## 3. Stylex <img src="/images/stylex.png" class="inline-block w-12 h-12 align-middle ml-4"/>
> Meta's cross-platform solution

```tsx
import { StyleSheet, View, Text } from 'react-native'
import * as stylex from '@stylexjs/stylex'

const styleX = stylex.create({
  button: {
    marginTop: 8,
    backgroundColor: '#3b82f6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  buttonText: { color: 'white', fontWeight: '500'},
})

export default function Card() {
  return (
    <View>
      <Pressable {...stylex.props(styleX.button)}>
        <Text {...stylex.props(styleX.buttonText)}>
          Press me
        </Text>
      </Pressable>
    </View>
  )
}
```
--- 

## Tailwind <img src="/images/tailwindcss.svg" class="inline-block w-12 h-12 align-middle ml-4"/> + AI Magic <img src="/images/claude.svg" class="inline-block w-12 h-12 align-middle ml-4"/>  Claude

1. Describe your UI to AI:
```plaintext
"Create a card with rounded corners, shadow, primary heading,
and a gradient button with hover effect"
```

2. AI generates Tailwind classes:
```tsx
<View className="p-6 bg-white rounded-xl shadow-lg">
  <Text className="text-2xl font-bold text-gray-800">
    AI Generated Card
  </Text>
  <Pressable className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 
    px-6 py-3 rounded-lg active:opacity-80">
    <Text className="text-white font-semibold text-center">
      Magic Button
    </Text>
  </Pressable>
</View>
```

> 💡 Tip: Use AI to quickly prototype UI components and learn Tailwind patterns


---
layout: iframe-right
url: https://results.2023.stateofreactnative.com/platform-apis
---

# Essential Libraries

> What makes a mobile app truly native? Here are the key libraries that enable native functionality.

<br/>

## Camera & QR Code
Native camera access and QR code scanning capabilities for your app.
```tsx
import { Camera } from 'expo-camera'
```

<br/>

## Bottom Sheet
Smooth, gesture-based bottom sheets with @gorhom/bottom-sheet.
```tsx
import { BottomSheet } from '@gorhom/bottom-sheet'
```

---

<br/>

## Animations
- **Reanimated**: High-performance animations
- **Lottie**: Beautiful vector animations
- **Skia**: Hardware-accelerated 2D graphics

<br/>

> 💡 These libraries are battle-tested and widely used in production apps.


---
layout: two-cols
---

# Local State Management
## useState

> The fundamental way to manage component-level state in React Native

### When to use
- Component-specific data
- Form input values
- Toggle states (show/hide)
- Simple UI state

### Benefits
- Built into React
- Simple mental model
- No extra dependencies
- Perfect for local state

::right::

```tsx
import { useState } from 'react'
import { View, Text, Button } from 'react-native'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(false)

  return (
    <View className="p-4">
      <Text className="text-xl">Count: {count}</Text>
      <Button 
        title={isActive ? "Active" : "Inactive"}
        onPress={() => {
          setCount(count + 1)
          setIsActive(!isActive)
        }}
      />
    </View>
  )
}
```

---
layout: two-cols
---

# Shared State
## useContext

> Share state across components without prop drilling

### When to use
- Theme data
- User authentication
- App-wide preferences
- Shared configuration

### Benefits
- Built into React
- No external dependencies
- Avoids prop drilling
- Simple API


::right::


```tsx
import { createContext, useContext, useState } from 'react'

// Create context
const ThemeContext = createContext(null)

// Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Usage in components
export function ThemeSwitch() {
  const { theme, setTheme } = useContext(ThemeContext)
  
  return (
    <Button
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'}`}
      onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    />
  )
}
```

---
layout: two-cols
---

# Global State
## Zustand

> Simple, fast, and scalable state management

### When to use
- Complex global state
- Multiple state updates
- Performance critical apps
- When Redux is overkill

### Benefits
- Tiny bundle size
- No boilerplate
- TypeScript ready
- DevTools support

::right::

```tsx
import create from 'zustand'
import { View, Text, Button } from 'react-native'

// Create store
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ 
    count: state.count + 1 
  })),
  reset: () => set({ count: 0 }),
}))

// Use in components
export function Counter() {
  const { count, increment, reset } = useStore()

  return (
    <View className="p-4">
      <Text className="text-xl">Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Reset" onPress={reset} />
    </View>
  )
}
```

---
layout: two-cols
---

# Observable State
## LegendState

> High-performance reactive state management

### When to use
- Complex state interactions
- Need for persistence
- Real-time sync requirements
- Performance critical apps

### Benefits
- Best performance
- Built-in persistence
- Automatic sync
- Fine-grained updates

::right::

```tsx
import { observable } from '@legendapp/state'
import { observer } from '@legendapp/state/react'

// Create store
const state = observable({
  user: {
    name: 'John',
    preferences: {
      theme: 'dark'
    }
  }
})

// Component with auto-updates
export const UserProfile = observer(() => {
  return (
    <View className="p-4">
      <Text>Name: {state.user.name.get()}</Text>
      <Text>Theme: {state.user.preferences.theme.get()}</Text>
      <Button
        title="Update Theme"
        onPress={() => {
          state.user.preferences.theme.set(
            theme => theme === 'dark' ? 'light' : 'dark'
          )
        }}
      />
    </View>
  )
})
```


---
layout: two-cols
---

# Server State
## TanStack Query

> Powerful asynchronous state management

### When to use
- API data fetching
- Server state caching
- Real-time updates
- Offline support

### Benefits
- Auto caching
- Background updates
- Optimistic updates
- Infinite queries

::right::

```tsx
import { useQuery, useMutation } from '@tanstack/react-query'

function TodoList() {
  // Query
  const { data, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetch('/api/todos').then(r => r.json())
  })

  // Mutation
  const { mutate } = useMutation({
    mutationFn: (newTodo) => {
      return fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo)
      })
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  if (isLoading) return <Loading />

  return (
    <View>
      {data.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
      <Button 
        title="Add Todo"
        onPress={() => mutate({ title: 'New Todo' })}
      />
    </View>
  )
}
```

---
layout: two-cols
---

# Form Management
## React Hook Form

> Performance-focused form validation and handling

### When to use
- Complex forms
- Form validation
- Performance critical forms
- Multi-step forms

### Benefits
- Minimal re-renders
- Built-in validation
- TypeScript ready
- Small bundle size (~8KB)

::right::
<div class="h-[80vh] overflow scroll">

```tsx
import { useForm } from 'react-hook-form'
import { View, Text, TextInput, Button } from 'react-native'

type FormData = {
  email: string
  password: string
}

export function LoginForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <View className="p-4">
      <TextInput
        className="border p-2 rounded mb-2"
        placeholder="Email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Invalid email'
          }
        })}
      />
      {errors.email && (
        <Text className="text-red-500 mb-2">
          {errors.email.message}
        </Text>
      )}

      <TextInput
        className="border p-2 rounded mb-2"
        placeholder="Password"
        secureTextEntry
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters'
          }
        })}
      />
      {errors.password && (
        <Text className="text-red-500 mb-2">
          {errors.password.message}
        </Text>
      )}
      <Button 
        title="Login"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  )
}
```
</div>

---
layout: two-cols
---

# DOM Components in React Native

### What are DOM Components?
> A powerful feature that lets you use React web libraries directly in your React Native app through an interactive WebView.

### Key Benefits
- **Web Libraries in Native**: Use any React web component
- **Seamless Integration**: Two-way communication between web and native
- **Performance**: Optimized rendering in isolated context
- **Flexibility**: Perfect for complex web-based features

::right::

### Real World Example
```tsx
"use dom"

export default function MyWebComponent({ name }) {
  return <div>Hello {name}</div>
}
```
```tsx
import MyWebComponent from './my-web-component';

export default function Route() {
  return (<MyWebComponent name="World" />)
}
```

### Use Cases
- 📊 Complex Charts and Visualizations
- 🎵 Musical Notation (like Stage app)
- 📝 Rich Text Editors
- 🗺️ Interactive Maps