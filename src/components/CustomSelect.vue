<template>
    <el-form-item :label="label" style="width: 14vw;">
      <el-select
        v-model="selectedValue"
        placeholder="请选择"
        clearable
      >
        <el-option
          v-for="option in options"
          :key="option.value"
          :label="option.label"
          :value="option.value"
        />
      </el-select>
    </el-form-item>
  </template>
  
  <script lang="ts" setup>
  import { defineProps, defineEmits, ref, watch } from 'vue';
  
  const props = defineProps({
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  });
  
  const emits = defineEmits(['update:modelValue']);
  
  const selectedValue = ref(props.modelValue);
  
  // 监听 props.modelValue 的变化，同步到 selectedValue
  watch(() => props.modelValue, (newValue) => {
    selectedValue.value = newValue;
  });
  
  // 监听 selectedValue 的变化，发出 update:modelValue 事件
  watch(selectedValue, (newValue) => {
    emits('update:modelValue', newValue);
  });
  </script>
  
  <style scoped>
 
  </style>