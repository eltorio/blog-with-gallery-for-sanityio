# Simple blog with Vue3, Tailwindcss 3, Sanity.io

This is a simple blog working with structured datas hosted at Sanity.io.  
It includes a way to display image galleries.  
Blog sample deployed at : https://blog-with-gallery-for-sanityio.vercel.app/  
All images can be clicked and show a lighbox modal.  
All images are optimized for size and format.  

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

* If you include a read token all the drafts will be visible 
* you can restrict the queries link by modifying the GROQ queries

```javascript
const query = `*[_type == "post" && !(_id in path('drafts.**'))]`
```

Running with:
```bash
npm install -g @vue/cli
cd image-gallery-for-sanityio
npm i
npm run serve
```
For production environment you may edit tailwind.config.json because I choosed to keep all Tailwindcss classes :
```json
{ 
    "safelist": [{ "pattern": /.*/ }]
    }
```

# Usage

In the sanity studio usually deployed at http://localhost:3333 you can create some posts with images:
<img width="400" alt="Capture d’écran 2022-03-12 à 16 28 43" src="https://user-images.githubusercontent.com/6966689/158024342-f678df31-4ae3-4b33-8cbb-217ca3884e42.png">
<img width="400" alt="Capture d’écran 2022-03-12 à 16 29 03" src="https://user-images.githubusercontent.com/6966689/158024351-f67f4245-857b-48be-b582-d7ed707e7835.png">
<img width="400" alt="Capture d’écran 2022-03-12 à 16 28 29" src="https://user-images.githubusercontent.com/6966689/158024359-0ca84a2d-72a0-4a00-8dff-cbfd4f80a92d.png">
<img width="325" alt="Capture d’écran 2022-03-12 à 16 28 14" src="https://user-images.githubusercontent.com/6966689/158024365-69908a87-d737-465f-88bf-0d0319377fe8.png">


# License

As usual: provided «as is» under MIT license. 
