//* querySelectorAll use id = querySelectorAll("#id")
//*                 use class = querySelectorAll(".class")
/// querySelector() จะ return ค่าเป็น Node แรกที่เจอใน document  
/// querySelectorAll() นั้น return ค่าเป็น NodeList คล้ายๆ array ของ Node ทั้งหมดใน document ที่ตรงตามที่ระบุใน selector

const item = document.querySelectorAll(".accordion a ");
// open or close class active
function toggleAccordion(){
this.classList.toggle('active');
this.nextElementSibling.classList.toggle('active');
}
//* click is event
item.forEach(item => item.addEventListener('click',toggleAccordion))