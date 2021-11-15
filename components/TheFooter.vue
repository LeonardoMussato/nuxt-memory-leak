<template>
  <div class="footer">
    <column :crossAxisAlignment="'center'">
      <safe-area>
        <row
          :mainAxisAlignment="'space-between'"
          :crossAxisAlignment="'center'"
        >
          <logo-icon :height="'10em'" :isColored="false" />
          <column :crossAxisSize="'auto'" class="center">
            <h2>Youtube</h2>
            <h2>Instagram</h2>
            <h2>TikTok</h2>
          </column>
          <column :crossAxisSize="'auto'" class="center">
            <h2>Email: info@italianscodeitbetter.com</h2>
            <h2>All rights reserved by ItaliansCodeItBetter</h2>
          </column>
        </row>
      </safe-area>
    </column>
  </div>
</template>

<script lang="ts">
export default {
  name: "Footer",
};
</script>

<style lang="scss">
@import "./assets/general.scss";
.footer {
  text-align: center;
  font-size: 0.9em;
  font-weight: 200;
  width: 100%;
  color: $primary-color;
  display: flex;
  align-items: center;
  margin-top: 4em;
  h2 {
    font-size: 1em;
    margin: 0.2em;
    font-weight: normal;
    background: white;
    width: fit-content;
    height: fit-content;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
}
@media (max-width: 768px) {
  .center {
    align-items: center !important;
    justify-content: center !important;
  }
}
</style>
