import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import './scss/index.scss';
import './index.html';
import { signUp } from './auth.js';
import renderPreLoaderPage from './pages/preloaderPage';
import renderLoginPage from './pages/loginPage';
import renderInnerPage from './pages/innerPage';
import { async } from '@firebase/util';
import { loginStatus } from './auth';
import './eventlisteners';
import { addData } from './database';

// signUp('csomos.istvan@pm.me', '123456');

// addData({ name: 'kutya', age: 3 });

renderPreLoaderPage();

async function main() {
  try {
    const user = await loginStatus();
    if (user) {
      console.log(user);
      renderInnerPage();
    }
  } catch (error) {
    renderLoginPage();
    console.log(error);
  }
}
main();
