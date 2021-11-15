<template>
  <div class="header">
    <column :crossAxisAlignment="'center'">
      <constrained-box :height="'fit-content'">
        <padding :paddingValue="'2em'" :expandedHeight="false">
          <constrained-box :height="'75px'">
            <row
              :mainAxisAlignment="'space-between'"
              :isResponsive="false"
              :crossAxisAlignment="'center'"
            >
              <gesture-detector :onClick="() => $router.push('/')">
                <asset-image
                  :assetImagePath="'./logo_no_background.svg'"
                  :width="'fit-content'"
                  :height="'75px'"
                />
              </gesture-detector>
              <burger-icon />
            </row>
          </constrained-box>
        </padding>
      </constrained-box>
    </column>
  </div>
</template>
<script lang="ts">
export default {
  name: "Header",
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  overflow: visible;
}
</style>
