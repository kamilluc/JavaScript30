const checkboxes = document.querySelectorAll("input");

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("click", e => {
    if (!e.shiftKey) return;

    let firstCheck = [...checkboxes].findIndex(e => e.checked);

    if (firstCheck < index)
      for (let i = firstCheck; i < index; i++) checkboxes[i].checked = true;
    else {
      let lastCheck =
        checkboxes.length -
        1 -
        [...checkboxes].reverse().findIndex(e => e.checked);

      for (let i = lastCheck; i > index; i--) checkboxes[i].checked = true;
    }
  });
});
