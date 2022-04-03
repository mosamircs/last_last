/*
////// dont mess with this file /////////////
*/
//////////////////////main variables//////////////////////////////////
const form = document.getElementById('form');

const next = document.getElementById('next-1');
const prev = document.getElementById('prev-1');

const divButChose = document.getElementById('but-chose');
const proBar = document.getElementById('pro-bar');

const layer = document.getElementsByClassName('layer');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

///////// show layers 
let currLayer = 0;
showLayer(currLayer);

function showLayer(curr){
    layer[curr].style.display = 'block';
    // console.log(layer.length - 1)
    if(curr == 0){
        divButChose.style.display = 'none';
        proBar.style.display = 'none';
    } else{
        divButChose.style.display = 'block';
        proBar.style.display = 'block';
    }
    if (curr == (layer.length - 1)) {
        document.getElementById("next-1").innerHTML = "حفظ";
      } else {
        document.getElementById("next-1").innerHTML = "التالى";
      }
    //update progress bar 
    update();
}
//////// change layers
function changeLayer(curr){
    // console.log(layer);
    //hold for validation
    if (curr == 1 && !validateForm()) return false;
    layer[currLayer].style.display = "none";
    currLayer = currLayer + curr;
    // console.log(currLayer);
        if (currLayer >= layer.length) {
            form.submit();
            return false;
        }
    // }
    showLayer(currLayer);
    if(currLayer == 4){

        getFormData();
    }
    // console.log('fhjf');
}


/////////// form validation

const userName = document.getElementById('username');
const userEmail = document.getElementById('email');
const userPhone = document.getElementById('phone');
const errorUserName = document.getElementById('error-userName');
const errorUserEmail = document.getElementById('error-email');  
const errorUserPhone = document.getElementById('error-phone');  
let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let phonePattern = /1?-?\.?\(?\d{3}[\-\)\.\s]?\d{3}[\-\.\s]?\d{4}/;
let inputVal = document.getElementsByTagName('input');
let inputTxt = document.getElementsByClassName('lay2');
let inputTxt2 = document.getElementsByClassName('lay3');


