#!/bin/bash
npx -y create-vite@latest temp-app --template react-ts
mv temp-app/* ./
mv temp-app/.[!.]* ./ 2>/dev/null || true
rm -rf temp-app

npm install
npm install -D tailwindcss postcss autoprefixer
npx -y tailwindcss init -p

npm install lucide-react motion simplex-noise clsx tailwind-merge
npm install class-variance-authority @radix-ui/react-slot @radix-ui/react-dialog @radix-ui/react-label @radix-ui/react-separator @radix-ui/react-tooltip @radix-ui/react-accordion @radix-ui/react-tabs
npm install -D @types/node

mkdir -p public/mangako
mv *.mp4 public/mangako/ambient-hero.mp4 2>/dev/null || true
mv "*f377d745.png" public/mangako/hero-sunrise.png 2>/dev/null || true
mv "*f377d745 (1).png" public/mangako/hero-city-tunnel.png 2>/dev/null || true
mv "*e6503532.png" public/mangako/poster-01.png 2>/dev/null || true
mv "*e6503532 (1).png" public/mangako/poster-02.png 2>/dev/null || true
mv "*e6503532 (2).png" public/mangako/poster-03.png 2>/dev/null || true
mv "*e6503532 (3).png" public/mangako/poster-04.png 2>/dev/null || true
