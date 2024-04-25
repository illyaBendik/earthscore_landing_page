<template>
  <form action="" id="contact-form" class="flex justify-center">
    <div class="max-w-[546px] w-full">
      <div class="grid md:grid-cols-2 gap-5">
        <div class="relative z-0">
          <label
            for="floating_standard"
            class="text-sm text-black-N900 uppercase duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >Name</label
          >
          <input
            type="text"
            class="block px-0 mt-2 w-full text-sm pb-1 text-gray-900 bg-transparent border-0 border-b border-black-N900 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Enter your name"
          />
        </div>
        <div class="relative z-0">
          <label
            for="floating_standard"
            class="text-sm uppercase text-black-N900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >Email</label
          >
          <input
            type="text"
            class="block px-0 mt-2 w-full text-sm pb-1 text-gray-900 bg-transparent border-0 border-b border-black-N900 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div class="mt-10">
        <label for="message" class="block mb-2 text-[13px] text-black-N900 uppercase"
          >Your message here</label
        >
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 rounded-md border border-black-N900 focus:ring-blue-500 focus:outline-blue-600"
          placeholder="Your message here"
        ></textarea>
      </div>

      <button type="button" class="bg-primary-A300 text-white text-lg rounded-lg px-4 py-2 mt-10">
        Send message
      </button>
    </div>
  </form>
</template>
