---
layout: two-cols
---

# Database & ORM <span class="text-gray-500 text-lg font-normal">Type-safe Database Access</span>

<div class="mt-8 space-y-2">

## [Prisma](https://prisma.io/orm) <img src="/images/Prisma.svg" class="inline-block w-8 h-8 align-middle ml-2"/>

> ORM Node.js et TypeScript de nouvelle génération

<br/>

### Fonctionnalités

- ✓ Requêtes de base de données type-safe
- ✓ Migrations auto-générées
- ✓ Modélisation puissante des données
- ✓ Compatible avec SQLite, PostgreSQL, MySQL
</div>

::right::

```tsx
// Define your model
model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  name    String?
  posts   Post[]
}

// Use in your app
const user = await prisma.user.create({
  data: {
    email: 'user@example.com',
    name: 'John Doe'
  }
})
```

<style>
.space-y-12 > * + * {
  margin-top: 3rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  display: flex;
  align-items: center;
}

h3 {
  font-size: 1.1rem;
  font-weight: 500;
  color: #475569;
}

blockquote {
  border-left: 4px solid #3b82f6;
  padding-left: 1rem;
  color: #64748b;
  margin: 1rem 0;
}
</style>

---
layout: iframe-right
url: https://orm.drizzle.team/docs/get-started
---

## [Drizzle](https://orm.drizzle.team/) <img src="/images/Drizzle.svg" class="inline-block w-8 h-8 align-middle ml-2"/>

> ORM TypeScript léger et prêt pour l'edge

### Fonctionnalités

- ✓ Pas de surcharge à l'exécution
- ✓ Constructeur de requêtes style SQL
- ✓ Compatible edge
- ✓ Fonctionne avec le serverless

```tsx
// Define your schema
const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  email: text("email").notNull(),
  name: text("name"),
});

// Use in your app
const newUser = await db
  .insert(users)
  .values({
    email: "user@example.com",
    name: "John Doe",
  })
  .returning();
```

<style>
.space-y-12 > * + * {
  margin-top: 3rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  display: flex;
  align-items: center;
}

h3 {
  font-size: 1.1rem;
  font-weight: 500;
  color: #475569;
}

blockquote {
  border-left: 4px solid #3b82f6;
  padding-left: 1rem;
  color: #64748b;
  margin: 1rem 0;
}
</style>

---

# Approche Traditionnelle de la Gestion des Données

## Défis

- Gestion manuelle des états de chargement
- Pas de mise en cache intégrée
- Risque de requêtes en cascade
- Code verbeux et répétitif

<div class="mt-8">

```mermaid
graph LR
    A[Composant] --> B[useEffect]
    B --> C[Récupération Données]
    C --> D{Succès?}
    D -->|Oui| E[Définir Données]
    D -->|Non| F[Définir Erreur]
    E --> G[Rendu Données]
    F --> H[Afficher Erreur]

    style A fill:#e2e8f0
    style B fill:#dbeafe
    style C fill:#bfdbfe
    style D fill:#93c5fd
    style E fill:#60a5fa
    style F fill:#f87171
    style G fill:#34d399
    style H fill:#f87171
```

</div>

---

# Approche Moderne avec TanStack Query

## Avantages

- Mise en cache automatique intelligente
- Revalidation en arrière-plan
- Dédoublonnage des requêtes
- Gestion optimiste des mises à jour
- Synchronisation en temps réel
- Pagination infinie intégrée

```mermaid
graph LR
    A1[Composant] --> B1[Hook useQuery]
    B1 --> C1[Vérification Cache]
    C1 -->|Trouvé| D1[Utiliser Cache]
    C1 -->|Non Trouvé| E1[Récupérer Données]
    E1 --> F1[Mettre à jour Cache]
    F1 --> G1[Revalidation Auto]

    style A1 fill:#e2e8f0
    style B1 fill:#dbeafe
    style C1 fill:#bfdbfe
    style D1 fill:#60a5fa
    style E1 fill:#93c5fd
    style F1 fill:#34d399
    style G1 fill:#34d399
```

---
layout: two-cols
---

# GraphQL

<div class="mt-4">

```mermaid
graph TD
    A[Client] --> B[Point d'Entrée Unique]
    B --> C[Résolution]
    C --> D[Base de Données]
    C --> E[API Externe]
    C --> F[Services]

    style A fill:#e2e8f0
    style B fill:#60a5fa
    style C fill:#34d399
    style D fill:#93c5fd
    style E fill:#93c5fd
    style F fill:#93c5fd
```

</div>

::right::

> Un point d'entrée unique, demandez exactement ce dont vous avez besoin

### Avantages

- ✓ Requêtes précises et flexibles
- ✓ Pas de sur-récupération de données
- ✓ Documentation auto-générée
- ✓ Type-safety intégré

```tsx
const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      name
      email
      posts {
        title
        comments {
          content
          author
        }
      }
    }
  }
`;
```

---
layout: two-cols
---

# Backend as a Service (BaaS)

#### [Supabase](https://supabase.com/docs) <img src="/images/supabase.svg" class="inline-block w-6 h-6 align-middle ml-2"/>

- ✓ PostgreSQL Database
- ✓ Real-time subscriptions
- ✓ Auth & Storage
- ✓ Edge Functions

<br>

#### [Firebase](https://firebase.google.com/docs) <img src="/images/firebase.svg" class="inline-block w-6 h-6 align-middle ml-2"/>

- ✓ Real-time Database
- ✓ Cloud Functions
- ✓ Authentication
- ✓ Analytics

::right::

#### [Realm](https://www.mongodb.com/docs/realm/) <img src="/images/realm.png" class="inline-block w-6 h-6 align-middle ml-2"/>

- ✓ Local-first database
- ✓ Offline-first sync
- ✓ Real-time updates
- ✓ Cross-platform

<br>

#### [PocketBase](https://pocketbase.io/docs/) <img src="/images/pocket-base.svg" class="inline-block w-6 h-6 align-middle ml-2"/>

- ✓ Backend sans dépendance
- ✓ Backend ultra léger (16MB)
- ✓ Interface d'administration intégrée
- ✓ Stockage de fichiers & authentification
- ✓ Souscriptions temps réel

<style>

h2 {
  color: #64748b;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

h3, h4 {
  color: #1e293b;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

blockquote {
  border-left: 4px solid #00bf60;
  padding-left: 1rem;
  color: #475569;
  margin: 1.5rem 0;
}

.space-y-6 > * + * {
  margin-top: 1.5rem;
}
</style>
