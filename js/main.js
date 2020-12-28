complete_log.addEventListener('click', generateNote);
menu_complete.addEventListener('click', generateNote);

reset.addEventListener("click",resetLog);
menu_reset.addEventListener("click",resetLog);

window.addEventListener("contextmenu",customContextMenu);
window.addEventListener("click",removeContextMenu);


menu_copy.addEventListener("click",copyText);
menu_cut.addEventListener("click",cutText);
menu_paste.addEventListener("click",pasteText);