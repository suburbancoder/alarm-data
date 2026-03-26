import os
import re

APP_JS_PATH = 'app.js'
STYLES_CSS_PATH = 'styles.css'
INDEX_HTML_PATH = 'index_source.html'
BUNDLE_PATH = 'bundle.html'

with open(APP_JS_PATH, 'r') as f:
    js_content = f.read()

# Add date format helpers
date_helpers = """
function formatDateLocal(d) {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

function formatMonthLocal(d) {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    return `${yyyy}-${mm}`;
}
"""

js_content = js_content.replace('function getWeekStart(d)', date_helpers + '\nfunction getWeekStart(d)')

# Fix getWeekStart
js_content = js_content.replace("return date.toISOString().split('T')[0];", "return formatDateLocal(date);")

# Fix nightDateStr in renderChart
js_content = js_content.replace(
    "const nightDateStr = nightDate.toISOString().split('T')[0];",
    "const nightDateStr = formatDateLocal(nightDate);"
)

# Fix keys in renderChart
js_content = js_content.replace(
    "key = d.toISOString().split('T')[0];",
    "key = formatDateLocal(d);"
)
js_content = js_content.replace(
    "key = d.toISOString().substring(0, 7);",
    "key = formatMonthLocal(d);"
)
js_content = js_content.replace(
    "const rowDateStr = d.toISOString().split('T')[0];",
    "const rowDateStr = formatDateLocal(d);"
)

# Fix dateStr in renderDashboard
js_content = js_content.replace(
    "const dateStr = nightDate.toISOString().split('T')[0];",
    "const dateStr = formatDateLocal(nightDate);"
)

# Save patched app.js
with open(APP_JS_PATH, 'w') as f:
    f.write(js_content)

# Bundle
with open(STYLES_CSS_PATH, 'r') as f:
    css_content = f.read()

with open(INDEX_HTML_PATH, 'r') as f:
    html_content = f.read()

# Replace css link
html_content = html_content.replace(
    '<link rel="stylesheet" href="styles.css">',
    f'<style>\n{css_content}\n</style>'
)

# Replace js link
html_content = html_content.replace(
    '<script type="module" src="app.js"></script>',
    f'<script>\n{js_content}\n</script>'
)

with open(BUNDLE_PATH, 'w') as f:
    f.write(html_content)

print(f"Patched timezone issues and bundled app into {BUNDLE_PATH}")
