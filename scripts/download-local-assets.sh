#!/usr/bin/env bash
# ONE-TIME helper: saves PNGs into public/images/assets/ for git.
# After running, commit those files. Do not rely on Figma MCP URLs long-term.
# For future design updates, export from Figma UI (see public/images/README.md).
set -euo pipefail

DIR="$(cd "$(dirname "$0")/.." && pwd)/public/images/assets"
mkdir -p "$DIR"

dl() { echo "→ $2"; curl -fsSL "$1" -o "$2"; }

# Photos (from Figma export / MCP — commit the result)
dl "https://www.figma.com/api/mcp/asset/fdfdb7ed-498a-4d61-8c66-b0b9f2874af7" "$DIR/hero-overlay.jpg"
dl "https://www.figma.com/api/mcp/asset/a7f88bf5-4ea8-4f25-8bdc-f207a452f4a7" "$DIR/demo-banner.jpg"
dl "https://www.figma.com/api/mcp/asset/22c33bb4-5900-4952-9f83-3ffd07d34710" "$DIR/footer-labs.jpg"

# Icons (PNG screenshots @1x/2x)
dl "https://www.figma.com/api/mcp/asset/4c1526a6-cad8-48a8-95c5-64f3bbd296f8" "$DIR/icon-pca.png"
dl "https://www.figma.com/api/mcp/asset/8892e9e9-1bab-4b20-b515-2a10be3f1927" "$DIR/icon-rca.png"
dl "https://www.figma.com/api/mcp/asset/da3f823e-044a-4245-bc7a-1a63d7ab0370" "$DIR/icon-rfs.png"
dl "https://www.figma.com/api/mcp/asset/a52270a8-dadc-41a9-8c18-ed0152e624bd" "$DIR/icon-sor.png"
dl "https://www.figma.com/api/mcp/asset/5b938848-a8a4-4e83-8b82-d923c2acb22b" "$DIR/icon-esa.png"
dl "https://www.figma.com/api/mcp/asset/cb511ce0-a49b-4fcf-bd59-73c4ceee63b9" "$DIR/icon-more.png"
dl "https://www.figma.com/api/mcp/asset/f0811db0-9823-43de-9418-46ce188478cf" "$DIR/icon-inputs.png"
dl "https://www.figma.com/api/mcp/asset/af5b2ceb-f272-4f69-866b-41a53504a9d6" "$DIR/icon-creation.png"
dl "https://www.figma.com/api/mcp/asset/fe21bde9-41e9-40f1-843c-31cfc19f64c1" "$DIR/icon-writing.png"
dl "https://www.figma.com/api/mcp/asset/9bceeab6-aebd-453f-af80-ca7c5cd4f1cc" "$DIR/icon-engineering.png"
dl "https://www.figma.com/api/mcp/asset/ca9595f0-24ed-406c-95a4-70b8e184a96e" "$DIR/icon-standards.png"
dl "https://www.figma.com/api/mcp/asset/aecce2be-4b36-4810-8a5d-c75cc8f768d6" "$DIR/icon-integration.png"
dl "https://www.figma.com/api/mcp/asset/21f6c7b8-6392-4e8f-9c48-16b5d612d71d" "$DIR/arc-logo.png"

echo "Done. Verify with: file $DIR/*.png | head"
