const moduleName = 'iplaces';
const moduleVersion = 'v1';
const baseApiUrl = `${env('BASE_URL', 'http://localhost:8000')}/api`;
const urlBase = `${baseApiUrl}/${moduleName}/${moduleVersion}`


export default {
  urlBase : urlBase,
  version: moduleVersion,
  categories: `${urlBase}/categories`,
  places: `${urlBase}/places`,
  schedules: `${urlBase}/schedules`,
}
