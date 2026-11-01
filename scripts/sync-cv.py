"""Copies the Flutter CV PDF from D:/shaker-github/cv into public/cv and renders each page as WebP for the CV page.
Usage: python scripts/sync-cv.py"""
import io
import json
import pathlib
import shutil

import fitz
from PIL import Image

SRC = pathlib.Path('D:/shaker-github/cv/Mahmoud_Shaker_Flutter_CV.pdf')
OUT = pathlib.Path(__file__).resolve().parent.parent / 'public' / 'cv'
OUT.mkdir(parents=True, exist_ok=True)
shutil.copyfile(SRC, OUT / SRC.name)

pages = []
for i, page in enumerate(fitz.open(SRC), 1):
    pix = page.get_pixmap(dpi=170)
    img = Image.open(io.BytesIO(pix.tobytes('png')))
    name = f'page-{i}.webp'
    img.save(OUT / name, 'WEBP', quality=88, method=6)
    pages.append({'src': f'cv/{name}', 'width': img.width, 'height': img.height})

meta = {'pdf': f'cv/{SRC.name}', 'sizeKb': round(SRC.stat().st_size / 1024), 'pages': pages}
(OUT.parent.parent / 'src' / 'data' / 'cv.json').write_text(json.dumps(meta, indent=2) + '\n', encoding='utf-8')
print(meta)
