const userAuthenticator = {
  email: "posAdmin",
  password: "rcrmart",
};
function credentialMatcher(email, pass) {
  if (!email.length && !pass.length) return false;
  return email == userAuthenticator.email && pass == userAuthenticator.password;
}
export default credentialMatcher;
