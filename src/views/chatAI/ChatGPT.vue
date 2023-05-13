<template>
  <v-card class="rounded-lg">
    <div v-if="messages.length > 0" class="message-container">
      <template v-for="(message, index) in messages" :key=index>
        <div v-if="message.role === 'user'">
          <div class="pa-6 bg-surface">
            <div class="message align-center">
              <v-avatar class="mr-9" color="primary">
                <v-icon icon="mdi-account-circle"></v-icon>
              </v-avatar>
              <p class="text-text">{{ message.content }}</p>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="bg-info pa-6">
            <div class="message">
              <v-avatar class="mr-4 mt-4">
                <v-img cover src="@/assets/siri.gif" style="transform: scale(2.1);"></v-img>
              </v-avatar>
              <md-editor v-model="message.content" previewOnly class="bg-info text-text" />
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="no-message-container" v-else>
      <h1 class="text-h2 text-blue-lighten-1 text-center font-weight-bold">
        Ask Me Any Thing
      </h1>
      <!-- <AnimationAi /> -->
    </div>

    <v-sheet elevation="0" class="my-5 mx-auto" max-width="1200">
      <!-- Todo Select Model  -->

      <!-- <div class="mb-2">
        <v-select
          class="w-50"
          label="Model"
          hide-details
          :items="['GPT-4', 'GPT-3.5']"
          variant="solo"
        ></v-select>
      </div> -->
      <v-text-field
        class="mx-2"
        color="primary"
        ref="input"
        v-model="userMessage"
        placeholder="SendMessage"
        variant="solo"
        hide-details
        @keyup.enter="sendMessage"
      >
        <template #prepend-inner>
          <v-icon>mdi-microphone</v-icon>
        </template>

        <template #append-inner>
          <v-icon @click="sendMessage">mdi-send</v-icon>
        </template>
      </v-text-field>
    </v-sheet>
  </v-card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useSnackbarStore } from "@/store/snackbar";
import { useChatGPTStore } from "@/store/chatGPT";
import { read } from "@/utils/aiUtils";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";

const snackbarStore = useSnackbarStore();
const chatGPTStore = useChatGPTStore();

// Message List
const messages = ref([]);

// User Input Message
const userMessage = ref("");

// Send Messsage
const sendMessage = async () => {
  if (userMessage.value) {
    // Add the message to the list
    messages.value.push({
      content: userMessage.value,
      role: "user",
    });

    // Create a completion
    await createCompletion();
    // Clear the input
    userMessage.value = "";
  }
};

const createCompletion = async () => {
  // Check if the API key is set
  if (!chatGPTStore.getApiKey) {
    snackbarStore.open({
      content: '"请先输入API KEY"',
      color: 'red'
    });
    return;
  }

  try {
    // Create a completion (axios is not used here because it does not support streaming)
    const completion = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${chatGPTStore.getApiKey}`,
        },
        method: "POST",
        body: JSON.stringify({
          messages: messages.value,
          model: "gpt-3.5-turbo",
          stream: true,
        }),
      }
    );

    // Handle errors
    if (!completion.ok) {
      const errorData = await completion.json();
      snackbarStore.open({
        content: errorData.error.message,
        color: 'red'
      });

      return;
    }

    // Create a reader
    const reader = completion.body?.getReader();
    if (!reader) {
      snackbarStore.open({
        content: "Cannot read the stream.",
        color: 'red'
      });
    }

    // Add the bot message
    messages.value.push({
      content: "",
      role: "assistant",
    });

    // Read the stream
    read(reader, messages);
  } catch (error) {
    snackbarStore.open({
      content: error.message,
      color: 'red'
    });
  }
};

// Scroll to the bottom of the message container
const scrollToBottom = () => {
  const container = document.querySelector(".message-container");
  setTimeout(() => {
    container?.scrollTo({
      top: container?.scrollHeight,
    });
  }, 100);
};

watch(
  () => messages.value,
  (val) => {
    if (val) {
      scrollToBottom();
    }
  },
  {
    deep: true,
  }
);
</script>

<style scoped lang="scss">
.user-message {
  background-color: #f6f6f6;
  // border-top: 1px solid #e5e7eb;
  // border-bottom: 1px solid #e5e7eb;
}

.message {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
}

.message-container {
  position: relative;
  height: calc(100vh - 330px);
  overflow: overlay;
}

.no-message-container {
  height: calc(100vh - 330px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 2rem;
    font-weight: 500;
  }
}
</style>
