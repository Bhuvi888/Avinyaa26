
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const eventDir = path.join(process.cwd(), 'src/assets/events');

async function optimizeEvents() {
    try {
        const files = fs.readdirSync(eventDir);

        const backupDir = path.join(eventDir, 'original_backup');
        if (!fs.existsSync(backupDir)) {
            fs.mkdirSync(backupDir);
        }

        console.log(`Found ${files.length} event images. Starting optimization...`);

        for (const file of files) {
            if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;

            const filePath = path.join(eventDir, file);
            const backupPath = path.join(backupDir, file);

            const stats = fs.statSync(filePath);
            // Optimize if it hasn't been backed up OR if we are forcing it (script logic simplifed)
            // We check if backup exists to avoid re-optimizing already optimized files
            if (fs.existsSync(backupPath)) {
                // If backup exists, it means current file is arguably already optimized.
                // But to be sure, we can check size. If current is still > 500KB, re-optimize.
                if (stats.size < 500000) {
                    console.log(`Skipping ${file} (already optimized: ${(stats.size / 1024).toFixed(2)} KB)`);
                    continue;
                }
            } else {
                // Backup original
                fs.copyFileSync(filePath, backupPath);
            }

            console.log(`Optimizing ${file} (${(stats.size / 1024).toFixed(2)} KB)...`);

            // Resize to 800px max width (cards are not huge)
            // Convert to JPEG/PNG with compression
            // Since inputs are PNGs, we keep them as PNGs if transparency is needed?
            // Actually these look like card backgrounds. Let's inspect content.
            // Assuming they might have transparency or be rectangular.
            // If they are large photos, JPEG is better. If graphics, PNG.
            // "burgundy.png" suggests transparency or specific graphic style.
            // Safe bet: resize and use png compression or webp? User imports them as .png.
            // I will keep extension as .png to avoid breaking imports, but compress heavily.

            await sharp(backupPath)
                .resize(800, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .png({ quality: 80, compressionLevel: 9 })
                .toFile(filePath);

            const newStats = fs.statSync(filePath);
            console.log(`Done: ${file} -> ${(newStats.size / 1024).toFixed(2)} KB`);
        }

        console.log('Event images optimized!');

    } catch (error) {
        console.error('Error optimizing event images:', error);
    }
}

optimizeEvents();
