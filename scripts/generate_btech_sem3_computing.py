import json

units_data = {}

def add_unit(sub_name, unit_no, highlights, bookmarks):
    key = f"{sub_name.strip()}__u{unit_no}"
    assert len(highlights) == 10, f"Expected 10 highlights for {key}, got {len(highlights)}"
    assert len(bookmarks) == 10, f"Expected 10 bookmarks for {key}, got {len(bookmarks)}"
    units_data[key] = {
        "highlights": highlights,
        "bookmarks": bookmarks
    }

print("Script template ready.")
