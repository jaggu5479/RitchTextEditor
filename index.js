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


  // Text Formating //
  document.getElementById("bold").addEventListener("click", function() {
    document.execCommand("bold", false, null);
  });

  document.getElementById("underline").addEventListener("click", function() {
    document.execCommand("underline", false, null)
  });  
  
  document.getElementById("italic").addEventListener("click", function() {
    document.execCommand("italic", false, null);
  });

  document.getElementById("strikethrough").addEventListener("click", function() {
    document.execCommand("strikethrough", false, null);
  });

  // Text alignment //
  document.getElementById("justify-left").addEventListener("click", function() {
    document.execCommand("justifyLeft", false, null);
  });

  document.getElementById("justify-center").addEventListener("click", function() {
    document.execCommand("justifyCenter", false, null);
  });

  document.getElementById("justify-right").addEventListener("click", () => {
    document.execCommand("justifyRight", false, null);
  });

  document.getElementById("justify").addEventListener("click", () => {
    document.execCommand("justifyFull", false, null);
  });
  //Output the editor dom content
  document.getElementById("editor").addEventListener("input", () => {
    const content = document.getElementById("editor").innerHTML;
    const output = document.getElementById("dom_output").innerHTML = content;
});