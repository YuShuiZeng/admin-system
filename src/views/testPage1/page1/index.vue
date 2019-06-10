<template>
    <div>
        <el-button type="primary">主要按钮</el-button>
        <p>{{userName.username}}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            userName() {
                return this.$store.state.user.userInfo;
            },
        },
        mounted() {
            global.console.log(this.userName);
        },
    };
</script>

<style lang="scss" scoped>

</style>
