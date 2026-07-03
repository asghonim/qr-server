[ -f "$BROWSER" ] && ! command -v xdg-open > /dev/null && sudo ln -s "$BROWSER" /usr/local/bin/xdg-open
npm install

npx playwright install --with-deps && npm install -g @playwright/cli;
playwright-cli install-browser chromium

curl -fsSL https://raw.githubusercontent.com/supabase/cli/main/install | bash
supabase completion bash > ~/.supabase_completion && echo "source ~/.supabase_completion" >> ~/.bashrc