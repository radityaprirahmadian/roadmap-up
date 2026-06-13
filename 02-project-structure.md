
├── app/
│   ├── -> will be filled by route. Only contains page or layout or dynamic route
│   ├── layout.tsx
│   ├── page.tsx
│   ├── global.css
│   └── favicon.ico
├── components/
│   ├── ui/
│   │   └── -> will be filled by component
├── features/
│   ├── (features_name)/  -> used for specific features
│   │   ├── constants/
│   │   ├── types/
│   │   ├── queries/
│   │   ├── components/
│   │   ├── stores/
│   │   └── hooks/
├── constants/ -> used for app wide constants ( enum, string, etc )
├── types/ -> used for app wide types ( interface, type, etc )
├── queries/ -> used for app wide queries ( react query, etc )
├── utils/ -> used for app wide utilities ( helper functions, etc )
├── stores/ -> used for app wide stores ( zustand, etc )
├── hooks/ -> used for app wide hooks ( react hooks, etc )