function validateForm() {
    let valid = true;
 if(currLayer == 0)
 {
    if(userName.value == ''){
    //user name
        errorUserName.innerHTML="يجب ادخال اسم المستخدم ";
        errorUserName.style.display="block";
        errorUserName.style.fontSize="14px";
        errorUserName.style.color="red";
        userName.style.border = "1px solid red";
        //user email
    if(userEmail.value == '')
        errorUserEmail.innerHTML="يجب ادخال البريد الالكترونى";
        errorUserEmail.style.display="block";
        errorUserEmail.style.fontSize="14px";
        errorUserEmail.style.color="red";
        userEmail.style.border = "1px solid red";
        //user phone
    if(userPhone.value == '')
        errorUserPhone.innerHTML="يجب ادخال رقم الهاتف";
        errorUserPhone.style.display="block";
        errorUserPhone.style.fontSize="14px";
        errorUserPhone.style.color="red";
        userPhone.style.border = "1px solid red";
    // console.log('hjekh')
    valid = false;
}else{
if(emailPattern.test(userEmail.value) && (isNaN(userName.value)) && phonePattern.test(userPhone.value)){
    //user name
        errorUserName.innerHTML="";
        userName.style.border = "1px solid green";
    //user email
        errorUserEmail.innerHTML="";
        userEmail.style.border = "1px solid green";
    //user phone
        errorUserPhone.innerHTML="";
        userPhone.style.border = "1px solid green";
    valid = true;
}else{
    //user name
        errorUserName.innerHTML="اسم المستخدم يجب الا يحتوى على رموز او ارقام";
        errorUserName.style.display="block";
        errorUserName.style.fontSize="14px";
        errorUserName.style.color="red";
        userName.style.border = "1px solid red";
                // console.log('hfh')
    //user email
        errorUserEmail.innerHTML="البريد الالكترونى غير صالح";
        errorUserEmail.style.display="block";
        errorUserEmail.style.fontSize="14px";
        errorUserEmail.style.color="red";
        userEmail.style.border = "1px solid red";
        // console.log('jdhj')
        //user phone
        errorUserPhone.innerHTML="رقم الهاتف يجب الا يقل عن 11 رقم ولا يحتوى على رموز او ارقام";
        errorUserPhone.style.display="block";
        errorUserPhone.style.fontSize="14px";
        errorUserPhone.style.color="red";
        userPhone.style.border = "1px solid red";
        valid = false;
    }
  }
}
if(currLayer == 1){
    // console.log('dfghjk')
    for(let i=0; i<inputVal.length; i++){
        if(inputVal[i]['type'] == ['radio']){
            if(inputVal[i]['checked'] != true){
                if($('.form-check-input:checked').length == 0)
                {
                    inputVal[i].style.border = '1px solid red';
                // console.log(radioBtn[i])
                    valid = false;
                }
            } else {
                inputVal[i].style.border = '1px solid #000086';
                valid = true;
            }
        }
    }
}
if(currLayer == 2){
   
     for(let i=0; i<inputTxt.length; i++){
        // console.log(inputTxt[i])
          if(inputTxt[i].value == ''){
              inputTxt[i].style.border = '1px solid red';
                 // console.log(radioBtn[i])
                valid = false;
            } else {
                inputTxt[i].style.border = '1px solid #000086';
                valid = true;
                // console.log('dfdg')
       }
    }
 }
 if(currLayer == 3){
   
    for(let i=0; i<inputTxt2.length; i++){
       // console.log(inputTxt[i])
         if(inputTxt2[i].value == ''){
             inputTxt2[i].style.border = '1px solid red';
                // console.log(radioBtn[i])
               valid = false;
           } else {
               inputTxt2[i].style.border = '1px solid #000086';
               valid = true;
               // console.log('dfdg')
      }
   }
}
if(currLayer == 4){
    const inputAdd = document.getElementById('autocompleteinput');
    // console.log(inputAdd);
    if(inputAdd.value == ''){
    //    console.log($('#inputtextAdd'))
    inputAdd.style.border = '1px solid red';
    valid = false;
   } else {
    inputAdd.style.border = '1px solid #000086';
    valid = true;

   }
}

    if (valid) {
    //document.getElementsByClassName("step")[currentTab].className += " finish";
     //user name
     errorUserName.innerHTML="";
     userName.style.border = "1px solid green";
 //user email
     errorUserEmail.innerHTML="";
     userEmail.style.border = "1px solid green";
 //user phone
     errorUserPhone.innerHTML="";
     userPhone.style.border = "1px solid green";
    }
    // console.log(valid)
    return valid; // return the valid status

}

// Restricts input for the given textbox to the given inputFilter function.
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
      });
    });
  }
  setInputFilter(document.getElementById("inputtext3"), function(value) {
    return /^-?\d*[.,%]?\d*$/.test(value); });
  setInputFilter(document.getElementById("inputtext4"), function(value) {
    return /^-?\d*[.,%]?\d*$/.test(value); });
  setInputFilter(document.getElementById("inputtext6"), function(value) {
    return /^-?\d*[.,%]?\d*$/.test(value); });

/////////change progress bar
  
  function update(){
    circles.forEach((circles , cirIndx)=>{
        if(cirIndx < currLayer){
            circles.classList.add('active');
        } else{
            circles.classList.remove('active')
        }
    });
    const actives = document.querySelectorAll('.active');

    progress.style.width =( (actives.length - 1) / (circles.length - 1) ) * 100 + '%';
}

//////////////////////render country & flags plugin//////////////
     const input = document.querySelector("#phone");
        window.intlTelInput(input,({
      // options here
    }));
    $(document).ready(function() {
        $('.iti__flag-container').click(function() { 
          var countryCode = $('.iti__selected-flag').attr('title');
          var countryCode = countryCode.replace(/[^0-9]/g,'')
          $('#phone').val("");
          $('#phone').val("+"+countryCode+" "+ $('#phone').val());
       });
    });


