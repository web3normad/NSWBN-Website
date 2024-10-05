import React from "react";

const ContactForm = () => {
  return (
    <div class="container my-12 mx-auto px-2 py-24 h-full sm:px-8 md:px-16 lg:px-24">
      <section class="mb-32">
        <div class="flex justify-start">
          <div class="md:max-w-xl lg:max-w-3xl">
            <h2 class="mb-8 px-6 text-3xl font-bold">Contact us</h2>
            <p className="mb-12 px-6 text-lg ">
              For Enquiry, feedback and suggestions fill the contact form below
            </p>
          </div>
        </div>

        <div class="flex flex-wrap">
          <form class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
            <div class="mb-3 w-full">
              <label
                class="block font-medium mb-[2px] text-primary-100"
                htmlFor="exampleInput90"
              >
                Name
              </label>
              <input
                type="text"
                class="px-2 py-2 border w-full outline-none rounded-md"
                id="exampleInput90"
                placeholder="Name"
              />
            </div>

            <div class="mb-3 w-full">
              <label
                class="block font-medium mb-[2px] text-primary-100"
                htmlFor="exampleInput90"
              >
                Email
              </label>
              <input
                type="email"
                class="px-2 py-2 border w-full outline-none rounded-md"
                id="exampleInput90"
                placeholder="Enter your email address"
              />
            </div>

            <div class="mb-3 w-full">
              <label
                class="block font-medium mb-[2px] text-primary-100"
                htmlFor="exampleInput90"
              >
                Subject
              </label>
              <input
                type="text"
                class="px-2 py-2 border w-full outline-none rounded-md"
                id="exampleInput90"
                placeholder="Enter subject"
              />
            </div>

            <div class="mb-3 w-full">
              <label
                class="block font-medium mb-[2px] text-primary-100"
                htmlFor="exampleInput90"
              >
                Message
              </label>
              <textarea
                class="px-2 py-2 border rounded-[5px] w-full outline-none"
                rows="6"
                cols="50"
              ></textarea>
            </div>

            <button
              type="button"
              class="mb-6 inline-block w-full rounded bg-primary-100 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500"
            >
              Send
            </button>
          </form>

          <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div class="flex flex-wrap">
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold">Support</p>
                    <p class="text-neutral-500 ">support@example.com</p>
                    <p class="text-neutral-500 ">+234 234-567-89</p>
                  </div>
                </div>
              </div>

              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="align-start flex">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-teal-400-100 p-4 text-primary-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold ">Press</p>
                    <p class="text-neutral-500 ">press@example.com</p>
                    <p class="text-neutral-500 ">+234 234-567-89</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
