<template>
    <div>
        testpage2
        <p>{{userinfo.username}}</p>
        <!-- <p>{{userinfo.description}}</p> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userinfo: {},
            };
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
                this.$http.post(this.$apis.user.userInfo).then((res) => {
                    this.userinfo = res.data.user.data;
                    this.$store.dispatch('user/userInfo', this.userinfo);
                }).catch((err) => {
                    global.console.log(err);
                });
            },
        },
    };
</script>

<style lang="scss" scoped>

</style>