/////////////////////////comp-types---section-1/////////////////////////////////
////////chose between comp-types
let areaMoney = document.getElementById('choice-Money')
let areaPeolple = document.getElementById('choice-people');
let btnMoney = document.getElementById('btn-money');
let btnPeople = document.getElementById('btn-people');

btnMoney.addEventListener('click',()=>{
    // console.log('cjfh')
    if(areaMoney.style.display === 'none'){
        areaMoney.style.display = 'block';
        areaPeolple.style.display = 'none';
        btnMoney.classList.replace('notseleted','selected');
        btnPeople.classList.replace('selected','notseleted');
        btnPeople.classList.add('text-align');
        // console.log('hhhg');
    }
});
btnPeople.addEventListener('click',()=>{
    if(areaPeolple.style.display === 'none'){
        areaPeolple.style.display = 'block';
        areaMoney.style.display = 'none';
        btnPeople.classList.replace('notseleted','selected');
        btnMoney.classList.replace('selected','notseleted');
        btnMoney.classList.add('set-position');
    }
});
////////hide and show download info btn
let checkbox1 = document.getElementById('exampleRadios1');
let downBtn1 = document.getElementById('down-1');
let checkbox2 = document.getElementById('exampleRadios2');
let downBtn2 = document.getElementById('down-2');
let checkbox3 = document.getElementById('exampleRadios3');
let downBtn3 = document.getElementById('down-3');
let checkbox4 = document.getElementById('exampleRadios4');
let downBtn4 = document.getElementById('down-4');
let checkbox5 = document.getElementById('exampleRadios5');
let downBtn5 = document.getElementById('down-5');
let checkbox6 = document.getElementById('exampleRadios6');
let downBtn6 = document.getElementById('down-6');
const partCompDel = document.getElementById('partCompDel');
const partCompOption = document.getElementById('partCompOption');
const h6part = document.getElementsByClassName('h6part');
const partComp = document.getElementsByTagName('label');
const mangers = document.getElementsByClassName('mang');
const selectMang = document.getElementsByClassName('selectMang');

