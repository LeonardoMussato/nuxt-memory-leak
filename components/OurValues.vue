<template>
  <div class="our-values">
    <column :gap="'2em'" :crossAxisAlignment="'center'">
      <h1 class="section-title light-from-bottom">Our Values</h1>
      <grid-container :gap="'5em'">
        <shadowed-container
          :title="'Craft with passion'"
          :description="'It\s not just typing some text, we code with care and attention to detail. Building software is not only our job, we do it because we love it.'"
          :iconSize="`5em`"
        >
          <asset-image
            :assetImagePath="`./IT/access_command_laptop_line_prompt.svg`"
          />
        </shadowed-container>
        <shadowed-container
          :title="'Prompt assistance'"
          :iconSize="`5em`"
          :description="'Pleased to hear your needs, and to implement solutions that fit. Without esitation we will start creating. '"
        >
          <asset-image
            :assetImagePath="`./IT/headset_operator_person_support_mic.svg`"
          />
        </shadowed-container>
        <shadowed-container
          :iconSize="`5em`"
          :title="'State of the art technology'"
          :description="'Be ready to use the most advanced technologies available in the market. We costantly research and keep informed on the latest trends about software development.'"
        >
          <asset-image :assetImagePath="`./IT/state_of_the_art.svg`" />
        </shadowed-container>
        <shadowed-container
          :iconSize="`5em`"
          :title="'Solid and agile code'"
          :description="'Perfectly organized software that scales and adapt immediately. Optimal code makes reliable and performant products.'"
        >
          <asset-image :assetImagePath="`./IT/link_href_hyperlink.svg`" />
        </shadowed-container>
      </grid-container>
    </column>
  </div>
</template>
<script lang="ts">
export default {
  name: "OurValuesSection",
};
</script>
