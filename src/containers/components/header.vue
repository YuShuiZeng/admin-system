<template>
    <div class="admin-common-header">
        <span><img :src="userInfo.avatar" alt=""></span>
    </div>
</template>

<script>
    export default {
        computed: {
            userInfo() {
                return this.$store.state.user.userInfo;
            },
        },
    };
</script>

<style lang="scss" scoped>
    .admin-common-header {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 60px;
        box-shadow:1px 2px 7px rgba(0,0,0,.4);
        // background: rgba(84, 92, 100, .8);
        span{
            width: 50px;
            height: 50px;
            img{
                border-radius: 50%;
            }
        }
    }
</style>
