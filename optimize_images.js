
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const galleryDir = path.join(process.cwd(), 'src/assets/gallery-images');

async function optimizeImages() {
    try {
        const files = fs.readdirSync(galleryDir);

        // Create a backup directory
        const backupDir = path.join(galleryDir, 'original_backup');
        if (!fs.existsSync(backupDir)) {
            fs.mkdirSync(backupDir);
        }

        console.log(`Found ${files.length} files. Starting optimization...`);

        for (const file of files) {
            if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;

            const filePath = path.join(galleryDir, file);
            const backupPath = path.join(backupDir, file);

            // Skip if already optimized (optional logic, but here we just process all)
            // Check file size, if > 1MB, optimize.
            const stats = fs.statSync(filePath);
            if (stats.size < 1000000) {
                console.log(`Skipping ${file} (already small: ${(stats.size / 1024).toFixed(2)} KB)`);
                continue;
            }

            // Move original to backup if not already there
            if (!fs.existsSync(backupPath)) {
                fs.copyFileSync(filePath, backupPath);
            }

            console.log(`Optimizing ${file} (${(stats.size / 1024 / 1024).toFixed(2)} MB)...`);

            // Resize and compress
            await sharp(backupPath)
                .resize(1200, 1200, { // Resize to max 1200px width/height
                    fit: 'inside',
                    withoutEnlargement: true
                })
                .jpeg({ quality: 80, mozjpeg: true }) // Compress heavily but keep quality decent
                .toFile(filePath);

            const newStats = fs.statSync(filePath);
            console.log(`Done: ${file} -> ${(newStats.size / 1024).toFixed(2)} KB`);
        }

        console.log('All images optimized!');

    } catch (error) {
        console.error('Error optimizing images:', error);
    }
}

optimizeImages();
