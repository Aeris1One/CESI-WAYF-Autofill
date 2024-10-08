chrome.storage.sync.get('email', (res) => {
    const email = res.email;

    if (email) {
        // Remplir le champ avec l'adresse e-mail
        const emailField = document.getElementById('login');
        if (emailField) {
            emailField.value = email;
        }

        // Cliquer sur le bouton de soumission
        const submitButton = document.getElementById('submit');
        if (submitButton) {
            submitButton.click();
        }
    }
});