let changeOptin = false;
function check1(){
    if (checkbox1.checked){
        downBtn1.style.display = 'inline-block';
        downBtn2.style.display = 'none';
        downBtn3.style.display = 'none';
        document.querySelectorAll("#specificSizeSelect option").forEach(opt => {
          if (opt.value == "1") {
              opt.disabled = true;
          }
      });
    }
    return changeOptin;
}
function check2(){
    // e.preventDefault();
    // console.log('before');
    if (checkbox2.checked){
        // return true;
        downBtn1.style.display = 'none';
        downBtn2.style.display = 'inline-block';
        downBtn3.style.display = 'none';
        // console.log('after');
        for(let i=0; i < partComp.length; i++){
            if(partComp[i].style.display == 'none'){
                partComp[i].style.display = 'inline-block';
                partCompDel.innerHTML = 'حذف المساهم';
                partCompOption.setAttribute('selected','selected');
                // h6part.innerHTML = 'صلاحيات المساهم';
                for(let j=0; j< mangers.length;j++){
                    mangers[j].style.display = 'none';
                    // console.log(mangers[j])
                }
                for(let x=0; x< selectMang.length;x++){
                    // console.log(selectMang[x])
                    selectMang[x].style.display = 'block';
                }
                for(let y=0; y< h6part.length;y++){
                    // console.log(mangers[j])
                    h6part[y].innerHTML = 'صلاحيات المساهم';
                }
            }
        }
     }
      document.querySelectorAll("#specificSizeSelect option").forEach(opt => {
        if (opt.value == "1") {
            opt.disabled = true;
        }
      });
  document.querySelectorAll("#specificSizeSelect option").forEach(opt => {
    if (opt.value == "2") {
        opt.disabled = true;
    }
  });
}
function check3(){
    if (checkbox3.checked){
        downBtn1.style.display = 'none';
        downBtn2.style.display = 'none';
        downBtn3.style.display = 'inline-block';
    }
}
function check4(){
    if (checkbox4.checked){
        downBtn5.style.display = 'none';
        downBtn6.style.display = 'none';
        downBtn4.style.display = 'inline-block';
    }
}
function check5(){
    if (checkbox5.checked){
        downBtn4.style.display = 'none';
        downBtn6.style.display = 'none';
        downBtn5.style.display = 'inline-block';
        document.querySelectorAll("#specificSizeSelect option").forEach(opt => {
          if (opt.value == "1") {
              opt.disabled = true;
          }
        });
    }
}function check6(){
    if (checkbox6.checked){
        downBtn4.style.display = 'none';
        downBtn5.style.display = 'none';
        downBtn6.style.display = 'inline-block';
        document.querySelectorAll("#specificSizeSelect option").forEach(opt => {
          if (opt.value == "1") {
              opt.disabled = true;
          }
        });
    }
}
///////////////////////////////comp-info---section-2/////////////////////////////////
const btnAdd = document.querySelector('#btn-add-sug');

        const parentForm = document.querySelector('#parent-el');
        // console.log(parentDiv)
        let numArray = ['الثالث','الرابع','الخامس','السادس'];
        btnAdd.addEventListener('click',(e)=>{
            e.preventDefault();
            let i = parentForm.getElementsByTagName('div').length;
            // console.log(i)
                if(i < 6){
                    const newform = document.createElement('div');
                    newform.setAttribute('dir','rtl');
                    newform.classList.add('row', 'g-3', 'justify-content-evenly' ,'pt-3','sug1');
                        newform.innerHTML = `<div class="col-md-4">
                                  <label for="inputtext1" class="form-label">الاقتراح ${numArray[0]}</label>
                                  <input type="text" class="form-control" id="inputtext1" name="company_name[]"  required>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputtext2" class="form-label">الاقتراح ${numArray[1]}</label>
                                    <input type="text" class="form-control" id="inputtext2" name="company_name[]"  required>
                                  </div>
                                <div class="col-md-4 align-self-end text-center" >
                                    <button class="btn btn-outline-danger" id="btn-delete-sug" type="button" onclick="deleted1()">حذف اقتراحات</button>
                                </div>`;

                    parentForm.appendChild(newform);            
                    } else if(i < 9){
                    const newform = document.createElement('div');
                    newform.setAttribute('dir','rtl');
                    
                    newform.classList.add('row', 'g-3', 'justify-content-evenly' ,'pt-3','sug2');
                   
                        newform.innerHTML = `<div class="col-md-4">
                                  <label for="inputtext1" class="form-label">الاقتراح ${numArray[2]}</label>
                                  <input type="text" class="form-control" id="inputtext1" name="company_name[]"  required>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputtext2" class="form-label">الاقتراح ${numArray[3]}</label>
                                    <input type="text" class="form-control" id="inputtext2" name="company_name[]"  required>
                                  </div>
                                <div class="col-md-4 align-self-end text-center" >
                                    <button class="btn btn-outline-danger" id="btn-delete-sug"  type="button" onclick="deleted2()">حذف اقتراحات</button>
                                </div>`;

                    parentForm.appendChild(newform);   
                }  else if (i == 9){
                    btnAdd.disabled = true;
                } else {
                    btnAdd.disabled = false;
                }
            });
            function deleted1(){
                const parentDiv = document.querySelector('.sug1');
                let j = parentDiv.getElementsByTagName('div').length;
                if(j == 3){
                    parentDiv.removeChild(parentDiv.getElementsByTagName('div')[1]);
                } else{

                    parentDiv.remove();
                }
            }
            function deleted2(){
                const parentDiv = document.querySelector('.sug2');
                let j = parentDiv.getElementsByTagName('div').length;
                if(j == 3){
                    parentDiv.removeChild(parentDiv.getElementsByTagName('div')[1]);
                } else{

                    parentDiv.remove();
                }
            }
        
