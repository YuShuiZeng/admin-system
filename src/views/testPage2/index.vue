<template>
    <div>
        testpage2
    </div>
</template>

<script>
    export default {
        mounted() {
            this.getData();
        },
        methods: {
            getData() {
                this.$http.post('/api/user').then((res) => {
                    global.console.log(res);
                }).catch((err) => {
                    global.console.log(err);
                });
            },
        },
    };
</script>

<style lang="scss" scoped>

</style>
