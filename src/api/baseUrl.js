export default function getBaseUrl(){
  const indev = window.location.hostname == "localhost";
  return indev?"http://localhost:3001/" : "/";
}
