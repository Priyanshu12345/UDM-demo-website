import fs from 'fs';
import path from 'path';

const images = {
  // Hero: lively modern food hall interior with long communal tables, wood & ambient lights
  'hero-interior.jpg': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85',
  
  // Section E Photo mosaic:
  // Main large left image: Food hall interior dining & stalls
  'mosaic-main.jpg': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
  // Top right image: food hall bar / counter with drinks & lighting
  'mosaic-bar.jpg': 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=85',
  // Bottom center image: Asian street food spread, dumplings, bao, noodles
  'mosaic-food.jpg': 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=900&q=85',
  // Bottom right image: Outdoor patio with yellow seating & string lights
  'mosaic-patio.jpg': 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=900&q=85',

  // Section G Calendar preview cards:
  // Game Night card (illustrated / board games)
  'event-game.jpg': 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=700&q=85',
  // Friday DJ / music event
  'event-music.jpg': 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=700&q=85',
  // Artisan makers market
  'event-makers.jpg': 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=700&q=85',
  // Pub Trivia night
  'event-trivia.jpg': 'https://images.unsplash.com/photo-1528605248659-144006c47672?auto=format&fit=crop&w=700&q=85',

  // Section H Lifestyle:
  // Left: Tall nighttime outdoor party with festoon lights & mingling
  'lifestyle-night.jpg': 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85',
  // Right: Historic red brick exterior under clear sky
  'lifestyle-exterior.jpg': 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=900&q=85'
};

const targetDir = path.resolve('public/images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function downloadAll() {
  console.log('Downloading images...');
  for (const [name, url] of Object.entries(images)) {
    const dest = path.join(targetDir, name);
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      fs.writeFileSync(dest, Buffer.from(arrayBuffer));
      console.log(`✓ ${name} (${Math.round(arrayBuffer.byteLength / 1024)} KB)`);
    } catch (err) {
      console.error(`✗ ${name}:`, err.message);
    }
  }
  console.log('Done.');
}

downloadAll();
