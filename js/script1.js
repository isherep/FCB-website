/*
var pageSafety =  (function() {

    var smImg = document.getElementById('small');
    var modal = document.querySelector('.modal');
    var lrgImg = document.getElementById('img01');
    var closeBtn = document.querySelector('.close');

    smImg.style.cursor="zoom-in";

    smImg.addEventListener('click', function(){
        modal.style.display = "block";
        lrgImg.src = this.src;
    });

    closeBtn.addEventListener('click', function(){
        modal.style.display = "none";
    });

})();
*/

var pageDepartments = (function(){

   var newHtml0, newHtml1, newHtml2, newHtml3, newHtml4, newHtml5, newHtml6, newHtml7;

    //modal-content = my div departments
    //California department
    newHtml0 = '<img class="departments" src = "../Images/iStock_000003421602Medium.jpg"  alt="greens"><!--started div.text block--><div class="text-block"> <!--started text block--><p class="text-block">California/Arizona Vegetables</p> </div><!--ended text-block--><div class = "names"><!--started div names--> <h5 class = "names01">Bob Bloxom / Mike Crosset</h5><p class="departments"><a class="departments" href="mailto:robertb@fcbloxom.com">"robertb@fcbloxom.com</a><br/><a class="departments" href="mailto:mikec@fcbloxom.com">mikec@fcbloxom.com"</a></p></div></div>';
    //Flodida department - Jeff
    newHtml1 = '<img class="departments" src = "../Images/one-fresh-red-tomato-isolated-on-white_1205-548.jpg" alt="tomato"><div class="text-block"> <!--started text block--><p class="text-block">Florida Tomatoes, Citrus, Tropicals</p></div><!--ended text block--><div class = "names"><!--started div names--> <h5>Jeff Hawes</h5><p class="departments"><a class = "departments" href="mailto:jeffh@fcbloxom.com">jeffh@fcbloxom.com</a></p></div><!--ended div names--></div>';
    //GreenHouse - Alex
     newHtml2 = '<img class="departments" src = "../Images/colorful-bell-pepper_1203-6836.jpg" alt="peppers"><div class="text-block"> <!--started text block--><p class="text-block">Greenhouse Vegetables</p> </div><!--ended text block--><div class = "names"><!--started div names--> <h5>Alex Rosas</h5><p class="departments"><a class="departments" href="mailto:alexr@fcbloxom.com">alexr@fcbloxom.com</a></p></div><!--ended names--></div> ';
    //Potato department - Joe
    newHtml3 = '<img class="departments" src = "../Images/delicious-potatoes-on-white-background_1203-1899.jpg" alt="potato"><div class="text-block"> <!--started text block--><p class="text-block">Potatoes</p> </div><!--ended text block--><div class = "names"><!--started div names--><h5>Joe Sacco</h5><p class="departments"><a class="departments" href="mailto:josephs@fcbloxom.com">joes@fcbloxom.com</a></p></div> <!--closed names--></div>';
    //Florida - limes and Texas citrys
    newHtml4 = '<img class="departments" src = "../Images/limes.jpg" alt="limes"><div class="text-block"> <!--started text block--><p class="text-block">Limes, Texas Citrus</p> </div><!--ended text block--><div class = "names"><!--started div names--> <h5>Phil Brennan</h5><p class="departments"><a class="departments" href="mailto:philb@fcbloxom.com">philb@fcbloxom.com</a></p></div></div>';
    //Onions
    newHtml5 = '<img class="departments" src = "../Images/onions131622.jpg" alt="limes"><div class="text-block"> <!--started text block--><p class="text-block">Onions, Apparagus</p> </div><!--ended text block--><div class = "names"><!--started div names--> <h5>Steve Brennan</h5><p class="departments"><a class="departments" href="mailto:philb@fcbloxom.com">philb@fcbloxom.com</a></p></div></div>';
    //Export
    newHtml6 = '<img class="departments" src="../Images/globe-grid-silhouette-with-white-details_318-38858.jpg" alt="globe"><div class="text-block"> <!--started text block--><p class="text-block">Export</p></div><!--ended text block--><div class = "names"><!--started div names--> <h5>Brian Bernard</h5><p class="departments"><a class="departments" href="mailto:brianb@fcbloxom.com">brianb@fcbloxom.com</a> <br/></div><!--ended names--></div>';
    //Walla Walla
    newHtml7 = '<img class="departments" src="../Images/walla.png" alt="walla walla"><div class="text-block"> <!--started text block--><p class="text-block">Walla Walla Office</p></div><!--ended text block--><div class = "names"><!--started div names--> <h5>Bryon Maghnati</h5><p class="departments"><a class="departments" href="mailto:brianb@fcbloxom.com">bryonm@fcbloxom.com</a></p></div><!--closed names--></div>';

    var htmlArr = [newHtml0, newHtml1, newHtml2, newHtml3, newHtml4, newHtml5, newHtml6, newHtml7];

    var prodCont = document.querySelectorAll('.products');
    var modalPr = document.querySelectorAll('.modalPr');

    function brighten(num){

        modalPr[num].style.display = "block";
        modalPr[num].classList.add('modalDiv');
        modalPr[num].insertAdjacentHTML('beforeend',htmlArr[num]);
    }

    function putBack(num){
        modalPr[num].style.display = "none";
    }


    for(var i = 0; i< prodCont.length; i++){
        prodCont[i].addEventListener('mouseover', brighten.bind(this, i), true);
        prodCont[i].addEventListener('mouseout', putBack.bind(this,i), true);
    }

//} //end of producePage function


    })();
