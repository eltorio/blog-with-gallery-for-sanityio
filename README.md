# Simple blog with Vue3, Tailwindcss 3, Sanity.io

This is a simple blog working with structured datas hosted at Sanity.io.  
It includes a way to display image galleries.  
Blog sample deployed at : https://blog-with-gallery-for-sanityio.vercel.app/  

# Sanity

Sanity studio with modified schema is uder carousel-sanity.  
You must edit carousel-sanity/sanity.json with your own Sanity project id.  
Running with:
```bash
npm i -g @sanity/cli
cd carousel-sanity
npm i
sanity start
```

# Blog

The Vue3 app is under image-gallery-for-sanityio.  
You must provide a .env containg something like:
```bash
VUE_APP_SANITY_PROJECT_ID = "YOUR PROJECT ID"
VUE_APP_SANITY_DATASET = "YOUR DATSET NAME"
VUE_APP_SANITY_READ_TOKEN = "OPTIONAL READ TOKEN"
VUE_APP_SANITY_VERSION = "2021-10-21"
```
Running with:
```bash
npm install -g @vue/cli
cd image-gallery-for-sanityio
npm i
npm run serve
```

# License

As usual: provided «as is» under MIT license. 