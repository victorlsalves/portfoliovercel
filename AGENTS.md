<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Use TanStack Router's home route for the single-page portfolio and hash anchors for its sections; this preserves framework routing while keeping navigation on one page.
- Keep portfolio project data in a browser-safe shared module, and serve app media from `public/` through `src/lib/media.ts`; this separates content from rendering and keeps one build working on Lovable and on external hosts (Vercel, Netlify, Node).
- Pin the deploy target's Nitro preset in `vite.config.ts` for the host you ship to; Lovable's own build keeps its Cloudflare preset, so the editor preview is unaffected.
- Keep all visual theme values and responsive styles in the global design system, with shared Button and Dialog controls; this ensures consistent light and dark presentation.
- Theme preference may use browser storage because it is a device-local preference, not application data.
