<template>
  <column :crossAxisAlignment="'center'" class="box">
    <safe-area>
      <padding :paddingValue="'3em 0'" :expandedHeight="false">
        <column :crossAxisAlignment="'center'">
          <column :gap="'1em'" class="contact-form">
            <h1 class="section-title neon-white">Contact Us</h1>
            <column class="contact-form__user-info" key="1" :gap="'1em'">
              <div class="contact-field">
                <input
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                  v-model="name"
                  key="name"
                  :class="{ errorIsPresent: errors.name }"
                />
                <p v-if="errors.name">{{ errors.name }}</p>
              </div>
              <div class="contact-field">
                <input
                  type="text"
                  name="last-name"
                  v-model="surname"
                  placeholder="Last Name"
                  key="surname"
                  :class="{ errorIsPresent: errors.surname }"
                />
                <p v-if="errors.surname">{{ errors.surname }}</p>
              </div>
              <div class="contact-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  key="email"
                  v-model="email"
                  :class="{ errorIsPresent: errors.email }"
                />
                <p v-if="errors.email">{{ errors.email }}</p>
              </div>
              <div class="contact-field">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  key="subject"
                  v-model="subject"
                  :class="{ errorIsPresent: errors.subject }"
                />
                <p v-if="errors.subject">{{ errors.subject }}</p>
              </div>
              <div class="contact-field">
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Can we collaborate on..."
                  v-model="message"
                  key="message"
                  :class="{ errorIsPresent: errors.message }"
                />
                <p v-if="errors.message">{{ errors.message }}</p>
              </div>
              <div
                class="contact-form__submit-button"
                key="3"
                @click="submitForm"
              >
                <div>Send</div>
              </div>
            </column>
          </column>
        </column>
      </padding>
    </safe-area>
  </column>
</template>

<script lang="ts">
import ContactEntity from "../models/contactEntity";
import { displayToast } from "../composables/currentToast";
import Toast from "../models/toast";
import { sendEmail } from "../composables/emailer";
export default {
  name: "ContactForm",
  data() {
    return {
      name: null,
      surname: null,
      email: null,
      subject: null,
      message: null,
      errors: {},
    };
  },
  methods: {
    async submitForm() {
      const isValid: boolean = this.validateForm();
      if (!isValid) {
        this.displayToast(
          new Toast({
            text: "Check your form!",
            delay: 3000,
          }),
        );
        return;
      }
      const contactEntity = ContactEntity.fromContactForm({
        name: this.name,
        surname: this.surname,
        email: this.email,
        subject: this.subject,
        message: this.message,
      });
      const wasSuccessfull: boolean = await this.sendEmail(contactEntity);
      if (wasSuccessfull) {
        this.resetForm();
      }
    },
    validateForm() {
      this.errors = {};
      if (!this.name?.trim()) {
        this.errors.name = "Name required";
      }

      if (!this.surname?.trim()) {
        this.errors.surname = "Surname required";
      }

      if (!this.email?.trim()) {
        this.errors.email = "Email required";
      } else {
        const emailRegexp =
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
        if (!emailRegexp.test(this.email.trim())) {
          this.errors.email = "Email is not valid";
        }
      }

      if (!this.subject?.trim()) {
        this.errors.subject = "Subject required";
      }

      if (!this.message?.trim()) {
        this.errors.message = "Message required";
      }
      if (Object.keys(this.errors).length === 0) return true;
      return false;
    },
    resetForm() {
      this.name = null;
      this.surname = null;
      this.email = null;
      this.subject = null;
      this.message = null;
    },
  },
  setup() {
    return {
      displayToast,
      sendEmail,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./assets/general.scss";
h1 {
  background: white;
  width: fit-content;
  height: fit-content;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-weight: normal;
}

.contact-field {
  display: flex;
  flex-direction: column;
  width: stretch;
  align-items: flex-start;
  p {
    margin: 0;
  }
  & > :not(:last-child) {
    margin-bottom: 0.2em;
  }
}

.errorIsPresent {
  border: 1px solid red !important;
}

.box {
  background-color: $primary-color-x-dark;
  .contact-form {
    font-family: "Rajdhani";
    max-width: 500px;

    input,
    textarea {
      font-family: "Rajdhani";

      background: transparent;
      border: 1px solid white;
      padding: 0.5em 1em;
      border-radius: 0.5em;
      color: white;
      resize: none;
      font-size: 1.5em;
      &:focus {
        outline: none;
        border: 2px solid #fff !important;
        box-shadow: 0 0 7px #ffffffbb, 0 0 10px #ffffff66, 0 0 21px #f49dff55,
          inset 0 0 7px #ffffffbb, inset 0 0 10px #ffffff66,
          inset 0 0 21px #f49dff55 !important;
      }
      &::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: white;
        opacity: 1; /* Firefox */
      }

      &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: white;
      }

      &::-ms-input-placeholder {
        /* Microsoft Edge */
        color: white;
      }
    }
    &__user-info {
      input,
      textarea {
        width: stretch;
      }
    }
    &__submit-button {
      background-color: $primary-color-dark;
      width: 100%;
      cursor: pointer;
      font-size: 1.5em;
      border-radius: 0.5em;
      div {
        width: stretch;
        padding: 0.5em 1em;
      }
    }
  }
}
@media (max-width: 768px) {
  .contact-form {
    padding: 8em 0em;
  }
}
</style>
