import os
import shutil

src_dir = r"c:\Users\nanda\Downloads\start-sweet-stories-main (3)\start-sweet-stories-main\scripts"
dst_dir = r"C:\Users\nanda\Downloads\start-sweet-stories\scripts"

os.makedirs(dst_dir, exist_ok=True)

copied = 0
for item in os.listdir(src_dir):
    if item == "__pycache__" or item.endswith(".pyc"):
        continue
    s = os.path.join(src_dir, item)
    d = os.path.join(dst_dir, item)
    if os.path.isfile(s):
        shutil.copy2(s, d)
        copied += 1

print(f"Synced {copied} script and data files to git repo.")
