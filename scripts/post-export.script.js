const fs = require("fs")
const axios = require('axios');

const EXTERNAL_DATA_URL = "https://geeknhistory.kz"

const generateSiteMap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
         <url>
           <loc>${`${EXTERNAL_DATA_URL}/`}</loc>
           <changefreq>daily</changefreq> 
           <priority>0.9</priority>  
        </url>
        <url>
           <loc>${`${EXTERNAL_DATA_URL}/blogs`}</loc>
           <changefreq>daily</changefreq> 
           <priority>0.8</priority>  
        </url>
        <url>
           <loc>${`${EXTERNAL_DATA_URL}/about`}</loc>
           <changefreq>daily</changefreq> 
           <priority>0.5</priority>  
        </url>
        <url>
           <loc>${`${EXTERNAL_DATA_URL}/contact`}</loc>
           <changefreq>daily</changefreq> 
           <priority>0.3</priority>  
        </url>
        ${posts
    .map(({id}) => {
        console.log(id)
        return `
                <url>
                    <loc>${`${EXTERNAL_DATA_URL}/blog/${id}`}</loc>
                    <changefreq>daily</changefreq> 
                    <priority>0.8</priority> 
                </url>
            `;
    })
    .join('')}
    </urlset>
    `;
// this function uses SG_PAGES to create the sitemap file
async function createSitemap() {

    const response = await axios.get("https://blog.gibkii-kamen.kz/api/blog");
    const posts = response.data
    console.log(posts)
    // write the sitemap.xml file
    // directory MUST be `out/`
    await fs.writeFileSync("out/sitemap.xml", generateSiteMap(posts));
}

// execute the createSitemap() function
createSitemap().then(r => console.log("SiteMap generated"));

module.exports = createSitemap;
