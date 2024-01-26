document.addEventListener('DOMContentLoaded', function () {
    const editor = document.getElementById('editor');
  
    editor.addEventListener('input', function () {
      // Save the editor's content to localStorage
      localStorage.setItem('editorContent', editor.innerHTML);
    });
  
    // Load saved content from localStorage
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      editor.innerHTML = savedContent;
    }
  });


  //Output the editor dom content
  document.getElementById("editor").addEventListener("input", () => {
    const content = document.getElementById("editor").innerHTML;
    const output = document.getElementById("dom_output").innerHTML = content;
});