<template>
  <v-card class="bg-surface rounded-xl" style="height: 400px">
    <div class="timeline h-100">
      <div class="px-16 py-8" v-if="isFetching">
        <v-skeleton-loader
          v-for="index in 4"
          :key="index"
          type="list-item-avatar-three-line"
        ></v-skeleton-loader>
      </div>
      <v-timeline v-else side="end" align="start">
        <v-timeline-item
          v-for="event in events"
          :key="event.id"
          :dot-color="dotColor(event.type)"
          size="small"
        >
          <div class="mb-1">
            <span class="text-h6 font-weight-bold">
              {{ event.user }}
            </span>
            <span class="ml-2 text-grey">{{
              new Date(event.created_at).toLocaleString()
            }}</span>
          </div>

          <v-card width="420">
            <v-card-subtitle class="pt-4">
              <v-chip
                :color="tagColor(event)"
                size="small"
                label
                class="mr-2 font-weight-bold"
              >
                <span>{{ event.type }}</span>
              </v-chip>
              <span class="text-body-2">{{ event.repo }}</span>
            </v-card-subtitle>
            <v-card-text>
              <div v-html="event.content"></div>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </v-card>
</template>

<script setup name="GithubEvents">
import { computed } from 'vue'
import { getRepoEventApi } from '@/api/github';

const { isFetching, data } = getRepoEventApi('skyline523', 'leet-blog-admin')

const events = computed(() => {
  if (!data.value) return []
  else return data.value.map(event => {
    return {
      id: event.id,
      type: event.type,
      user: event.actor.display_login,
      avatar: event.actor.avatar_url,
      repo: event.repo.name,
      content: getContent(event),
      created_at: event.created_at
    }
  })
})

const dotColor = computed(() => (type) => {
  if (type === "PushEvent") {
    return 'primary';
  } else if (type === "CreateEvent") {
    return 'warning';
  } else if (type === "IssuesEvent") {
    return 'accent';
  } else if (type === 'CommitCommentEvent') {
    return 'success'
  } else {
    return "";
  }
})

const tagColor = computed(() => (event) => {
  if (event.type === "PushEvent") {
    return "green";
  } else if (event.type === "IssuesEvent") {
    return "red";
  } else {
    return "blue";
  }
})

const getContent = (event) => {
  if (event.type === "PushEvent") {
    return convertToHtml(event.payload.commits[0].message);
  } else if (event.type === "CreateEvent") {
    return event.payload.ref_type;
  } else if (event.type === "IssuesEvent") {
    return event.payload.issue.title;
  } else if (event.type === 'CommitCommentEvent') {
    return deployContentToHtml(event.payload.comment.body)
  } else {
    return "";
  }
};

const convertToHtml = (text) => {
  const lines = text.split("\n");
  let html = "";

  lines.forEach((line) => {
    if (line.startsWith("- ")) {
      html += `<div><span class='mr-1'>-</span> ${line.slice(2)}</div>`;
    } else if (line.trim() === "") {
      html += "<br/>";
    } else {
      html += `<p>${line}</p>`;
    }
  });

  return html;
};

const deployContentToHtml = (text) => {
  const paragraph = text.split('– ./')
  const spans = paragraph[1].split(' ')
  let html = paragraph[0] + "<br/ >"

  spans.forEach(span => {
    html += `<p>${span}</p>`
  })

  return html
}

</script>

<style lang="scss" scoped>
.timeline {
  overflow: overlay;
}
</style>
