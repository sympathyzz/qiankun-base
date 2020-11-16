<template>
  <div>
    <el-menu
      :router="true"
      mode="horizontal"
    >
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/vue">Vue应用</el-menu-item>
    <el-menu-item index="/about">About</el-menu-item>|
    </el-menu>
    <router-view></router-view>
    <div id="vue"></div>
  </div>
</template>
