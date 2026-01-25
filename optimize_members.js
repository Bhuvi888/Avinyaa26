
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const memberDir = path.join(process.cwd(), 'src/assets/memebers photo');

async function optimizeMembers() {
    try {
        const files = fs.readdirSync(memberDir);

        const backupDir = path.join(memberDir, 'original_backup');
        if (!fs.existsSync(backupDir)) {
            fs.mkdirSync(backupDir);
        }

        console.log(`Found ${files.length} member photos. Starting optimization...`);

        for (const file of files) {
            if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;

            const filePath = path.join(memberDir, file);
            const backupPath = path.join(backupDir, file);

            // We optimize if > 300KB for member photos (they are smaller usually)
            const stats = fs.statSync(filePath);
            if (stats.size < 300000) {
                console.log(`Skipping ${file} (already small: ${(stats.size / 1024).toFixed(2)} KB)`);
                continue;
            }

            if (!fs.existsSync(backupPath)) {
                fs.copyFileSync(filePath, backupPath);
            }

            console.log(`Optimizing ${file} (${(stats.size / 1024).toFixed(2)} KB)...`);

            // Resize to 600x600 max (squares usually)
            await sharp(backupPath)
                .resize(600, 600, {
                    fit: 'cover',
                })
                .jpeg({ quality: 80, mozjpeg: true })
                .toFile(filePath);

            const newStats = fs.statSync(filePath);
            console.log(`Done: ${file} -> ${(newStats.size / 1024).toFixed(2)} KB`);
        }

        console.log('Member photos optimized!');

    } catch (error) {
        console.error('Error optimizing member photos:', error);
    }
}

optimizeMembers();
