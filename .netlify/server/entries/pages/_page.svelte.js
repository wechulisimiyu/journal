import { c as create_ssr_component, d as each, e as escape } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-13wdr9j{display:flex;justify-content:center;align-items:center;height:100vh;background-color:#f2f2f2;font-family:Arial, sans-serif}.container.svelte-13wdr9j{text-align:center}.textarea-container.svelte-13wdr9j{margin-bottom:10px}textarea.svelte-13wdr9j{width:100%;max-width:400px;padding:10px;border-radius:4px;border:1px solid #ccc;resize:vertical;font-size:16px}button.svelte-13wdr9j{padding:10px 20px;background-color:#4caf50;color:white;border:none;border-radius:4px;cursor:pointer;font-size:16px}.entries.svelte-13wdr9j{display:flex;flex-direction:column-reverse;align-items:center}.entry.svelte-13wdr9j{margin-bottom:10px;padding:10px;background-color:white;box-shadow:0px 2px 4px rgba(0, 0, 0, 0.1);border-radius:4px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let entries = [];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1c6jmoq_START -->${$$result.title = `<title>My journal - shucks</title>`, ""}<!-- HEAD_svelte-1c6jmoq_END -->`, ""}
  
  <main class="svelte-13wdr9j"><div class="container svelte-13wdr9j"><div class="textarea-container svelte-13wdr9j"><textarea rows="5" placeholder="Write your thoughts..." class="svelte-13wdr9j">${""}</textarea>
        <button class="svelte-13wdr9j">Submit</button></div>
  
      ${entries.length === 0 ? `<p>No entries yet.</p>` : `<div class="entries svelte-13wdr9j">${each(entries, (entry) => {
    return `<div class="entry svelte-13wdr9j"><p>${escape(entry.text)}</p>
              <p>${escape(entry.timestamp)}</p>
            </div>`;
  })}</div>`}</div>
  </main>`;
});
export {
  Page as default
};
