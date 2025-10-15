# 📸 Project Images Setup Guide

## 🎯 **How to Add Real Website Screenshots**

I've updated your Projects component to display actual website screenshots instead of placeholder images. Here's how to set it up:

## 📁 **1. Create Images Directory**

Create the following folder structure in your project:

```
public/
  images/
    projects/
      saathi-hero.png
      aoneskills-hero.png
      ecommerce-hero.png
      dashboard-hero.png
      restaurant-hero.png
      taskmanager-hero.png
```

## 📷 **2. Take Screenshots**

### **Method 1: Manual Screenshots**
1. Visit your websites (`saathi.aoneskills.com.np`, `aoneskills.com.np`)
2. Take full-page screenshots of the hero sections
3. Resize to **1200x800px** for best quality
4. Save as PNG or JPG format

### **Method 2: Browser Developer Tools**
1. Open website in Chrome/Firefox
2. Press `F12` → Device Toolbar
3. Set viewport to **1200x800**
4. Right-click → "Capture screenshot"
5. Save to your images folder

### **Method 3: Online Screenshot Tools**
- **screenshotmachine.com**
- **web-capture.net** 
- **screenshot.guru**

Just enter your website URLs and download the images.

## 🖼️ **3. Image Specifications**

### **Recommended Dimensions:**
- **Width**: 1200px
- **Height**: 800px
- **Aspect Ratio**: 3:2 (matches aspect-video)
- **Format**: PNG or WebP for best quality
- **File Size**: Under 500KB each for fast loading

### **What to Capture:**
- **Hero section** (top fold of the website)
- **Navigation bar** included
- **Key visual elements** visible
- **Clean, professional appearance**

## 🔧 **4. Implementation Steps**

### **Step 1: Add Your Screenshots**
```bash
# Create the directory structure
mkdir -p public/images/projects

# Add your screenshot files:
# public/images/projects/saathi-hero.png
# public/images/projects/aoneskills-hero.png
```

### **Step 2: Update File Names (if needed)**
If your images have different names, update the project data:

```javascript
// In Projects.tsx, update the image paths:
image: '/images/projects/your-actual-filename.png'
```

### **Step 3: Optimize Images**
Use tools like:
- **TinyPNG** for compression
- **Squoosh.app** for WebP conversion
- **ImageOptim** for Mac users

## 🚀 **5. Advanced Options**

### **Option A: Next.js Image Optimization**
Replace `<img>` with Next.js `<Image>` component:

```javascript
import Image from 'next/image';

// Replace img tag with:
<Image 
  src={project.image}
  alt={`${project.title} screenshot`}
  fill
  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### **Option B: Dynamic Screenshots API**
Use a service to generate screenshots automatically:

```javascript
// Replace static image paths with:
image: `https://api.screenshotmachine.com/?key=YOUR_KEY&url=${encodeURIComponent(project.liveUrl)}&dimension=1200x800`
```

### **Option C: Cloudinary Integration**
Upload to Cloudinary for automatic optimization:

```javascript
image: `https://res.cloudinary.com/your-cloud/image/upload/v1234567/projects/saathi-hero.jpg`
```

## 📋 **6. Quick Checklist**

- [ ] Create `/public/images/projects/` folder
- [ ] Take screenshots of `saathi.aoneskills.com.np`
- [ ] Take screenshots of `aoneskills.com.np`
- [ ] Resize images to 1200x800px
- [ ] Optimize file sizes (under 500KB each)
- [ ] Name files correctly (saathi-hero.png, aoneskills-hero.png)
- [ ] Test images load properly
- [ ] Verify fallback works if images fail

## 🎨 **7. Image Quality Tips**

### **For Best Results:**
1. **High Resolution**: Use retina displays for crisp screenshots
2. **Consistent Styling**: Ensure browser extensions are disabled
3. **Clean Browser**: Use incognito mode for clean screenshots
4. **Proper Timing**: Wait for all content to load before capturing
5. **Mobile Version**: Consider adding mobile screenshots too

## 🔄 **8. Fallback Handling**

The code already includes fallback handling:
- If image fails to load, shows gradient background
- Includes error handling for broken image links
- Gracefully degrades to placeholder content

## 🌐 **9. Example File Structure**

```
your-project/
├── public/
│   └── images/
│       └── projects/
│           ├── saathi-hero.png          ← Saathi homepage screenshot
│           ├── aoneskills-hero.png      ← AOne Skills homepage screenshot
│           ├── ecommerce-hero.png       ← Your other projects
│           ├── dashboard-hero.png
│           ├── restaurant-hero.png
│           └── taskmanager-hero.png
└── src/
    └── components/
        └── Projects.tsx                 ← Updated component
```

Once you add the actual screenshots, your portfolio will look much more professional and impressive! The real website previews will give visitors a immediate sense of your design and development capabilities.

**Pro Tip**: Consider taking both desktop and mobile screenshots to showcase responsive design skills!