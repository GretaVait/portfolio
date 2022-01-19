const scrollTo = (to,id,offset) => {
  var smoothScrollFeature = 'scrollBehavior' in document.documentElement.style;
  var elem = document.getElementById(id), i;
  if (to == 'elem') to = elem.offsetTop + offset;
  var i = parseInt(window.pageYOffset);
  if ( i != to ) {
      if (!smoothScrollFeature) {
          to = parseInt(to);
          if (i < to) {
            var int = setInterval(function() {
                if (i > (to-10)) i += 1;
                else if (i > (to-40)) i += 5;
                else if (i > (to-80)) i += 10;
                else if (i > (to-160)) i += 20;
                else if (i > (to-200)) i += 25;
                else if (i > (to-300)) i += 40;
                else i += 60;
                window.scroll(0, i);
                if (i >= to) clearInterval(int);
            }, 15);
        }
        else {
            var int = setInterval(function() {
                if (i < (to+10)) i -= 1;
                else if (i < (to+40)) i -= 5;
                else if (i < (to+80)) i -= 10;
                else if (i < (to+160)) i -= 20;
                else if (i < (to+200)) i -= 25;
                else if (i < (to+300)) i -= 40;
                else i -= 60;
                window.scroll(0, i);
                if (i <= to) clearInterval(int);
            }, 15);
        }
      }
      else {
          window.scroll({
              top: to,
              left: 0,
              behavior: 'smooth'
          });
      }
  }
}

 
export default scrollTo