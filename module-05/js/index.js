// const paymentForm = window.document.forms.paymentForm;

// paymentForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const { user_name, userEmail, plan, paymentMethod } = form.elements;

  console.log('Hoorray! Form was submited');
  // console.log(user_name.value, userEmail.value);
  console.log(plan.value);
  paymentMethod.forEach(item => {
    if (item.checked) {
      console.log(item.value);
    }
  });

  form.reset();
}

// const rangeEl = document.querySelector('input[type="range"]');

// rangeEl.addEventListener('input', onInputChange);

// function onInputChange(event) {
//   const value = event.target.value;
//   resultValue.textContent = value;
// }

// Modal form
const modalBtnOpen = document.querySelector('.js-open-modal');
const modalBtnClose = document.querySelector('.js-close-modal');
const modal = document.querySelector('.js-modal');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-open');
}
