// scroll to anchor

export default function(to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash
    };
  }
}
