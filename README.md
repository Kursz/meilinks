# Mei's Landing Page 

A cozy Minecraft-themed landing page for streamers and content creators.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Add your profile image to the `assets` folder as `profile.png`

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to the URL shown in the terminal (usually http://localhost:5173)

## Customization

### Update Your Info

1. **Hero Section**: Edit `src/components/Hero.jsx`
   - Change "MEI" to your name
   - Update the subtitle

2. **About Section**: Edit `src/components/About.jsx`
   - Write your own bio

3. **Social Links**: Edit `src/components/Socials.jsx`
   - Update the URLs with your actual social media links
   - Add or remove platforms as needed

### Colors

Edit the CSS variables in `src/index.css` to customize the color scheme:
- `--grass-green`: Primary accent color
- `--night-sky`: Background color
- `--cozy-cream`: Text color

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy!

## Assets

Place your images in the `assets` folder:
- `profile.png` - Your profile picture (recommended: 500x500px)
