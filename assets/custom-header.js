window.onload = function() {
 setTimeout(loadAfterTime, 5000)
};

function loadAfterTime(){

  var element0 = document.querySelector('.custom-menu ul > li:first-child > .huk_menu_submenu > ul > li:first-child ');
  var element1 = document.querySelector('.custom-menu ul > li:first-child > .huk_menu_submenu > div.huk_menu_col > div.huk_menu_submenu_tab_item:first-child ');
  element0.classList.remove('huk_menu_submenu_tab_active');
  element1.classList.remove('huk_menu_submenu_tab_active');
  
  var element = document.querySelector('.custom-menu ul > li:first-child > .huk_menu_submenu > ul > li:nth-child(3) ');
  var element1 = document.querySelector('.custom-menu ul > li:first-child > .huk_menu_submenu > div.huk_menu_col > div.huk_menu_submenu_tab_item:nth-child(3)');
  element.classList.add('huk_menu_submenu_tab_active');
  element1.classList.add('huk_menu_submenu_tab_active');

  var element0 = document.querySelector('.custom-menu ul > li:nth-child(2) > .huk_menu_submenu > ul > li:first-child ');
  var element1 = document.querySelector('.custom-menu ul > li:nth-child(2) > .huk_menu_submenu > div.huk_menu_col > div.huk_menu_submenu_tab_item:first-child ');
  element0.classList.remove('huk_menu_submenu_tab_active');
  element1.classList.remove('huk_menu_submenu_tab_active');
  
  var element = document.querySelector('.custom-menu ul > li:nth-child(2) > .huk_menu_submenu > ul > li:nth-child(3) ');
  var element1 = document.querySelector('.custom-menu ul > li:nth-child(2) > .huk_menu_submenu > div.huk_menu_col > div.huk_menu_submenu_tab_item:nth-child(3)');
  element.classList.add('huk_menu_submenu_tab_active');
  element1.classList.add('huk_menu_submenu_tab_active');
  
}