import os, shutil

src_root = r"c:\Users\nanda\Downloads\start-sweet-stories-main (3)\start-sweet-stories-main"
git_root = r"C:\Users\nanda\Downloads\start-sweet-stories"

total_copied = 0

for folder in ["src", "scripts"]:
    s_base = os.path.join(src_root, folder)
    g_base = os.path.join(git_root, folder)
    for root, dirs, files in os.walk(s_base):
        if "node_modules" in root or ".git" in root or "__pycache__" in root:
            continue
        rel = os.path.relpath(root, s_base)
        dest_dir = os.path.join(g_base, rel)
        os.makedirs(dest_dir, exist_ok=True)
        for f in files:
            if f.endswith(".pyc") or f == ".DS_Store":
                continue
            s_file = os.path.join(root, f)
            d_file = os.path.join(dest_dir, f)
            shutil.copy2(s_file, d_file)
            total_copied += 1

print(f"Successfully synced {total_copied} files from workspace to git repository!")
