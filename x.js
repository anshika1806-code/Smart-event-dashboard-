<script>
  let form =document.querySelector('form')
  let evenTtitle=document.querySelector('#eventTitle')
  let eventDate=document.querySelector('#eventDate')
  let eventCategory=document.querySelector('#eventCategory')
  let eventDescription=document.querySelector('#eventDescription')
  let allEvenrContainer=document.querySelector('#allEventContainer')

function addEventFuction(event){
  event.preventDefault()
  let card = document.createElement('div')
  card.innerhtml=<button></button>
                  <h4>$(eventTitle.value)
                  <span>$(eventDate.value)</span><br>
                    <span>$(eventCategory.value)<span>
                    <p>$(eventDescritption.value)</p>
  allEventContainer.append(card);
  form.reset()
}
form.addEventListener('submit',addEventFunction)
  </script>
