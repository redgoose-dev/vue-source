<template>
<article class="page">
  <head-title type="h2" title="normalize"/>
  <blockquote>
    <ul>
      <li>
        <strong>Source: <a :href="`${$store.state.url.github}blob/master/src/css/normalize.css`" target="_blank">normalize.css</a></strong>
      </li>
      <li>
        <strong>normalize.css: <a href="https://necolas.github.io/normalize.css" target="_blank">https://necolas.github.io/normalize.css</a></strong>
      </li>
    </ul>
  </blockquote>
  <p>
    css 리셋 라이브러리인 <code>normalize.css</code>를 사용합니다.<br/>
    파일이 <code>css</code>로 되어있기 때문에 <code>scss</code>를 부르는 장소에 import 해줘야합니다.
  </p>

  <pre><code>import './normalize.css';</code></pre>

  <p>
    만약 scss 형식으로 불러오고 싶으면 <code>normalize.scss</code> 형식으로 이름으로 변경하고, <code>@import "./normalize";</code>로 불러올 수 있습니다.
  </p>

</article>
</template>

<script>
export default {
  name: 'page',
  components: {
    'head-title': () => import('@/docs/layout/title'),
  },
}
</script>
