<template>
  <el-menu
    router
    default-active="1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    
  >
    <template v-for="item in menu" :key="item.index">
      <el-sub-menu v-if="item.children" :index="item.index">
        <template #title>
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item-group>
       
          <el-menu-item v-for="child in item.children" :key="child.index" :index="child.index">
            {{ child.title }}
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item v-else :index="item.index" :disabled="item.disabled || false">
        <el-icon>
          <component :is="item.icon" />
        </el-icon>
        <template #title>
          {{ item.title }}
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  HomeFilled,
  WarnTriangleFilled,
  Money,
  User,
  Refresh,
  AlarmClock,
  DataAnalysis,
  OfficeBuilding,
  Monitor,
  PictureRounded,
  CreditCard
} from '@element-plus/icons-vue'
import { ref, markRaw } from 'vue'

function handleOpen(key: string, keyPath: string[]) {
  console.log(key, keyPath)
}

function handleClose(key: string, keyPath: string[]) {
  console.log(key, keyPath)
}

const menu = ref([
  {
    index:'/',
    title: '首页',
    icon:markRaw(HomeFilled),
  },
  {
    index: '/UserManagement',
    title: '用户管理',
    icon: markRaw(Location),
    children: [
      {
        index: '/UserManagement/UserInfo',
        title: '用户信息',
      },
      {
        index: '/UserManagement/BlackList',
        title: '黑名单信息',
      },
    ],
  },
  {
    index: '/risk_management',
    title: '风控管理',
    icon: markRaw(WarnTriangleFilled),
    children: [
      {
        index: '/risk_management/ai_check',
        title: '机审订单',
      },
      {
        index: '/risk_management/task_distribute',
        title: '任务指派',
      },
      {
        index: '/risk_management/wait_loan',
        title: '放款待审核',
      },
      {
        index: '/risk_management/checked_loan',
        title: '放款已审核',
      },
      {
        index: '/risk_management/check_list',
        title: '审核清单',
      },
      {
        index: '/risk_management/business_statistics',
        title: '业务统计',
      },
    ],
  },
  {
    index: '/due_management',
    title: '到期管理',
    icon: markRaw(Document),
    children:[
      {
        index: '/due_management/due_order_distribute',
        title: '到期订单分配',
      },
      {
        index: '/due_management/due_order',
        title: '到期订单',
      },
      {
        index: '/due_management/due_order_statistics',
        title: '业绩统计',
      },
    ]
  },
  {
    index: '/financial_management',
    title: '财务管理',
   
    icon: markRaw(Money),
    children:[
      {
        index: '/financial_management/not_repay',
        title: '未还款订单',
      },
      {
        index: '/financial_management/repay',
        title: '还款订单',
      },
      {
        index: '/financial_management/pay_record',
        title: '支付记录',
      },
      {
        index: '/financial_management/pay_flow',
        title: '收款流水',
      },
    ]
  },{
    index: '/customer_service_management',
    title: '客户管理',
    icon: markRaw(User),
    children:[
      {
        index: '/customer_service_management/not_first_borrow',
        title: '未首借客户分配',
      },
      {
        index: '/customer_service_management/my_customer',
        title: '我的客户',
      },
      {
        index: '/customer_service_management/first_borrow',
        title: '首借业绩统计',
      },
    
    ]
  },{
    index: '/mutiple_loan_management',
    title: '复贷管理',
    icon: markRaw(Refresh),
    children:[
      {
        index: '/mutiple_loan_management/not_borrow',
        title: '复贷未借款分配',
      },
      {
        index: '/mutiple_loan_management/customer',
        title: '复贷客户',
      },
      {
        index: '/mutiple_loan_management /statistics',
        title: '复贷业绩统计',
      },
    
    ]
  },{
    index: '/remind_management',
    title: '提醒管理',
    icon: markRaw(AlarmClock),
    children:[
      {
        index: '/remind_management/ditribute',
        title: '提醒订单分配',
      },
      {
        index: '/remind_management/orders',
        title: '提醒订单',
      },
      {
        index: '/remind_management/statistic',
        title: '提醒业绩统计',
      },
    
    ]
  },{
    index: '/statistic_management',
    title: '统计管理',
    icon: markRaw(DataAnalysis),
    children:[
      {
        index: '/statistic_management/verify',
        title: '认证统计',
      },
      {
        index: '/statistic_management/loan',
        title: '放款统计',
      },
      {
        index: '/statistic_management/back_loan',
        title: '回款统计',
      },
      {
        index: '/statistic_management/timeout_loan',
        title: '逾期统计',
      },
      {
        index: '/statistic_management/income_expense',
        title: '盈亏汇总统计',
      },
      {
        index: '/statistic_management/exception',
        title: '异常统计',
      },
    
    ]
  },{
    index: '/channel_management',
    title: '渠道管理',
    icon: markRaw(OfficeBuilding),
    children:[
      {
        index: '/channel_management/not_first_borrow',
        title: '渠道商管理',
      },
      {
        index: '/channel_management/my_customer',
        title: '渠道管理',
      },
      {
        index: '/channel_management/first_borrow',
        title: '实施渠道统计',
      },
      {
        index: '/channel_management/first_borrow',
        title: '累计渠道统计',
      },
    
    ]
  },{
    index: '/operation_management',
    title: '运营管理',
    icon: markRaw(Monitor),
    children:[
      {
        index: '/operation_management/not_first_borrow',
        title: 'Banner管理',
      },
      {
        index: '/operation_management/my_customer',
        title: '公告发布',
      },
      {
        index: '/operation_management/first_borrow',
        title: '常见问题设置',
      },
      {
        index: '/operation_management/first_borrow',
        title: '关于我们设置',
      },
      {
        index: '/operation_management/first_borrow',
        title: '借款属性设置',
      },
      {
        index: '/operation_management/first_borrow',
        title: '版本管理',
      },
      {
        index: '/operation_management/first_borrow',
        title: '意见反馈管理',
      },
      {
        index: '/operation_management/first_borrow',
        title: '借款地域限制',
      },
      {
        index: '/operation_management/first_borrow',
        title: '首页公告',
      },
      {
        index: '/operation_management/first_borrow',
        title: '退款申请管理',
      },
      {
        index: '/operation_management/first_borrow',
        title: '代收通道管理',
      },
      {
        index: '/operation_management/first_borrow',
        title: '提现申请中提示语',
      },
      {
        index: '/operation_management/first_borrow',
        title: '提现成功弹窗提示语',
      },
      {
        index: '/operation_management/first_borrow',
        title: '页面提示语',
      },
    
    ]
  },{
    index: '/advertise_management',
    title: '广告管理',
    icon: markRaw(PictureRounded),
    children:[
      {
        index: '/advertise_management/not_first_borrow',
        title: '广告管理',
      },
      {
        index: '/advertise_management/my_customer',
        title: '实时广告统计',
      },
      {
        index: '/advertise_management/first_borrow',
        title: '累计广告统计',
      },
    
    ]
  },{
    index: '/consume_management',
    title: '消费管理',
    icon: markRaw(CreditCard),
    children:[
      {
        index: '/consume_management/not_first_borrow',
        title: '消费明细',
      },
      {
        index: '/consume_management/my_customer',
        title: '消费记录',
      },
    ]
  },{
    index: '/system_management',
    title: '系统管理',
    icon: markRaw(Setting),
    children:[
      {
        index: '/system_management/not_first_borrow',
        title: '部门管理',
      },
      {
        index: '/system_management/my_customer',
        title: '角色管理',
      },
      {
        index: '/system_management/first_borrow',
        title: '成员管理',
      },
      {
        index: '/system_management/first_borrow',
        title: '修改密码',
      },
      {
        index: '/system_management/first_borrow',
        title: '白名单IP',
      },
      {
        index: '/system_management/first_borrow',
        title: '密钥管理',
      },
      {
        index: '/system_management/first_borrow',
        title: '操作日志',
      },
    ]
  }
])
</script>

<style scoped>

</style>