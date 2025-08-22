export const useAuth = () => {
  // REMPLACER PAR UNE LOGIQUE AVEC UN SERVEUR BACK
  const fakeLogin = (credential) => {
    if (credential.login === "admin" && credential.password === "admin") {
      return { token: "My_FAKE_TOKEN" };
    } else false;
  };

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Simule un login.
   *
   * @param {Object} credential - Informations de login.
   * @param {string} credential.login - Identifiant.
   * @param {string} credential.password - Mot de passe.
   * @returns {boolean} - true si le login est ok, otherwise throw an error.
   */

  /*******  4188efe9-72b9-4534-8d48-4e88e51086c4  *******/
  const login = (credential) => {
    const response = fakeLogin(credential);

    if (response) {
      sessionStorage.setItem("token", response.token); // Pour utiliser le sessionStorage
      //   localStorage.setItem("token", response.token); // Pour utiliser le localStorage
      return true;
    } else throw new Error("Bad credentials");
  };

  return { login };
};
