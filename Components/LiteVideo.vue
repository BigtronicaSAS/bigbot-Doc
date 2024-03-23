<script>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

export default {
  components: {
    LiteYouTubeEmbed
  },
  props: {
    videoId: {
      type: String,
      required: true
    },
    videoTitle: {
      type: String,
      required: true
    },
    videoImage: {
      type: String,
      required: true
    }
  }
}
</script>


<template>
  <LiteYouTubeEmbed
    :id="videoId"
    :title="videoTitle"
    muted
    :thumbnail="videoImage"
  >

</LiteYouTubeEmbed>
</template>

<style>

.yt-lite:before{
  display: none;
}
</style>