///////////////////////////part-info---section-3//////////////////////////////////////
        const select = document.querySelector('#specificSizeSelect');
        const parentCountEl = document.getElementById('part-form');
        
          for(let i=1; i<= 50; i++){
            const newOption = document.createElement('option');
            const optionText = document.createTextNode(i);
            // set option text
            newOption.appendChild(optionText);
            // and option value
            newOption.setAttribute('value',i);
            select.appendChild(newOption);
        }
        //if(changeOptin){
        // select.addEventListener('click',(e)=>{
        //   e.preventDefault();
        //     const disable = select.value = 1;
        //     // console.log(disable)
        //     disable.disabled = true
        //   });
        //}
        select.addEventListener('change',(e)=>{
            e.preventDefault();
            check2();
                parentCountEl.innerHTML = '';
                    for(let j=1; j < select.value; j++){
                        const newEl = document.createElement('div');
                        newEl.classList.add('row','g-3','justify-content-around','pt-3','mangData');
                        newEl.setAttribute('dir','rtl');
                        newEl.setAttribute('data-id','item_'+j);
                        newEl.innerHTML = `<div class="col-md-3">
                        <label for="inputtext1" class="form-label" style="display: none;">اسم المساهم</label>  <!--لو شركة مساهمة display=inline-block-->
                        <label for="inputtext1" class="form-label mang" id="mangName">اسم المدير</label>
                        <input type="text" class="form-control lay3 mangInfo" id="name" name="shareholder_name[]">
                      </div>
                      <div class="col-md-3">
                          <label for="inputtext2" class="form-label" style="display: none;">جنسيه المساهم</label>
                        <label for="inputtext1" class="form-label mang">جنسيه المدير</label>
                          <input type="text" class="form-control lay3 mangInfo" id="nation" name="shareholder_nationality[]">
                      </div>
                      <div class="col-md-3">
                          <label for="inputtext6" class="form-label" style="display: none;">نسبه المساهمه</label>
                        <label for="inputtext1" class="form-label mang">نسبه المدير</label>
                          <input type="text" class="form-control lay3" id="inputtext6" name="shareholder_percentage[]">
                      </div>
                          <div class="col-md-5 mb-3">
                              <label for="formFileMultiple" class="form-label">اضافه البطاقه الشخصية</label>
                              <input class="form-control lay3 mangInfo" name="personal_id[]" type="file" id="id" accept="image/png, image/gif, image/jpeg">
                            </div>
                          <div class="col-md-3 x-last align-self-center">
                              <button class="btn btn-outline-danger" type="reset" id="partCompDel">حذف المدير</button>
                          </div>
                          <hr>`;
                            parentCountEl.appendChild(newEl);
                            // parentCountEl.insertBefore(newEl,null);
                            // parentCountEl.parentNode.insertBefore(newEl, parentCountEl.nextSibling);
                        }
                });
        // const deleted = ()=>{
        //     // parentCountEl.removeChild(parentCountEl.getElementsByClassName('row'))
        //     console.log(this)
        //}
