<template>
  <div v-if="editor">
    <EditorToolbar :editor="editor" />
  </div>
  <EditorContent :editor="editor" />
</template>

<script setup name="Editor">
import { onUnmounted, toRefs } from 'vue'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import EditorToolbar from './EditorToolbar.vue'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import { lowlight } from 'lowlight'

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('ts', ts)

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
const { modelValue } = toRefs(props)

const emits = defineEmits(['update:modelValue'])

const editor = useEditor({
  extensions: [
    StarterKit,
    CodeBlockLowlight.configure({
      lowlight
    })
  ],
  content: modelValue.value,
  onUpdate() {
    emits('update:modelValue', editor.value.getHTML())
  },
})

onUnmounted(() => {
  editor.value.destroy()
})
</script>

<style lang="scss" scoped>

</style>
