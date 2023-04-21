<script>
  let emailInput, submitButton, firstNameInput;
  function checkValidity(element) {
    if (!element) return false;
    return !element.checkValidity() && element.value !== '';
  }
  const firstNameValidation = '[A-Za-z]{2,}';
  const emailValidation =
    '[a-zA-Z0-9._%+-]+@(?!gmail\\.com|outlook\\.com|hotmail\\.com|aol\\.com|yahoo\\.com)[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}';
  let form;
</script>

<svelte:head>
  <title>Contact | Lucas Pichette</title>
</svelte:head>

<div style="position: absolute; left: -5000px;">
  <input type="checkbox" name="vegan_cornflower_blue_honeycomb_door" value="1" tabindex="-1" autocomplete="no">
</div>
<div class="mx-auto mt-32">
  <h2 class="text-2xl md:text-lg w-full mb-6 md:mb-2 text-center ">Hey 👋</h2>
  <h3 style="line-height:60px" class="text-5xl md:text-4xl lg:text-5xl mb-12 text-center font-thin tracking-[0.08em] w-full md:max-w-[650px] my-0 mx-auto capitalize">Shoot Me a Message</h3>
</div>
<div class="relative isolate w-full">
  <div class="mx-auto site-margins w-full">
    <form bind:this={form} action="https://app.99inbound.com/api/e/MBGfxkjk" method="POST">
      <div class="mx-auto w-full md:max-w-4xl">
        <div class="grid grid-rows-1 md:grid-rows-2 gap-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex flex-col-reverse gap-y-2">
              {#if firstNameInput}
							<span
                class:opacity-100={emailInput.validationMessage}
                class:opacity-0={!emailInput.validationMessage}
                class="transition duration-300 ease-in-out text-red-700 text-xs"
              >How should I address you?</span
              >
              {/if}
              <input
                bind:this={firstNameInput}
                on:change={() => {
                  if (firstNameInput.value === '') {
                    submitButton.disabled = true;
                    firstNameInput.classList.remove('invalid-input');
                  } else {
                    if (!firstNameInput.classList.contains('invalid-input')) {
                      firstNameInput.classList.add('invalid-input');
                    }
                    if (
                      emailInput.checkValidity() &&
                      firstNameInput.checkValidity()
                    ) {
                      submitButton.disabled = false;
                    }
                  }
                }}
                class:invalid-input={checkValidity(emailInput)}
                required
                pattern={firstNameValidation}
                type="text" 
                name="first-name" 
                id="first-name" 
                autocomplete="given-name" 
                class="contact-field">
              <label for="first-name">First name<sup>*</sup></label>
            </div>
            <div class="flex flex-col-reverse gap-y-2 md:mb-6">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="contact-field">
              <label for="last-name">Last name</label>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex flex-col-reverse gap-y-2">
              {#if emailInput}
							<span
                class:opacity-100={emailInput.validationMessage}
                class:opacity-0={!emailInput.validationMessage}
                class="transition duration-300 ease-in-out text-red-700 text-xs"
              >{
                emailInput.validationMessage === 'Please match the requested format.' 
                  ? 'Email must be a work email'
                  : emailInput.validationMessage
              }</span>
              {/if}
              <input
                bind:this={emailInput}
                on:change={() => {
                  if (emailInput.value === '') {
                    submitButton.disabled = true;
                    emailInput.classList.remove('invalid-input');
                  } else {
                    console.dir(emailInput, { depth: null });
                    if (!emailInput.classList.contains('invalid-input')) {
                      emailInput.classList.add('invalid-input');
                    }
                    if (
                      emailInput.checkValidity() &&
                      firstNameInput.checkValidity()
                    ) {
                      submitButton.disabled = false;
                    }
                  }
                }}
                pattern={emailValidation}
                class:invalid-input={checkValidity(emailInput)}
                type="email" 
                name="email" 
                id="email" 
                autocomplete="email" 
                class="contact-field"
                required>
              <label for="email">Email<sup>*</sup></label>
              
            </div>
            <div class="flex flex-col-reverse gap-y-2 md:mb-6">
              <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="contact-field">
              <label for="phone-number" >Phone number</label>
            </div>
          </div>

          <div class="flex flex-col-reverse gap-y-2">
            <textarea name="message" id="message" rows="4" class="contact-field"></textarea>
            <label for="message">Message</label>
          </div>
        </div>
        <div class="mt-8 flex justify-center">
          <button class='bg-red-700 disabled:bg-red-700/40 disabled:cursor-default cursor-pointer text-slate-100 p-4' bind:this={submitButton} on:click={() => form.submit()} disabled>
            <span class="translate-y-[2px] flex items-center gap-2">
              <span>Shoot Message</span>
              <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
            </span>
          </button>
        </div>
      </div>
    </form>
  </div>
</div>

<style lang="scss">
  sup {
    color: theme('colors.red.700');
    padding-left: 2px;
    font-weight: bold;
  }
  .invalid-input {
    @apply invalid:focus:ring-red-700 invalid:focus:border-red-700 invalid:border-red-700;
  }
  .contact-field {
    @apply bg-transparent w-full ring-0 border-0 border-b-2 border-slate-400 focus:border-slate-800;
  }
  label {
    @apply block tracking-[0.1em] text-xs leading-[15px] font-light text-slate-500 uppercase;
  }
  input, textarea {
    @apply bg-transparent w-full ring-0;
  }
  input:focus + label,
  textarea:focus + label {
    @apply text-slate-800;
  }
</style>