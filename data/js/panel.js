//функции срабатывают при нажатии на кнопки вопрос1, т.е. возврат к предыдущим заданиям


function osnova(nomer) {
  inpKol1=document.getElementById('kol1').valueAsNumber;
  inpKol2=document.getElementById('kol2').valueAsNumber;
  inpKol3=document.getElementById('kol3').valueAsNumber;
  inpKol=+inpKol1+ +inpKol2+ +inpKol3;     //количество заданий из формы
  numberZad=document.getElementById('kolich').value;
  
  
     if (nomer == inpKol){
         document.getElementById('vopros'+(numberZad)).style.display = "none";
         document.getElementById('vopros'+(nomer)).style.display = "block";
	     document.getElementById('kn_sl').style.display = "none";
         document.getElementById('kn_pr').style.display = "block";
      }
	  else {
                  document.getElementById('vopros'+(numberZad)).style.display = 'none';
                  document.getElementById('vopros'+nomer).style.display = "block";
				  document.getElementById('kn_sl').style.display = "block";
                  document.getElementById('kn_pr').style.display = "none";
				  }
	document.getElementById('kolich').value = nomer;
}



function vkluchitNumberZadaniya1() {
 osnova(1);
}
function vkluchitNumberZadaniya2() {
 osnova(2);
}
function vkluchitNumberZadaniya3() {
 osnova(3);
}
function vkluchitNumberZadaniya4() {
 osnova(4);
}
function vkluchitNumberZadaniya5() {
 osnova(5);
}
function vkluchitNumberZadaniya6() {
 osnova(6);
}
function vkluchitNumberZadaniya7() {
 osnova(7);
}
function vkluchitNumberZadaniya8() {
 osnova(8);
}
function vkluchitNumberZadaniya9() {
 osnova(9);
}
function vkluchitNumberZadaniya10() {
 osnova(10);
}
function vkluchitNumberZadaniya11() {
 osnova(11);
}
function vkluchitNumberZadaniya12() {
 osnova(12);
}
function vkluchitNumberZadaniya13() {
 osnova(13);
}
function vkluchitNumberZadaniya14() {
 osnova(14);
}
function vkluchitNumberZadaniya15() {
 osnova(15);
}
function vkluchitNumberZadaniya16() {
 osnova(16);
}
function vkluchitNumberZadaniya17() {
 osnova(17);
}
function vkluchitNumberZadaniya18() {
 osnova(18);
}
function vkluchitNumberZadaniya19() {
 osnova(19);
}
function vkluchitNumberZadaniya20() {
 osnova(20);
}
function vkluchitNumberZadaniya21() {
 osnova(21);
}
function vkluchitNumberZadaniya22() {
 osnova(22);
}
function vkluchitNumberZadaniya23() {
 osnova(23);
}
function vkluchitNumberZadaniya24() {
 osnova(24);
}
function vkluchitNumberZadaniya25() {
 osnova(25);
}
function vkluchitNumberZadaniya26() {
 osnova(26);
}
function vkluchitNumberZadaniya27() {
 osnova(27);
}
function vkluchitNumberZadaniya28() {
 osnova(28);
}
function vkluchitNumberZadaniya29() {
 osnova(29);
}
function vkluchitNumberZadaniya30() {
 osnova(30);
}
function vkluchitNumberZadaniya31() {
 osnova(31);
}
function vkluchitNumberZadaniya32() {
 osnova(32);
}
function vkluchitNumberZadaniya33() {
 osnova(33);
}
function vkluchitNumberZadaniya34() {
 osnova(34);
}
function vkluchitNumberZadaniya35() {
 osnova(35);
}
function vkluchitNumberZadaniya36() {
 osnova(36);
}
function vkluchitNumberZadaniya37() {
 osnova(37);
}
function vkluchitNumberZadaniya38() {
 osnova(38);
}
function vkluchitNumberZadaniya39() {
 osnova(39);
}
function vkluchitNumberZadaniya40() {
 osnova(40);
}
function vkluchitNumberZadaniya41() {
 osnova(41);
}
function vkluchitNumberZadaniya42() {
 osnova(42);
}
function vkluchitNumberZadaniya43() {
 osnova(43);
}
function vkluchitNumberZadaniya44() {
 osnova(44);
}
function vkluchitNumberZadaniya45() {
 osnova(45);
}
function vkluchitNumberZadaniya46() {
 osnova(46);
}
function vkluchitNumberZadaniya47() {
 osnova(47);
}
function vkluchitNumberZadaniya48() {
 osnova(48);
}
function vkluchitNumberZadaniya49() {
 osnova(49);
}
function vkluchitNumberZadaniya50() {
 osnova(50);
}
