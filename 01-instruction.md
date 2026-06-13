The details that you should follow are
1. Use nextjs, typescript, tailwind, eslint, shadcn component, zustand, useQuery, moment,  
3. use kebab-case for file naming, use camelCase for variable name, use UPPERCASE_WITH_SNAKE_CASE for constant/enum names
4. Use custom hooks approach. Means the UI and businus logic should be separated. A jsx file that contains UI should have as many as less code regarding business logic. 
5. follow SOLID clean code method, especially for Single Level of Abstraction
7. use zustand store per context but dont too big. If a context is too big, separate it into different zustand store
8. For route name and  for every string,, save it in 'contants' like export const ROUTES = {
    home: '/',
    about: '/about',
}
9. In each component file, the component length should not be to long. Except the component layout/wrapper/container, make sure one component file only handle its own login and has one level of abstraction
2. make sure in every page.tsx file, or layout.tsx file, the file only contains one simple component that is the main content which will be imported from their own tsx file. 

this is the example
export default function AdminDashboardFullPage() {
  return <DashboardOverview />;
}
3. run 'npm run build' before finishing the job. If there is any error when build, fix the error first.

4. Save all route string in src/constants/routes.ts