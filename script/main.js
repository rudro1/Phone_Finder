console.log("connected");

//phone_container

const  loaddata=async(searchinput,istrue)=>
{
const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchinput}`);
const data= await res.json();
displaydata(data.data,istrue);

}
// loaddata('iphone')

const loaddatausingid=async(slug)=>
{
const res=await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
const detailsofphone= await res.json();
modalshow(detailsofphone)
}
// loaddatausingid('apple_iphone_13_pro_max-11089');
const modalshow=(detailsofphone)=>
{
   
console.log(detailsofphone.data);
const phoneatoz=detailsofphone.data;
console.log(phoneatoz.releaseDate)
const modal=document.getElementById("my_modal_5");

modal.innerHTML=`

  <div class="modal-box">
<div class="card bg-base-100 ">
  <figure class="px-10 pt-10">
    <img
      src="${phoneatoz.image}"
      alt="${phoneatoz.brand}"
      class="rounded-xl" />
  </figure>
  
  <div class="card-body items-center text-center">
    <h2 class="card-title text-lg font-bold">${phoneatoz.name}</h2>
    <p class="text-[#706F6F]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>



  </div>
</div>
<div class="  top-0 w-[100%] flex justify-center pb-3">
     <hr  class="border-5 border-[#0102030D] w-[75%]">
</div>
<p class="py-1 text-md font-bold">Storage: <span>${phoneatoz.mainFeatures.storage}</span></p>
<p class="py-1 text-md font-bold">Display Size:<span>${phoneatoz.mainFeatures.displaySize}</span></p>
<p class="py-1 text-md font-bold">Chipset: <span>${phoneatoz.mainFeatures.chipSet}</span></p>
<p class="py-1 text-md font-bold">Memory: <span>${phoneatoz.mainFeatures.memory}</span></p>
<p class="py-1 text-md font-bold">Slug: <span>${phoneatoz.slug}</span></p>
<p class="py-1 text-md text-[#000] font-bold">Release data: <span>${phoneatoz?.releaseDate ||"upcoming" }</span></p>
<p class="py-1 text-md font-bold">Brand: <span>${phoneatoz.brand}</span></p>
<p class="py-1 text-md font-bold">GPS: <span>${phoneatoz.others?.GPS ||"updated"}</span></p>
    
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
          <button class="btn btn-sm btn-circle btn-ghost absolute text-[#fff] right-2 top-2 bg-[#DC3545]">✕</button>
      </form>
    </div>
  </div>


`
 modal.showModal();
}


function displaydata(data,istrue)
{
  const alert=document.getElementById("alert");  
 
if(data.length<=0)
{
    // alert("pls search again")

alert.classList.remove("hidden");
    iphone_img.classList.add("hidden")
     spinner(false)  ;

    // console.log(searchinput.value,"hi")
}


const phone_container=document.getElementById("phone_container");
 phone_container.innerHTML=" ";
const showall=document.getElementById("showall");
if(data.length>12 )
{
    showall.classList.remove("hidden")
    alert.classList.add("hidden");
}


if(istrue)
{
data=data.slice(0)
istrue=false;
 
  showall.classList.add("hidden")
}
else{
    data=data.slice(0,5)
  
}


 
data.forEach(phone => {
   
    console.log(phone);
let card=document.createElement("div");
card.classList="card bg-base-100 w-96 shadow-sm"
    card.innerHTML=`
  
  <figure class="px-10 pt-10">
    <img
      src="${phone.image}"
      alt="${phone.brand}"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>There are many variations of passages of available, <br> but the majority have suffered</p>
    <div class="card-actions">
      <button onclick="showdetailes('${phone.slug}')" class="btn btn-primary bg-sm text-xl md:text-sm bg-[#0D6EFD] text-[#fff]">Show Details</button>
    </div>
 
</div>

    `

  spinner(false)  ;
phone_container.appendChild(card);

}


);

}



const searchsengine=(istrue)=>
{
const searchinput=document.getElementById("searchinput");
loaddata(searchinput.value,istrue)

const iphone_img=document.getElementById("iphone_img");
iphone_img.classList.add("hidden")




spinner(true);
//   console.log("click",searchinput.value); 
}
//loaddata("iphone");

const showall=()=>
{
const showall=document.getElementById("showall");

console.log("clicked")
let istrue=true;
searchsengine(istrue);

}

function spinner(isload)
{
    const  spinner=document.getElementById("spinner");
    if(isload)
{
   spinner.classList.remove("hidden")
}
else
{
     spinner.classList.add("hidden")
}
}
const showdetailes=(slug)=>
{
    loaddatausingid(slug);
    console.log(slug)
my_modal_5.showModal()
}