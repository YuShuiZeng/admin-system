<template>
    <el-aside class="left-menu" width="auto">
        <div class="left-menu-header">
            <img src="~assets/images/logo.png" alt="">
        </div>
        <el-menu
            :collapse="isCollapse"
            default-active="1-1-1"
            class="left-menu-list"
            @open="handleOpen"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @close="handleClose">
            <el-submenu index="1">
                 <template slot="title">
                    <i class="geek-icon geek-icon-main"></i>
                    <span>导航-one</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1" @click="jump('/testPage1/page1')">选项1</el-menu-item>
                    <el-menu-item index="1-2" @click="jump('/testPage1/page2')">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2" @click="jump('/testPage2')">
                <i class="geek-icon geek-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="geek-icon geek-icon-main"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="geek-icon geek-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>
    export default {
        data() {
            return {
                isCollapse: true,
            };
        },
        methods: {
            handleOpen() {},
            handleClose() {},
            jump(url) {
                this.$router.push({
                    path: url,
                });
            },
        },
    };
</script>

<style lang="scss" scoped>
    .left-menu{
        text-align: center;
        &-header{
            text-align: center;
            padding: 20px 0;
            img{
                width: 50px;
            }
        }
        &-list:not(.el-menu--collapse) {
            width: 200px;
            min-height: 400px;
        }
    }
    .el-aside {
        background-color: rgb(84, 92, 100);
        box-shadow:2px 2px 6px #333333;
        // background-color: #5D5A59;
    }
    .el-menu{
        border: none;
    }
    .el-submenu{
        text-align: center!important;
        .el-menu-item{
            width: 100%;
        }
        &__title{
            text-align: center!important;
        }
    }
</style>
