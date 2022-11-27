<slot></slot>

<style lang="scss">
    $black: #191919;

    :global(body, html) {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :global(body) {
      scroll-behavior: smooth;
      font-family: "Open Sans", sans-serif;
    }
    :global(html) {
      -ms-overflow-style: none;
    }

    :global(::-webkit-scrollbar) {
      display: none;
    }

    :global(h1, h2, h3, h4, h5, h6) {
      font-family: "Bitter", serif;
    }
    :global(h2) {
      margin-top: 1.75rem;
      margin-bottom: 0.75rem;
    }
    :global(a) {
      color: $black;
      font-weight: 600;
      text-decoration-style: dashed;
    }
    :global(a:hover) {
      text-decoration-style: solid;
    }
    :global(p) {
      margin-top: 0.5rem;
      margin-bottom: 1.25rem;
    }
    :global(#name) {
      /*font-family: 'Outline', sans-serif;*/
      font-family: Montserrat, sans-serif;
      color: #212121;
    }

    @font-face {
      font-family: 'Bitter';
      src: url('/Bitter-VariableFont_wght.ttf') format("truetype-variations");
      font-weight: 1 999;
    }
    @font-face {
      font-family: 'Outline';
      src: url('/font.woff');
      font-weight: 400;
    }
</style>