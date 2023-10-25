const fs = require('fs');
const path = require('path');

function generateSidebar(dir, prefix = '') {
    let sidebar = [];
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            const children = generateSidebar(fullPath, `${prefix}${file}/`);
            if (children.length > 0) {
                sidebar.push({
                    title: file,
                    collapsable: false,
                    children
                });
            }
        } else if (stat.isFile() && path.extname(file) === '.md') {
            sidebar.push(`${prefix}${file}`);
        }
    });
    return sidebar;
}

let sidebar = generateSidebar(path.resolve(__dirname, '../docs/cn'));
let sidebarJson = JSON.stringify(sidebar, null, 2);

fs.writeFileSync(path.resolve(__dirname, '../docs/.vuepress/config/sidebar-zh.json'), sidebarJson);

sidebar = generateSidebar(path.resolve(__dirname, '../docs/en'));
sidebarJson = JSON.stringify(sidebar, null, 2);

fs.writeFileSync(path.resolve(__dirname, '../docs/.vuepress/config/sidebar-en.json'), sidebarJson);

console.log('Sidebar generated successfully!');