///////////////get participants data from layer--3//////
const divs = document.getElementsByClassName('mangData');
const arrayEle = [];
const arrayNames = [];
function getFormData(){
    let i;
    
    for( i=0; i < divs.length; i++){
        const inputs = divs[i].getElementsByClassName('mangInfo');
        // for( j=0; j< inputs.length ; j++){
            const objectEle = {};
            const reader  = new FileReader();

            objectEle['name'] = inputs[0].value;
            objectEle['nationality'] = inputs[1].value;
            objectEle['idPath'] = inputs[2].files[0];
            objectEle['prev'] = '';

            if (objectEle['idPath']) {
              reader.readAsDataURL(objectEle['idPath']);
            }
            reader.onloadend = function () {
              arrayEle.forEach((e)=>{
                // e.idPath
                objectEle['prev'] = reader.result;
              })
            }
            // arrayEle.pop();
            // arrayNames = [];
            arrayEle.push(objectEle);
            arrayNames.push(objectEle.name);
        // }
    }
    // console.log(arrayEle);
    // console.log(arrayNames);
  }        
  function previewFile() {
    const preview = document.querySelector('.image');
    const file    = document.querySelector('input[type=file]').files[0];
    const reader  = new FileReader();
  
    reader.onloadend = function () {
      arrayEle.forEach((e)=>{
        // e.idPath
        preview.src = reader.result;
      })
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }
        
////////////////////////mang-info---section-4/////////////////////////////

function locatModal(){
    // loaction.href ='';
    location.href = "#myModal";
}
const btnAddMang = document.getElementById('btn-add-mang');
const parentCard = document.getElementById('card-newAdd');

btnAddMang.addEventListener('click',(e)=>{
    e.preventDefault();
    check2();
    if(autocompleteinput.value !== ''){
        arrayEle.forEach((e)=>{
          let i=0;
            if(e.name == autocompleteinput.value){
                const newCard = document.createElement('div');
                newCard.classList.add('col-xl-4','col-md-6','pt-3');
                newCard.innerHTML= `<div class="card">
                <div class="card-header">
            <div class="close">
                <img src="images/svgexport-6 (16) 1.svg" alt="" 
                onclick="this.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.parentNode)">
            </div>
            <div class="mt-3 mb-3 selectMang" dir="rtl"> 
                <label class="visually-hidden" for="specificSizeSelect">Preference</label>
                <select class="form-select" name = "mangager_type" id="specificSizeSelect">
                    <option selected readonly>برجاء تحديد التصنيف</option>
                    <option value = "ceo">رئيس مجلس الاداره</option>
                    <option value = "director_member">عضو مجلس اداره</option> 
                    <option name = "director_manager">عضو منتدب</option> 
                </select>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class=" g-3 justify-content-around" dir="rtl">
                        <div class="">
                          <label for="inputtext1" class="form-label mang">اسم المدير</label>
                          <label for="inputtext1" class="form-label" style="display: none;">اسم المساهم</label>
                          <input type="text" class="form-control" id="inputtext1" value="${e.name}" name = "manager_name[]" readonly>
                        </div>
                        <div class="">
                            <label for="inputtext2" class="form-label mang">جنسيه المدير</label>
                            <label for="inputtext2" class="form-label" style="display: none;">جنسيه المساهم</label>
                            <input type="text" class="form-control" id="inputtext2" value="${e.nationality}" name = "manager_nationality[]" readonly>
                        </div>
                    </div>
                </div>
                <div class="col-6 align-self-center" style="padding-top: 33px;">
                    <div class="id"><img src="${e.prev}" alt="" width="100%" id="imagePrev_${i}"></div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <h6 class="h6part">صلاحيات المدير</h6>
            <div class="form-check">
            <label class="form-check-label" for="flexCheckDefault1">
            صلاحية التوقيع امام البنوك وفتح حسابات بنكية والتعامل على حساب الشركة
            </label>
            <input class="form-check-input" type="checkbox" value="" name = "perm1[]">
              </div>
              <div class="form-check">
              <label class="form-check-label" for="flexCheckChecked2">
              صلاحية توقيع العقود بالنيابه عن الشركة
              </label>
              <input class="form-check-input" type="checkbox" value="" name = "perm2[]" >
              </div>
              <div class="form-check">
              <label class="form-check-label" for="flexCheckChecked3">
              صلاحية التعامل امام الجهات الحكوميه بالنيابه عن الشركة
              </label>
              <input class="form-check-input" type="checkbox" value="" name = "perm3[]">
              </div>
        </div>
        <div class="card-footer align-self-center" style="display:none;">
            <div class="buttons">
                <button class="btn save" type="button">حفظ</button>
                <button class="btn edit" type="button">تعديل</button>
            </div>
        </div>
    </div>`
    parentCard.appendChild(newCard)
    // console.log('dcds')
    i++;
        
        } 
        });
    } else{
        const newCard = document.createElement('div');
        newCard.classList.add('col-xl-4','col-md-6','pt-3');
        newCard.innerHTML= `<div class="card">
        <div class="card-header">
    <div class="close">
        <img src="images/svgexport-6 (16) 1.svg" alt="" 
        onclick="this.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.parentNode)">
    </div>
    <div class="mt-3 mb-3 selectMang" dir="rtl"> 
        <label class="visually-hidden" for="specificSizeSelect">Preference</label>
        <select class="form-select" name = "mangager_type" id="specificSizeSelect">
            <option selected readonly>برجاء تحديد التصنيف</option>
            <option value = "ceo">رئيس مجلس الاداره</option>
            <option value = "director_member">عضو مجلس اداره</option> 
            <option name = "director_manager">عضو منتدب</option> 
        </select>
    </div>
    <div class="row">
        <div class="col-6">
            <div class=" g-3 justify-content-around" dir="rtl">
                <div class="">
                  <label for="inputtext1" class="form-label mang">اسم المدير</label>
                  <label for="inputtext1" class="form-label" style="display: none;">اسم المساهم</label>
                  <input type="text" class="form-control" id="inputtext1" value=""  name = "manager_name[]" >
                </div>
                <div class="">
                    <label for="inputtext2" class="form-label mang">جنسيه المدير</label>
                    <label for="inputtext2" class="form-label" style="display: none;">جنسيه المساهم</label>
                    <input type="text" class="form-control" id="inputtext2"   name = "manager_nationality[]">
                </div>
            </div>
        </div>
        <div class="col-6 align-self-center" style="padding-top: 33px;">
            <div class="id d-flex justify-content-center align-items-center">
            <div class="form-group">
            <div class="form-line">
                <div class="btn-file align-items-center">
                <input type="file" id="event_image" accept="image/png, image/gif, image/jpeg" name="source" value="C:\fakepath\source" class="hidden">
                    <div class=" change-file-ico">
                       <img src="images/upload.svg" width="25%">
                    </div>
                    <div class="full-width">
                        <p id="wowonder-movie-name">اضافه البطاقه الشخصيه</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
</div>
<div class="card-body">
    <h6 class="h6part">صلاحيات المدير</h6>
    <div class="form-check">
    <label class="form-check-label" for="flexCheckDefault1">
    صلاحية التوقيع امام البنوك وفتح حسابات بنكية والتعامل على حساب الشركة
    </label>
    <input class="form-check-input" type="checkbox" >
      </div>
      <div class="form-check">
      <label class="form-check-label" for="flexCheckChecked2">
      صلاحية توقيع العقود بالنيابه عن الشركة
      </label>
      <input class="form-check-input" type="checkbox" >
      </div>
      <div class="form-check">
      <label class="form-check-label" for="flexCheckChecked3">
      صلاحية التعامل امام الجهات الحكوميه بالنيابه عن الشركة
      </label>
      <input class="form-check-input" type="checkbox">
      </div>
</div>
<div class="card-footer align-self-center" style="display:none;">
    <div class="buttons">
        <button class="btn save" type="button">حفظ</button>
        <button class="btn edit" type="button">تعديل</button>
    </div>
</div>
</div>`
parentCard.appendChild(newCard)
// console.log('dcds')

 }
});
////////////////////////////////////

///////////////////auto-complete function/////////////////////////////////
function autoComplete(inputname,namesArr){
    let currentFocus;
  inputname.addEventListener("input", function(e) {
      let a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute('dir','rtl');
      a.classList.add("autocomplete-items",'col-6');
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < namesArr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (namesArr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + namesArr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += namesArr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + namesArr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inputname.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inputname.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inputname) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
const autocompleteinput = document.getElementById('autocompleteinput');
autoComplete(autocompleteinput,arrayNames);
///////////////////////calender--section-5/////////////////////////////////

$(function() {

    // rome(inline_cal, { time: false });  
      rome(inline_cal, {time: false, inputFormat: 'MMMM DD, YYYY'}).on('data', function (value) {
        result.value = value;
      });
  
    });
    //////////////////file uploda area


///////////////////function file image preview









// sherholder[0][name]

// sherholder[0][personal_id]
// sherholder[0][nation]

// sherholder[1][name]
// sherholder[1][personal_id]
// sherholder[1][nation]
// [
//     0=.[
//         name=>|mohamed,
//          pesonalid=> filwobject
//          nation=.egy
//     ],
//     1=.[
//         name=>|mohamed,
//          pesonalid=> filwobject
//          nation=.egy
//     ]
// ]
