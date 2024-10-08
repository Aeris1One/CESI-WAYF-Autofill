async function saveOptions(e) {
  e.preventDefault();
  await chrome.storage.sync.set({
    email: document.getElementById("email").value
  });
  alert("Adresse email sauvegardée");
}

async function restoreOptions() {
  let res = await chrome.storage.sync.get('email');
  document.getElementById("email").value = res.email || 'john.doe@viacesi.fr';
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
