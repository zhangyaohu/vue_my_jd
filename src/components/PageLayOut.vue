<template>
    <div class="page-container">
        <div class="page-search">
          <slot name="header-search"></slot>
        </div>
        <slot name="page-body">
            <slot name="page-swanper"></slot>
            <slot name="page-nav"></slot>
            <slot name="page-container"></slot>
        </slot>
    </div>
</template>

<script>
    export default {
        name: "PageLayOut"
    }
</script>

<style scoped>

</style>