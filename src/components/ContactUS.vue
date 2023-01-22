<template>
  <div class="contact">
    <div class="container">
      <div class="contact">
        <h4 class="text-center text-dark">contact us</h4>
        <form action="">
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="input-design mb-2">
                <label for="" class="px-2"
                  ><i class="bi bi-person-fill"></i
                ></label>
                <input type="text" placeholder="name" class="w-100" />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="input-design mb-2">
                <label for="" class="px-2"
                  ><i class="bi bi-envelope-fill"></i
                ></label>
                <input type="text" placeholder=" email" class="w-100" />
              </div>
            </div>
          </div>

          <textarea
            name=""
            id=""
            rows="10"
            placeholder="your message  "
            class="w-100 my-3"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="500"
          ></textarea>
          <button type="submit" class="send-contact py-3">ارسال</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
};
</script>
<style>
.contact form input {
  background: transparent;
  padding: 0.4rem;
  border: none;
}
.contact form textarea:focus,
.contact form input:focus {
  outline: 0;
}
.contact form input::placeholder,
.contact form textarea::placeholder {
  font-size: small;
  color: #818181;
}
.contact .input-design {
  border: 1px solid #ff8300;
  border-radius: 15px 0;
  padding: 5px;
  display: flex;
  align-items: center;
  width: 100%;
}
.contact textarea {
  border-radius: 35px 0;
  background: transparent;
  border: 1px solid #ff8300;
  padding: 1.4rem;
  color: #ff8300;
}
.send-contact {
  width: 100%;
  color: #fff;
  background: #ff8300;
  border-radius: 0 15px;
  font-weight: bold;
  border: none;
}
</style>
