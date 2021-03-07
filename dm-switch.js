const darkSwitch = document.getElementById('darkSwitch');
window.addEventListener('load', () => {
  if (darkSwitch) {
        initTheme();
        check_particles();
    darkSwitch.addEventListener('change', () => {
        resetTheme();
        check_particles();
    });
  }
});


/**
 * Summary: function that adds or removes the attribute 'data-theme' depending if
 * the switch is 'on' or 'off'.
 *
 * Description: initTheme is a function that uses localStorage from JavaScript DOM,
 * to store the value of the HTML switch. If the switch was already switched to
 * 'on' it will set an HTML attribute to the body named: 'data-theme' to a 'dark'
 * value. If it is the first time opening the page, or if the switch was off the
 * 'data-theme' attribute will not be set.
 * @return {void}
 */
function initTheme() {
    const darkThemeSelected =
    localStorage.getItem('darkSwitch') !== null &&
    localStorage.getItem('darkSwitch') === 'dark';
  darkSwitch.checked = darkThemeSelected;
  darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') :
    document.body.removeAttribute('data-theme');
}


/**
 * Summary: resetTheme checks if the switch is 'on' or 'off' and if it is toggled
 * on it will set the HTML attribute 'data-theme' to dark so the dark-theme CSS is
 * applied.
 * @return {void}
 */
function resetTheme() {
  if (darkSwitch.checked) {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('darkSwitch', 'dark');
  } else {
    document.body.removeAttribute('data-theme');
    localStorage.removeItem('darkSwitch');
  }
}

function check_particles(){
    Dark_theme = "#fff"
    Light_theme = "#000"
    if (localStorage.getItem('darkSwitch') === 'dark') {
        $.each(pJSDom[0].pJS.particles.array, function(i){
            pJSDom[0].pJS.particles.array[i].color.value = Dark_theme;
            pJSDom[0].pJS.particles.array[i].color.rgb = hexToRgb(Dark_theme);
            pJSDom[0].pJS.particles.line_linked.color_rgb_line = hexToRgb(Dark_theme);
        });}
    else {
        $.each(pJSDom[0].pJS.particles.array, function(i){
            pJSDom[0].pJS.particles.array[i].color.value = Light_theme;
            pJSDom[0].pJS.particles.array[i].color.rgb = hexToRgb(Light_theme);
            pJSDom[0].pJS.particles.line_linked.color_rgb_line = hexToRgb(Light_theme);
        });}
}
