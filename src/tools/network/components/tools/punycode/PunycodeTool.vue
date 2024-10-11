<template>
  <div>
    <n-h3 prefix="bar" align-text>ASCII Domain</n-h3>

    <n-input
      v-model:value="asciiString"
      type="text"
      placeholder="xn--v86c4184b.com"
      :status="asciiStatus"
      @input="tryToConvertAscii"
    />

    <n-h3 prefix="bar" align-text>Unicode Domain</n-h3>

    <n-input
      v-model:value="unicodeString"
      type="text"
      placeholder="🕸️.com"
      @input="tryToConvertUnicode"
    />

    <n-h3 prefix="bar" align-text>See Also</n-h3>

    <n-ul>
      <n-li>
        <a href="https://en.wikipedia.org/wiki/Punycode" target="_blank" class="see-also-link">
          Punycode - Wikipedia
        </a>
      </n-li>
      <n-li>
        <a
          href="https://datatracker.ietf.org/doc/html/rfc3492"
          target="_blank"
          class="see-also-link"
          >RFC 3492 | Punycode: A Bootstring encoding of Unicode for Internationalized Domain Names
          in Applications (IDNA)</a
        >
      </n-li>
      <n-li>
        <a
          href="https://datatracker.ietf.org/doc/html/rfc5891"
          target="_blank"
          class="see-also-link"
        >
          RFC 5891 | Internationalized Domain Names in Applications (IDNA): Protocol
        </a>
      </n-li>
    </n-ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { NInput, NH3, NLi, NUl } from 'naive-ui'
import punycode from 'punycode'

const asciiString = ref<string>('xn--v86c4184b.com')
const asciiStatus = ref<'success' | 'error'>('success')
const unicodeString = ref<string>('🕸️.com')

function tryToConvertAscii() {
  try {
    unicodeString.value = punycode.toUnicode(asciiString.value)
    asciiStatus.value = 'success'
  } catch (e) {
    asciiStatus.value = 'error'
    console.error(e)
  }
}

function tryToConvertUnicode() {
  try {
    asciiString.value = punycode.toASCII(unicodeString.value)
  } catch (e) {
    console.error(e)
  }
}
</script>

<style scoped>
.see-also-link {
  color: inherit;
  text-decoration: none;
}

.see-also-link:hover {
  text-decoration: underline;
}
</style>
