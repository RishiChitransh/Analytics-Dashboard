# Analytics-Dashboard
An Micro Frontend based Analytics Dashboard utilising Angular 19, PrimeNG 10 Module federation

# Angular 19 Micro Frontend with Module Federation

This project is a micro-frontend architecture with Angular 19 using Module Federation. It has:

- A parent shell app
- Two child apps exposing modules
- Shared PrimeNG and ag-grid libraries
- Dynamic routing and tabbed layout
- Hosted using NGINX + Docker Compose

## 📦 Setup
```bash
git clone <repo-url>
cd angular-mfe-app
npm install
```

## ▶️ Run Locally
```bash
nx serve shell-app --open   # localhost:4200
nx serve child-app1         # localhost:4201
nx serve child-app2         # localhost:4202
```

## 🐳 Run with Docker + NGINX
```bash
nx build shell-app --configuration=production
nx build child-app1 --configuration=production
nx build child-app2 --configuration=production

docker-compose build
docker-compose up
```

Then open: [http://localhost](http://localhost)

## 🔗 Module Federation
Shell dynamically loads remote child apps:
```ts
childApp1: 'childApp1@http://localhost:4201/remoteEntry.js',
childApp2: 'childApp2@http://localhost:4202/remoteEntry.js'
```

## 🧪 CI/CD
GitHub Actions CI builds all apps on push to `main`.

## 📁 Repo Structure
See the top of this document for full layout.