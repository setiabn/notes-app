import AuthApi from "../networks/auth-api";
import {
  authenticatedNavListTemplate,
  unauthenticatedNavListTemplate,
} from "../views/templates/template-creator";

const NavbarInitiator = {
  async renderAuthenticatedNavList(navListContainer) {
    try {
      const response = await AuthApi.getUserInfo();

      // navListContainer.innerHTML = authenticatedNavListTemplate(response.data);
      navListContainer.forEach((el) => {
        el.innerHTML = authenticatedNavListTemplate(response.data);
      });

      this._initialUnauthListener();
    } catch (error) {
      console.log(error);
    }
  },

  _initialUnauthListener() {
    // const logoutButton = document.getElementById("userLogOut");
    // logoutButton.addEventListener("click", async (event) => {
    //   event.preventDefault();

    //   try {
    //     const response = await AuthApi.logout();
    //     window.location.hash = "#/login";
    //   } catch (error) {
    //     console.error(error);
    //   }
    // });

    // Kode dicoding hanya mengatur untuk 1 button, padahal ada 2 button

    const logouts = document.querySelectorAll(".userLogoutClassMultiple");
    logouts.forEach((btn) => {
      btn.addEventListener("click", async (event) => {
        event.preventDefault();

        try {
          const response = await AuthApi.logout();
          window.location.hash = "#/login";
        } catch (error) {
          console.error(error);
        }
      });
    });
  },

  renderUnauthenticatedNavList(navListContainer) {
    // navListContainer.innerHTML = unauthenticatedNavListTemplate();
    navListContainer.forEach((el) => {
      el.innerHTML = unauthenticatedNavListTemplate();
    });
  },
};

export default NavbarInitiator;
