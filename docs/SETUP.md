# Micro Frontend Dashboard – Setup Guide

## 1. Prerequisites
- Node.js 18+
- Yarn

Check versions:
```
node -v
yarn -v
```

## 2. Project Structure
```
dashboard-microfrontends/
  docs/
  packages/
    shell/
    user-card/
    content-bar/
```

## 3. Installation
Run the following steps inside each micro frontend folder.

### Shell
```
cd packages/shell
yarn install
yarn build
yarn preview
```

### User Card
```
cd packages/user-card
yarn install
yarn build
yarn preview
```

### Content Bar
```
cd packages/content-bar
yarn install
yarn build
yarn preview
```

## 4. Accessing the Application
The Shell (container) app runs on port 5000 by default.

```
http://localhost:5000
```

## 5. Port Conflicts
If port 5000 is already in use, Vite automatically selects the next available port.
Use the port shown in your terminal output.
