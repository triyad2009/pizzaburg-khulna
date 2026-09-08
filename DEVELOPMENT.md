# DEVELOPMENT GUIDE - PizzaBurg Khulna

## Architecture Overview

### Component Hierarchy
```
RootLayout
├── Navbar (sticky)
├── Main
│   ├── HeroSection
│   ├── FeaturedMenuSection
│   ├── MoodToFoodSection
│   ├── BuildYourPizzaSection
│   ├── RestaurantExperienceSection
│   ├── TableExperienceSection
│   ├── OffersSection
│   ├── ReviewsSection
│   ├── LocationSection
│   └── CTASection
└── Footer
```

## State Management

### Zustand Stores

**authStore.ts**
```typescript
- user: User | null
- isAuthenticated: boolean
- login(), signup(), logout()
```

**menuStore.ts**
```typescript
- items: MenuItem[]
- filteredItems: MenuItem[]
- selectedCategory: string | null
- searchQuery: string
- setSelectedCategory(), setSearchQuery(), applyFilters()
```

**pizzaBuilderStore.ts**
```typescript
- size, crust, sauce, cheese, toppings
- totalPrice: number
- reset(), updateTotalPrice()
```

## Adding Menu Items

### Step 1: Update Mock Data
Edit `src/lib/api.ts`:
```typescript
export const mockMenuItems = [
  {
    id: 'new-pizza',
    name: 'Pizza Name',
    description: 'Description',
    price: 450,
    category: 'pizza',
    isPopular: true,
    isFeatured: false,
    spiceLevel: 2,
  },
  // ...
];
```

### Step 2: Update in Store
The menu store auto-syncs with API data.

## Adding Pages

### Step 1: Create Page File
```bash
mkdir -p src/app/new-page
touch src/app/new-page/page.tsx
```

### Step 2: Basic Template
```typescript
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NewPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-pb-cream pt-24">
        {/* Your content */}
      </main>
      <Footer />
    </>
  );
}
```

### Step 3: Add Navigation Link
Edit `src/components/Navbar.tsx` → update `navItems`

## Customization Guide

### Colors
Edit `src/lib/constants.ts` → `COLORS`

### Typography
Edit `tailwind.config.ts` → `theme.fontFamily`

### Pizza Options
Edit `src/lib/constants.ts` → Default pizza configurations

### Table Features
Edit `src/lib/constants.ts` �� `TABLE_FEATURES`

## API Integration

### Current: Mock Data
- All data in `src/lib/api.ts`
- Zustand stores handle state

### Next: Real Backend
1. Create `src/services/` folder
2. Add API client (axios ready)
3. Replace mock data with API calls
4. Update stores to use services

### Example Service Structure
```typescript
// src/services/menuService.ts
export async function getMenuItems() {
  const response = await axios.get(`${API_BASE_URL}/menu`);
  return response.data;
}
```

## Form Validation

Using React Hook Form + Zod:
```typescript
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
});

const { register, handleSubmit } = useForm();
```

## Animations

Using Framer Motion:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## Responsive Design

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Mobile-First Pattern
```typescript
// Mobile (default)
<div className="w-full">
  // Tablet+
  <div className="md:w-1/2">
    // Desktop+
    <div className="lg:w-1/3"></div>
  </div>
</div>
```

## Performance Tips

1. **Images:** Use Next.js Image component
2. **Fonts:** Load only needed weights
3. **Code Split:** Dynamic imports for heavy components
4. **Lazy Load:** Use `whileInView` for sections
5. **Debounce:** Search, filters

## Testing (Ready for Phase 2)

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:coverage
```

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Environment Variables
```env
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...
JWT_SECRET=your_secret_key
```

## Troubleshooting

### Animations not smooth?
- Check `prefers-reduced-motion`
- Reduce animation complexity
- Use `will-change` CSS property

### Menu not updating?
- Clear Zustand store cache
- Check `menuStore.applyFilters()`
- Verify data in `mockMenuItems`

### Build fails?
- Run `npm install`
- Clear `.next` folder
- Check TypeScript errors with `npm run type-check`

## Contributing

1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Commit with clear messages
5. Push and create PR

## Code Style

- ESLint enforced
- Prettier formatting
- TypeScript strict mode
- Component naming: PascalCase
- File naming: kebab-case (pages), PascalCase (components)

---

**Questions?** Check the inline code comments or open an issue.
