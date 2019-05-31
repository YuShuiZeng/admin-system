<template>
    <el-container class="worken-contain">
        <woken-aside></woken-aside>
        <el-container>
            <el-header height="80px">
                <woken-header></woken-header>
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import WokenAside from './components/aside';
    import WokenHeader from './components/header';

    export default {
        components: {
            WokenAside,
            WokenHeader,
        },
    };
</script>

<style lang="scss" scoped>
    .el-main {
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    .el-header{
        padding: 0;
    }
    .worken-contain {
        height: 100vh!important;
    }
</style>
