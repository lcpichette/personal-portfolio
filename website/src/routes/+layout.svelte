<slot></slot>

<style lang="scss">
    :global(body, html) {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :global(body) {
      scroll-behavior: smooth;
    }
    :global(html) {
      -ms-overflow-style: none;
    }
    :global(::-webkit-scrollbar) {
      display: none;
    }
</style>