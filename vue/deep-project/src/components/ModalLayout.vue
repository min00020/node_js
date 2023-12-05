<template>
  <div class="modal-container">
    <header>
        <slot name="header"></slot>
    </header>
    <main>
         <slot></slot> <!--하나는 이름 없어도 됨-->
    </main>
    <footer>
         <slot name="footer"></slot>
    </footer>
  </div>
</template>