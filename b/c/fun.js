
window.MY_NAMESPACE = window.MY_NAMESPACE || {}

window.MY_NAMESPACE.demoFeature = function (selector) {
  window.$(selector).on('click', function (e) {
    e.preventDefault();
    window.alert('The behaviour from a-govuk-plugin-example is used - a kitten');
  })
}
