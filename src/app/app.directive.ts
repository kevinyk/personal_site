import { Directive, AfterViewInit, OnInit} from '@angular/core';

@Directive({selector: '[myDirective]'})
export class MyDirective implements AfterViewInit{
	ngAfterViewInit(){

		var elem = document.getElementById('dropdownBasic1');
		var containerElem = document.getElementById('container');
		var temp = elem.parentElement.className;
		elem.onmouseover = function(){
			console.log(elem)

			elem.attributes[elem.attributes.length-1].value = "true"
			elem.parentElement.className = temp + " show";
		}
		document.addEventListener('mousedown', function(e){
			// console.log('hi')
			elem.attributes[elem.attributes.length-1].value = "false"
			elem.parentElement.className = temp;
		})
		// Determine if an element is in the visible viewport
		function isInViewport(element) {
		  var rect = element.getBoundingClientRect();
		  var html = document.documentElement;
		  return (
		    rect.top >= 0 &&
		    rect.left >= 0 &&
		    rect.bottom <= (window.innerHeight || html.clientHeight) &&
		    rect.right <= (window.innerWidth || html.clientWidth)
		  );
		}
		// The above function could be used by adding a “scroll” event listener to the window and then calling isInViewport().
		var testElem = document.getElementById('scroll-animation-test')
		var animElem = document.getElementById('scroll-animation')
		function scrollAnim(e){
			console.log(isInViewport(testElem));
			if (isInViewport(testElem)){
				animElem.style.animationPlayState = "running";
				window.removeEventListener('scroll', scrollAnim);
			}
		}
		window.addEventListener("scroll", scrollAnim)
	}
}