import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Check for a stored route (redirected from 404.html)
const storedPath = sessionStorage.getItem('redirectPath');
const validPaths = [
  'home',
  'about',
  'projects',
  'concepts',
  'blogs',
  'contact'
];

if (storedPath) {
  sessionStorage.removeItem('redirectPath'); // Remove it after use
  sessionStorage.removeItem('redirected'); // Allow future redirects
  var storedPathArray = storedPath.split('/');
  if( validPaths.includes(storedPathArray[1])) {
    history.replaceState({}, '', storedPath); // Restore correct URL
  }
  else {
    history.replaceState({}, '', '/my-portfolio/home'); // Redirect to home if invalid path
  }
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
